import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import React from "react";
import { ThemeProvider } from "../components/layouts/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

// TODO: update the site metadata
export const metadata: Metadata = {
  title: "Launchpad",
  description: "Turbo app starter",
};

// TODO: Add global providers over here
const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
        enableSystem
        storageKey="theme"
      >
        {children}
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
