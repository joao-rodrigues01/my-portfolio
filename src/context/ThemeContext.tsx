import { createContext, useEffect, useState } from "react";

interface ThemeContextProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    const localStorageTheme = localStorage.getItem("theme");

    return localStorageTheme ?? "light";
  });

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, setTheme: setCurrentTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
