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
    <>
      <section className="grid rounded-3xl border-8 border-accent-shade bg-base-main p-4">
        <ImageDataProvider
          imgRef={imgRef}
          handleSetIsLoaded={handleSetIsLoaded}
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
    </>
  );
};

export default ImageSection;
