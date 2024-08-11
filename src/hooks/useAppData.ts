import { useContext } from "react";
import { AppDataContext } from "../context/AppContext";

type UseAppDataHookType = {
  theme: string;
  isShowText: boolean;
  handleIsShowText: () => void;
  handleChangeTheme: () => void;
};

const useAppData = (): UseAppDataHookType => {
  const {
    state: { theme, isShowText },
    handleChangeTheme,
    handleIsShowText,
  } = useContext(AppDataContext);

  return { theme, isShowText, handleChangeTheme, handleIsShowText };
};

export default useAppData;
