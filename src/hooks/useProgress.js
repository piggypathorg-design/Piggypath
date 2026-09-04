import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../contexts/AuthContext';

export default function useProgress() {
  const { user } = useAuth();
  const [completedNodes, setCompletedNodes] = useState(new Set(['node-1']));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    async function fetchProgress() {
      try {
        const { data, error } = await supabase
          .from('user_progress')
          .select('node_id, status')
          .eq('user_id', user.id)
          .eq('status', 'completed');

        if (error) throw error;

        if (data && isMounted) {
          const completedSet = new Set(data.map(item => item.node_id));
          if (completedSet.size === 0) completedSet.add('node-1');
          setCompletedNodes(completedSet);
        }
      } catch (err) {
        console.warn('Could not fetch user_progress from Supabase, using local fallback:', err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchProgress();

    return () => {
      isMounted = false;
    };
  }, [user]);

  const markNodeCompleted = async (nodeId) => {
    setCompletedNodes(prev => new Set(prev).add(nodeId));

    if (user) {
      try {
        await supabase
          .from('user_progress')
          .upsert({
            user_id: user.id,
            node_id: nodeId,
            status: 'completed',
            completed_at: new Date().toISOString(),
          }, { onConflict: 'user_id, node_id' });
      } catch (err) {
        console.error('Failed to sync completed node to Supabase:', err);
      }
    }
  };

  return { completedNodes, markNodeCompleted, loading };
}
