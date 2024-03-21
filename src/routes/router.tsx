import App from "../App";
import VerbToBe from "../pages/verbToBe/VerbToBe";
import ArticleNoun from "../pages/articleNoun/ArticleNoun";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "article-noun",
    element: <ArticleNoun />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "verb-to-be",
    element: <VerbToBe />,
  },
]);

export default router;
