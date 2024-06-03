import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import data from "./data/attributesSchema.json";

import TopicsIndex from "./components/TopicsIndex";
import Interface from "./components/interface/Interface";
import Error404Page from "./components/Error404Page";

function App() {
  const [showText, setShowText] = useState(true);
  const pathsFromJson = Object.keys(data);

  const handleShowText = () => setShowText((prevShowText) => !prevShowText);
  return (
    <Routes>
      <Route index element={<TopicsIndex />} />
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
