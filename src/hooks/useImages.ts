import { useMemo, useState } from "react";

import data from "../data/images.json";
import randomNumber from "../lib/utils/random";

export const useImages = () => {
  const [images, setImages] = useState(data);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isInputReady, setIsInputReady] = useState(false);

  const image = useMemo(() => {
    return randomNumber(0, images.length - 1);
  }, [images.length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      setResult("Please provide an answer");
      return;
    }
    input.toLowerCase() === images[image].word
      ? setResult("correct")
      : setResult("incorrect");
    setIsInputReady(true);
  };

  const handleNext = () => {
    const imageIndex = images[image];
    setImages((prevArray) => prevArray.filter((image) => image !== imageIndex));
    setInput("");
    setResult("");
    setIsInputReady(false);
  };

  const handleReset = () => {
    setImages(data);
  };
  return {
    handleCheck,
    handleChange,
    handleNext,
    handleReset,
    images,
    image,
    result,
    input,
    isInputReady,
  };
};
