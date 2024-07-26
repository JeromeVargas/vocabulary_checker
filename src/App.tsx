import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Interface from "./pages/interface/Interface";
import Error404 from "./pages/error404/Error404";

import useDarkMode from "./hooks/useDarkMode";
import useShowText from "./hooks/useShowText";

import dataFetcher from "./services/dataFetcher";

function App() {
  const { titles: pathsFromJson } = dataFetcher();
  const { isShowText, handleIsShowText } = useShowText();
  const { theme, handleChangeTheme } = useDarkMode();

  return (
    <Routes>
      <Route
        index
        element={<Home theme={theme} handleChangeTheme={handleChangeTheme} />}
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
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
