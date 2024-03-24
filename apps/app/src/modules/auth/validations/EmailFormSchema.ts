import type { ZodType } from 'zod';
import { z } from 'zod';

export type EmailFormValues = {
  email: string;
};

export const emailFormSchema: ZodType<EmailFormValues> = z.object({
  email: z
    .string({
      invalid_type_error: 'Email is required',
      required_error: 'Email is required.',
    })
    .email({
      message: 'Invalid email.',
    }),
});
