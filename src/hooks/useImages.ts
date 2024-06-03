import { useMemo, useState } from "react";

import data from "../data/attributesSchema.json";
import { useLocation } from "react-router-dom";
import randomNumber from "../lib/utils/random";
import speechUtterance from "../lib/utils/speech";
import pathToCamelCase from "../lib/utils/path";

export const useImages = () => {
  const { pathname } = useLocation();
  const path = pathToCamelCase(pathname);
  const [images, setImages] = useState(
    data[path as keyof typeof data].metadata,
  );

  const index = useMemo(() => {
    return randomNumber(0, images.length - 1);
  }, [images.length]);

  const text = images.length > 0 ? images[index].word : "";
  const currentImage = images.length > 0 ? images[index].translation : "";

  const highlights = data[path as keyof typeof data].wordsToHighlight;

  const handleNext = () => {
    setImages((prevArray) =>
      prevArray.filter((image) => image !== images[index]),
    );
  };

  const handleReset = () => {
    setImages(data[path as keyof typeof data].metadata);
  };

  const handleSpeech = () => {
    speechUtterance(text);
  };

  return {
    images,
    text,
    currentImage,
    highlights,
    handleNext,
    handleReset,
    handleSpeech,
  };
};
