import Link from "next/link";
import { buttonVariants, cn } from "ui";
import { NavBar } from "../../components/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const linkClassNames = cn(
    buttonVariants({ variant: "secondary", size: "sm" }),
    "px-4",
  );

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <NavBar />
          <nav>
            <Link className={linkClassNames} href="/">
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      {/*<SiteFooter />*/}
    </div>
  );
};

export default RootLayout;
