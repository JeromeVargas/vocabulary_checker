import { Route, Routes } from "react-router-dom";

import TopicsIndex from "./pages/topicsIndex/TopicsIndex";
import Interface from "./pages/interface/Interface";
import Error404Page from "./pages/Error404Page";

import useDarkMode from "./hooks/useDarkMode";
import useData from "./hooks/useData";

function App() {
  const { showText, pathsFromJson, handleShowText } = useData();
  const { theme, handleChangeTheme } = useDarkMode();

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
