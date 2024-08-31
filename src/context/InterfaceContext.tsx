import { type ReactElement, createContext } from "react";

import useInterfaceReducer, { initialState } from "./InterfaceReducer";

type UseInterfaceDataContextType = ReturnType<typeof useInterfaceReducer>;

const initialContextState: UseInterfaceDataContextType = {
  state: initialState,
  text: "",
  currentImage: "",
  highlights: [],
  path: "",
  progress: 0,
  handleNext: () => {},
  handleReset: () => {},
  handleIsShowText: () => {},
  handleSpeech: () => {},
  handleSetIsLoaded: () => {},
};

export const InterfaceDataContext =
  createContext<UseInterfaceDataContextType>(initialContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[] | undefined;
  pathname: string;
};

export const InterfaceDataProvider = ({
  children,
  pathname,
}: ChildrenType): ReactElement => {
  return (
    <InterfaceDataContext.Provider value={useInterfaceReducer({ pathname })}>
      {children}
    </InterfaceDataContext.Provider>
  );
};
