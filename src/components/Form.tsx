import { useEffect, useRef } from "react";

type FormProps = {
  handleCheck: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNew: () => void;
  handleReset: () => void;
  images: { url: string; word: string }[];
  input: string;
  isInputReady: boolean;
};

const Form = ({
  handleCheck,
  handleChange,
  handleNew,
  handleReset,
  images,
  input,
  isInputReady,
}: FormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [images]);

  return (
    <>
      <form
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
        {isInputReady === true ? (
          <button type="button" onClick={handleNew}>
            Next
          </button>
        ) : null}
        {images.length < 1 ? (
          <button onClick={handleReset} type="button">
            Try again
          </button>
        ) : null}
      </form>
    </>
  );
};
export default Form;
