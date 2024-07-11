import { useState } from "react";
import data from "../data/attributesSchema.json";

const useData = () => {
  const [showText, setShowText] = useState(true);
  const pathsFromJson = Object.keys(data);
  const handleShowText = () => setShowText((prevShowText) => !prevShowText);
  return { showText, pathsFromJson, handleShowText };
};

export default useData;
