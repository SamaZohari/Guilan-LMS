import {
  useAuth,
} from "../../context/AuthContext";

import {
  useTheme,
} from "../../context/ThemeContext";

export default function Topbar() {
  const { role } =
    useAuth();

  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (
    <div
      className="
      h-20
      border-b
      border-slate-200
      dark:border-slate-800

      bg-white
      dark:bg-slate-950

      flex
      items-center
      justify-between

      px-8
      "
    >
      <div>
        <h2
          className="
          text-2xl
          font-bold
          "
        >
          {role === "teacher"
            ? "پنل استاد"
            : "پنل دانشجو"}
        </h2>

        <p
          className="
          text-sm
          text-slate-500
          "
        >
          Guilan LMS
        </p>
      </div>

      <div
        className="
        flex
        items-center
        gap-4
        "
      >
        <button
          onClick={
            toggleTheme
          }
          className="
          px-4
          py-2
          rounded-xl

          bg-slate-200
          dark:bg-slate-800

          hover:scale-105
          transition
          "
        >
          {theme === "dark"
            ? "☀️"
            : "🌙"}
        </button>

        <div
          className="
          w-10
          h-10
          rounded-full
          bg-indigo-500
          "
        />
      </div>
    </div>
  );
}