const getLocalStorageTheme = () => {
  const localTheme = window.localStorage.getItem("theme");
  if (localTheme) return localTheme;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
};

export default getLocalStorageTheme;
