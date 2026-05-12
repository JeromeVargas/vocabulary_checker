import { useEffect, useReducer } from "react";

export type StateType = {
  error: boolean;
};

export const initialState: StateType = {
  error: false,
};

const enum REDUCER_ACTIONS_TYPES {
  TOGGLE_ERROR,
}

type ReducerAction = {
  type: REDUCER_ACTIONS_TYPES;
};

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTIONS_TYPES.TOGGLE_ERROR:
      return { ...state, error: true };
    default:
      throw new Error("There is not such action");
  }
};

type useImageReducerProps = {
  imgRef: React.RefObject<HTMLImageElement | null>;
  handleSetIsLoaded: () => void;
};

const useImageReducer = ({
  imgRef,
  handleSetIsLoaded,
}: useImageReducerProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // sets the error state and helps throw error in component
  const handleSetError = () => {
    return dispatch({ type: REDUCER_ACTIONS_TYPES.TOGGLE_ERROR });
  };

  // sets this hook error state and prop load state as each img is passed
  useEffect(() => {
    const imgElCurrent = imgRef.current;

    if (imgElCurrent) {
      const loadHandler = () => {
        setTimeout(() => {
          handleSetIsLoaded();
        }, 3000);
      };

      const errorHandler = (e: Event) => {
        if (e.type !== "error") return;
        handleSetError();
      };

      if (imgElCurrent.complete && imgElCurrent.naturalWidth > 0) {
        loadHandler();
        return;
      }

      imgElCurrent.addEventListener("load", loadHandler);
      imgElCurrent.addEventListener("error", errorHandler);

      return () => {
        imgElCurrent.removeEventListener("load", loadHandler);
        imgElCurrent.removeEventListener("error", errorHandler);
      };
    }
  }, [imgRef, handleSetIsLoaded]);

  return { state };
};

export default useImageReducer;
