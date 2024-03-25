'use client';

import type { FC } from 'react';
import { useTransition } from 'react';
import { Button, buttonVariants, cn, Icons, toast } from 'ui';
import { redirect } from 'next/navigation';
import { signUpWithEmailAndPassword } from '../../../app/auth/actions';
import { AppForm } from '../../../components/form/AppForm';
import { FormInputField } from '../../../components/form/FormInputField';
import type { RegisterEmailAndPasswordFormValues } from '../validations/RegisterWithEmailAndPasswordSchema';
import { registerWithEmailAndPasswordSchema } from '../validations/RegisterWithEmailAndPasswordSchema';

export const RegisterWithEmailAndPasswordAuthForm: FC = () => {
  const [isPending, startTransition] = useTransition();

  const onSubmit = ({
    email,
    password,
  }: RegisterEmailAndPasswordFormValues) => {
    startTransition(async () => {
      const { error } = await signUpWithEmailAndPassword({ email, password });

      if (error) {
        toast({ title: error.message, variant: 'destructive' });
        return;
      }

      toast({ title: 'User created!' });
      redirect('/auth/login');
    });
  };

  return (
    <div className='flex flex-col gap-6'>
      <AppForm onSubmit={onSubmit} schema={registerWithEmailAndPasswordSchema}>
        <div className='flex flex-col gap-4'>
          <FormInputField<RegisterEmailAndPasswordFormValues>
            label='Email'
            path='email'
            placeholder='name@example.com'
          />
          <FormInputField<RegisterEmailAndPasswordFormValues>
            label='Password'
            path='password'
            placeholder='********'
            type='password'
          />
          <FormInputField<RegisterEmailAndPasswordFormValues>
            label='Confirm password'
            path='confirmPassword'
            placeholder='********'
            type='password'
          />
          <Button loading={isPending} type='submit'>
            Register
          </Button>
        </div>
      </AppForm>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>
      <button
        className={cn(buttonVariants({ variant: 'outline' }))}
        disabled
        type='button'
      >
        <Icons.Github className='mr-2 h-4 w-4' />
        Github
      </button>
    </div>
  );
};
