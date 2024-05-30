import { useMemo, useState } from "react";

import data from "../data/attributesSchema.json";
import { useLocation } from "react-router-dom";
import randomNumber from "../lib/utils/random";
import speechUtterance from "../lib/utils/speech";
import findPath from "../lib/utils/path";

export const useImages = () => {
  const { pathname } = useLocation();
  const path = findPath(pathname);
  const [images, setImages] = useState(
    data[path as keyof typeof data].metadata,
  );
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isInputReady, setIsInputReady] = useState(false);

  const index = useMemo(() => {
    return randomNumber(0, images.length - 1);
  }, [images.length]);

  // gets the value from the images state keys dynamically
  const text = `${index}.${0}`
    .split(".")
    .reduce((obj, key) => (obj as never)?.[key], images) as unknown as string;

  // gets the value from the words to highlight state keys dynamically
  const highlights = data[path as keyof typeof data].wordsToHighlight;

  const handleNext = () => {
    setImages((prevArray) =>
      prevArray.filter((image) => image !== images[index]),
    );
    setInput("");
    setResult("");
    setIsInputReady(false);
  };

  const handleReset = () => {
    setImages(data[path as keyof typeof data].metadata);
  };

  const handleSpeech = () => {
    speechUtterance(text);
  };

  return {
    handleNext,
    handleReset,
    handleSpeech,
    images,
    index,
    result,
    input,
    isInputReady,
    text,
    highlights,
  };
};
