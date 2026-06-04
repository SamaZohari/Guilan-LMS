import { NavLink } from "react-router-dom";

export default function Sidebar({
  items,
}: any) {
  return (
    <aside
      className="
      w-72
      h-screen
      bg-white
      dark:bg-slate-900
      border-l
      border-slate-200
      dark:border-slate-800
      p-6
      flex
      flex-col
      "
    >
      <div className="mb-10">
        <h1
          className="
          text-3xl
          font-bold
          text-indigo-600
          "
        >
          راهیار
        </h1>

        <p
          className="
          text-sm
          text-slate-500
          mt-2
          "
        >
          Crisis Learning Platform
        </p>
      </div>

      <nav className="space-y-2 flex-1">
        {items.map((item: any) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `
              block
              px-4
              py-3
              rounded-2xl
              transition-all

              ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }
              `
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button
        className="
        w-full
        py-3
        rounded-xl
        bg-red-500
        hover:bg-red-600
        text-white
        transition
        "
      >
        خروج
      </button>
    </aside>
  );
}