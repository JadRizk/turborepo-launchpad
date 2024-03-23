import type { ReactNode } from 'react';
import { Separator } from 'ui/src/components/ui/separator';
import { SidebarNav } from '../../../modules/settings/components/SidebarNav';

const sidebarNavItems = [
  {
    title: 'Profile',
    href: '/app/settings',
  },
  {
    title: 'Appearance',
    href: '/app/settings/appearance',
  },
];

const SettingsLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className='space-y-6 px-10'>
      <div className='space-y-0.5'>
        <h2 className='text-2xl font-bold tracking-tight'>Settings</h2>
        <p className='text-muted-foreground'>
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className='my-6' />
      <div className='flex flex-col space-y-8 md:flex-row md:space-x-12 md:space-y-0'>
        <aside className='-mx-4 lg:w-1/5'>
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className='flex-1 lg:max-w-2xl'>{children}</div>
      </div>
    </div>
  );
};

export default SettingsLayout;
