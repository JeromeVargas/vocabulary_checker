import { type image } from "../../../../types";
import Text from "./components/Text";

type TextSectionProps = {
  images: image[];
  text: string;
  highlights: number[];
  isShowText: boolean;
  handleIsShowText: () => void;
};

const TextSection = ({
  images,
  text,
  highlights,
  isShowText,
  handleIsShowText,
}: TextSectionProps) => {
  return (
    <section className="flex min-h-20 w-full flex-col items-center justify-center">
      {images.length > 0 ? (
        <Text
          text={text}
          highlights={highlights}
          isShowText={isShowText}
          handleIsShowText={handleIsShowText}
        />
      ) : null}
    </section>
  );
};
export default TextSection;
