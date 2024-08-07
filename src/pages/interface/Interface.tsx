import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

import TextSection from "./components/TextSection/TextSection";
import ButtonsSection from "./components/buttonsSection/ButtonsSection";
import Loader from "../../components/Loader";
import ErrorBoundary from "../../components/ErrorBoundary";
import Error404Page from "../error404/Error404";

import useInterfaceReducer from "../../context/InterfaceReducer";

const ImageSection = lazy(
  () => import("./components/imageSection/ImageSection"),
);

type InterfaceProps = {
  isShowText: boolean;
  handleIsShowText: () => void;
};

function Interface({ isShowText, handleIsShowText }: InterfaceProps) {
  // gets url path
  const { pathname } = useLocation();
  const {
    state: { imagesData, isSpeechReady, isLoaded },
    text,
    currentImage,
    highlights,
    path,
    handleNext,
    handleReset,
    handleSpeech,
    handleSetIsLoaded,
  } = useInterfaceReducer({ pathname });

  return (
    <ErrorBoundary fallback={<Error404Page />}>
      <Suspense fallback={<Loader />}>
        <main className="flex h-screen flex-col items-center justify-evenly bg-base-main text-5xl">
          {/* content area */}
          {imagesData.length > 0 ? (
            <>
              <TextSection
                images={imagesData}
                text={text}
                highlights={highlights}
                handleIsShowText={handleIsShowText}
                isShowText={isShowText}
              />
              <ImageSection
                images={imagesData}
                currentImage={currentImage}
                path={path}
                handleSetIsLoaded={handleSetIsLoaded}
              />
            </>
          ) : (
            <p className="text-center text-6xl font-bold text-font-main md:text-9xl">
              Congrats!
            </p>
          )}
          {/* buttons */}
          <ButtonsSection
            images={imagesData}
            isSpeechReady={isSpeechReady}
            handleNext={handleNext}
            handleReset={handleReset}
            handleSpeech={handleSpeech}
          />
        </main>
        {!isLoaded && <Loader />}
      </Suspense>
    </ErrorBoundary>
  );
}

export default Interface;
