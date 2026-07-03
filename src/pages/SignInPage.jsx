import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function SignInPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Redirect if already logged in
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate('/app', { replace: true });
    });
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (mode === 'signin') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate('/app', { replace: true });

      } else if (mode === 'signup') {
        if (password !== confirmPassword) throw new Error("Passwords don't match.");
        if (password.length < 6) throw new Error('Password must be at least 6 characters.');

        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;

        // Create profile row for the new user
        if (data?.user) {
          await supabase.from('profiles').upsert({
            id: data.user.id,
            email: data.user.email,
            username: email.split('@')[0],
            avatar_config: null,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          }, { onConflict: 'id' });
        }

        setSuccess('Account created! Check your email to confirm, then log in.');
        setMode('signin');

      } else if (mode === 'forgot') {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/trail2/reset-password`,
        });
        if (error) throw error;
        setSuccess('Reset link sent! Check your inbox.');
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/trail2/app` },
    });
    if (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-6 font-sans relative overflow-hidden">
      
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-neo-teal rounded-full border-[4px] border-black shadow-neo-base opacity-50 blur-[2px]"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-neo-purple rounded-full border-[4px] border-black shadow-neo-base opacity-50 blur-[2px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white border-[4px] border-black shadow-neo-lg rounded-neo p-8 md:p-10 relative z-10"
      >
        
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <div className="w-16 h-16 bg-neo-purple border-[3px] border-black shadow-neo-sm rounded-neo flex items-center justify-center mx-auto hover:-translate-y-1 transition-transform">
              <span className="font-black text-white text-3xl">PP</span>
            </div>
          </Link>
          <h2 className="text-3xl font-black uppercase tracking-tight text-black">
            {mode === 'signin' ? 'Welcome Back' : mode === 'signup' ? 'Join PiggyPath' : 'Reset Password'}
          </h2>
          <p className="font-bold text-gray-500 mt-2 text-sm uppercase tracking-wider">
            {mode === 'signin' ? 'Ready to level up your finances?' : mode === 'signup' ? 'Start your financial journey.' : 'We will send you a reset link.'}
          </p>
        </div>

        {/* Error / Success Messages */}
        <AnimatePresence>
          {error && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-6 overflow-hidden">
              <div className="flex items-center gap-3 p-4 bg-[#ff3366] border-[3px] border-black shadow-neo-sm text-white">
                <AlertCircle size={20} />
                <span className="font-bold text-sm">{error}</span>
              </div>
            </motion.div>
          )}
          {success && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-6 overflow-hidden">
              <div className="flex items-center gap-3 p-4 bg-neo-teal border-[3px] border-black shadow-neo-sm text-black">
                <CheckCircle2 size={20} />
                <span className="font-bold text-sm">{success}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-black uppercase tracking-wider text-black">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="player@example.com"
                className="w-full neo-input pl-12 bg-gray-50 font-bold"
              />
            </div>
          </div>

          {/* Password */}
          {mode !== 'forgot' && (
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="block text-sm font-black uppercase tracking-wider text-black">Password</label>
                {mode === 'signin' && (
                  <button type="button" onClick={() => setMode('forgot')} className="text-sm font-bold text-neo-purple hover:underline">
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full neo-input pl-12 pr-12 bg-gray-50 font-bold"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          )}

          {/* Confirm Password */}
          {mode === 'signup' && (
            <div className="space-y-2">
              <label className="block text-sm font-black uppercase tracking-wider text-black">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full neo-input pl-12 pr-12 bg-gray-50 font-bold"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="neo-btn-primary w-full py-4 text-lg mt-2 flex justify-center items-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : null}
            {mode === 'signin' ? 'LOG IN' : mode === 'signup' ? 'CREATE ACCOUNT' : 'SEND RESET LINK'}
            {!loading && <ArrowRight size={20} />}
          </button>
        </form>

        {/* Divider */}
        {mode !== 'forgot' && (
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t-[3px] border-black border-dashed"></div></div>
            <div className="relative flex justify-center"><span className="px-4 bg-white font-black text-sm uppercase text-gray-500 tracking-widest">OR</span></div>
          </div>
        )}

        {/* Google OAuth */}
        {mode !== 'forgot' && (
          <div className="space-y-4">
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-white border-[3px] border-black py-3.5 shadow-neo-sm font-bold text-black transition-transform hover:-translate-y-1 disabled:opacity-50"
            >
              <GoogleIcon /> Continue with Google
            </button>
          </div>
        )}

        {/* Footer Toggle */}
        <div className="mt-8 text-center font-bold text-sm text-gray-600">
          {mode === 'signin' ? (
            <>Don't have an account? <button onClick={() => { setMode('signup'); setError(''); setSuccess(''); }} className="text-neo-purple font-black hover:underline ml-1">Sign up</button></>
          ) : mode === 'signup' ? (
            <>Already have an account? <button onClick={() => { setMode('signin'); setError(''); setSuccess(''); }} className="text-neo-teal font-black hover:underline ml-1">Log in</button></>
          ) : (
            <button onClick={() => { setMode('signin'); setError(''); setSuccess(''); }} className="text-neo-teal font-black hover:underline">&larr; Back to Login</button>
          )}
        </div>

      </motion.div>
    </div>
  );
}
