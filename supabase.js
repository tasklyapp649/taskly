const SUPABASE_URL = "https://knhyjdpedwestkfvvpbf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_DHEuzHBOKkIEFXj-ho5-kY4g_JCwFCrKk";

window.tasklySupabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);