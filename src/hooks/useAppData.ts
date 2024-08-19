import { useContext } from "react";
import { AppDataContext } from "../context/AppContext";

type UseAppDataHookType = {
  theme: string;
  isShowText: boolean;
  isFirstAccess: boolean;
  handleIsShowText: () => void;
  handleChangeTheme: () => void;
  handleIsFirstAccess: () => void;
};

const useAppData = (): UseAppDataHookType => {
  const {
    state: { theme, isShowText, isFirstAccess },
    handleChangeTheme,
    handleIsShowText,
    handleIsFirstAccess,
  } = useContext(AppDataContext);

  return {
    theme,
    isShowText,
    isFirstAccess,
    handleChangeTheme,
    handleIsShowText,
    handleIsFirstAccess,
  };
};

export default useAppData;
