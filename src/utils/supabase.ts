import { createClient } from '@supabase/supabase-js';
import { isNullString } from './general';

const supabaseUrl: string = isNullString(process.env.NEXT_PUBLIC_SUPABASE_URL);

const supabaseAnonKey = isNullString(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
