type TextSectionProps = {
  images: { url: string }[];
  text: string;
  highlights: number[];
};

const TextSection = ({ images, text, highlights }: TextSectionProps) => {
  return (
    <>
      {images.length > 0 ? (
        <h1 className="w-full flex items-center justify-center flex-col p-10 text-red-400 font-black text-center">
          <div>
            {text.split(" ").map((item, index) =>
              highlights.includes(index) ? (
                <span key={index} className="text-green-400">
                  {item}{" "}
                </span>
              ) : (
                <span key={index}>{item} </span>
              )
            )}
          </div>
        </h1>
      ) : null}
    </>
  );
};
export default TextSection;
