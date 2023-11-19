import type { ReactNode } from "react";
import { NavBar } from "../../components/layouts/Navbar";
import { ThemeToggle } from "../../components/layouts/ThemeToggle";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container bg-background">
        <NavBar />
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-4 sm:py-10 sm:h-12 sm:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 sm:flex-row sm:gap-2 sm:px-0">
            <p className="text-center text-sm leading-loose sm:text-left">
              Built by le_twix.
            </p>
          </div>
          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
