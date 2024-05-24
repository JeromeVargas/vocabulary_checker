import { createBrowserRouter } from "react-router-dom";
import data from "../data/attributesSchema.json";

import App from "../App";
import ErrorPage from "../components/Error404Page";
import Interface from "../components/interface/Interface";

const paths = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

const pathsFromJson = Object.keys(data);

for (let index = 0; index < pathsFromJson.length; index++) {
  paths.push({ path: pathsFromJson[index], element: <Interface /> });
}

const router = createBrowserRouter(paths);

export default router;
