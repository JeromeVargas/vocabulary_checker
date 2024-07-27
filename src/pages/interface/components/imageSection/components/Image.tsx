import { cn } from "../../../../../lib/classMerge";

import useImage from "../../../../../hooks/useImage";

type ImageProps = {
  imageUrl: string;
  imageTranslation: string;
  currentImage: string;
  handleSetIsLoaded: () => void;
};

const Image = ({
  imageUrl,
  imageTranslation,
  currentImage,
  handleSetIsLoaded,
}: ImageProps) => {
  const { error, imgEl, errorThrower } = useImage({ handleSetIsLoaded });
  return (
    <>
      {error && errorThrower()}
      <img
        className={cn("col-start-1 row-start-1 h-full w-full text-sm", {
          invisible: imageTranslation !== currentImage,
        })}
        ref={imgEl}
        src={imageUrl}
        alt={imageTranslation}
      />
    </>
  );
};

export default Image;
