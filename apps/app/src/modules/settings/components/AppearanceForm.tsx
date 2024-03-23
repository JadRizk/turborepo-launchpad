'use client';

import { z } from 'zod';
import { Button, toast } from 'ui';
import type { FC } from 'react';
import { AppForm } from '../../../components/form/AppForm';

const appearanceFormSchema = z.object({
  theme: z.enum(['light', 'dark'], {
    required_error: 'Please select a theme.',
  }),
});

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;

export const AppearanceForm: FC = () => {
  function onSubmit(data: AppearanceFormValues) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <AppForm onSubmit={onSubmit} schema={appearanceFormSchema}>
      <div className='flex flex-col'>Hello</div>
      <Button type='submit' variant='primary'>
        Update preferences
      </Button>
    </AppForm>
  );
};
