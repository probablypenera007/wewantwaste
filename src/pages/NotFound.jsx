import Header from '../components/Header';
import { useTheme } from '../hooks/useTheme';

export default function NotFound() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <div className="flex flex-col items-center justify-center mt-20 text-center">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-lg mb-4">Page not found</p>
        <a href="/" className="text-blue-600 dark:text-blue-400 underline">
          Go back home
        </a>
      </div>
    </div>
  );
}