import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pen, Settings, LogOut, Trophy, Zap, Flame, Shield, MapPin, Edit3, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CustomAvatar from '../components/avatar/CustomAvatar';
import AvatarBuilder from '../components/avatar/AvatarBuilder';
import { useAvatar } from '../hooks/useAvatar';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [avatarConfig, saveConfig] = useAvatar();
  const [editingAvatar, setEditingAvatar] = useState(false);

  const username = user?.email?.split('@')[0] ?? 'Player';
  const email = user?.email ?? '';

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/signin', { replace: true });
  };

  return (
    <div className="w-full min-h-screen px-6 md:px-10 pt-8 pb-28 font-sans bg-transparent max-w-5xl mx-auto">
      
      {/* ── Header row ── */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-black uppercase tracking-tight text-5xl text-black">
            Player Profile
          </h1>
        </div>
        <div className="flex gap-4">
          <button className="neo-btn-white p-3 border-[3px]">
            <Settings size={20} className="text-black" />
          </button>
          <button onClick={handleLogout} className="neo-btn-white p-3 border-[3px] text-[#ff3366]" title="Log out">
            <LogOut size={20} />
          </button>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* ── Left Column: Identity ── */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="neo-card p-6 flex flex-col items-center text-center">
            
            <div className="relative mb-6">
              <div className="w-40 h-40 rounded-full bg-[#FBCFE8] border-[4px] border-black shadow-neo-base overflow-hidden flex items-center justify-center">
                <CustomAvatar
                  gender={avatarConfig.gender}
                  skinTone={avatarConfig.skinTone}
                  top={avatarConfig.top}
                  bottom={avatarConfig.bottom}
                  accessory={avatarConfig.accessory}
                  className="w-full h-full scale-[1.4] translate-y-5"
                />
              </div>
              <button
                onClick={() => setEditingAvatar(true)}
                className="absolute bottom-0 right-0 p-3 bg-neo-purple border-[3px] border-black rounded-full shadow-neo-sm text-white hover:scale-110 transition-transform"
              >
                <Edit3 size={18} />
              </button>
            </div>
            
            <h2 className="text-3xl font-black uppercase text-black mb-1">{username}</h2>
            <p className="font-bold text-gray-500 uppercase tracking-widest text-sm mb-4">@{email}</p>
            
            <div className="flex items-center gap-2 mb-6 bg-gray-100 px-4 py-2 border-2 border-black rounded-full">
              <MapPin size={16} className="text-neo-teal" />
              <span className="font-bold text-sm text-black">New York, USA</span>
            </div>
            
            <div className="w-full grid grid-cols-2 gap-4">
              <div className="bg-white border-[3px] border-black p-3 text-center shadow-neo-sm">
                <p className="font-bold text-gray-500 text-xs uppercase mb-1">Followers</p>
                <p className="font-black text-xl text-black">1.2k</p>
              </div>
              <div className="bg-white border-[3px] border-black p-3 text-center shadow-neo-sm">
                <p className="font-bold text-gray-500 text-xs uppercase mb-1">Following</p>
                <p className="font-black text-xl text-black">248</p>
              </div>
            </div>
            
          </motion.div>
        </div>
        
        {/* ── Right Column: Stats & Badges ── */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="neo-card p-8">
            <h3 className="font-black text-2xl uppercase tracking-tight text-black border-b-[4px] border-black pb-4 mb-6">Level & XP</h3>
            
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-neo-teal border-[4px] border-black shadow-neo-sm flex items-center justify-center rotate-3 shrink-0">
                <span className="font-black text-4xl text-black">12</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-black text-sm uppercase text-gray-500">Level Progress</span>
                  <span className="font-black text-sm text-black">840 / 1200 XP</span>
                </div>
                <div className="w-full h-6 bg-white border-[3px] border-black rounded-full p-0.5 overflow-hidden">
                  <div className="h-full bg-neo-purple border-r-[2px] border-black rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="neo-card p-6 bg-white flex items-center gap-4">
              <div className="w-16 h-16 bg-[#ffcc00] border-[3px] border-black shadow-neo-sm flex items-center justify-center shrink-0">
                <Trophy size={28} color="#000" fill="#fff" />
              </div>
              <div>
                <p className="font-bold text-gray-500 text-xs uppercase tracking-widest mb-1">Rank</p>
                <p className="font-black text-xl text-black leading-none">Gold III</p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="neo-card p-6 bg-white flex items-center gap-4">
              <div className="w-16 h-16 bg-[#ff3366] border-[3px] border-black shadow-neo-sm flex items-center justify-center shrink-0">
                <Flame size={28} color="#000" fill="#fff" />
              </div>
              <div>
                <p className="font-bold text-gray-500 text-xs uppercase tracking-widest mb-1">Longest Streak</p>
                <p className="font-black text-xl text-black leading-none">14 Days</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="neo-card p-8">
            <h3 className="font-black text-2xl uppercase tracking-tight text-black border-b-[4px] border-black pb-4 mb-6">Recent Badges</h3>
            
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'First Steps', color: '#00e699', icon: <Zap size={24} /> },
                { name: 'Budget Boss', color: '#9966ff', icon: <Shield size={24} /> },
                { name: 'Saver', color: '#33ccff', icon: <Trophy size={24} /> },
                { name: 'Locked', color: '#e0e0e0', icon: <Lock size={24} className="opacity-50" /> },
                { name: 'Locked', color: '#e0e0e0', icon: <Lock size={24} className="opacity-50" /> },
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group">
                  <div 
                    className={`w-20 h-20 border-[3px] border-black rounded-neo shadow-neo-sm flex items-center justify-center transition-transform group-hover:-translate-y-1 ${badge.color === '#e0e0e0' ? 'bg-gray-100 text-gray-400' : 'text-black'}`}
                    style={{ background: badge.color }}
                  >
                    {badge.icon}
                  </div>
                  <span className="font-bold text-xs text-black">{badge.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Avatar Editor Modal */}
      {editingAvatar && (
        <div className="fixed inset-0 z-[200] bg-black/60 flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-5xl">
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setEditingAvatar(false)}
                className="neo-btn-white px-5 py-2 text-sm font-black"
              >✕ Close</button>
            </div>
            <AvatarBuilder
              initialConfig={avatarConfig}
              onSave={c => { saveConfig(c); setEditingAvatar(false); }}
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default ProfilePage;
