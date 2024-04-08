import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ArticleNoun from "../pages/ArticleNoun";
import Adjective from "../pages/Adjective";
import VerbToBe from "../pages/VerbToBe";
import PossessivePronouns from "../pages/PossessivePronouns";
import PluralBasic from "../pages/PluralBasic";
import ErrorPage from "../components/Error404Page";
import ThereToBe from "../pages/ThereToBe";
import ThereToBeNew from "../pages/ThereToBeNew";
import SimplePresent from "../pages/SimplePresent";
import Auxiliary from "../pages/Auxiliary";

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
  {
    path: "plural-basic",
    element: <PluralBasic />,
  },
  {
    path: "there-to-be",
    element: <ThereToBe />,
  },
  {
    path: "there-to-be-new",
    element: <ThereToBeNew />,
  },
  {
    path: "simple-present",
    element: <SimplePresent />,
  },
  {
    path: "simple-present-new",
    element: <SimplePresent />,
  },
  {
    path: "auxiliary",
    element: <Auxiliary />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
