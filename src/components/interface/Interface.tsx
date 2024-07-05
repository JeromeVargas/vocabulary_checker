import { lazy, Suspense, useState } from "react";
import { useImages } from "../../hooks/useImages";
import { Oval } from "react-loader-spinner";

import TextSection from "./components/TextSection";
import ButtonsSection from "./components/ButtonsSection";

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
    <Suspense
      fallback={
        <section className="bg-neutral-light flex h-screen items-center justify-center border-4 border-accent-main">
          <Oval height="200" width="200" />
        </section>
      }
    >
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
      {!loaded && (
        <div className="bg-neutral-light fixed inset-0 flex h-screen items-center justify-center border-4 border-accent-main">
          <Oval height="200" width="200" />
        </div>
      )}
    </Suspense>
  );
}

export default Interface;
