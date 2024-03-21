type FormProps = {
  // handleCheck: (e: React.FormEvent<HTMLFormElement>) => void;
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handleReset: () => void;
  handleSpeech: () => void;
  images: { url: string; wordAdjective: string }[];
  // input: string;
  // isInputReady: boolean;
  // inputRef: React.RefObject<HTMLInputElement>;
};

const Form = ({
  // handleCheck,
  // handleChange,
  handleNext,
  handleReset,
  handleSpeech,
  images,
}: // input,
// isInputReady,
// inputRef,
FormProps) => {
  return (
    <>
      {/* <form
        className="flex items-center justify-center flex-col"
        onSubmit={handleCheck}
      >
        <input
          ref={inputRef}
          className={
            images.length > 0 && isInputReady === false
              ? "border-2 border-black"
              : "invisible"
          }
          onChange={handleChange}
          value={input}
          type="text"
        />
        <br />
        {images.length > 0 && isInputReady === false ? (
          <button type="submit">Check</button>
        ) : null}
        {isInputReady === true ? ( */}
      {/* <button type="button" onClick={handleNext}>
        Next
      </button> */}
      {/* ) : null}*/}
      {images.length < 1 ? (
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-10 rounded text-center"
          onClick={handleReset}
          type="button"
        >
          Try again
        </button>
      ) : (
        <>
          <button type="button" className="text-base" onClick={handleSpeech}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5em"
              height="5em"
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
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-10 rounded text-center"
            onClick={handleNext}
          >
            Next
          </button>
        </>
      )}
      {/*</form> */}
    </>
  );
};
export default Form;
