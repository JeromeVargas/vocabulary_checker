import { useState } from "react";

const useShowText = () => {
  const [isShowText, setIsShowText] = useState(true);
  const handleIsShowText = () =>
    setIsShowText((prevIsShowText) => !prevIsShowText);

  return { isShowText, handleIsShowText };
};

export default useShowText;
