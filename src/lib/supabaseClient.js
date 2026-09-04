import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://rptnvlqmxlnzocpdydrk.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_5D1rlV5V4gCiN89uLefxDA__fxXpQDc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
