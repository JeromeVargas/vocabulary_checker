import { useContext } from "react";
import { InterfaceDataContext } from "../context/InterfaceContext";

import { image } from "../types";

type UseInterfaceDataHookType = {
  imagesData: image[];
  isSpeechReady: boolean;
  isPlaying: boolean;
  isLoaded: boolean;
  isShowText: boolean;
  text: string;
  currentImage: string;
  highlights: number[];
  path: string;
  progress: number;
  handleNext: () => void;
  handleReset: () => void;
  handleSpeech: () => void;
  handleSetIsLoaded: () => void;
  handleIsShowText: () => void;
};

const useInterfaceData = (): UseInterfaceDataHookType => {
  const {
    state: { imagesData, isSpeechReady, isPlaying, isLoaded, isShowText },
    text,
    currentImage,
    highlights,
    path,
    progress,
    handleNext,
    handleReset,
    handleSpeech,
    handleSetIsLoaded,
    handleIsShowText,
  } = useContext(InterfaceDataContext);

  return {
    imagesData,
    isSpeechReady,
    isPlaying,
    isLoaded,
    isShowText,
    text,
    currentImage,
    highlights,
    path,
    progress,
    handleNext,
    handleReset,
    handleSpeech,
    handleSetIsLoaded,
    handleIsShowText,
  };
};

export default useInterfaceData;
