"use client";

import type { FC } from "react";
import { useState } from "react";
import Link from "next/link";
import { Button, buttonVariants, cn, Icons } from "ui";
import { useRouter } from "next/navigation";

interface NavbarProps {
  children?: React.ReactNode;
}

export const NavBar: FC<NavbarProps> = () => {
  const { push } = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const onLoginClick = () => {
    push("/login");
  };

  return (
    <nav className="py-4 md:py-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Icons.logo />

        <div className="hidden md:flex space-x-6 items-center">
          <Link className="hover:underline" href="/">
            Features
          </Link>
          <Link className="hover:underline" href="/">
            About
          </Link>
          <Button
            className={cn(buttonVariants({ size: "sm" }), "px-4")}
            onClick={onLoginClick}
          >
            Login
          </Button>
        </div>

        <button className="md:hidden" onClick={toggleMobileMenu}>
          <span>{!isMobileMenuOpen && <Icons.menu />}</span>
        </button>

        <div
          className={`fixed inset-0 z-50 bg-white dark:bg-black p-8 transform transition duration-500 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-3xl text-gray-600 dark:text-gray-300"
            onClick={toggleMobileMenu}
          >
            <Icons.close />
          </button>

          <div className="flex flex-col h-full justify-between">
            <div className="space-y-6">
              <Link className="block text-2xl hover:underline" href="/">
                Features
              </Link>
              <Link className="block text-2xl hover:underline" href="/">
                About
              </Link>
            </div>

            <Button
              className={cn(buttonVariants({ size: "sm" }), "px-4")}
              onClick={onLoginClick}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
