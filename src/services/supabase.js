import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xebupvkruplgqhbofwjx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlYnVwdmtydXBsZ3FoYm9md2p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNjI3OTksImV4cCI6MjA1NjkzODc5OX0.Kr_t0_775qdz4l42Lsb7vdLQ5mPG5bpnE-uaxBe5mDE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
