CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  level INT DEFAULT 1,
  xp INT DEFAULT 0,
  coins INT DEFAULT 0,
  gems INT DEFAULT 0,
  streak_count INT DEFAULT 0,
  last_login_date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  node_id TEXT NOT NULL,
  status TEXT CHECK (status IN ('locked', 'unlocked', 'completed')) DEFAULT 'locked',
  score INT DEFAULT 0,
  completed_at TIMESTAMPTZ,
  UNIQUE(user_id, node_id)
);

CREATE TABLE IF NOT EXISTS public.inventory (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  item_id TEXT NOT NULL,
  item_type TEXT NOT NULL,
  purchased_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.transactions_ledger (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  currency TEXT CHECK (currency IN ('coins', 'gems', 'xp')),
  amount INT NOT NULL,
  type TEXT NOT NULL, -- 'reward', 'purchase', 'bonus'
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
