import { type ReactElement } from "react";

import useAppReducer from "./appReducer";
import { AppDataContext } from "./AppDataContext";

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
