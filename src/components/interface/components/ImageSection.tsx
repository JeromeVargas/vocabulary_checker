type image = {
  word: string;
  translation: string;
};

type ImageSectionProps = {
  images: image[];
  currentImage?: string;
};

const ImageSection = ({ images, currentImage }: ImageSectionProps) => {
  return (
    <section className="grid border-4 border-accent">
      {images.map((image) => {
        const imageUrl: string = new URL(
          `../../../images/${image.translation}.jpg`,
          import.meta.url,
        ).href;
        return (
          <img
            key={image.translation}
            className={
              image.translation === currentImage
                ? "col-start-1 row-start-1 h-[240px] w-[240px]"
                : "invisible col-start-1 row-start-1 h-[240px] w-[240px]"
            }
            src={imageUrl}
            alt={image.translation}
          />
        );
      })}
    </section>
  );
};
export default ImageSection;
