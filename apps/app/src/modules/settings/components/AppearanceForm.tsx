'use client';

import { useState } from 'react';
import { z } from 'zod';
import { Button, useToast } from 'ui';
import type { FC } from 'react';
import { useTheme } from 'next-themes';
import { AppForm } from '../../../components/form/AppForm';
import { FormSelectField } from '../../../components/form/FormSelectField';

const appearanceFormSchema = z.object({
  theme: z.enum(['light', 'dark', 'system'], {
    required_error: 'Please select a theme.',
  }),
});

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;

export const AppearanceForm: FC = () => {
  const { theme, setTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: AppearanceFormValues) => {
    setIsLoading(true);
    try {
      setTheme(data.theme);

      toast({
        title: 'Preferences updated!',
        description: `Theme set to ${data.theme}.`,
      });
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to update theme. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppForm
      defaultValues={{ theme: theme as AppearanceFormValues['theme'] }}
      onSubmit={onSubmit}
      schema={appearanceFormSchema}
    >
      <div className='flex flex-col gap-4 w-56'>
        <FormSelectField
          label='Theme'
          path='theme'
          options={[
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
            { label: 'System', value: 'system' },
          ]}
        />
        <div>
          <Button disabled={isLoading} type='submit'>
            {isLoading ? 'Updating...' : 'Update Preferences'}
          </Button>
        </div>
      </div>
    </AppForm>
  );
};
