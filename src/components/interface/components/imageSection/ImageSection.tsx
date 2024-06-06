import Image from "./Image";
import { type image } from "../../../../types";

type ImageSectionProps = {
  images: image[];
  currentImage: string;
  loaded: boolean;
  handleSetLoaded: () => void;
};

const ImageSection = ({
  images,
  currentImage,
  loaded,
  handleSetLoaded,
}: ImageSectionProps) => {
  return (
    <section className="grid border-4 border-accent">
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
            loaded={loaded}
            handleSetLoaded={handleSetLoaded}
          />
        );
      })}
    </section>
  );
};
export default ImageSection;
