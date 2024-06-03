type ImageProps = {
  imageUrl: string;
  imageTranslation: string;
  currentImage: string;
};

const Image = ({ imageUrl, imageTranslation, currentImage }: ImageProps) => {
  return (
    <img
      className={
        imageTranslation === currentImage
          ? "col-start-1 row-start-1 h-[240px] w-[240px]"
          : "invisible col-start-1 row-start-1 h-[240px] w-[240px]"
      }
      src={imageUrl}
      alt={imageTranslation}
    />
  );
};
export default Image;
