import { useRef, useEffect, useState } from "react";
import { cn } from "../../../../../lib/utils/classMerge";

type ImageProps = {
  imageUrl: string;
  imageTranslation: string;
  currentImage: string;
  handleSetLoaded: () => void;
};

const Image = ({
  imageUrl,
  imageTranslation,
  currentImage,
  handleSetLoaded,
}: ImageProps) => {
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

  return (
    <>
      {error && errorThrower()}
      <img
        className={cn("col-start-1 row-start-1 h-full w-full text-sm", {
          "invisible ": imageTranslation !== currentImage,
        })}
        ref={imgEl}
        src={imageUrl}
        alt={imageTranslation}
      />
    </>
  );
};
export default Image;
