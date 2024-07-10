import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) return localTheme;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.querySelector("html")?.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return { theme, handleChangeTheme };
};

export default useDarkMode;
