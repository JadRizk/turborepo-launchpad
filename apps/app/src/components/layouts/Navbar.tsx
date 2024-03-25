'use client';

import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import { Button, buttonVariants, cn, Icons } from 'ui';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  children?: ReactNode;
}

export const NavBar: FC<NavbarProps> = () => {
  const { push } = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const onLoginClick = () => {
    push('/auth/login');
  };

  return (
    <nav className='py-4 md:py-6 text-black dark:text-white'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <a href='/'>
          <Icons.logo />
        </a>

        <div className='hidden md:flex space-x-6 items-center'>
          <Button
            className={cn(buttonVariants({ size: 'sm' }), 'px-4')}
            onClick={onLoginClick}
          >
            Login
          </Button>
        </div>

        <button className='md:hidden' onClick={toggleMobileMenu}>
          <span>{!isMobileMenuOpen && <Icons.Menu />}</span>
        </button>

        <div
          className={`fixed inset-0 z-50 p-8 transform transition duration-500 ease-in-out backdrop-filter backdrop-blur-lg  bg-opacity-30 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            className='absolute top-4 right-4 text-3xl text-gray-600 dark:text-gray-300'
            onClick={toggleMobileMenu}
          >
            <Icons.close />
          </button>

          <div className='flex flex-col h-full justify-between'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-y-2 text-center'>
                <Icons.logo className='mx-auto h-6 w-6' />
                <h2 className='text-xl font-semibold tracking-tight'>
                  Welcome to Your Portal
                </h2>
                <p className='text-sm text-muted-foreground'>
                  Please enter your credentials to access exclusive features and
                  content.
                </p>
              </div>
            </div>
            <Button
              className={cn(buttonVariants({ size: 'sm' }), 'px-4')}
              onClick={onLoginClick}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
