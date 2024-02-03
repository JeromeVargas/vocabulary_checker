type ImageSectionProps = {
  handleReset: () => void;
  images: string[];
  image: number;
};

const ImageSection = ({ handleReset, images, image }: ImageSectionProps) => {
  return (
    <>
      {images.length > 0 ? (
        <div className="h-64">
          <img
            className="flex-1 h-full"
            src={`src/assets/${images[image]}.png`}
            alt={`${images[image]}`}
          />
        </div>
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
