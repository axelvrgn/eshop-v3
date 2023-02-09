import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(
  "https://gxxpzuzaskxuimhmxnlr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4eHB6dXphc2t4dWltaG14bmxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU1OTM0ODcsImV4cCI6MTk5MTE2OTQ4N30.KB20RSlSntfG7xE2d-_7nlZ5VQbsKnWaHAoFf3olzBU"
);
