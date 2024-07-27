import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Interface from "./pages/interface/Interface";
import Error404 from "./pages/error404/Error404";

import useDarkMode from "./hooks/useDarkMode";
import useShowText from "./hooks/useShowText";

import dataFetcher from "./services/dataFetcher";

function App() {
  const { data, keys: topicsToRenderHome } = dataFetcher();
  const { isShowText, handleIsShowText } = useShowText();
  const { theme, handleChangeTheme } = useDarkMode();

  return (
    <Routes>
      {/* home */}
      <Route
        index
        element={<Home theme={theme} handleChangeTheme={handleChangeTheme} />}
      />
      {/* interface */}
      {topicsToRenderHome.map((path) => (
        <Route
          key={path}
          path={path}
          element={
            <Interface
              data={data}
              isShowText={isShowText}
              handleIsShowText={handleIsShowText}
            />
          }
        />
      ))}
      {/* 404 */}
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
