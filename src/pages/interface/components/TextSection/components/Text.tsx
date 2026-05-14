import useInterfaceData from "../../../../../hooks/useInterfaceData";
import TextPlaceHolder from "./../components/TextPlaceHolder";

const Text = () => {
  const { isShowText, text, highlights, handleIsShowText } = useInterfaceData();
  return (
    <button
      type="button"
      onClick={handleIsShowText}
      className="select-none text-center focus-visible:outline-none"
      aria-label={isShowText ? text : "Reveal word"}
    >
      {isShowText ? (
        <span className="block text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
          {text.split(" ").map((item, index) =>
            highlights.includes(index) ? (
              <span key={index} className="text-accent-shade">
                {item}{" "}
              </span>
            ) : (
              <span key={index} className="text-font-main">
                {item}{" "}
              </span>
            ),
          )}
        </span>
      ) : (
        <TextPlaceHolder />
      )}
    </button>
  );
};

export default Text;
