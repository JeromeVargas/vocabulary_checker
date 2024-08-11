import { useContext } from "react";
import { AppDataContext } from "../context/AppContext";

import { type MetaDataType } from "../context/appReducer";

type UseAppDataHookType = {
  metaData: MetaDataType;
  theme: string;
  isShowText: boolean;
  handleIsShowText: () => void;
  handleChangeTheme: () => void;
};

const useAppData = (): UseAppDataHookType => {
  const {
    state: { metaData, theme, isShowText },
    handleChangeTheme,
    handleIsShowText,
  } = useContext(AppDataContext);

  return { metaData, theme, isShowText, handleChangeTheme, handleIsShowText };
};

export default useAppData;
