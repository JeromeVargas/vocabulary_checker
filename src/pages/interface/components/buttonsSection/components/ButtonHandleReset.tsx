type ButtonHandleResetProps = {
  handleReset: () => void;
};

const ButtonHandleReset = ({ handleReset }: ButtonHandleResetProps) => {
  return (
    <button
      className="w-10/12 rounded-xl border-4 bg-neutral-shade px-10 py-4 text-center font-normal text-font-main opacity-90 hover:-translate-y-1 hover:translate-x-1 hover:bg-accent-main md:w-auto"
      onClick={handleReset}
      type="button"
    >
      Try Again
    </button>
  );
};
export default ButtonHandleReset;
