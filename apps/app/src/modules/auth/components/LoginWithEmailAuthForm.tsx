'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { Button, useToast } from 'ui';
import { useRouter } from 'next/navigation';
import { signInWithEmail } from '../../../app/auth/actions';
import { FormInputField } from '../../../components/form/FormInputField';
import { AppForm } from '../../../components/form/AppForm';
import type { EmailFormValues } from '../validations';
import { emailFormSchema } from '../validations';

const LoginWithEmailAuthForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { push } = useRouter();

  const onSubmit = async ({ email }: EmailFormValues) => {
    setIsLoading(true);

    const { error } = await signInWithEmail(email);

    try {
      if (error) {
        toast({ title: error.message, variant: 'destructive' });
        return;
      }

      toast({
        title: 'Check Your Email',
        description: "We've sent a magic link to your email!",
      });
      push('/');
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
            Sign In
          </Button>
        </div>
      </AppForm>
    </div>
  );
};
export default LoginWithEmailAuthForm;
