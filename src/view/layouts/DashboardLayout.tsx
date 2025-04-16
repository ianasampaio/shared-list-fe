import { Link, Outlet } from "react-router-dom";
import { UserMenu } from "../components/UserMenu";
import { Logo } from "../components/Logo";

export function DashboardLayout() {
  return (
    <div className="flex items-center justify-center bg-bg-dark">
      <div className="max-w-[906px] w-full h-screen overflow-hidden">
        <div className="p-4 md:pb-8 md:px-8 md:pt-6 flex flex-col gap-4 h-screen max-h-[806px] ">
          <header className="h-12 flex items-center justify-between">
            <Link to="/">
              <Logo className="h-6 text-text-light" />
            </Link>

            <UserMenu />
          </header>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
