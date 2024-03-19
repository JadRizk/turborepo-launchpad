"use client";

import type { FC } from "react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { Button, buttonVariants, cn, Icons, Input, Label, toast } from "ui";
import { redirect } from "next/navigation";
import { signUpWithEmailAndPassword } from "../../../app/auth/actions";

export type RegisterEmailAndPasswordFormValues = {
  email: string;
  password: string;
  confirm: string;
};

export const RegisterWithEmailAndPasswordAuthForm: FC = () => {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterEmailAndPasswordFormValues>();

  const onSubmit = (values: RegisterEmailAndPasswordFormValues) => {
    startTransition(async () => {
      const { error } = await signUpWithEmailAndPassword(values);

      if (error) {
        toast({ title: error.message, variant: "destructive" });
        return;
      }

      toast({ title: "User created!" });
      redirect("/auth/login");
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isPending}
              id="email"
              placeholder="name@example.com"
              type="email"
              {...register("email")}
            />
            {errors.email ? (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isPending}
              id="password"
              placeholder="********"
              type="password"
              {...register("password")}
            />
            {errors.password ? (
              <p className="px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1">
            <Label className="sr-only" htmlFor="email">
              Confirm Password
            </Label>
            <Input
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isPending}
              id="confirm-password"
              placeholder="********"
              type="password"
              {...register("confirm")}
            />
            {errors.confirm ? (
              <p className="px-1 text-xs text-red-600">
                {errors.confirm.message}
              </p>
            ) : null}
          </div>
          <Button className={cn(buttonVariants())} disabled={isPending}>
            {isPending ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Register
          </Button>
        </div>
      </form>
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
