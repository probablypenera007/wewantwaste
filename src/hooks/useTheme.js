import { useEffect, useState } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

  return { isDark, toggleTheme: () => setIsDark((prev) => !prev) };
}
