import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "theme-light" | "theme-dark" | "theme-green" | "theme-orange";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("theme-light");


  useEffect(() => {
    const root = document.documentElement;
    const allThemes: Theme[] = ["theme-light", "theme-dark", "theme-green", "theme-orange"];

    allThemes.forEach(t => root.classList.remove(t));
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
