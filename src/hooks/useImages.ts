import { useMemo, useState } from "react";

import randomNumber from "../lib/utils/random";
import speechUtterance from "../lib/utils/speech";
import pathToCamelCase from "../lib/utils/path";

import { type metaData } from "../services/dataFetcher";

type useImagesProps = {
  data: metaData;
  pathname: string;
};

const useImages = ({ data, pathname }: useImagesProps) => {
  const path = pathToCamelCase(pathname);
  const [images, setImages] = useState(
    data[path as keyof typeof data].metadata,
  );
  const [isSpeechReady, setIsSpeechReady] = useState(false);

  const index = useMemo(() => {
    return randomNumber(0, images.length - 1);
  }, [images.length]);

  const text = images.length > 0 ? images[index].word : "";
  const currentImage = images.length > 0 ? images[index].translation : "";

  const highlights = data[path as keyof typeof data].wordsToHighlight;

  const handleNext = () => {
    setIsSpeechReady(false);
    setImages((prevArray) =>
      prevArray.filter((image) => image !== images[index]),
    );
  };

  const handleReset = () => {
    setImages(data[path as keyof typeof data].metadata);
  };

  const handleSpeech = () => {
    setTimeout(() => {
      setIsSpeechReady(true);
    }, 1000);
    speechUtterance(text);
  };

  return {
    images,
    text,
    currentImage,
    highlights,
    isSpeechReady,
    handleNext,
    handleReset,
    handleSpeech,
  };
};

export default useImages;
