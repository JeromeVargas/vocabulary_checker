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
      {isShowText ? (
        <div>
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
        </div>
      ) : (
        <TextPlaceHolder />
      )}
    </h1>
  );
};
export default Text;
