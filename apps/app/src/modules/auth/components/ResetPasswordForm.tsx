import type { FC } from 'react';
import React, { useState } from 'react';
import { Button, useToast } from 'ui';
import { useRouter } from 'next/navigation';
import { updatePassword } from '../../../app/auth/actions';
import { AppForm } from '../../../components/form/AppForm';
import type { ResetPasswordFormValues } from '../validations/ResetPasswordSchema';
import { resetPasswordSchema } from '../validations/ResetPasswordSchema';
import { FormInputField } from '../../../components/form/FormInputField';

export const ResetPasswordForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const { toast } = useToast();

  const onSubmit = async ({ password }: ResetPasswordFormValues) => {
    setIsLoading(true);
    const { error } = await updatePassword(password);

    try {
      if (error) {
        toast({
          title: error.message,
          variant: 'destructive',
        });
        return;
      }

      toast({
        title: 'Password updated!',
        description: 'Your password has been successfully updated.',
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
      <AppForm onSubmit={onSubmit} schema={resetPasswordSchema}>
        <div className='flex flex-col gap-4'>
          <FormInputField<ResetPasswordFormValues>
            label='Password'
            path='password'
            placeholder='********'
            type='password'
          />
          <FormInputField<ResetPasswordFormValues>
            label='Confirm password'
            path='confirmPassword'
            placeholder='********'
            type='password'
          />
          <Button loading={isLoading} type='submit'>
            Reset
          </Button>
        </div>
      </AppForm>
    </div>
  );
};
