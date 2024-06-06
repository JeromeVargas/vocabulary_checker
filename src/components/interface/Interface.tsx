import { lazy, Suspense, useState } from "react";
import { useImages } from "../../hooks/useImages";
import { Rings } from "react-loader-spinner";

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
    handleNext,
    handleReset,
    handleSpeech,
  } = useImages();

  const handleSetLoaded = () => setLoaded(true);

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 bg-background text-5xl">
      {images.length > 0 ? (
        <>
          <TextSection
            images={images}
            text={text}
            highlights={highlights}
            handleShowText={handleShowText}
            showText={showText}
          />
          <Suspense
            fallback={
              <section className="flex h-[240px] w-[240px] items-center justify-center border-4 border-accent">
                <Rings color="#00BFFF" height="200" width="200" />
              </section>
            }
          >
            <ImageSection
              images={images}
              currentImage={currentImage}
              handleSetLoaded={handleSetLoaded}
              loaded={loaded}
            />
          </Suspense>
        </>
      ) : (
        <p className="m-5 text-center font-bold text-text-base">Congrats!</p>
      )}
      <ButtonsSection
        images={images}
        loaded={loaded}
        handleNext={handleNext}
        handleReset={handleReset}
        handleSpeech={handleSpeech}
      />
      <footer className="h-40 w-full"></footer>
    </main>
  );
}

export default Interface;
