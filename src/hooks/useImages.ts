import { useMemo, useState } from "react";

import data from "../data/images.json";
import randomNumber from "../lib/utils/random";
import speechUtterance from "../lib/utils/speech";
import { useLocation } from "react-router-dom";

export const useImages = () => {
  // transforms the url to camelCase
  const { pathname } = useLocation();

  const path = pathname
    .slice(1, pathname.length)
    .split("-")
    .map((pathPart, index) => {
      if (index !== 0) return pathPart[0].toUpperCase() + pathPart.slice(1);
      return pathPart;
    })
    .join("");

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      setResult("Please provide an answer");
      return;
    }
    input.toLowerCase() === text
      ? setResult("correct")
      : setResult("incorrect");
    setIsInputReady(true);
  };

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
    handleCheck,
    handleChange,
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
