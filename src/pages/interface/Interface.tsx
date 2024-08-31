import { lazy, Suspense } from "react";

import TextSection from "./components/TextSection/TextSection";
import ButtonsSection from "./components/buttonsSection/ButtonsSection";
import Loader from "../../components/Loader";
import ErrorBoundary from "../../components/ErrorBoundary";
import Error404Page from "../error404/Error404";
import useInterfaceData from "../../hooks/useInterfaceData";

import { CONGRATS_MESSAGE } from "../../config/constants";

const ImageSection = lazy(
  () => import("./components/imageSection/ImageSection"),
);

function Interface() {
  const { imagesData, isLoaded, progress } = useInterfaceData();

  return (
    <ErrorBoundary fallback={<Error404Page />}>
      <Suspense fallback={<Loader />}>
        <main className="flex h-dvh flex-col items-center justify-evenly">
          <div className="h-2 w-full rounded-full bg-font-main text-xl">
            <div
              style={{ width: `${progress}%` }}
              className={`h-full rounded-full bg-neutral-shade`}
            ></div>
          </div>
          {/* content area */}
          {imagesData.length > 0 ? (
            <>
              <TextSection />
              <ImageSection />
            </>
          ) : (
            <p className="text-center text-6xl font-bold text-font-main md:text-9xl">
              {CONGRATS_MESSAGE}
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
