import { createClient } from '@supabase/supabase-js';
const URL = 'https://tswmcecqdoncdjlsiiwd.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzd21jZWNxZG9uY2RqbHNpaXdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNjc3NzAsImV4cCI6MjAwNjg0Mzc3MH0.k7j8VZOlEaminZMuLkCPXp4dCnR2l1mNvFeeB0iW_Q4'

export const supabase = createClient(URL, API_KEY);
