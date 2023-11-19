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
      {/*Todo: handle navigation bar items*/}
      {/*{items?.length ? (*/}
      {/*    <nav className="hidden gap-6 md:flex">*/}
      {/*        {items?.map((item, index) => (*/}
      {/*            <Link*/}
      {/*                key={index}*/}
      {/*                href={item.disabled ? "#" : item.href}*/}
      {/*                className={cn(*/}
      {/*                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",*/}
      {/*                    item.href.startsWith(`/${segment}`)*/}
      {/*                        ? "text-foreground"*/}
      {/*                        : "text-foreground/60",*/}
      {/*                    item.disabled && "cursor-not-allowed opacity-80"*/}
      {/*                )}*/}
      {/*            >*/}
      {/*                {item.title}*/}
      {/*            </Link>*/}
      {/*        ))}*/}
      {/*    </nav>*/}
      {/*) : null}*/}
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
