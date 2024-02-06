type ImageSectionProps = {
  images: { word: string }[];
  image: number;
};

const ImageSection = ({ images, image }: ImageSectionProps) => {
  return (
    <>
      {images.length > 0 ? (
        <img
          className="max-h-[240px] h-1/4"
          src={`src/assets/${images[image].word}.png`}
          alt={`${images[image].word}`}
        />
      ) : (
        <>
          <p>You do not have any more words to review</p>
        </>
      )}
    </>
  );
};
export default ImageSection;
