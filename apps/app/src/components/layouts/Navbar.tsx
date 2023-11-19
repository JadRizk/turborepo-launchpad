"use client";

import type { FC } from "react";
import { useState } from "react";
import Link from "next/link";
import { Icons } from "ui";
import { MobileNavbar } from "./MobileNavbar";

interface NavbarProps {
  children?: React.ReactNode;
}

export const NavBar: FC<NavbarProps> = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10">
      <Link className="hidden items-center space-x-2 md:flex" href="/">
        <Icons.logo />
        <span className="hidden font-bold sm:inline-block">
          {/*Todo: Add site config name*/}
          Launchpad
        </span>
      </Link>

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => {
          setShowMobileMenu(!showMobileMenu);
        }}
        type="button"
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu ? <MobileNavbar>{children}</MobileNavbar> : null}
    </div>
  );
};
