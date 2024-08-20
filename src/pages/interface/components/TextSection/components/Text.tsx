import useInterfaceData from "../../../../../hooks/useInterfaceData";
import TextPlaceHolder from "./../components/TextPlaceHolder";

const Text = () => {
  const { isShowText, text, highlights, handleIsShowText } = useInterfaceData();
  return (
    <>
      <h1
        onClick={handleIsShowText}
        className="select-none text-center font-medium"
      >
        {/* text */}
        {isShowText ? (
          <p>
            {text.split(" ").map((item, index) =>
              highlights.includes(index) ? (
                // highlighted words
                <span key={index} className="text-accent-shade">
                  {item}{" "}
                </span>
              ) : (
                // regular words
                <span key={index} className="text-font-main">
                  {item}{" "}
                </span>
              ),
            )}
          </p>
        ) : (
          <TextPlaceHolder />
        )}
      </h1>
    </>
  );
};

export default Text;
