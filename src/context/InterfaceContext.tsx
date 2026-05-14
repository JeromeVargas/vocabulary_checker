import { type ReactElement } from "react";

import useInterfaceReducer from "./InterfaceReducer";
import { InterfaceDataContext } from "./InterfaceDataContext";

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
