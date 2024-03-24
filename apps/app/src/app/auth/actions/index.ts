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

export const signInWithRecoveryToken = async (code: string) => {
  const supabase = await createSupabaseServerClient();

  return supabase.auth.exchangeCodeForSession(code);
};

export async function signInWithEmail(email: string) {
  const supabase = await createSupabaseServerClient();

  // signup users if not available
  return supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_APP_URL!}/auth/welcome`,
    },
  });
}

// Todo: Add loginWithGithub

export async function resetPasswordForEmail(email: string) {
  const supabase = await createSupabaseServerClient();

  return supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_APP_URL!}/auth/reset-password`,
  });
}

export async function updatePassword(password: string) {
  const supabase = await createSupabaseServerClient();

  return supabase.auth.updateUser({
    password,
  });
}
