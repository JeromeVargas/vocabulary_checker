import { useEffect, useMemo, useReducer } from "react";

import pathSlashRemover from "../lib/utils/path";
import dataFetcher from "../services/dataFetcher";
import randomNumber from "../lib/utils/random";
import speechUtterance from "../lib/utils/speech";

import { type image } from "../types";

const data = dataFetcher();

export type StateType = {
  imagesData: image[];
  isShowText: boolean;
  isSpeechReady: boolean;
  isLoaded: boolean;
};

export const initialState: StateType = {
  imagesData: [],
  isShowText: false,
  isSpeechReady: false,
  isLoaded: false,
};

const enum REDUCER_ACTIONS_TYPES {
  SET_IMAGES_DATA,
  FILTER_IMAGES_DATA,
  TOGGLE_IS_SHOW_TEXT,
  RESET_IS_SHOW_TEXT,
  TOGGLE_IS_SPEECH_READY,
  TOGGLE_IS_LOADED,
}

type ReducerAction =
  | { type: REDUCER_ACTIONS_TYPES.SET_IMAGES_DATA; payload: string }
  | { type: REDUCER_ACTIONS_TYPES.FILTER_IMAGES_DATA; payload: number }
  | { type: REDUCER_ACTIONS_TYPES.TOGGLE_IS_SHOW_TEXT }
  | { type: REDUCER_ACTIONS_TYPES.RESET_IS_SHOW_TEXT }
  | { type: REDUCER_ACTIONS_TYPES.TOGGLE_IS_SPEECH_READY; payload: boolean }
  | { type: REDUCER_ACTIONS_TYPES.TOGGLE_IS_LOADED; payload: boolean };

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTIONS_TYPES.SET_IMAGES_DATA:
      return {
        ...state,
        imagesData: data[action.payload as keyof typeof data].metadata,
      };
    case REDUCER_ACTIONS_TYPES.FILTER_IMAGES_DATA:
      return {
        ...state,
        imagesData: state.imagesData.filter(
          (image) => image !== state.imagesData[action.payload as number],
        ),
      };
    case REDUCER_ACTIONS_TYPES.TOGGLE_IS_SHOW_TEXT:
      return { ...state, isShowText: !state.isShowText };
    case REDUCER_ACTIONS_TYPES.RESET_IS_SHOW_TEXT:
      return { ...state, isShowText: false };
    case REDUCER_ACTIONS_TYPES.TOGGLE_IS_SPEECH_READY:
      return {
        ...state,
        isSpeechReady: action.payload,
      };
    case REDUCER_ACTIONS_TYPES.TOGGLE_IS_LOADED:
      return { ...state, isLoaded: action.payload };
    default:
      throw new Error("There is not such action");
  }
};

type useInterfaceReducerProps = {
  pathname: string;
};

const useInterfaceReducer = ({ pathname }: useInterfaceReducerProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /* meta-data code */
  // formats the path from url
  const path = pathSlashRemover(pathname);

  // sets the images array item index to show its text, image file name and the words to highlight
  const index = useMemo(() => {
    return randomNumber(0, state.imagesData.length - 1);
  }, [state.imagesData.length]);

  useEffect(
    () =>
      dispatch({
        type: REDUCER_ACTIONS_TYPES.SET_IMAGES_DATA,
        payload: path,
      }),
    [path],
  );

  // derived state
  const text = state.imagesData.length > 0 ? state.imagesData[index].word : "";
  const currentImage =
    state.imagesData.length > 0 ? state.imagesData[index].fileName : "";
  const highlights = data[path as keyof typeof data].wordsToHighlight;
  const imagesLength = data[path as keyof typeof data].metadata.length;
  const progress = Math.round(
    (1 - state.imagesData.length / imagesLength) * 100,
  );

  // state handlers
  const handleNext = () => {
    dispatch({
      type: REDUCER_ACTIONS_TYPES.FILTER_IMAGES_DATA,
      payload: index,
    });
    dispatch({
      type: REDUCER_ACTIONS_TYPES.TOGGLE_IS_SPEECH_READY,
      payload: false,
    });
    dispatch({
      type: REDUCER_ACTIONS_TYPES.RESET_IS_SHOW_TEXT,
    });
  };

  const handleReset = () => {
    dispatch({
      type: REDUCER_ACTIONS_TYPES.SET_IMAGES_DATA,
      payload: path,
    });
    dispatch({
      type: REDUCER_ACTIONS_TYPES.TOGGLE_IS_LOADED,
      payload: false,
    });
  };

  const handleIsShowText = () => {
    return dispatch({ type: REDUCER_ACTIONS_TYPES.TOGGLE_IS_SHOW_TEXT });
  };

  const handleSpeech = () => {
    setTimeout(() => {
      dispatch({
        type: REDUCER_ACTIONS_TYPES.TOGGLE_IS_SPEECH_READY,
        payload: true,
      });
    }, 1000);
    speechUtterance(text);
  };

  /* isLoaded code */
  const handleSetIsLoaded = () => {
    dispatch({
      type: REDUCER_ACTIONS_TYPES.TOGGLE_IS_LOADED,
      payload: true,
    });
  };

  return {
    state,
    text,
    currentImage,
    highlights,
    path,
    progress,
    handleNext,
    handleReset,
    handleIsShowText,
    handleSpeech,
    handleSetIsLoaded,
  };
};

export default useInterfaceReducer;
