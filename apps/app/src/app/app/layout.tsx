import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { AppNavBar } from "../../components/layouts/AppNavbar";
import { getCurrentUser } from "./actions/user";

const AppLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  if (!user) return redirect("/auth/login");

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container">
        <AppNavBar />
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default AppLayout;
