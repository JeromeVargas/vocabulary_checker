import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Interface from "./pages/interface/Interface";
import Error404 from "./pages/error404/Error404";

import useAppReducer from "./context/appReducer";

import dataFetcher from "./services/dataFetcher";

function App() {
  const { keys: topicsToRenderHome } = dataFetcher();
  const {
    state: { theme, isShowText },
    handleIsShowText,
    handleChangeTheme,
  } = useAppReducer();

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
