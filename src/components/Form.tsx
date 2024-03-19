type FormProps = {
  // handleCheck: (e: React.FormEvent<HTMLFormElement>) => void;
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handleReset: () => void;
  handleSpeech: () => void;
  images: { url: string; word: string }[];
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
        <button onClick={handleReset} type="button">
          Try again
        </button>
      ) : (
        <>
          <button type="button" onClick={handleNext}>
            Next
          </button>
          <button type="button" onClick={handleSpeech}>
            Listen
          </button>
        </>
      )}
      {/*</form> */}
    </>
  );
};
export default Form;
