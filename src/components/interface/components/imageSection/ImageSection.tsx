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
      <section className={"grid border-4 border-accent bg-background"}>
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
