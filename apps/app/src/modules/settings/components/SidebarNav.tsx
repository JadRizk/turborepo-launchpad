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
    <nav className='flex space-x-2 md:flex-col md:space-x-0 md:space-y-1'>
      {items.map(item => (
        <Link
          className={cn(
            buttonVariants({ variant: 'ghost' }),
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
