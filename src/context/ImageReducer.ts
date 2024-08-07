import { useEffect, useReducer, useRef } from "react";

const initialState = {
  error: false,
};

const enum REDUCER_ACTIONS_TYPES {
  TOGGLE_ERROR,
}

type ReducerAction = {
  type: REDUCER_ACTIONS_TYPES;
};

const reducer = (
  state: typeof initialState,
  action: ReducerAction,
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTIONS_TYPES.TOGGLE_ERROR:
      return { ...state, error: true };
    default:
      throw new Error("There is not such action");
  }
};

type useImageReducerProps = {
  handleSetIsLoaded: () => void;
};

const useImageReducer = ({ handleSetIsLoaded }: useImageReducerProps) => {
  const imgEl = useRef<HTMLImageElement>(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  // sets the error state and helps throw error in component
  const handleSetError = () => {
    return dispatch({ type: REDUCER_ACTIONS_TYPES.TOGGLE_ERROR });
  };

  const errorThrower = () => {
    throw new Error("Image did not upload");
  };

  // sets this hook error state and prop load state as each img is passed
  useEffect(() => {
    const imgElCurrent = imgEl.current;

    if (imgElCurrent) {
      imgElCurrent.addEventListener("error", (e) => {
        if (e.type !== "error") return;
        handleSetError();
      });

      imgElCurrent.addEventListener("load", () => {
        setTimeout(() => {
          handleSetIsLoaded();
        }, 3000);
      });

      return () => {
        imgElCurrent.removeEventListener("load", handleSetIsLoaded);
        imgElCurrent.removeEventListener("error", handleSetError);
      };
    }
  }, [imgEl, handleSetIsLoaded]);

  return { state, imgEl, errorThrower };
};

export default useImageReducer;
