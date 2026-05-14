import { type ReactElement } from "react";

import useImageReducer from "./ImageReducer";
import { ImageDataContext } from "./ImageDataContext";

type ChildrenType = {
  children?: ReactElement | ReactElement[] | undefined;
  imgRef: React.RefObject<HTMLImageElement | null>;
  handleSetIsLoaded: () => void;
  currentImage: string;
};

export const ImageDataProvider = ({
  children,
  imgRef,
  handleSetIsLoaded,
  currentImage,
}: ChildrenType): ReactElement => {
  return (
    <ImageDataContext.Provider
      value={useImageReducer({ imgRef, handleSetIsLoaded, currentImage })}
    >
      {children}
    </ImageDataContext.Provider>
  );
};
