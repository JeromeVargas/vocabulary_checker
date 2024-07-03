import { type image } from "../../../types";

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
            <div className="text-font-main font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-20 w-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </div>
          )}
        </h1>
      ) : null}
    </section>
  );
};
export default TextSection;
