'use server';

import createSupabaseServerClient from '../../../../lib/supabase/server';

export async function signUpWithEmailAndPassword(values: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      emailRedirectTo: `${process.env.NEXT_APP_URL!}/auth/callback`,
    },
  });

  return { data, error };
}

export async function signInWithEmailAndPassword(values: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();

  return supabase.auth.signInWithPassword(values);
}

// Todo: Add loginWithGithub
