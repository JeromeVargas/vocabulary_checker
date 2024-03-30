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
    <main className="h-screen flex items-center justify-center flex-col gap-4 text-5xl bg-background">
      {images.length > 0 ? (
        <>
          <TextSection images={images} text={text} highlights={highlights} />
          <ImageSection images={images} index={index} text={text} />
        </>
      ) : (
        <p className="text-center m-5 text-text-base font-bold">Congrats!</p>
      )}
      <ButtonsSection
        handleNext={handleNext}
        handleReset={handleReset}
        handleSpeech={handleSpeech}
        images={images}
      />
      <footer className="w-full h-40"></footer>
    </main>
  );
}

export default Interface;
