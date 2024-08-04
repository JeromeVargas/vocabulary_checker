import { useMemo, useState } from "react";

import randomNumber from "../lib/utils/random";
import speechUtterance from "../lib/utils/speech";
import pathSlashRemover from "../lib/utils/path";

import { type metaData } from "../services/dataFetcher";

type useMetaDataProps = {
  data: metaData;
  pathname: string;
};

const useMetaData = ({ data, pathname }: useMetaDataProps) => {
  // formats the path from url
  // TODO: continue here -> maybe pass the path down to have a reference to the folder
  const path = pathSlashRemover(pathname);

  // state
  const [images, setImages] = useState(
    data[path as keyof typeof data].metadata,
  );
  const [isSpeechReady, setIsSpeechReady] = useState(false);

  // sets the images array item index to show its text, image file name and the words to highlight
  const index = useMemo(() => {
    return randomNumber(0, images.length - 1);
  }, [images.length]);

  const text = images.length > 0 ? images[index].word : "";
  const currentImage = images.length > 0 ? images[index].fileName : "";

  const highlights = data[path as keyof typeof data].wordsToHighlight;

  // state handlers
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
    path,
    isSpeechReady,
    handleNext,
    handleReset,
    handleSpeech,
  };
};

export default useMetaData;
