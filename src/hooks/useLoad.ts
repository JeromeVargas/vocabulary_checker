import { useState } from "react";

const useLoad = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleSetIsLoaded = () => setIsLoaded(true);
  return { isLoaded, handleSetIsLoaded };
};

export default useLoad;
