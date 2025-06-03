import Header from "../components/Header";
import { useTheme } from "../hooks/useTheme";
import { Link } from "react-router-dom";

export default function NotFound() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white relative overflow-hidden">
      <Header toggleTheme={toggleTheme} isDark={isDark} />

      {/* Blurred spotlight background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="flex flex-col items-center justify-center mt-32 relative z-10 text-center">
        <h1 className="text-6xl sm:text-8xl font-extrabold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
          404
        </h1>
        <p className="text-xl mt-4 text-gray-600 dark:text-gray-400 max-w-md">
          Oops... the page you're looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all"
        >
          ← Go back home
        </Link>
      </div>
    </div>
  );
}