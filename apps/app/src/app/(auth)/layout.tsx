import type { ReactNode } from "react";
import { buttonVariants, cn, Icons } from "ui";
import React from "react";
import Link from "next/link";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8",
        )}
        href="/"
      >
        <Icons.close className="h-6 w-6" />
      </Link>
      <div className="lg:p-8">{children}</div>
    </div>
  );
};

export default AuthLayout;
