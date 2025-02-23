import type { NextPage } from 'next';
import Link from 'next/link';
import { buttonVariants, cn } from 'ui';

const Page: NextPage = () => {
  return (
    <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
      <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
        <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
          Build Faster. Scale Smarter.
        </h1>
        <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
          Launchpad is the monorepo framework designed for speed, power, and
          flexibility—so you can focus on what matters.
        </p>
        <Link
          className={cn(buttonVariants({ size: 'lg', variant: 'primary' }))}
          href='/auth/login'
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Page;
