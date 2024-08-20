import { type ReactElement, createContext } from "react";

import useAppReducer, { initialState } from "./appReducer";

type UseAppDataContextType = ReturnType<typeof useAppReducer>;

const initialContextState: UseAppDataContextType = {
  state: initialState,  
  handleChangeTheme: () => {},
  handleIsFirstAccess: () => {},
};

export const AppDataContext =
  createContext<UseAppDataContextType>(initialContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[] | undefined;
};

export const AppDataProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <AppDataContext.Provider value={useAppReducer()}>
      {children}
    </AppDataContext.Provider>
  );
};
