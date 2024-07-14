import { useState } from "react";

const useLoad = () => {
  const [loaded, setLoaded] = useState(false);
  const handleSetLoaded = () => setLoaded(true);
  return { loaded, handleSetLoaded };
};

export default useLoad;
