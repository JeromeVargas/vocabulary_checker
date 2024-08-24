import { lazy, Suspense } from "react";

import TextSection from "./components/TextSection/TextSection";
import ButtonsSection from "./components/buttonsSection/ButtonsSection";
import Loader from "../../components/Loader";
import ErrorBoundary from "../../components/ErrorBoundary";
import Error404Page from "../error404/Error404";
import useInterfaceData from "../../hooks/useInterfaceData";

const ImageSection = lazy(
  () => import("./components/imageSection/ImageSection"),
);

function Interface() {
  const { imagesData, isLoaded } = useInterfaceData();

  return (
    <ErrorBoundary fallback={<Error404Page />}>
      <Suspense fallback={<Loader />}>
        <main className="flex h-dvh flex-col items-center justify-evenly">
          {/* content area */}
          {imagesData.length > 0 ? (
            <>
              <TextSection />
              <ImageSection />
            </>
          ) : (
            <p className="text-center text-6xl font-bold text-font-main md:text-9xl">
              Congrats!
            </p>
          )}
          {/* buttons */}
          <ButtonsSection />
        </main>
        {!isLoaded && <Loader />}
      </Suspense>
    </ErrorBoundary>
  );
}

export default Interface;
