import { useRef, useEffect, useState } from "react";

type useImageProps = {
  handleSetIsLoaded: () => void;
};

const useImage = ({ handleSetIsLoaded }: useImageProps) => {
  const imgEl = useRef<HTMLImageElement>(null);
  const [error, setError] = useState(false);

  const handleSetError = () => {
    setError(true);
  };

  const errorThrower = () => {
    throw new Error("Image did not upload");
  };

  useEffect(() => {
    const imgElCurrent = imgEl.current;

    if (imgElCurrent) {
      imgElCurrent.addEventListener("error", (e) => {
        if (e.type !== "error") return;
        handleSetError();
      });

      imgElCurrent.addEventListener("load", () => {
        setTimeout(() => {
          handleSetIsLoaded();
        }, 3000);
      });

      return () => {
        imgElCurrent.removeEventListener("load", handleSetIsLoaded);
        imgElCurrent.removeEventListener("error", handleSetError);
      };
    }
  }, [imgEl, handleSetIsLoaded]);

  return { error, imgEl, errorThrower };
};

export default useImage;