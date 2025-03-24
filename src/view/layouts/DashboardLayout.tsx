import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-bg-dark">
      <div className="w-full max-w-[504px] px-8">
        <Outlet />
      </div>
    </div>
  );
}
