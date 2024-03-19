import { useImages } from "./hooks/useImages";

import ImageSection from "./components/ImageSection";
import Form from "./components/Form";

function App() {
  const {
    handleChange,
    handleCheck,
    handleNext,
    handleReset,
    result,
    images,
    image,
    input,
    isInputReady,
    inputRef,
  } = useImages();

  return (
    <main className="h-screen flex items-center justify-center flex-col">
      <header className="flex items-center justify-center w-full h-40 bg-slate-200">
        <h1>Vocabulary Reviewer</h1>
      </header>
      <section className="h-full flex items-center justify-center flex-col gap-4 w-full bg-blue-100 ">
        <div className="w-1/4 flex items-center justify-center border-2 flex-col bg-slate-200">
          <p className="h-10">{images.length > 0 ? "Result" : null}</p>
          <p className="h-10">{result}</p>
        </div>
        <ImageSection images={images} image={image} />
        <Form
          handleChange={handleChange}
          handleCheck={handleCheck}
          handleNext={handleNext}
          handleReset={handleReset}
          images={images}
          input={input}
          isInputReady={isInputReady}
          inputRef={inputRef}
        />
      </section>
      <footer className="w-full h-40 bg-slate-200"></footer>
    </main>
  );
}

export default App;
