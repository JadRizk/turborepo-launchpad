'use client';

import type { FC, ReactNode } from 'react';
import { Icons } from 'ui';
import { ProfileIconMenu } from '../../modules/user/components/ProfileIconMenu';

interface AppNavbarProps {
  children?: ReactNode;
}

export const AppNavBar: FC<AppNavbarProps> = () => {
  return (
    <nav className='py-4 md:py-6 text-black dark:text-white'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <a href='/app'>
          <Icons.logo />
        </a>

        <div className='flex space-x-6 items-center'>
          <ProfileIconMenu />
        </div>
      </div>
    </nav>
  );
};
