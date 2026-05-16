const SUPABASE_URL = 'https://tzpyeuvbkvxioscvkktk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6cHlldXZia3Z4aW9zY3Zra3RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNDg2ODAsImV4cCI6MjA5MzcyNDY4MH0.PBfqsgTLQpcOLiOYK8kWs0UQnX1Lp4BB5Ry4amHpC-Q';

let supabaseClient = null;

function getSupabase() {
  if (!supabaseClient) {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        autoRefreshToken: true,
        persistSession: true
      }
    });
  }
  return supabaseClient;
}
