import { useImages } from "./hooks/useImages";

import ImageSection from "./components/ImageSection";
import Form from "./components/Form";

function PossessivePronouns() {
  const { handleNext, handleReset, handleSpeech, images, image } = useImages();

  return (
    <main className="h-screen flex items-center justify-center flex-col bg-gradient-to-l from-blue-600 to-blue-400">
      <section className="flex items-center justify-center flex-col gap-4 h-full w-full text-5xl">
        {images.length > 0 ? (
          <h1 className="w-full flex items-center justify-center flex-col p-10 text-red-400 font-black text-center">
            {/* <p className="h-10">{images.length > 0 ? "Result" : null}</p> */}
            <div>
              <span className="text-green-400">
                {images[image].wordArrayPossessive[0]}{" "}
                {images[image].wordArrayPossessive[1]}
              </span>{" "}
              {images[image].wordArrayPossessive[2]}{" "}
              {images[image].wordArrayPossessive[3]}{" "}
            </div>
            {/* <p className="h-10">{result}</p> */}
          </h1>
        ) : null}
        <ImageSection images={images} image={image} />
        <Form
          // handleChange={handleChange}
          // handleCheck={handleCheck}
          handleNext={handleNext}
          handleReset={handleReset}
          handleSpeech={handleSpeech}
          images={images}
          // input={input}
          // isInputReady={isInputReady}
          // inputRef={inputRef}
        />
      </section>
      <footer className="w-full h-40"></footer>
    </main>
  );
}

export default PossessivePronouns;
