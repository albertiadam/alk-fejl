import { createClient } from '@supabase/supabase-js'


const supabaseURL = "https://ugljsjhulrlkubkwnhtw.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnbGpzamh1bHJsa3Via3duaHR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NDMzMzcsImV4cCI6MjAyODQxOTMzN30.NPgKP9Ze7TCkYGM8JADzMh_vCakB_6FLFLfpYgLmqQY"
// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseURL, supabaseKey)

export default supabase