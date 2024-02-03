import { useImages } from "./hooks/useImages";

import ImageSection from "./components/ImageSection";
import Form from "./components/Form";

function App() {
  const { handleChange, handleCheck, handleNew, result, images, image, input } =
    useImages();

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
          input={input}
          images={images}
          result={result}
        />
      </main>
    </main>
  );
}

export default App;
