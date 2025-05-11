import { useEffect, useState } from "react";

export default function DarkLightToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-yellow-300 dark:text-black transition"
    >
      {isDark ? "☀️ Chế độ sáng" : "🌙 Chế độ tối"}
    </button>
  );
}
