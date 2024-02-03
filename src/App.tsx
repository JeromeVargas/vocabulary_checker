import { useImages } from "./hooks/useImages";

import ImageSection from "./components/ImageSection";
import Form from "./components/Form";

function App() {
  const {
    handleChange,
    handleCheck,
    handleNew,
    result,
    images,
    image,
    input,
    isInputReady,
  } = useImages();

  return (
    <main>
      <header>Vocabulary Reviewer</header>
      <main>
        <div>result: {result}</div>
        <ImageSection images={images} image={image} />
        <Form
          handleChange={handleChange}
          handleCheck={handleCheck}
          handleNew={handleNew}
          images={images}
          input={input}
          isInputReady={isInputReady}
        />
      </main>
    </main>
  );
}

export default App;
