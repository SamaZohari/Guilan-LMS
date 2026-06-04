import { useAuth } from "../../context/AuthContext";

export default function Topbar() {
  const { role, user } =
    useAuth();

  return (
    <header
      className="
      h-20
      px-8
      flex
      items-center
      justify-between
      border-b
      border-slate-200
      dark:border-slate-800

      bg-white
      dark:bg-slate-950
      "
    >
      <div>
        <h2 className="text-2xl font-bold">
          {role === "teacher"
            ? "پنل استاد"
            : "پنل دانشجو"}
        </h2>

        <p className="text-sm text-slate-500">
          سامانه مدیریت آموزش
        </p>
      </div>

      <div className="flex items-center gap-4">

        <button
          className="
          w-10
          h-10
          rounded-xl
          bg-slate-200
          dark:bg-slate-800
          "
        >
          🌙
        </button>

        <div className="text-right">
          <p className="font-medium">
            {user?.displayName ||
              "کاربر"}
          </p>

          <p className="text-xs text-slate-500">
            {user?.email}
          </p>
        </div>

        <div
          className="
          w-12
          h-12
          rounded-2xl
          bg-gradient-to-br
          from-indigo-500
          to-purple-500
          "
        />
      </div>
    </header>
  );
}