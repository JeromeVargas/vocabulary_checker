import Image from "./components/Image";
import { type image } from "../../../../types";

type ImageSectionProps = {
  images: image[];
  currentImage: string;
  handleSetIsLoaded: () => void;
};

const ImageSection = ({
  images,
  currentImage,
  handleSetIsLoaded,
}: ImageSectionProps) => {
  return (
    <>
      <section className="grid rounded-3xl border-8 border-accent-shade bg-base-main p-4">
        {images.map((image) => {
          const imageUrl: string = new URL(
            `../../../../images/${image.fileName}.jpg`,
            import.meta.url,
          ).href;
          return (
            <Image
              key={image.fileName}
              imageUrl={imageUrl}
              imageTranslation={image.fileName}
              currentImage={currentImage}
              handleSetIsLoaded={handleSetIsLoaded}
            />
          );
        })}
      </section>
    </>
  );
};
export default ImageSection;
