const SUPABASE_URL = "https://knhyjdpedwestkfvvpbf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_DHEuzHBOKkIEFXjho5kY4g_JCwFCrKk";

window.tasklySupabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);