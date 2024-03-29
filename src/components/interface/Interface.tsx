import { useImages } from "../../hooks/useImages";

import TextSection from "./components/TextSection";
import ImageSection from "./components/ImageSection";
import ButtonsSection from "./components/ButtonSection";

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
    <main className="h-screen w-full flex items-center justify-center flex-col gap-4 text-5xl bg-background">
      <TextSection images={images} text={text} highlights={highlights} />
      <ImageSection images={images} index={index} text={text} />
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
