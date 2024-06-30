import { useRef, useEffect } from "react";

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
        className={
          imageTranslation === currentImage
            ? "col-start-1 row-start-1 h-[240px] w-[240px]"
            : "invisible col-start-1 row-start-1 h-[240px] w-[240px]"
        }
        ref={imgEl}
        src={imageUrl}
        alt={imageTranslation}
      />
    </>
  );
};
export default Image;
