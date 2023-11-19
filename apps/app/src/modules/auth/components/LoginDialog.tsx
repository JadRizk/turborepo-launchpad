import type { FC } from "react";
import {
  Button,
  buttonVariants,
  cn,
  Dialog,
  DialogContent,
  DialogTrigger,
  Icons,
} from "ui";
import Link from "next/link";

export const LoginDialog: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "px-4",
          )}
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="flex justify-center p-4 sm:max-w-md md:p-6">
        <div className="flex flex-col items-center space-y-6 w-full max-w-sm">
          <div className="text-center space-y-2">
            <Icons.logo className="h-12 w-12 mx-auto" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email to sign in to your account
            </p>
          </div>
          {/* Replace with actual form */}
          <form className="space-y-4 w-full">{/* Form fields go here */}</form>
          <p className="text-center text-sm text-muted-foreground">
            <Link
              className="hover:text-brand underline underline-offset-4"
              href="/register"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
