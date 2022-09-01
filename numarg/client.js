import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL=https://xeftwgwqvkdlbtepjqnl.supabase.co,
  process.env.NEXT_PUBLIC_SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlZnR3Z3dxdmtkbGJ0ZXBqcW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4Mjk5MzcsImV4cCI6MTk3NzQwNTkzN30.a0GwP1dPiuCXF6WQmsVOz3C0kjxCl12Mgi4dyjOJglk
)

export { supabase }