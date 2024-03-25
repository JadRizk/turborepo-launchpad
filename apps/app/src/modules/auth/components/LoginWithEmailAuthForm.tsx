'use client';

import type { FC } from 'react';
import { useTransition } from 'react';
import { Button, Icons, useToast } from 'ui';
import { redirect } from 'next/navigation';
import { signInWithEmail } from '../../../app/auth/actions';
import { FormInputField } from '../../../components/form/FormInputField';
import { AppForm } from '../../../components/form/AppForm';
import type { EmailFormValues } from '../validations';
import { emailFormSchema } from '../validations';

const LoginWithEmailAuthForm: FC = () => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const onSubmit = ({ email }: EmailFormValues) => {
    startTransition(async () => {
      const { error } = await signInWithEmail(email);

      if (error) {
        toast({ title: error.message, variant: 'destructive' });
        return;
      }

      toast({
        title: 'Check Your Email',
        description: "We've sent a magic link to your email!",
      });
      redirect('/');
    });
  };

  return (
    <div className='flex flex-col gap-6'>
      <AppForm onSubmit={onSubmit} schema={emailFormSchema}>
        <div className='flex flex-col gap-4'>
          <FormInputField<EmailFormValues>
            label='Email'
            path='email'
            placeholder='name@example.com'
          />
          <Button disabled={isPending} loading={isPending} type='submit'>
            Sign In
          </Button>
        </div>
      </AppForm>
    </div>
  );
};
export default LoginWithEmailAuthForm;
