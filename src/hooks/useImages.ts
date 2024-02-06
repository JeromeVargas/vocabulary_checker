import { useMemo, useState } from "react";
import randomNumber from "../lib/utils/random";

export const useImages = () => {
  const [images, setImages] = useState([
    {
      url: "https://sb-cafetalk.s3.amazonaws.com/user-uploaded-files/cafetalk-optimized-618d23a685de3-954832700-1636639654.jpg",
      word: "hanashimashou",
    },
    {
      url: "https://www.universityofcalifornia.edu/sites/default/files/styles/article_default_banner/public/improve-talk-uc-san-diego.jpg?h=792bbb88&itok=rH_V951k",
      word: "kaiwa",
    },
    {
      url: "https://engfluent.com/wp-content/uploads/2016/09/english-listening-practice.png",
      word: "kiku_renshou",
    },
    {
      url: "https://www.callcentrehelper.com/images/stories/2022/08/vocabulary-293796887-760.jpg",
      word: "tango_hyou",
    },
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
      {
        url: "https://sb-cafetalk.s3.amazonaws.com/user-uploaded-files/cafetalk-optimized-618d23a685de3-954832700-1636639654.jpg",
        word: "hanashimashou",
      },
      {
        url: "https://www.universityofcalifornia.edu/sites/default/files/styles/article_default_banner/public/improve-talk-uc-san-diego.jpg?h=792bbb88&itok=rH_V951k",
        word: "kaiwa",
      },
      {
        url: "https://engfluent.com/wp-content/uploads/2016/09/english-listening-practice.png",
        word: "kiku_renshou",
      },
      {
        url: "https://www.callcentrehelper.com/images/stories/2022/08/vocabulary-293796887-760.jpg",
        word: "tango_hyou",
      },
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
