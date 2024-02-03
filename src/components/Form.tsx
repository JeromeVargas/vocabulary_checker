type FormProps = {
  handleCheck: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNew: () => void;
  images: string[];
  input: string;
  isInputReady: boolean;
};

const Form = ({
  handleCheck,
  handleChange,
  handleNew,
  images,
  input,
  isInputReady,
}: FormProps) => {
  return (
    <>
      <form onSubmit={handleCheck}>
        <input onChange={handleChange} value={input} type="text" />
        <br />
        {images.length > 0 && isInputReady === false ? (
          <button type="submit">Check</button>
        ) : null}
        {isInputReady === true ? (
          <button type="button" onClick={handleNew}>
            Next
          </button>
        ) : null}
      </form>
    </>
  );
};
export default Form;
