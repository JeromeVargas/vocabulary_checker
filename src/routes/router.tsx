import { createBrowserRouter } from "react-router-dom";

import App from "../App";
// import ArticleNoun from "../pages/ArticleNoun";
import ErrorPage from "../components/Error404Page";
import Interface from "../components/interface/Interface";

const paths = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "instructions",
    element: <Interface />,
  },
  {
    path: "greetings",
    element: <Interface />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

const router = createBrowserRouter(paths);

export default router;
