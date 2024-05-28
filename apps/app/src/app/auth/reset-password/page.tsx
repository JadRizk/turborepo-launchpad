'use client';

import type { NextPage } from 'next';
import { Icons, toast } from 'ui';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { ResetPasswordForm } from '../../../modules/auth/components/ResetPasswordForm';
import { signInWithRecoveryToken } from '../actions';

const Page: NextPage = () => {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const token = searchParams.get('code');

  useEffect(() => {
    const handleCodeAuth = async () => {
      if (!token) {
        push('/');
        return;
      }

      const { error } = await signInWithRecoveryToken(token);

      if (error) {
        toast({ title: error.message, variant: 'destructive' });
        push('/');
      }
    };

    void handleCodeAuth();
  }, [push, token]);

  return (
    <div className='mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]'>
      <div className='flex flex-col gap-y-2 text-center'>
        <Icons.logo className='mx-auto h-6 w-6' />
        <h1 className='text-2xl font-semibold tracking-tight'>
          Reset Your Password
        </h1>
        <p className='text-sm text-muted-foreground'>
          Please enter your new password below.
        </p>
      </div>
      <ResetPasswordForm />
    </div>
  );
};

export default Page;
