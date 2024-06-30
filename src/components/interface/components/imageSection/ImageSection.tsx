import Image from "./Image";
import { type image } from "../../../../types";

type ImageSectionProps = {
  images: image[];
  currentImage: string;
  handleSetLoaded: () => void;
};

const ImageSection = ({
  images,
  currentImage,
  handleSetLoaded,
}: ImageSectionProps) => {
  return (
    <>
      <section
        className={
          "grid rounded-3xl border-8 border-orange-300 bg-background p-4"
        }
      >
        {images.map((image) => {
          const imageUrl: string = new URL(
            `../../../../images/${image.translation}.jpg`,
            import.meta.url,
          ).href;
          return (
            <Image
              key={image.translation}
              imageUrl={imageUrl}
              imageTranslation={image.translation}
              currentImage={currentImage}
              handleSetLoaded={handleSetLoaded}
            />
          );
        })}
      </section>
    </>
  );
};
export default ImageSection;
