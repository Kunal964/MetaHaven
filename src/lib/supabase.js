// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
export const insertContactForm = async (data) => {
  const { data: response, error } = await supabase
    .from('contact_forms')
    .insert([data])

  if (error) {
    console.error('Error inserting contact form:', error)
    throw error
  }

  return response
}