import { useState, useEffect, createContext, useContext } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext(null);

const IS_MOCK_AUTH = !import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL.includes('your-project-id') || import.meta.env.VITE_SUPABASE_URL.includes('placeholder');

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(undefined); // undefined = loading
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (IS_MOCK_AUTH) {
      // Offline/Local Prototype Mode: Auto-login with a guest user to allow instant previews
      const mockUser = {
        id: 'local-guest-id-12345',
        email: 'guest@piggypath.io',
      };
      const mockSession = { user: mockUser, access_token: 'mock-token' };
      setSession(mockSession);
      setUser(mockUser);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ session, user, loading: session === undefined }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
