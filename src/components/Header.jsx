import { useLocation, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header({ toggleTheme, isDark }) {
  const location = useLocation();

  const steps = [
    { label: "Postcode", path: "/" },
    { label: "Waste Type", path: "/" },
    { label: "Select Skip", path: "/" },
    { label: "Permit Check", path: "/404" },
    { label: "Choose Date", path: null },
    { label: "Payment", path: null },
  ];

  return (
    <div className="mb-6">
      <nav className="flex items-center justify-between flex-wrap mb-4 gap-4">
        <div className="flex gap-4 flex-wrap text-sm sm:text-base">
          {steps.map((step, index) => {
            const isActive = location.pathname === step.path;

            return step.path ? (
              <Link
                key={index}
                to={step.path}
                className={`flex items-center gap-1 ${
                  isActive
                    ? "text-blue-500 font-medium border-b border-blue-500"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                <span>•</span> {step.label}
              </Link>
            ) : (
              <span
                key={index}
                className="text-gray-300 dark:text-gray-600 cursor-not-allowed flex items-center gap-1"
              >
                <span>•</span> {step.label}
              </span>
            );
          })}
        </div>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </nav>

      <div className="text-center">
        <h1 className="text-2xl font-bold mb-1">Choose Your Skip Size</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Select the skip size that best suits your needs
        </p>
      </div>
    </div>
  );
}
