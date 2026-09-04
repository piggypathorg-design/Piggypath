ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions_ledger ENABLE ROW LEVEL SECURITY;

-- Profiles: Anyone authenticated can read profiles, only owner can update
CREATE POLICY "Allow authenticated users to read profiles" ON public.profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow users to update own profile" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id);

-- User Progress: Only owner can read and write
CREATE POLICY "Allow users to access own progress" ON public.user_progress FOR ALL TO authenticated USING (auth.uid() = user_id);

-- Inventory: Only owner can access
CREATE POLICY "Allow users to access own inventory" ON public.inventory FOR ALL TO authenticated USING (auth.uid() = user_id);

-- Ledger: Only owner can view ledger
CREATE POLICY "Allow users to view own transactions" ON public.transactions_ledger FOR SELECT TO authenticated USING (auth.uid() = user_id);
