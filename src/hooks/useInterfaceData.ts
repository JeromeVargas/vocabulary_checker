import { useContext } from "react";
import { InterfaceDataContext } from "../context/InterfaceContext";

import { image } from "../types";

type UseInterfaceDataHookType = {
  imagesData: image[];
  isSpeechReady: boolean;
  isLoaded: boolean;
  isShowText: boolean;
  text: string;
  currentImage: string;
  highlights: number[];
  path: string;
  handleNext: () => void;
  handleReset: () => void;
  handleSpeech: () => void;
  handleSetIsLoaded: () => void;
  handleIsShowText: () => void;
};

const useInterfaceData = (): UseInterfaceDataHookType => {
  const {
    state: { imagesData, isSpeechReady, isLoaded, isShowText },
    text,
    currentImage,
    highlights,
    path,
    handleNext,
    handleReset,
    handleSpeech,
    handleSetIsLoaded,
    handleIsShowText,
  } = useContext(InterfaceDataContext);

  return {
    imagesData,
    isSpeechReady,
    isLoaded,
    isShowText,
    text,
    currentImage,
    highlights,
    path,
    handleNext,
    handleReset,
    handleSpeech,
    handleSetIsLoaded,
    handleIsShowText,
  };
};

export default useInterfaceData;
