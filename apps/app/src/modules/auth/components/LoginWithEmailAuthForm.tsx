'use client';

import type { FC } from 'react';
import { useTransition } from 'react';
import { Button, Icons, useToast } from 'ui';
import { redirect } from 'next/navigation';
import { signInWithEmail } from '../../../app/auth/actions';
import { FormInputField } from '../../../components/form/FormInputField';
import { AppForm } from '../../../components/form/AppForm';
import { loginWithEmailSchema } from '../validations/LoginWithEmailAndPasswordSchema';

export type LoginWithEmailFormValues = {
  email: string;
};

const LoginWithEmailAuthForm: FC = () => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const onSubmit = ({ email }: LoginWithEmailFormValues) => {
    startTransition(async () => {
      const { error } = await signInWithEmail(email);

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
      <AppForm onSubmit={onSubmit} schema={loginWithEmailSchema}>
        <div className='flex flex-col gap-4'>
          <FormInputField<LoginWithEmailFormValues>
            label='Email'
            path='email'
            placeholder='name@example.com'
          />
          <Button disabled={isPending} type='submit'>
            {isPending ? (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            ) : null}
            Sign In
          </Button>
        </div>
      </AppForm>
    </div>
  );
};
export default LoginWithEmailAuthForm;
