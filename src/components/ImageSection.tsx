type ImageSectionProps = {
  handleReset: () => void;
  images: string[];
  image: number;
};

const ImageSection = ({ handleReset, images, image }: ImageSectionProps) => {
  return (
    <>
      {images.length > 0 ? (
        <img
          className="h-1/4"
          src={`src/assets/${images[image]}.png`}
          alt={`${images[image]}`}
        />
      ) : (
        <>
          <p>You do not have any more words to review</p>
          <button onClick={handleReset} type="button">
            Try again
          </button>
        </>
      )}
    </>
  );
};
export default ImageSection;
