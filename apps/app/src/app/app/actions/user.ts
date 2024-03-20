'use server';

import createSupabaseServerClient from '../../../../lib/supabase/server';

export async function getCurrentUser() {
  const supabase = await createSupabaseServerClient();

  const { data } = await supabase.auth.getSession();

  return data.session?.user;
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();

  await supabase.auth.signOut();
}
