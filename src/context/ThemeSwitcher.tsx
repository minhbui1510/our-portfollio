import {useTheme} from "./ThemeContext.tsx";

const themes = [
  { label: "🌞 Light", value: "theme-light" },
  { label: "🌙 Dark", value: "theme-dark" },
  { label: "🍀 Green", value: "theme-green" },
  { label: "🍊 Orange", value: "theme-orange" },
] as const;

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 flex-wrap">
      {themes.map(t => (
        <button
          key={t.value}
          onClick={() => setTheme(t.value)}
          className={`px-3 py-2 rounded border ${
            theme === t.value ? "bg-[var(--primary)] text-white" : "bg-white text-black dark:bg-gray-800 dark:text-white"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
