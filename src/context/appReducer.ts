import { useEffect, useReducer } from "react";

import getLocalStorageTheme from "../lib/utils/getLocalStorage";

const initialState = {
  isShowText: true,
  theme: getLocalStorageTheme(),
};

const enum REDUCER_ACTIONS_TYPES {
  TOGGLE_IS_SHOW_TEXT,
  TOGGLE_DARK_MODE,
}

type ReducerAction = {
  type: REDUCER_ACTIONS_TYPES;
  payload?: string;
};

const reducer = (
  state: typeof initialState,
  action: ReducerAction,
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTIONS_TYPES.TOGGLE_IS_SHOW_TEXT:
      return { ...state, isShowText: !state.isShowText };
    case REDUCER_ACTIONS_TYPES.TOGGLE_DARK_MODE:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
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

  const handleIsShowText = () => {
    return dispatch({ type: REDUCER_ACTIONS_TYPES.TOGGLE_IS_SHOW_TEXT });
  };

  const handleChangeTheme = () => {
    return dispatch({ type: REDUCER_ACTIONS_TYPES.TOGGLE_DARK_MODE });
  };

  return { state, handleIsShowText, handleChangeTheme };
};

export default useAppReducer;
