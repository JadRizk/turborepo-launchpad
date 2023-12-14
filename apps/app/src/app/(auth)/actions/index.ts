"use server";

import createSupabaseServerClient from "../../../../lib/supabase/server";

export async function signUpWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase.auth.signUp(data);

  return JSON.stringify(result);
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase.auth.signInWithPassword(data);

  return JSON.stringify(result);
}

// Todo: Add loginWithGithub
