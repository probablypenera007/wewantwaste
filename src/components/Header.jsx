import { useLocation, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { STEPS } from "../utils/constants";

export default function Header({ toggleTheme, isDark }) {
  const location = useLocation();

const steps = STEPS;

  return (
    <div className="mb-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent animate-text-glow tracking-tight drop-shadow-md">
          WeWantWaste
        </div>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>

      {/* Steps Nav */}
      <nav className="w-full overflow-x-auto">
        <div className="flex justify-between flex-wrap gap-4 text-sm sm:text-base">
          {steps.map((step, index) => {
            const isActive = location.pathname === step.path;
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-2 flex-1 min-w-fit"
              >
                {step.path ? (
                  <Link
                    to={step.path}
                    className={`flex items-center gap-1 px-2 py-1 rounded-full transition ${
                      isActive
                        ? "text-white bg-gradient-to-r from-cyan-500 to-teal-500 shadow-md"
                        : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {step.label}
                  </Link>
                ) : (
                  <span className="flex items-center gap-1 text-slate-500 dark:text-slate-600 cursor-not-allowed">
                    <Icon className="w-5 h-5" />
                    {step.label}
                  </span>
                )}

                {/* Divider */}
                {index < steps.length - 1 && (
                  <span className="h-px flex-1 bg-slate-300 dark:bg-slate-600" />
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Title & Subtitle */}
      <div className="text-center mt-4">
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
          Choose Your Skip Size
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Select the skip size that best suits your needs
        </p>
      </div>
    </div>
  );
}
