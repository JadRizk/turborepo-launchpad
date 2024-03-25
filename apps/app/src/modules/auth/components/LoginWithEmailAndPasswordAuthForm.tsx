'use client';

import type { FC } from 'react';
import { useTransition } from 'react';
import { Button, Icons, useToast } from 'ui';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { signInWithEmailAndPassword } from '../../../app/auth/actions';
import { FormInputField } from '../../../components/form/FormInputField';
import { AppForm } from '../../../components/form/AppForm';
import type { LoginEmailAndPasswordFormValues } from '../validations';
import { loginWithEmailAndPasswordSchema } from '../validations';

const LoginWithEmailAndPasswordAuthForm: FC = () => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const onSubmit = (formValues: LoginEmailAndPasswordFormValues) => {
    startTransition(async () => {
      const { error } = await signInWithEmailAndPassword(formValues);

      if (error) {
        toast({ title: error.message, variant: 'destructive' });
        return;
      }

      toast({ title: 'Login successful!' });
      redirect('/app');
    });
  };

  return (
    <div className='flex flex-col gap-6'>
      <AppForm onSubmit={onSubmit} schema={loginWithEmailAndPasswordSchema}>
        <div className='flex flex-col gap-4'>
          <FormInputField<LoginEmailAndPasswordFormValues>
            label='Email'
            path='email'
            placeholder='name@example.com'
          />

          <div className='flex flex-col gap-1'>
            <FormInputField<LoginEmailAndPasswordFormValues>
              label='Password'
              path='password'
              placeholder='********'
              type='password'
            />
            <p className='text-right text-xs text-muted-foreground'>
              <Link
                className='hover:text-brand hover:underline hover:underline-offset-4'
                href='/auth/forgot-password'
              >
                Forgot your password?
              </Link>
            </p>
          </div>
          <Button disabled={isPending} loading={isPending} type='submit'>
            Sign In
          </Button>
        </div>
      </AppForm>
    </div>
  );
};
export default LoginWithEmailAndPasswordAuthForm;
