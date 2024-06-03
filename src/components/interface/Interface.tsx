import { lazy, Suspense } from "react";
import { useImages } from "../../hooks/useImages";

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
  const {
    images,
    text,
    currentImage,
    highlights,
    handleNext,
    handleReset,
    handleSpeech,
  } = useImages();

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
              <section className="flex h-[240px] w-[240px] items-center justify-center border-4 border-accent text-xl text-text-base">
                <h1>...Loading</h1>
              </section>
            }
          >
            <ImageSection images={images} currentImage={currentImage} />
          </Suspense>
        </>
      ) : (
        <p className="m-5 text-center font-bold text-text-base">Congrats!</p>
      )}
      <ButtonsSection
        handleNext={handleNext}
        handleReset={handleReset}
        handleSpeech={handleSpeech}
        images={images}
      />
      <footer className="h-40 w-full"></footer>
    </main>
  );
}

export default Interface;
