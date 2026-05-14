import { use } from "react";
import { ImageDataContext } from "../context/ImageContext";

type UseImageDataHookType = {
  error: boolean;
};

const useImageData = (): UseImageDataHookType => {
  const {
    state: { error },
  } = use(ImageDataContext);

  return {
    error,
  };
};

export default useImageData;
