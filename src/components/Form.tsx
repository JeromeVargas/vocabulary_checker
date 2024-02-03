type FormProps = {
  handleCheck: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNew: () => void;
  input: string;
  images: string[];
  result: string;
};

const Form = ({
  handleCheck,
  handleChange,
  handleNew,
  input,
  images,
  result,
}: FormProps) => {
  return (
    <>
      <form onSubmit={handleCheck}>
        <input onChange={handleChange} value={input} type="text" />
        <br />
        {images.length > 0 && result === "" && <button>Check</button>}
      </form>
      {result !== "" && <button onClick={handleNew}>New</button>}
    </>
  );
};
export default Form;
