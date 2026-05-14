import { useRef } from "react";
import Image from "./components/Image";

import { ImageDataProvider } from "../../../../context/ImageContext";
import useInterfaceData from "../../../../hooks/useInterfaceData";

const ImageSection = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const {
    imagesData: images,
    currentImage,
    path,
    handleSetIsLoaded,
  } = useInterfaceData();

  return (
    <section className="grid overflow-hidden rounded-2xl bg-base-shade shadow-lg ring-1 ring-neutral-shade/30">
      <ImageDataProvider
        imgRef={imgRef}
        handleSetIsLoaded={handleSetIsLoaded}
        currentImage={currentImage}
      >
        {images.map((image) => {
          const imageUrl: string = new URL(
            `../../../../assets/images/${path}/${image.fileName}.jpg`,
            import.meta.url,
          ).href;
          return (
            <Image
              key={image.fileName}
              imgRef={imgRef}
              imageUrl={imageUrl}
              imageTranslation={image.fileName}
              currentImage={currentImage}
            />
          );
        })}
      </ImageDataProvider>
    </section>
  );
};

export default ImageSection;
