'use client';

import { useState } from 'react';
import { Button, cn, Icons } from 'ui';
import type { NextPage } from 'next';
import { RegisterWithEmailAndPasswordAuthForm } from '../../modules/auth/components/RegisterWithEmailAndPasswordAuthForm';
import '../../modules/auth/styles/auth.css';
import { LoginAuthForm } from '../../modules/auth/components/LoginAuthForm';

const Page: NextPage = () => {
  const [signUpMode, setSignUpMode] = useState(false);

  return (
    <div className={cn('container', { 'sign-up-mode': signUpMode })}>
      <div className='forms-container'>
        <div className='signin-signup'>
          <div className='sign-up-form'>
            <div className='mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]'>
              <div className='flex flex-col gap-y-2 text-center'>
                <Icons.logo className='mx-auto h-6 w-6' />
                <h1 className='text-2xl font-semibold tracking-tight'>
                  Register now!
                </h1>
                <p className='text-sm text-muted-foreground'>
                  Enter your email to sign in to your account
                </p>
              </div>
              <RegisterWithEmailAndPasswordAuthForm />
              <p className='px-8 text-center text-sm text-muted-foreground'>
                <Button
                  onClick={() => {
                    setSignUpMode(!signUpMode);
                  }}
                  variant='ghost'
                >
                  Have an account? Sign In
                </Button>
              </p>
            </div>
          </div>
          <div className='sign-in-form'>
            <div className='mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]'>
              <div className='flex flex-col gap-y-2 text-center'>
                <Icons.logo className='mx-auto h-6 w-6' />
                <h1 className='text-2xl font-semibold tracking-tight'>
                  Welcome back
                </h1>
                <p className='text-sm text-muted-foreground'>
                  Enter your email to sign in to your account
                </p>
              </div>
              <LoginAuthForm />
              <p className='px-8 text-center text-sm text-muted-foreground'>
                <Button
                  onClick={() => {
                    setSignUpMode(!signUpMode);
                  }}
                  variant='ghost'
                >
                  Don&apos;t have an account? Sign Up
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
