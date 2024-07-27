import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

import TextSection from "./components/TextSection/TextSection";
import ButtonsSection from "./components/buttonsSection/ButtonsSection";
import Loader from "../../components/Loader";
import ErrorBoundary from "../../components/ErrorBoundary";
import Error404Page from "../error404/Error404";

import useImages from "../../hooks/useImages";
import useLoad from "../../hooks/useLoad";

const ImageSection = lazy(
  () => import("./components/imageSection/ImageSection"),
);

import { type metaData } from "../../services/dataFetcher";

type InterfaceProps = {
  data: metaData;
  isShowText: boolean;
  handleIsShowText: () => void;
};

function Interface({ data, isShowText, handleIsShowText }: InterfaceProps) {
  // gets url url path
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
  } = useImages({ data, pathname });

  return (
    <ErrorBoundary fallback={<Error404Page />}>
      <Suspense fallback={<Loader />}>
        <main className="flex h-screen flex-col items-center justify-evenly bg-base-main text-5xl">
          {/* content area */}
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
          {/* buttons */}
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
