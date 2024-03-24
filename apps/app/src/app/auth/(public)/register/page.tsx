import type { NextPage } from 'next';
import Link from 'next/link';
import { Icons } from 'ui';
import { RegisterWithEmailAndPasswordAuthForm } from '../../../../modules/auth/components/RegisterWithEmailAndPasswordAuthForm';

const Page: NextPage = () => {
  return (
    <div className='mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]'>
      <div className='flex flex-col gap-y-2 text-center'>
        <Icons.logo className='mx-auto h-6 w-6' />
        <h1 className='text-2xl font-semibold tracking-tight'>Register now!</h1>
        <p className='text-sm text-muted-foreground'>
          Enter your email to sign in to your account
        </p>
      </div>
      <RegisterWithEmailAndPasswordAuthForm />
      <p className='px-8 text-center text-sm text-muted-foreground'>
        <Link
          className='hover:text-brand underline underline-offset-4'
          href='/auth/login'
        >
          Have an account? Sign In
        </Link>
      </p>
    </div>
  );
};

export default Page;
