
export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="text-xs sm:text-sm px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
    >
      {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}