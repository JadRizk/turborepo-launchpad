import type { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { NavBar } from '../../components/layouts/Navbar';
import { ThemeToggle } from '../../components/layouts/ThemeToggle';
import { getCurrentUser } from '../app/actions/user';

const LandingLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  if (user) return redirect('/app');
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='container'>
        <NavBar />
      </header>
      <main className='flex-1'>{children}</main>
      <footer className='container'>
        <div className='py-4 md:py-6 max-w-6xl mx-auto flex justify-between items-center'>
          <p className='text-center text-sm leading-loose sm:text-left'>
            Built by le_twix.
          </p>
          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
};

export default LandingLayout;
