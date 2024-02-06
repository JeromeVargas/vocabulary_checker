import { useMemo, useState } from "react";
import randomNumber from "../lib/utils/random";

export const useImages = () => {
  const [images, setImages] = useState([
    { url: "src/assets/hanashimashou.png", word: "hanashimashou" },
    { url: "src/assets/kaiwa.png", word: "kaiwa" },
    { url: "src/assets/kiku_renshou.png", word: "kiku_renshou" },
    { url: "src/assets/tango_hyou.png", word: "tango_hyou" },
  ]);
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

  const handleNew = () => {
    const imageIndex = images[image];
    setImages((prevArray) => prevArray.filter((image) => image !== imageIndex));
    setInput("");
    setResult("");
    setIsInputReady(false);
  };

  const handleReset = () => {
    setImages((prevArray) => [
      ...prevArray,
      { url: "src/assets/hanashimashou.png", word: "hanashimashou" },
      { url: "src/assets/kaiwa.png", word: "kaiwa" },
      { url: "src/assets/kiku_renshou.png", word: "kiku_renshou" },
      { url: "src/assets/tango_hyou.png", word: "tango_hyou" },
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
