'use client';

import type { NextPage } from 'next';
import { Icons, toast } from 'ui';
import { redirect, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { signInWithRecoveryToken } from '../actions';

const Page: NextPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    const handleCodeAuth = async () => {
      if (!code) redirect('/');

      const { error } = await signInWithRecoveryToken(code);

      if (error) {
        toast({ title: error.message, variant: 'destructive' });
        return;
      }

      toast({ title: 'Login successful!' });
    };

    void handleCodeAuth();
  }, [code]);

  return (
    <div className='mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]'>
      <div className='flex flex-col gap-y-2 text-center'>
        <Icons.ShieldCheck className='mx-auto h-16 w-16' />
        <h1 className='text-2xl font-semibold tracking-tight'>
          Welcome to New Beginnings!
        </h1>
        <p className='text-sm text-muted-foreground'>
          Embark on a journey of discovery and innovation with us. Let&apos;s
          create something extraordinary together.
        </p>
      </div>
    </div>
  );
};

export default Page;
