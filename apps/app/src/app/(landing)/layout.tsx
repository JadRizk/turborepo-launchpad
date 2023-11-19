import { NavBar } from "../../components/layouts/Navbar";
import { ThemeToggle } from "../../components/layouts/ThemeToggle";
import { LoginDialog } from "../../modules/auth/components/LoginDialog";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <NavBar />
          <nav>
            <LoginDialog />
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-4 md:py-10 md:h-12 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose md:text-left">
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
