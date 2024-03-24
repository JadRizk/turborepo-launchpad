import type { ZodType } from 'zod';
import { z } from 'zod';
import type { LoginEmailAndPasswordFormValues } from '../components/LoginWithEmailAndPasswordAuthForm';
import type { LoginWithEmailFormValues } from '../components/LoginWithEmailAuthForm';

export const loginWithEmailAndPasswordSchema: ZodType<LoginEmailAndPasswordFormValues> =
  z.object({
    email: z
      .string({
        invalid_type_error: 'Email is required',
        required_error: 'Email is required.',
      })
      .email({
        message: 'Invalid email.',
      }),
    password: z.string({
      required_error: 'Password is required.',
      invalid_type_error: 'Password is required.',
    }),
  });

export const loginWithEmailSchema: ZodType<LoginWithEmailFormValues> = z.object(
  {
    email: z
      .string({
        invalid_type_error: 'Email is required',
        required_error: 'Email is required.',
      })
      .email({
        message: 'Invalid email.',
      }),
  },
);
