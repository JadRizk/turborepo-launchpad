import type { FC } from 'react';
import React, { useTransition } from 'react';
import { Button, useToast } from 'ui';
import { redirect } from 'next/navigation';
import { updatePassword } from '../../../app/auth/actions';
import { AppForm } from '../../../components/form/AppForm';
import type { ResetPasswordFormValues } from '../validations/ResetPasswordSchema';
import { resetPasswordSchema } from '../validations/ResetPasswordSchema';
import { FormInputField } from '../../../components/form/FormInputField';

export const ResetPasswordForm: FC = () => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const onSubmit = ({ password }: ResetPasswordFormValues) => {
    startTransition(async () => {
      const { error } = await updatePassword(password);

      if (error) {
        toast({ title: error.message, variant: 'destructive' });
        return;
      }

      toast({ title: 'Password updated!' });
      redirect('/');
    });
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
          <Button loading={isPending} type='submit'>
            Reset
          </Button>
        </div>
      </AppForm>
    </div>
  );
};
