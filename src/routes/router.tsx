import App from "../App";
import VerbToBe from "../pages/verbToBe/VerbToBe";
import ArticleNoun from "../pages/articleNoun/ArticleNoun";
import PossessivePronouns from "../pages/possessivePronouns/PossessivePronouns";

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
    path: "possessive-pronouns",
    element: <PossessivePronouns />,
  },
]);

export default router;
