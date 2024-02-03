import { useState, useEffect } from "react";
import randomNumber from "../lib/utils/random";

export const useImages = () => {
  const [images, setImages] = useState([
    "hanashimashou",
    "kaiwa",
    "kiku_renshou",
    "tango_hyou",
  ]);
  const [image, setImage] = useState<number>(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isInputReady, setIsInputReady] = useState(false);

  useEffect(() => {
    setImage(randomNumber(0, images.length - 1));
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
    input.toLowerCase() === images[image]
      ? setResult("correct")
      : setResult("incorrect");
    setIsInputReady(true);
  };

  const handleNew = () => {
    const imageIndex = images[image];
    setImages(images.filter((image) => image !== imageIndex));
    setInput("");
    setResult("");
    setIsInputReady(false);
  };

  const handleReset = () => {
    setImages((prevArray) => [
      ...prevArray,
      "hanashimashou",
      "kaiwa",
      "kiku_renshou",
      "tango_hyou",
    ]);
  };
  return {
    handleCheck,
    handleChange,
    handleNew,
    handleReset,
    images,
    image,
    result,
    input,
    isInputReady,
  };
};
