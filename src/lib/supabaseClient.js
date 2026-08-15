import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rptnvlqmxlnzocpdydrk.supabase.co';
const supabaseAnonKey = 'sb_publishable_5D1rlV5V4gCiN89uLefxDA__fxXpQDc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
