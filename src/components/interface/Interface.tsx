import { useImages } from "../../hooks/useImages";

import TextSection from "./components/TextSection";
import ImageSection from "./components/ImageSection";
import Button from "./components/Button";

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
    <main className="h-screen flex items-center justify-center flex-col bg-gradient-to-l from-blue-600 to-blue-400">
      <section className="flex items-center justify-center flex-col gap-4 h-full w-full text-5xl">
        <TextSection images={images} text={text} highlights={highlights} />
        <ImageSection images={images} index={index} text={text} />
        <Button
          handleNext={handleNext}
          handleReset={handleReset}
          handleSpeech={handleSpeech}
          images={images}
        />
      </section>
      <footer className="w-full h-40"></footer>
    </main>
  );
}

export default Interface;
