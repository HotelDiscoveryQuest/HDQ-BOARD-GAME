import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
  'https://fsumxltthcuecvwwgwvt.supabase.co'

const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdW14bHR0aGN1ZWN2d3d3Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5MzYwOTQsImV4cCI6MjEwMjUxMjA5NH0.HxFz2m0uhjGgu2ATit17hrZJ_jUEPXyzFp2s8XlQriw'

export const supabase =
  createClient(
    supabaseUrl,
    supabaseAnonKey
  )