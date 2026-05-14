import { use } from "react";
import { AppDataContext } from "../context/AppDataContext";

type UseAppDataHookType = {
  theme: string;
  isFirstAccess: boolean;
  handleChangeTheme: () => void;
  handleIsFirstAccess: () => void;
};

const useAppData = (): UseAppDataHookType => {
  const {
    state: { theme, isFirstAccess },
    handleChangeTheme,
    handleIsFirstAccess,
  } = use(AppDataContext);

  return { theme, isFirstAccess, handleChangeTheme, handleIsFirstAccess };
};

export default useAppData;
