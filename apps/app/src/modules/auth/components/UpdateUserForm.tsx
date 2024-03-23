'use client';

import type { FC } from 'react';
import { useTransition } from 'react';
import { Button, toast } from 'ui';
import { z } from 'zod';
import { AppForm } from '../../../components/form/AppForm';
import { FormInputField } from '../../../components/form/FormInputField';
import { updateUser } from '../actions';

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

export const UpdateUserForm: FC = () => {
  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: UpdateUserFormValues) => {
    startTransition(async () => {
      const { error } = await updateUser(data);

      if (error) {
        toast({ title: error.message, variant: 'destructive' });
        return;
      }

      toast({ title: 'User updated!' });
    });
  };

  return (
    <AppForm onSubmit={onSubmit} schema={updateUserFormSchema}>
      <div className='flex flex-col gap-4'>
        <FormInputField label='Phone' path='phone' />
        <div>
          <Button disabled={isPending} type='submit'>
            Save
          </Button>
        </div>
      </div>
    </AppForm>
  );
};
