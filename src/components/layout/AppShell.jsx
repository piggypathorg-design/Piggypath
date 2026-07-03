import React from 'react';
import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom';
import { useAvatar } from '../../hooks/useAvatar';
import { useAuth } from '../../hooks/useAuth';
import CustomAvatar from '../avatar/CustomAvatar';
import { LayoutDashboard, Gamepad2, Map, User, Zap, Flame, Coins, LogOut } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const navItems = [
  { path: '/app',         label: 'Home',    icon: LayoutDashboard },
  { path: '/app/games',   label: 'Games',   icon: Gamepad2 },
  { path: '/app/path',    label: 'Path',    icon: Map },
  { path: '/app/profile', label: 'Profile', icon: User },
];

const AppShell = () => {
  const [avatarConfig] = useAvatar();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/signin', { replace: true });
  };

  // Username from email if not set on profile
  const displayName = user?.email?.split('@')[0] ?? 'Player';

  return (
    <div className="w-full min-h-[100dvh] flex flex-col text-black relative z-10 font-sans">
      
      {/* ── Top Navigation Bar ──────────────────────────────────── */}
      <header className="w-full flex items-center justify-between px-6 shrink-0 sticky top-0 z-50 bg-white border-b-[4px] border-black h-16 shadow-neo-sm">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-neo-purple border-[2px] border-black shadow-neo-sm flex items-center justify-center">
            <span className="font-black text-white text-sm">PP</span>
          </div>
          <span className="font-black text-lg uppercase tracking-tight text-black hidden sm:block">
            PIGGYPATH
          </span>
        </Link>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/app'}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 font-bold rounded-neo transition-all border-[3px] ${
                  isActive
                    ? 'text-black bg-neo-teal border-black shadow-neo-sm translate-x-[-2px] translate-y-[-2px]'
                    : 'text-gray-500 border-transparent hover:text-black hover:bg-gray-100'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={18} strokeWidth={isActive ? 3 : 2} />
                  <span className="uppercase text-sm">{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right: stats + avatar + logout */}
        <div className="flex items-center gap-3">
          
          {/* Stats — visible on larger screens */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-neo-purple">
              <Zap size={16} fill="currentColor" />
              <span className="text-xs font-black text-black">0 XP</span>
            </div>
            <div className="w-[2px] h-5 bg-black" />
            <div className="flex items-center gap-1.5 text-[#ff3366]">
              <Flame size={16} fill="currentColor" />
              <span className="text-xs font-black text-black">0</span>
            </div>
            <div className="w-[2px] h-5 bg-black" />
            <div className="flex items-center gap-1.5 text-[#ffcc00]">
              <Coins size={16} fill="currentColor" />
              <span className="text-xs font-black text-black">0</span>
            </div>
          </div>

          {/* Avatar thumbnail — links to profile */}
          <Link to="/app/profile" className="flex items-center gap-2 group" title={displayName}>
            <div className="w-10 h-10 rounded-full border-[3px] border-black shadow-neo-sm overflow-hidden bg-[#FBCFE8] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform">
              <CustomAvatar
                gender={avatarConfig.gender}
                skinTone={avatarConfig.skinTone}
                top={avatarConfig.top}
                bottom={avatarConfig.bottom}
                accessory={avatarConfig.accessory}
                className="w-full h-full scale-[1.4] translate-y-3"
              />
            </div>
          </Link>

          {/* Logout button */}
          <button
            onClick={handleLogout}
            title="Log out"
            className="neo-btn-white p-2.5 flex items-center justify-center text-[#ff3366] border-[3px]"
          >
            <LogOut size={16} />
          </button>
          
        </div>
      </header>

      {/* ── Main Content Area ───────────────────────────────────── */}
      <main className="flex-1 w-full overflow-x-hidden relative">
        <Outlet />
      </main>

      {/* ── Mobile Bottom Navigation ────────────────────────────── */}
      <nav className="md:hidden sticky bottom-0 left-0 w-full z-50 bg-white border-t-[4px] border-black flex justify-around items-center h-16 shadow-[0_-4px_0_0_rgba(0,0,0,1)]">
        {navItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/app'}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full h-full gap-1 ${
                isActive ? 'text-neo-teal bg-black' : 'text-gray-500 hover:text-black hover:bg-gray-100'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={20} strokeWidth={isActive ? 3 : 2} />
                <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
      
    </div>
  );
};

export default AppShell;
