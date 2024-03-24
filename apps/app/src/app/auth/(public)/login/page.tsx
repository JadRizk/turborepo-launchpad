import type { NextPage } from 'next';
import Link from 'next/link';
import { Icons } from 'ui';
import { LoginAuthForm } from '../../../../modules/auth/components/LoginAuthForm';

const Page: NextPage = () => {
  return (
    <div className='mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]'>
      <div className='flex flex-col gap-y-2 text-center'>
        <Icons.logo className='mx-auto h-6 w-6' />
        <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
        <p className='text-sm text-muted-foreground'>
          Enter your email to sign in to your account
        </p>
      </div>
      <LoginAuthForm />
      <p className='px-8 text-center text-sm text-muted-foreground'>
        <Link
          className='hover:text-brand underline underline-offset-4'
          href='/auth/register'
        >
          Don&apos;t have an account? Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Page;
