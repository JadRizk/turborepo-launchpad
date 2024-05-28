'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { Button, useToast } from 'ui';
import { useRouter } from 'next/navigation';
import { resetPasswordForEmail } from '../../../app/auth/actions';
import { AppForm } from '../../../components/form/AppForm';
import type { EmailFormValues } from '../validations';
import { emailFormSchema } from '../validations';
import { FormInputField } from '../../../components/form/FormInputField';

export const ForgotPasswordForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const { toast } = useToast();

  const onSubmit = async ({ email }: EmailFormValues) => {
    setIsLoading(true);

    const { error } = await resetPasswordForEmail(email);

    try {
      if (error) {
        toast({ title: error.message, variant: 'destructive' });
        return;
      }

      toast({
        title: 'Check Your Email',
        description:
          "We've sent a password reset link to your email. Please click the link to set a new password.",
      });
      push('/auth/login');
    } catch (err) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
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

          <Button loading={isLoading} type='submit'>
            Send Reset Link
          </Button>
        </div>
      </AppForm>
    </div>
  );
};
