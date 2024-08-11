import { Route, Routes, useLocation } from "react-router-dom";

import { InterfaceDataProvider } from "./context/InterfaceContext";
import Home from "./pages/home/Home";
import Interface from "./pages/interface/Interface";
import Error404 from "./pages/error404/Error404";

import dataFetcher from "./services/dataFetcher";

function App() {
  const { keys: topicsToRenderInterfaceInstance } = dataFetcher();
  const { pathname } = useLocation();

  return (
    <Routes>
      {/* home */}
      <Route index element={<Home />} />
      {/* interface */}
      {topicsToRenderInterfaceInstance.map((path) => (
        <Route
          key={path}
          path={path}
          element={
            <InterfaceDataProvider pathname={pathname}>
              <Interface />
            </InterfaceDataProvider>
          }
        />
      ))}
      {/* 404 */}
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
