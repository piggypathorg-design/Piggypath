import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../contexts/AuthContext';

export default function useProfile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    username: 'Jatin',
    handle: '@jtn_ux',
    level: 12,
    xp: 429,
    xpMax: 1000,
    progressPercentage: 80,
    coins: 250,
    gems: 45,
    streak: 7,
    avatarUrl: '/images/avatars/aarav.png',
    memberSince: 'Feb 2026',
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!user) {
      setProfile(prev => ({ ...prev, loading: false }));
      return;
    }

    let isMounted = true;

    async function fetchProfile() {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          throw error;
        }

        if (data && isMounted) {
          setProfile({
            username: data.full_name || data.username || user.email?.split('@')[0] || 'Learner',
            handle: `@${data.username || user.email?.split('@')[0] || 'learner'}`,
            level: data.level || 1,
            xp: data.xp || 0,
            xpMax: (data.level || 1) * 500,
            progressPercentage: Math.min(100, Math.round(((data.xp || 0) % 500) / 5)),
            coins: data.coins || 0,
            gems: data.gems || 0,
            streak: data.streak_count || 0,
            avatarUrl: data.avatar_url || '/images/avatars/aarav.png',
            memberSince: new Date(data.created_at || user.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
            loading: false,
            error: null,
          });
        } else if (isMounted) {
          setProfile(prev => ({ ...prev, loading: false }));
        }
      } catch (err) {
        console.warn('Could not fetch Supabase profile, using fallback defaults:', err.message);
        if (isMounted) {
          setProfile(prev => ({ ...prev, loading: false, error: err.message }));
        }
      }
    }

    fetchProfile();

    return () => {
      isMounted = false;
    };
  }, [user]);

  return profile;
}
