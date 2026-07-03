import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const DEFAULT_AVATAR = {
  gender: 'male',
  skinTone: '#fae7d0',
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
        if (parsed?.gender) return parsed;
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
          setConfig(remote);
          localStorage.setItem(LOCAL_KEY, JSON.stringify(remote));
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
          if (parsed?.gender) setConfig(parsed);
        }
      } catch (_) {}
    };
    window.addEventListener('avatarUpdated', handleUpdate);
    return () => window.removeEventListener('avatarUpdated', handleUpdate);
  }, []);

  const saveConfig = async (newConfig) => {
    // 1. Update local state immediately
    setConfig(newConfig);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(newConfig));
    window.dispatchEvent(new Event('avatarUpdated'));

    // 2. Persist to Supabase if logged in
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        await supabase
          .from('profiles')
          .upsert(
            { id: session.user.id, avatar_config: newConfig, updated_at: new Date().toISOString() },
            { onConflict: 'id' }
          );
      }
    } catch (err) {
      console.warn('Could not sync avatar to Supabase:', err.message);
    }
  };

  return [config, saveConfig];
};
