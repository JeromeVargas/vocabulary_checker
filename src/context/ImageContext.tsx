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
  imgRef: React.RefObject<HTMLImageElement>;
  handleSetIsLoaded: () => void;
};

export const ImageDataProvider = ({
  children,
  imgRef,
  handleSetIsLoaded,
}: ChildrenType): ReactElement => {
  return (
    <ImageDataContext.Provider
      value={useImageReducer({ imgRef, handleSetIsLoaded })}
    >
      {children}
    </ImageDataContext.Provider>
  );
};
