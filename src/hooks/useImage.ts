import { useRef, useEffect, useState } from "react";

type useImageProps = {
  handleSetLoaded: () => void;
};

const useImage = ({ handleSetLoaded }: useImageProps) => {
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
          handleSetLoaded();
        }, 3000);
      });

      return () => {
        imgElCurrent.removeEventListener("load", handleSetLoaded);
        imgElCurrent.removeEventListener("error", handleSetError);
      };
    }
  }, [imgEl, handleSetLoaded]);

  return { error, imgEl, errorThrower };
};

export default useImage;
