'use client';

import type { FC, ReactNode } from 'react';
import { Button, buttonVariants, cn, Icons } from 'ui';
import { signOut } from '../../app/app/actions/user';

interface AppNavbarProps {
  children?: ReactNode;
}

export const AppNavBar: FC<AppNavbarProps> = () => {
  const onLogout = async () => {
    await signOut();
  };

  return (
    <nav className='py-4 md:py-6 text-black dark:text-white'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <a href='/app'>
          <Icons.logo />
        </a>

        <div className='flex space-x-6 items-center'>
          <Button
            className={cn(buttonVariants({ size: 'sm' }), 'px-4')}
            onClick={onLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};
