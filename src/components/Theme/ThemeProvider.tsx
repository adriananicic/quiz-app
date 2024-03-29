"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

interface IThemeContext {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [curTheme, setCurTheme] = useState<Theme>("light");

  const changeTheme = (theme: Theme) => {
    setCurTheme(theme);
    localStorage.setItem("theme", theme);
    theme === "dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  };

  useEffect(() => {
    const lsTheme = localStorage.getItem("theme");
    if (lsTheme) changeTheme(lsTheme as Theme);
  }, []);

  const toggle = () => {
    changeTheme(curTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: curTheme,
        toggle: toggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
