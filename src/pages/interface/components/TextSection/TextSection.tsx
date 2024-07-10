import { type image } from "../../../../types";
import Text from "./components/Text";

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
        <Text
          text={text}
          highlights={highlights}
          showText={showText}
          handleShowText={handleShowText}
        />
      ) : null}
    </section>
  );
};
export default TextSection;
