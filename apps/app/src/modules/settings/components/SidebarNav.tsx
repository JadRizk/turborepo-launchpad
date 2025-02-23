'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants, cn } from 'ui';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className='flex gap-2 sm:flex-col'>
      {items.map(item => (
        <Link
          className={cn(
            buttonVariants({ variant: 'link' }),
            pathname === item.href
              ? 'bg-muted hover:bg-muted'
              : 'hover:bg-transparent hover:underline',
            'justify-start',
          )}
          href={{ pathname: item.href }}
          key={item.href}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
