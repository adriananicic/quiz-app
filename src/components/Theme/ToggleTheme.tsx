import React from "react";
import { useTheme } from "./ThemeProvider";
import classNames from "classnames";
import { FaMoon, FaSun } from "react-icons/fa";

export const ToggleTheme = () => {
  const { toggle, theme } = useTheme();
  return (
    <div
      onClick={() => toggle()}
      className={classNames(
        "w-[60px] h-[30px] bg-neutral-strong flex rounded-full cursor-pointer p-2 m-2 items-center ",
        theme === "dark" ? "justify-end" : "justify-start"
      )}
    >
      {theme === "light" ? <FaSun size={20} /> : <FaMoon size={20} />}
    </div>
  );
};
