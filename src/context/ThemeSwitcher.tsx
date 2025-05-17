import { useTheme } from "./ThemeContext.tsx";
import { useTranslation } from "react-i18next";

const themes = [
  { labelKey: "light", value: "theme-light" },
  { labelKey: "dark", value: "theme-dark" },
  { labelKey: "green", value: "theme-green" },
  { labelKey: "orange", value: "theme-orange" },
] as const;

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme(); // theme: string
  const { t } = useTranslation("theme");

  return (
    <div className="flex gap-2 flex-wrap">
      {themes.map((item) => (
        <button
          key={item.value}
          onClick={() => setTheme(item.value)}
          className={`px-3 py-2 rounded border ${
            theme === item.value
              ? "bg-[var(--primary)] text-white"
              : "bg-white text-black dark:bg-gray-800 dark:text-white"
          }`}
        >
          {t(item.labelKey)}
        </button>
      ))}
    </div>
  );
}
