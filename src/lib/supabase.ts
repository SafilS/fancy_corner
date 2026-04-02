import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://brriqclgpeqmwtlcfbcw.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJycmlxY2xncGVxbXd0bGNmYmN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxNDAwNTUsImV4cCI6MjA5MDcxNjA1NX0.V_ISwNCVomgSoBfzBCj-lJMscumkqf_Nr5ON3_asANw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
