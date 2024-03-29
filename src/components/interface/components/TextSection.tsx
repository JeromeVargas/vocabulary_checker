import { useState } from "react";

type TextSectionProps = {
  images: { url: string }[];
  text: string;
  highlights: number[];
};

const TextSection = ({ images, text, highlights }: TextSectionProps) => {
  const [showText, setShowText] = useState(true);
  return (
    <section className="w-full flex items-center justify-center flex-col min-h-[30%]">
      {images.length > 0 ? (
        <h1
          onClick={() => {
            setShowText(!showText);
          }}
          className="p-10 font-black text-center"
        >
          {showText ? (
            <div>
              {text.split(" ").map((item, index) =>
                highlights.includes(index) ? (
                  <span key={index} className="text-green-400">
                    {item}{" "}
                  </span>
                ) : (
                  <span key={index} className="text-text-base">
                    {item}{" "}
                  </span>
                )
              )}
            </div>
          ) : (
            <div className="text-text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20"
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