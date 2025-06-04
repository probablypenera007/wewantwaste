import { useLocation, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { STEPS } from "../utils/constants";

export default function Header({ toggleTheme, isDark }) {
  const location = useLocation();
  const steps = STEPS;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 bg-clip-text text-transparent tracking-tight">
          WeWantWaste
        </div>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>

      <nav className="w-full overflow-x-auto mb-8">
        <div className="flex justify-between flex-wrap gap-4 text-sm sm:text-base">
          {steps.map((step, index) => {
            const isActive = location.pathname === step.path;
            const Icon = step.icon;

            return (
              <div key={index} className="flex items-center gap-2 flex-1 min-w-fit">
                {step.path ? (
                  <Link
                    to={step.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "glass-card bg-gradient-to-r from-blue-600/90 to-blue-700/90 text-white shadow-lg"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {step.label}
                  </Link>
                ) : (
                  <span className="flex items-center gap-2 px-3 py-2 text-gray-400 dark:text-gray-600 cursor-not-allowed">
                    <Icon className="w-5 h-5" />
                    {step.label}
                  </span>
                )}

                {index < steps.length - 1 && (
                  <span className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
                )}
              </div>
            );
          })}
        </div>
      </nav>

      <div className="text-center glass-card rounded-2xl py-8 px-6 mb-8">
        <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
          Choose Your Skip Size
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Select the skip size that best suits your needs
        </p>
      </div>
    </div>
  );
}