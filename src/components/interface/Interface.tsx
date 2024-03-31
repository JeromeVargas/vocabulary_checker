import { useImages } from "../../hooks/useImages";

import TextSection from "./components/TextSection";
import ImageSection from "./components/ImageSection";
import ButtonsSection from "./components/ButtonsSection";

function Interface() {
  const {
    handleNext,
    handleReset,
    handleSpeech,
    images,
    index,
    text,
    highlights,
  } = useImages();

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 bg-background text-5xl">
      {images.length > 0 ? (
        <>
          <TextSection images={images} text={text} highlights={highlights} />
          <ImageSection images={images} index={index} text={text} />
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
