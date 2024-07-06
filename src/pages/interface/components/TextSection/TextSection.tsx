import { type image } from "../../../../types";
import TextPlaceHolder from "./components/TextPlaceHolder";

type TextSectionProps = {
  images: image[];
  text: string;
  highlights: number[];
  showText: boolean;
  handleShowText: () => void;
};

const TextSection = ({
  images,
  text,
  highlights,
  showText,
  handleShowText,
}: TextSectionProps) => {
  return (
    <section className="flex min-h-20 w-full flex-col items-center justify-center">
      {images.length > 0 ? (
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
      ) : null}
    </section>
  );
};
export default TextSection;
