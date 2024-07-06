import { lazy, Suspense, useState } from "react";
import { useImages } from "../../hooks/useImages";

import TextSection from "./components/TextSection";
import ButtonsSection from "./components/ButtonsSection";
import Loader from "../../components/Loader";

const ImageSection = lazy(
  () => import("./components/imageSection/ImageSection"),
);

type InterfaceProps = {
  showText: boolean;
  handleShowText: () => void;
};

function Interface({ showText, handleShowText }: InterfaceProps) {
  const [loaded, setLoaded] = useState(false);
  const {
    images,
    text,
    currentImage,
    highlights,
    speechReady,
    handleNext,
    handleReset,
    handleSpeech,
  } = useImages();

  const handleSetLoaded = () => setLoaded(true);

  return (
    <Suspense fallback={<Loader />}>
      <main className="flex h-screen flex-col items-center justify-evenly bg-base-main text-5xl">
        {images.length > 0 ? (
          <>
            <TextSection
              images={images}
              text={text}
              highlights={highlights}
              handleShowText={handleShowText}
              showText={showText}
            />
            <ImageSection
              images={images}
              currentImage={currentImage}
              handleSetLoaded={handleSetLoaded}
            />
          </>
        ) : (
          <p className="text-center text-6xl font-bold text-font-main md:text-9xl">
            Congrats!
          </p>
        )}
        <ButtonsSection
          images={images}
          speechReady={speechReady}
          handleNext={handleNext}
          handleReset={handleReset}
          handleSpeech={handleSpeech}
        />
      </main>
      {!loaded && <Loader />}
    </Suspense>
  );
}

export default Interface;
