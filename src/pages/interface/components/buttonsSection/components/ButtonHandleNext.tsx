import { cn } from "../../../../../lib/utils/classMerge";

type ButtonHandleNextProps = {
  speechReady: boolean;
  handleNext: () => void;
};

const ButtonHandleNext = ({
  speechReady,
  handleNext,
}: ButtonHandleNextProps) => {
  return (
    <button
      onClick={handleNext}
      className={cn(
        "w-60 select-none rounded-2xl border-4 px-10 py-4 text-center font-bold text-font-main",
        {
          "cursor-none bg-base-main": !speechReady,
          "border-accent-shade bg-neutral-shade hover:-translate-y-1 hover:translate-x-1":
            speechReady,
        },
      )}
      type="button"
      disabled={!speechReady}
    >
      {!speechReady ? "Listen" : "Next"}
    </button>
  );
};
export default ButtonHandleNext;
