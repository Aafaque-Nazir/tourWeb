import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Initialize the client with the Service Role Key if available for Admin actions
// fallback to Anon key (which might be restricted by RLS)
export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: false, // Since we are using NextAuth for auth, we don't need Supabase Auth session persistence here for the admin operations mostly
    }
});
