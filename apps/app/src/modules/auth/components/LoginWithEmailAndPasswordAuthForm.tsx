"use client";

import type { FC } from "react";
import { useTransition } from "react";
import { Button, buttonVariants, cn, Icons, useToast } from "ui";
import { redirect } from "next/navigation";
import { signInWithEmailAndPassword } from "../../../app/auth/actions";
import { FormInputField } from "../../../components/form/FormInputField";
import { AppForm } from "../../../components/form/AppForm";
import { loginWithEmailAndPasswordSchema } from "../validations/LoginWithEmailAndPasswordSchema";

export type LoginEmailAndPasswordFormValues = {
  email: string;
  password: string;
};

export const LoginWithEmailAndPasswordAuthForm: FC = () => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const onSubmit = (formValues: LoginEmailAndPasswordFormValues) => {
    startTransition(async () => {
      const { error } = await signInWithEmailAndPassword(formValues);

      if (error) {
        toast({ title: error.message, variant: "destructive" });
        return;
      }

      toast({ title: "Login successful!" });
      redirect("/app");
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <AppForm onSubmit={onSubmit} schema={loginWithEmailAndPasswordSchema}>
        <div className="flex flex-col gap-4">
          <FormInputField<LoginEmailAndPasswordFormValues>
            label="Email"
            path="email"
            placeholder="name@example.com"
          />

          <FormInputField<LoginEmailAndPasswordFormValues>
            label="Password"
            path="password"
            placeholder="********"
            type="password"
          />
          <Button disabled={isPending} type="submit">
            {isPending ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Sign In
          </Button>
        </div>
      </AppForm>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button
        className={cn(buttonVariants({ variant: "outline" }))}
        disabled
        type="button"
      >
        <Icons.github className="mr-2 h-4 w-4" />
        Github
      </button>
    </div>
  );
};
