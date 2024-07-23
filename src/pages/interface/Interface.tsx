import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

import useImages from "../../hooks/useImages";
import useLoad from "../../hooks/useLoad";

import TextSection from "./components/TextSection/TextSection";
import ButtonsSection from "./components/buttonsSection/ButtonsSection";
import Loader from "../../components/Loader";
import ErrorBoundary from "../../components/ErrorBoundary";
import ErrorPage from "../Error404Page";

const ImageSection = lazy(
  () => import("./components/imageSection/ImageSection"),
);

type InterfaceProps = {
  isShowText: boolean;
  handleIsShowText: () => void;
};

function Interface({ isShowText, handleIsShowText }: InterfaceProps) {
  const { pathname } = useLocation();
  const { isLoaded, handleSetIsLoaded } = useLoad();
  const {
    images,
    text,
    currentImage,
    highlights,
    isSpeechReady,
    handleNext,
    handleReset,
    handleSpeech,
  } = useImages({ pathname });

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<Loader />}>
        <main className="flex h-screen flex-col items-center justify-evenly bg-base-main text-5xl">
          {images.length > 0 ? (
            <>
              <TextSection
                images={images}
                text={text}
                highlights={highlights}
                handleIsShowText={handleIsShowText}
                isShowText={isShowText}
              />
              <ImageSection
                images={images}
                currentImage={currentImage}
                handleSetIsLoaded={handleSetIsLoaded}
              />
            </>
          ) : (
            <p className="text-center text-6xl font-bold text-font-main md:text-9xl">
              Congrats!
            </p>
          )}
          <ButtonsSection
            images={images}
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
