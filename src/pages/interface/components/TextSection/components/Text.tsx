import TextPlaceHolder from "./../components/TextPlaceHolder";

type TextProps = {
  text: string;
  highlights: number[];
  isShowText: boolean;
  handleIsShowText: () => void;
};

const Text = ({
  text,
  highlights,
  isShowText,
  handleIsShowText,
}: TextProps) => {
  return (
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
  );
};
export default Text;
