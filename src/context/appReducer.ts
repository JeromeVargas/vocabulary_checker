import { useEffect, useReducer } from "react";

import getLocalStorageTheme from "../lib/utils/getLocalStorageTheme";
import getLocalStorageFirstAccess from "../lib/utils/getLocalStorageFirstAccess";

export type StateType = {
  theme: string;
  isFirstAccess: boolean;
};

export const initialState: StateType = {
  theme: getLocalStorageTheme(),
  isFirstAccess: getLocalStorageFirstAccess(),
};

const enum REDUCER_ACTIONS_TYPES {
  TOGGLE_DARK_MODE,
  TOGGLE_IS_FIRST_ACCESS,
}

type ReducerAction = {
  type: REDUCER_ACTIONS_TYPES;
};

const reducer = (
  state: StateType,
  action: ReducerAction,
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTIONS_TYPES.TOGGLE_DARK_MODE:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case REDUCER_ACTIONS_TYPES.TOGGLE_IS_FIRST_ACCESS:
      return { ...state, isFirstAccess: false };
    default:
      throw new Error("There is not such action");
  }
};

const useAppReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // changes theme depending on theme state
  useEffect(() => {
    if (state.theme === "dark") {
      document.querySelector("html")?.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.querySelector("html")?.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [state.theme]);

  const handleChangeTheme = () => {
    return dispatch({ type: REDUCER_ACTIONS_TYPES.TOGGLE_DARK_MODE });
  };

  const handleIsFirstAccess = () => {
    if (state.isFirstAccess === true)
      localStorage.setItem("first_access", "false");
    return dispatch({ type: REDUCER_ACTIONS_TYPES.TOGGLE_IS_FIRST_ACCESS });
  };

  return { state, handleChangeTheme, handleIsFirstAccess };
};

export default useAppReducer;
