import { useRef, useEffect } from "react";
import { Rings } from "react-loader-spinner";

type ImageProps = {
  imageUrl: string;
  imageTranslation: string;
  currentImage: string;
  loaded: boolean;
  handleSetLoaded: () => void;
};

const Image = ({
  imageUrl,
  imageTranslation,
  currentImage,
  loaded,
  handleSetLoaded,
}: ImageProps) => {
  const imgEl = useRef<HTMLImageElement>(null);

  const onImageLoaded = () => handleSetLoaded();

  useEffect(() => {
    const imgElCurrent = imgEl.current;

    if (imgElCurrent) {
      imgElCurrent.addEventListener("load", onImageLoaded);
      return () => imgElCurrent.removeEventListener("load", onImageLoaded);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgEl]);

  return (
    <>
      <section
        className={
          !loaded
            ? "col-start-1 row-start-1 h-[240px] w-[240px] text-xl text-text-base"
            : "invisible col-start-1 row-start-1 h-[240px] w-[240px] text-xl text-text-base"
        }
      >
        <div className="flex h-[240px] w-[240px] items-center justify-center">
          <Rings color="#00BFFF" height="200" width="200" />
        </div>
      </section>
      <img
        className={
          imageTranslation === currentImage
            ? "z-10 col-start-1 row-start-1 h-[240px] w-[240px]"
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
