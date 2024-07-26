import { useState } from "react";
import data from "../data/meta-data.json";

const useShowText = () => {
  const [isShowText, setIsShowText] = useState(true);
  const pathsFromJson = Object.keys(data);
  const handleIsShowText = () =>
    setIsShowText((prevIsShowText) => !prevIsShowText);
  return { isShowText, pathsFromJson, handleIsShowText };
};

export default useShowText;
