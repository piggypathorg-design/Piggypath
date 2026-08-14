import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

/* ─── tiny icon helpers ─── */
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/>
  </svg>
);

/* ─── oauth providers ─── */
const OAUTH_PROVIDERS = [
  {
    id: 'google',
    label: 'Google',
    icon: <GoogleIcon />,
    className: 'bg-white text-zinc-800 border border-zinc-200 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-700',
  },
  {
    id: 'apple',
    label: 'Apple',
    icon: <AppleIcon />,
    className: 'bg-white text-zinc-800 border border-zinc-200 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-700',
  },
];

/* ─── main component ─── */
export default function SignInPage() {
  const navigate = useNavigate();

  const [mode, setMode] = useState('signin'); // 'signin' | 'signup' | 'forgot'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  /* redirect if already logged in */
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate('/app', { replace: true });
    });
  }, [navigate]);

  const clearMessages = () => { setError(''); setSuccess(''); };

  /* ─── OAuth ─── */
  const handleOAuth = async (provider) => {
    clearMessages();
    setOauthLoading(provider);
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${window.location.origin}/app` },
    });
    if (error) setError(error.message);
    setOauthLoading(null);
  };

  /* ─── Email / Password ─── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    clearMessages();

    if (password.length < 6 && mode !== 'forgot') {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      if (mode === 'signin') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate('/app', { replace: true });
      } else if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/app` },
        });
        if (error) throw error;
        setSuccess('Account created! Check your email to confirm your address.');
      } else if (mode === 'forgot') {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        setSuccess('Password reset link sent! Check your inbox.');
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const switchMode = (next) => {
    clearMessages();
    setPassword('');
    setMode(next);
  };

  return (
    <div className="min-h-screen flex selection:bg-[#8B5CF6] selection:text-white bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-sans">
      
      {/* ─── Left Panel ─── */}
      <div className="hidden md:flex flex-col relative w-1/2 bg-[#8B5CF6] overflow-hidden text-white p-8 lg:p-12">
        {/* Decorative subtle blob */}
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
        
        {/* Logo */}
        <Link to="/" className="relative z-10 flex items-center gap-1 font-bold text-2xl tracking-tight hover:opacity-90 transition-opacity w-fit">
          PiggyPath<span className="text-[#FBBF24]">.</span>
        </Link>
        
        {/* Mascot & Text Center */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-[400px] mx-auto mt-[-40px]">
          <motion.img 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            src="/images/cool-piggy-transparent.png" 
            alt="Piggy Mascot" 
            className="w-56 h-auto mb-8 drop-shadow-2xl"
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-[2rem] leading-[1.1] font-black mb-4 tracking-tight">
              Welcome back!<br />Piggy missed you.
            </h2>
            <p className="text-white/80 font-medium text-[15px] leading-relaxed">
              Pick up your streak, finish today's challenge, and keep leveling up your financial future.
            </p>
          </motion.div>
        </div>
        
        {/* Footer info */}
        <div className="relative z-10 text-white/60 text-xs font-medium">
          The Duolingo for Financial Literacy & Future Skills
        </div>
      </div>

      {/* ─── Right Panel ─── */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 md:px-12 lg:px-24 bg-white dark:bg-zinc-900 relative">
        <div className="w-full max-w-[400px] mx-auto">
          
          {/* Logo for mobile */}
          <div className="md:hidden flex justify-center mb-10">
            <Link to="/" className="flex items-center gap-1 font-bold text-3xl tracking-tight text-[#8B5CF6]">
              PiggyPath<span className="text-[#FBBF24]">.</span>
            </Link>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-[28px] font-black mb-2 flex items-center justify-center gap-2 tracking-tight">
              {mode === 'signin' && 'Less go ⚡️'}
              {mode === 'signup' && 'Create Account 🐷'}
              {mode === 'forgot' && 'Reset Password 🔑'}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">
              {mode === 'signin' && 'Continue your learning journey.'}
              {mode === 'signup' && 'Start saving smarter with PiggyPath.'}
              {mode === 'forgot' && "We'll email you a reset link."}
            </p>
          </div>

          {/* OAuth Buttons */}
          {mode !== 'forgot' && (
            <>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {OAUTH_PROVIDERS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleOAuth(p.id)}
                    disabled={!!oauthLoading || loading}
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-full font-bold text-sm transition-all disabled:opacity-50 ${p.className}`}
                  >
                    {oauthLoading === p.id ? <Loader2 size={16} className="animate-spin" /> : p.icon}
                    {p.label}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute inset-x-0 h-px bg-zinc-200 dark:bg-zinc-800" />
                <span className="relative bg-white dark:bg-zinc-900 px-4 text-xs font-medium text-zinc-400">
                  or with email
                </span>
              </div>
            </>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Error / Success Messages */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-start gap-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm font-medium border border-red-100 dark:border-red-900/30"
                >
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  {error}
                </motion.div>
              )}
              {success && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-3 rounded-lg text-sm font-medium border border-green-100 dark:border-green-900/30"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  {success}
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label htmlFor="email" className="block text-[13px] font-bold mb-1.5 text-zinc-700 dark:text-zinc-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jatin@example.com"
                className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 focus:border-[#8B5CF6] dark:focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] rounded-lg px-4 py-2.5 outline-none transition-all text-sm"
              />
            </div>

            {mode !== 'forgot' && (
              <div>
                <label htmlFor="password" className="block text-[13px] font-bold mb-1.5 text-zinc-700 dark:text-zinc-300">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="piggypath"
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 focus:border-[#8B5CF6] dark:focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] rounded-lg px-4 py-2.5 pr-10 outline-none transition-all text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            )}

            {mode === 'signin' && (
              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={() => switchMode('forgot')}
                  className="text-[12px] font-medium text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading || !!oauthLoading}
                className="w-full py-2.5 rounded-lg font-bold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] focus:ring-4 focus:ring-[#8B5CF6]/20 transition-all disabled:opacity-70 flex justify-center items-center gap-2"
              >
                {loading ? <Loader2 size={18} className="animate-spin" /> : (
                  <>
                    {mode === 'signin' && 'Log in'}
                    {mode === 'signup' && 'Create Account'}
                    {mode === 'forgot' && 'Send Reset Link'}
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Footer Toggle */}
          <div className="mt-8 text-center text-[13px] font-medium">
            {mode === 'signin' && (
              <span className="text-zinc-500">
                New here?{' '}
                <button onClick={() => switchMode('signup')} className="text-[#8B5CF6] hover:underline">
                  Create an account
                </button>
              </span>
            )}
            {mode === 'signup' && (
              <span className="text-zinc-500">
                Already have an account?{' '}
                <button onClick={() => switchMode('signin')} className="text-[#8B5CF6] hover:underline">
                  Log in
                </button>
              </span>
            )}
            {mode === 'forgot' && (
              <button onClick={() => switchMode('signin')} className="text-[#8B5CF6] hover:underline">
                ← Back to Login
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

