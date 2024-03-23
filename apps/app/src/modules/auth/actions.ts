'use server';

import createSupabaseServerClient from '../../../lib/supabase/server';

export async function updateUser(values: { phone: string }) {
  const supabase = await createSupabaseServerClient();

  return supabase.auth.updateUser(values);
}
