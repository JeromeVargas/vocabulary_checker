import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import data from "./data/attributesSchema.json";

import TopicsIndex from "./pages/TopicsIndex";
import Interface from "./pages/interface/Interface";
import Error404Page from "./pages/Error404Page";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [showText, setShowText] = useState(true);
  const pathsFromJson = Object.keys(data);

  const { theme, handleChangeTheme } = useDarkMode();

  const handleShowText = () => setShowText((prevShowText) => !prevShowText);
  return (
    <Routes>
      <Route
        index
        element={
          <TopicsIndex theme={theme} handleChangeTheme={handleChangeTheme} />
        }
      />
      {pathsFromJson.map((path) => (
        <Route
          key={path}
          path={path}
          element={
            <Interface showText={showText} handleShowText={handleShowText} />
          }
        />
      ))}
      <Route path="/*" element={<Error404Page />} />
    </Routes>
  );
}

export default App;
