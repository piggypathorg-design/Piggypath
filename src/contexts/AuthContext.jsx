import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { supabase } from '../lib/supabaseClient';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    // Get initial session
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        if (isMounted) {
          setSession(session);
          setUser(session?.user ?? null);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Failed to retrieve auth session:', err);
        if (isMounted) setLoading(false);
      });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted) {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
      subscription?.unsubscribe();
    };
  }, []);

  // Sign up
  const signUp = async (email, password) => {
    return supabase.auth.signUp({
      email,
      password,
    });
  };

  // Sign in
  const signIn = async (email, password) => {
    return supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  // Sign out
  const signOut = async () => {
    setUser(null);
    setSession(null);
    return supabase.auth.signOut();
  };

  const value = useMemo(() => ({
    session,
    user,
    loading,
    signUp,
    signIn,
    signOut,
  }), [session, user, loading]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
