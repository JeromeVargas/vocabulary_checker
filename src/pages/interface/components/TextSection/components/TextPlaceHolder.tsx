import useAppData from "../../../../../hooks/useAppData";
import { cn } from "../../../../../lib/classMerge";

const TextPlaceHolder = () => {
  const { isFirstAccess, handleIsFirstAccess } = useAppData();
  return (
    <div
      onClick={handleIsFirstAccess}
      className={cn(
        "flex size-20 items-center justify-center rounded-full border-4 font-medium text-font-main",
        {
          "animate-bounce": isFirstAccess === true,
        },
      )}
    >
      ?
    </div>
  );
};

export default TextPlaceHolder;
