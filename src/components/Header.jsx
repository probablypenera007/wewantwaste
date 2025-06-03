import { useLocation, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import {
  MapPin,
  Trash2,
  Boxes,
  ShieldCheck,
  CalendarDays,
  CreditCard,
} from "lucide-react";

export default function Header({ toggleTheme, isDark }) {
  const location = useLocation();

  const steps = [
    { label: "Postcode", path: "/", icon: MapPin },
    { label: "Waste Type", path: "/", icon: Trash2 },
    { label: "Select Skip", path: "/", icon: Boxes },
    { label: "Permit Check", path: "/404", icon: ShieldCheck },
    { label: "Choose Date", path: null, icon: CalendarDays },
    { label: "Payment", path: null, icon: CreditCard },
  ];

  return (
    <div className="mb-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-xl font-semibold text-blue-600 dark:text-blue-400">
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
                    className={`flex items-center gap-1 ${
                      isActive
                        ? "text-blue-500 font-medium"
                        : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    {step.label}
                  </Link>
                ) : (
                  <span className="flex items-center gap-1 text-gray-300 dark:text-gray-600 cursor-not-allowed">
                    <Icon className="w-6 h-6" />
                    {step.label}
                  </span>
                )}

                {/* Fluid expanding divider */}
                {index < steps.length - 1 && (
                  <span className="h-px flex-1 bg-gray-300 dark:bg-gray-600" />
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Title & Subtitle */}
      <div className="text-center mt-4">
        <h1 className="text-2xl font-bold mb-1">Choose Your Skip Size</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Select the skip size that best suits your needs
        </p>
      </div>
    </div>
  );
}