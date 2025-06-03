import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 text-xs sm:text-sm px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:opacity-80 transition"
    >
      {isDark ? (
        <>
          <Sun className="w-5 h-5 text-yellow-400" />
        </>
      ) : (
        <>
          <Moon className="w-5 h-5 text-blue-600" />
        </>
      )}
    </button>
  );
}
