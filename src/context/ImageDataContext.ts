import { createContext } from "react";

import useImageReducer, { initialState } from "./ImageReducer";

type UseImageDataContextType = ReturnType<typeof useImageReducer>;

const initialContextState: UseImageDataContextType = {
  state: initialState,
};

export const ImageDataContext =
  createContext<UseImageDataContextType>(initialContextState);
