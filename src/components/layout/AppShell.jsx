import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import PixelAvatar from '../profile/PixelAvatar';
import { useAvatar } from '../../hooks/useAvatar';
import { LayoutDashboard, Gamepad2, Map, TrendingUp, User } from 'lucide-react';
import { BoltIcon, FireIcon, CoinIcon } from '../profile/ProfileHeader';

const navItems = [
  { path: '/',        label: 'Home',    icon: LayoutDashboard },
  { path: '/games',   label: 'Games',   icon: Gamepad2 },
  { path: '/path',    label: 'Path',    icon: Map },
  { path: '/stocks',  label: 'Market',  icon: TrendingUp },
  { path: '/profile', label: 'Profile', icon: User },
];

const AppShell = () => {
  const [avatarConfig] = useAvatar();

  return (
    <div
      className="w-full min-h-[100dvh] flex flex-col text-white"
      style={{ background: 'transparent', position: 'relative', zIndex: 1 }}
    >
      {/* ── Top Navigation Bar ──────────────────────────────────── */}
      <header
        className="w-full flex items-center justify-between px-6 shrink-0 sticky top-0 z-50"
        style={{
          height: 60,
          background: 'rgba(10, 4, 28, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(139,92,246,0.2)',
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          {/* 2×2 pixel tile logo */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
            {['#00D4C8', '#B8F400', '#8B5CF6', '#F97316'].map((c, i) => (
              <div key={i} style={{ width: 9, height: 9, background: c, imageRendering: 'pixelated' }} />
            ))}
          </div>
          <span className="font-pixel" style={{ fontSize: 13, color: '#F4F4F4', letterSpacing: '0.05em' }}>
            PIGGYPATH
          </span>
        </Link>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  isActive
                    ? 'text-white bg-white/10'
                    : 'text-[#7B8DB0] hover:text-white hover:bg-white/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={16} strokeWidth={isActive ? 2.5 : 1.8} />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right: stats + avatar */}
        <div className="flex items-center gap-4">
          {/* Quick stats */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5" style={{ color: '#00D4C8' }}>
              <BoltIcon size={16} fill="currentColor" />
              <span className="text-sm font-bold">0 XP</span>
            </div>
            <div style={{ width: 1, height: 20, background: '#2a2a4a' }} />
            <div className="flex items-center gap-1.5" style={{ color: '#F97316' }}>
              <FireIcon size={16} fill="currentColor" />
              <span className="text-sm font-bold">0</span>
            </div>
            <div style={{ width: 1, height: 20, background: '#2a2a4a' }} />
            <div className="flex items-center gap-1.5" style={{ color: '#FFCD75' }}>
              <CoinIcon size={16} fill="currentColor" />
              <span className="text-sm font-bold">0</span>
            </div>
          </div>

          {/* Avatar */}
          <Link to="/profile">
            <div
              className="relative overflow-hidden shrink-0"
              style={{
                width: 40,
                height: 40,
                border: '2px solid #00D4C8',
                background: '#12123A',
                borderRadius: 6,
                boxShadow: '0 0 10px rgba(0,212,200,0.3)',
                imageRendering: 'pixelated',
              }}
            >
              <PixelAvatar config={avatarConfig} size={36} />
              <div
                className="absolute bottom-0 right-0 flex items-center justify-center"
                style={{
                  width: 16, height: 16,
                  background: '#B8F400',
                  borderTop: '1px solid #0A0A1A',
                  borderLeft: '1px solid #0A0A1A',
                }}
              >
                <span className="font-pixel" style={{ fontSize: 7, color: '#0A0A1A', lineHeight: 1 }}>1</span>
              </div>
            </div>
          </Link>
        </div>
      </header>

      {/* ── Page Content ──────────────────────────────────────────── */}
      <main className="flex-1 w-full pb-20 md:pb-0">
        <Outlet />
      </main>

      {/* ── Mobile Bottom Nav ─────────────────────────────────────── */}
      <nav
        className="md:hidden w-full fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center"
        style={{
          background: '#0f0f23',
          borderTop: '1px solid #1e1e3a',
          height: 64,
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {navItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className="flex flex-col items-center justify-center gap-1 flex-1 h-full"
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={22}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  color={isActive ? '#00D4C8' : '#566C86'}
                />
                <span
                  className="font-pixel"
                  style={{ fontSize: 6, color: isActive ? '#00D4C8' : '#566C86' }}
                >
                  {label.toUpperCase()}
                </span>
                {isActive && (
                  <div className="absolute bottom-0" style={{ width: 32, height: 2, background: '#B8F400' }} />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default AppShell;
