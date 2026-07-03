import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const DEFAULT_AVATAR = {
  gender: 'male',
  skinTone: '#fae7d0',
  hair: 'none',
  top: 'none',
  bottom: 'none',
  accessory: 'none',
};

const LOCAL_KEY = 'piggypath_custom_avatar_v1';

/**
 * Returns [config, saveConfig]
 * - Reads from localStorage immediately (fast, offline-safe)
 * - If user is logged in, also reads/writes to Supabase `profiles` table
 */
export const useAvatar = () => {
  const [config, setConfig] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.gender) {
          // Backward compatibility: fill in default hair if missing or set to none for female
          const base = { ...DEFAULT_AVATAR, ...parsed };
          if (base.gender === 'female' && base.hair === 'none') {
            base.hair = 'long_straight';
          }
          return base;
        }
      }
    } catch (_) {}
    return DEFAULT_AVATAR;
  });

  // On mount: if user is logged in, pull their avatar from Supabase
  useEffect(() => {
    let cancelled = false;
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session?.user || cancelled) return;
      const { data, error } = await supabase
        .from('profiles')
        .select('avatar_config')
        .eq('id', session.user.id)
        .single();

      if (!error && data?.avatar_config && !cancelled) {
        const remote = data.avatar_config;
        if (remote?.gender) {
          const merged = { ...DEFAULT_AVATAR, ...remote };
          if (merged.gender === 'female' && merged.hair === 'none') {
            merged.hair = 'long_straight';
          }
          setConfig(merged);
          localStorage.setItem(LOCAL_KEY, JSON.stringify(merged));
        }
      }
    });
    return () => { cancelled = true; };
  }, []);

  // Listen for cross-component localStorage updates
  useEffect(() => {
    const handleUpdate = () => {
      try {
        const saved = localStorage.getItem(LOCAL_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed?.gender) {
            const merged = { ...DEFAULT_AVATAR, ...parsed };
            if (merged.gender === 'female' && merged.hair === 'none') {
              merged.hair = 'long_straight';
            }
            setConfig(merged);
          }
        }
      } catch (_) {}
    };
    window.addEventListener('avatarUpdated', handleUpdate);
    return () => window.removeEventListener('avatarUpdated', handleUpdate);
  }, []);

  const saveConfig = async (newConfig) => {
    const fullConfig = { ...DEFAULT_AVATAR, ...newConfig };
    setConfig(fullConfig);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(fullConfig));
    window.dispatchEvent(new Event('avatarUpdated'));

    // Persist to Supabase if logged in
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        await supabase
          .from('profiles')
          .upsert(
            { id: session.user.id, avatar_config: fullConfig, updated_at: new Date().toISOString() },
            { onConflict: 'id' }
          );
      }
    } catch (err) {
      console.warn('Could not sync avatar to Supabase:', err.message);
    }
  };

  return [config, saveConfig];
};
