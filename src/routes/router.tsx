import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ArticleNoun from "../pages/ArticleNoun";
import ErrorPage from "../components/Error404Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "instructions",
    element: <ArticleNoun />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
