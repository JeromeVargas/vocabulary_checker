import { Link } from "react-router-dom";
import { type image } from "../../../types";

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
          <button
            className="border-accent-shade bg-base-shade hover:border-accent-contrast rounded-full border-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100"
            type="button"
            onClick={handleSpeech}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5.5rem"
              height="5.5rem"
              viewBox="0 0 48 48"
            >
              <path
                fill="#81d4fa"
                d="M28 7.1v2c7.3 1 13 7.3 13 14.9s-5.7 13.9-13 14.9v2c8.4-1 15-8.2 15-16.9S36.4 8.1 28 7.1"
              ></path>
              <path
                fill="#546e7a"
                d="M14 32H7c-1.1 0-2-.9-2-2V18c0-1.1.9-2 2-2h7z"
              ></path>
              <path fill="#78909c" d="M26 42L14 32V16L26 6z"></path>
              <path
                fill="#03a9f4"
                d="M28 17.3v2.1c1.8.8 3 2.5 3 4.6s-1.2 3.8-3 4.6v2.1c2.9-.9 5-3.5 5-6.7s-2.1-5.8-5-6.7"
              ></path>
              <path
                fill="#4fc3f7"
                d="M28 12.2v2c4.6.9 8 5 8 9.8s-3.4 8.9-8 9.8v2c5.7-1 10-5.9 10-11.8s-4.3-10.9-10-11.8"
              ></path>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className={
              !speechReady
                ? "bg-base-main text-font-main w-60 cursor-none select-none rounded-2xl border-4 px-10 py-4 text-center font-bold"
                : "border-accent-shade text-font-main w-60 select-none rounded-2xl border-4 bg-neutral-shade px-10 py-4 text-center font-bold hover:-translate-y-1 hover:translate-x-1"
            }
            type="button"
            disabled={!speechReady}
          >
            {!speechReady ? "Listen" : "Next"}
          </button>
        </>
      ) : (
        <>
          <button
            className="hover:bg-accent-main text-font-main w-10/12 rounded-xl border-4 bg-neutral-shade px-10 py-4 text-center font-normal opacity-90 hover:-translate-y-1 hover:translate-x-1 md:w-auto"
            onClick={handleReset}
            type="button"
          >
            Try Again
          </button>
          <button className="hover:bg-accent-main text-font-main w-10/12 rounded-xl border-4 bg-neutral-shade px-10 py-4 text-center font-normal opacity-90 hover:-translate-y-1 hover:translate-x-1 md:w-auto">
            <Link to="/">New Exercise</Link>
          </button>
        </>
      )}
    </>
  );
};
export default ButtonsSection;
