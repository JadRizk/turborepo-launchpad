import type { ZodType } from 'zod';
import { z } from 'zod';

export type ResetPasswordFormValues = {
  password: string;
  confirmPassword: string;
};

export const resetPasswordSchema: ZodType<ResetPasswordFormValues> = z
  .object({
    password: z
      .string({
        required_error: 'Password is required.',
        invalid_type_error: 'Password is required.',
      })
      .min(8, { message: 'Password must be at least 8 characters long.' })
      .regex(/[a-z]/, {
        message: 'Password must contain at least one lowercase letter.',
      })
      .regex(/[A-Z]/, {
        message: 'Password must contain at least one uppercase letter.',
      })
      .regex(/[0-9]/, {
        message: 'Password must contain at least one number.',
      })
      .regex(/[\W_]/, {
        message: 'Password must contain at least one special character.',
      }),
    confirmPassword: z.string({
      required_error: 'Confirmation password is required.',
      invalid_type_error: 'Confirmation password is required.',
    }),
  })
  .refine(values => values.password === values.confirmPassword, {
    message: 'Passwords must match!',
    path: ['confirmPassword'],
  });
