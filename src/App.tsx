import { Route, Routes } from "react-router-dom";

import TopicsIndex from "./pages/topicsIndex/TopicsIndex";
import Interface from "./pages/interface/Interface";
import Error404Page from "./pages/Error404Page/Error404Page";

import useDarkMode from "./hooks/useDarkMode";
import useShowText from "./hooks/useShowText";

function App() {
  const { isShowText, pathsFromJson, handleIsShowText } = useShowText();
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
            <Interface
              isShowText={isShowText}
              handleIsShowText={handleIsShowText}
            />
          }
        />
      ))}
      <Route path="/*" element={<Error404Page />} />
    </Routes>
  );
}

export default App;
