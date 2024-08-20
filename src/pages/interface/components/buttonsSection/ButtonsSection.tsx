import { Link } from "react-router-dom";

import ButtonHandleSpeech from "./components/ButtonHandleSpeech";
import Button from "./components/Button";
import useInterfaceData from "../../../../hooks/useInterfaceData";

const ButtonsSection = () => {
  const {
    imagesData: images,
    isSpeechReady,
    handleNext,
    handleReset,
  } = useInterfaceData();
  return (
    <>
      {images.length > 0 ? (
        <>
          <ButtonHandleSpeech />
          <Button
            kind="action"
            isSpeechReady={isSpeechReady}
            onClick={handleNext}
          />
        </>
      ) : (
        <>
          <Button kind="reset" onClick={handleReset} />
          <Link
            className="w-10/12 rounded-xl border-4 bg-neutral-shade px-10 py-4 text-center font-normal text-font-main opacity-90 hover:-translate-y-1 hover:translate-x-1 hover:bg-accent-main md:w-auto"
            to="/"
          >
            New Exercise
          </Link>
        </>
      )}
    </>
  );
};

export default ButtonsSection;
