import type { NextPage } from 'next';
import Link from 'next/link';
import { Icons } from 'ui';
import { ForgotPasswordForm } from '../../../../modules/auth/components/ForgotPasswordForm';

const Page: NextPage = () => {
  return (
    <div className='mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]'>
      <div className='flex flex-col gap-y-2 text-center'>
        <Icons.logo className='mx-auto h-6 w-6' />
        <h1 className='text-2xl font-semibold tracking-tight'>
          Forgot Your Password?
        </h1>
        <p className='text-sm text-muted-foreground'>
          No worries! Enter your email below to reset your password.
        </p>
      </div>
      <ForgotPasswordForm />
      <p className='px-8 text-center text-sm text-muted-foreground'>
        Remembered your password?{' '}
        <Link
          className='hover:text-brand underline underline-offset-4'
          href='/auth/login'
        >
          Sign in here
        </Link>
      </p>
    </div>
  );
};

export default Page;
