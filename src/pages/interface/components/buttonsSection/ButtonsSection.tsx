import { Link } from "react-router-dom";
import { NEW_EXERCISE_LINK } from "../../../../config/constants";

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
    <div className="flex w-full flex-col items-center gap-3 px-4">
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
        <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button kind="reset" onClick={handleReset} />
          <Link
            className="inline-flex w-full items-center justify-center rounded-xl bg-base-shade px-8 py-3 text-sm font-medium text-font-main ring-1 ring-neutral-shade/50 transition-all duration-150 hover:bg-accent-main hover:text-white hover:ring-accent-main sm:w-auto"
            to="/"
          >
            {NEW_EXERCISE_LINK}
          </Link>
        </div>
      )}
    </div>
  );
};

export default ButtonsSection;
