import App from "../App";
import ArticleNoun from "../pages/ArticleNoun";
import Adjective from "../pages/Adjective";
import VerbToBe from "../pages/VerbToBe";
import PossessivePronouns from "../pages/PossessivePronouns";

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
  {
    path: "adjective",
    element: <Adjective />,
  },
  {
    path: "possessive-pronouns",
    element: <PossessivePronouns />,
  },
]);

export default router;