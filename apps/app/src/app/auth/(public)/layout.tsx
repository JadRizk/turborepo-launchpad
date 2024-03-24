import type { ReactNode } from 'react';
import React from 'react';
import { redirect } from 'next/navigation';
import { getCurrentUser } from '../../app/actions/user';

const PublicAuthLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  if (user) return redirect('/app');

  return <> {children} </>;
};

export default PublicAuthLayout;
