import { useState } from "react";
import data from "../data/attributesSchema.json";

const useData = () => {
  const [isShowText, setIsShowText] = useState(true);
  const pathsFromJson = Object.keys(data);
  const handleIsShowText = () =>
    setIsShowText((prevIsShowText) => !prevIsShowText);
  return { isShowText, pathsFromJson, handleIsShowText };
};

export default useData;
