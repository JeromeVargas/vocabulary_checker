import { cn } from "../../../../../lib/classMerge";

import errorThrower from "../../../../../lib/utils/errorThrower";
import useImageData from "../../../../../hooks/useImageData";

type ImageProps = {
  imageUrl: string;
  imageTranslation: string;
  currentImage: string;
  imgRef: React.RefObject<HTMLImageElement>;
};

const Image = ({
  imgRef,
  imageUrl,
  imageTranslation,
  currentImage,
}: ImageProps) => {
  const { error } = useImageData();
  return (
    <>
      {error && errorThrower()}
      <img
        className={cn("col-start-1 row-start-1 h-full w-full text-sm", {
          invisible: imageTranslation !== currentImage,
        })}
        ref={imgRef}
        src={imageUrl}
        alt={`${imageTranslation}.`}
      />
    </>
  );
};

export default Image;
