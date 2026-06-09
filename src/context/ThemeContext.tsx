import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from 'react';
type Theme = string;

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("theme-dark");


  useEffect(() => {
    const root = document.documentElement;
    
    // Remove any existing theme classes
    root.className = Array.from(root.classList)
      .filter((c) => !c.startsWith('theme-'))
      .join(' ');
      
    if (theme) {
      root.classList.add(theme);
    }
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
