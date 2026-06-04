import Sidebar from "../Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({
  items,
  children,
}: any) {
  return (
    <div
      className="
      min-h-screen
      flex
      bg-slate-100
      dark:bg-slate-950
      text-slate-900
      dark:text-white
      "
    >
      <Sidebar items={items} />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="flex-1">
          {children}
        </main>

      </div>
    </div>
  );
}