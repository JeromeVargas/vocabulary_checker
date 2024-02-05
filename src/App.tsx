import { useImages } from "./hooks/useImages";

import ImageSection from "./components/ImageSection";
import Form from "./components/Form";

function App() {
  const {
    handleChange,
    handleCheck,
    handleNew,
    handleReset,
    result,
    images,
    image,
    input,
    isInputReady,
  } = useImages();

  return (
    <main className="h-screen flex items-center justify-center flex-col">
      <header>Vocabulary Reviewer</header>
      <section className="h-full flex items-center justify-center flex-col gap-4">
        <p className="h-10">{images.length > 0 ? "Result" : null}</p>
        <p className="h-10">{result}</p>
        <ImageSection images={images} image={image} />
        <Form
          handleChange={handleChange}
          handleCheck={handleCheck}
          handleNew={handleNew}
          handleReset={handleReset}
          images={images}
          input={input}
          isInputReady={isInputReady}
        />
      </section>
    </main>
  );
}

export default App;
