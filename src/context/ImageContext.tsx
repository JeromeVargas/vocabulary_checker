import { type ReactElement, createContext } from "react";

import useImageReducer, { initialState } from "./ImageReducer";

type UseImageDataContextType = ReturnType<typeof useImageReducer>;

const initialContextState: UseImageDataContextType = {
  state: initialState,
};

export const ImageDataContext =
  createContext<UseImageDataContextType>(initialContextState);

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
