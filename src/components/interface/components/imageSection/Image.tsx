import { useRef, useEffect } from "react";
import { cn } from "../../../../lib/utils/classMerge";

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

  useEffect(() => {
    const imgElCurrent = imgEl.current;

    if (imgElCurrent) {
      imgElCurrent.addEventListener("load", () => {
        setTimeout(() => {
          handleSetLoaded();
        }, 3000);
      });
      return () => imgElCurrent.removeEventListener("load", handleSetLoaded);
    }
  }, [imgEl, handleSetLoaded]);

  return (
    <>
      <img
        className={cn("col-start-1 row-start-1 h-full w-full", {
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
