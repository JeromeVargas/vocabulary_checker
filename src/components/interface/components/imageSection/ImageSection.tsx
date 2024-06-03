import Image from "./Image";
import { type image } from "../../../../types";

type ImageSectionProps = {
  images: image[];
  currentImage: string;
};

const ImageSection = ({ images, currentImage }: ImageSectionProps) => {
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
          />
        );
      })}
    </section>
  );
};
export default ImageSection;
