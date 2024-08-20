import { useContext } from "react";
import { AppDataContext } from "../context/AppContext";

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
  } = useContext(AppDataContext);

  return { theme, isFirstAccess, handleChangeTheme, handleIsFirstAccess };
};

export default useAppData;
