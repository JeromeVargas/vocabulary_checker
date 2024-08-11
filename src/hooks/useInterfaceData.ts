import { useContext } from "react";
import { InterfaceDataContext } from "../context/InterfaceContext";

import { image } from "../types";

type UseInterfaceDataHookType = {
  imagesData: image[];
  isSpeechReady: boolean;
  isLoaded: boolean;
  text: string;
  currentImage: string;
  highlights: number[];
  path: string;
  handleNext: () => void;
  handleReset: () => void;
  handleSpeech: () => void;
  handleSetIsLoaded: () => void;
};

const useInterfaceData = (): UseInterfaceDataHookType => {
  const {
    state: { imagesData, isSpeechReady, isLoaded },
    text,
    currentImage,
    highlights,
    path,
    handleNext,
    handleReset,
    handleSpeech,
    handleSetIsLoaded,
  } = useContext(InterfaceDataContext);

  return {
    imagesData,
    isSpeechReady,
    isLoaded,
    text,
    currentImage,
    highlights,
    path,
    handleNext,
    handleReset,
    handleSpeech,
    handleSetIsLoaded,
  };
};

export default useInterfaceData;
