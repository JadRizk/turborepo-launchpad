import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import 'ui/styles/globals.css';
import React from 'react';
import { Toaster } from 'ui';
import { ThemeProvider } from '../components/layouts/ThemeProvider';

const inter = Oswald({ subsets: ['latin'] });

// TODO: update the site metadata
export const metadata: Metadata = {
  title: 'Launchpad',
  description: 'Turbo app starter',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

// TODO: Add global providers over here
const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en' suppressHydrationWarning>
    <body className={inter.className}>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        disableTransitionOnChange
        enableSystem
        storageKey='theme'
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
