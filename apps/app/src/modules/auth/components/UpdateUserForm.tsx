'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { Button, useToast } from 'ui';
import { z } from 'zod';
import type { User } from '@supabase/auth-helpers-nextjs';
import { AppForm } from '../../../components/form/AppForm';
import { FormInputField } from '../../../components/form/FormInputField';
import { updateUser } from '../actions';
import { format } from 'date-fns';

const updateUserFormSchema = z.object({
  phone: z
    .string({
      invalid_type_error: 'Phone is required',
      required_error: 'Phone is required.',
    })
    .regex(
      /^\+?\d+$/,
      'Phone number must be a string of numbers and may start with a plus',
    ),
});

type UpdateUserFormValues = z.infer<typeof updateUserFormSchema>;

export const UpdateUserForm: FC<{ user: User | undefined }> = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const onSubmit = async (data: UpdateUserFormValues) => {
    setIsLoading(true);

    const { error } = await updateUser(data);

    try {
      if (error) {
        toast({ title: error.message, variant: 'destructive' });
        return;
      }

      toast({ title: 'User updated!' });
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
    <AppForm
      defaultValues={{ phone: user?.phone || '' }}
      onSubmit={onSubmit}
      schema={updateUserFormSchema}
    >
      <div className='flex flex-col gap-6 max-w-sm'>
        <FormInputField
          label='Email'
          path='email'
          defaultValue={user?.email || ''}
          readOnly
          disabled
        />

        <FormInputField label='Phone' path='phone' />

        <FormInputField
          label='Account Created'
          path='created_at'
          defaultValue={
            user?.created_at
              ? format(new Date(user.created_at), 'PPP p')
              : 'N/A'
          }
          readOnly
          disabled
        />

        <Button className='w-full' disabled={isLoading} type='submit'>
          {isLoading ? 'Updating...' : 'Save'}
        </Button>
      </div>
    </AppForm>
  );
};
