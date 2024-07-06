import { Link } from "react-router-dom";
import { type image } from "../../../../types";
import ButtonHandleSpeech from "./components/ButtonHandleSpeech";
import ButtonHandleNext from "./components/ButtonHandleNext";
import ButtonHandleReset from "./components/ButtonHandleReset";

type ButtonsSectionProps = {
  images: image[];
  speechReady: boolean;
  handleNext: () => void;
  handleReset: () => void;
  handleSpeech: () => void;
};

const ButtonsSection = ({
  images,
  speechReady,
  handleNext,
  handleReset,
  handleSpeech,
}: ButtonsSectionProps) => {
  return (
    <>
      {images.length > 0 ? (
        <>
          <ButtonHandleSpeech handleSpeech={handleSpeech} />
          <ButtonHandleNext speechReady={speechReady} handleNext={handleNext} />
        </>
      ) : (
        <>
          <ButtonHandleReset handleReset={handleReset} />
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
