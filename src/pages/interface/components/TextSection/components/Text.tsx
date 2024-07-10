import TextPlaceHolder from "./../components/TextPlaceHolder";

type TextProps = {
  text: string;
  highlights: number[];
  showText: boolean;
  handleShowText: () => void;
};

const Text = ({ text, highlights, showText, handleShowText }: TextProps) => {
  return (
    <h1
      onClick={handleShowText}
      className="select-none text-center font-medium"
    >
      {showText ? (
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
