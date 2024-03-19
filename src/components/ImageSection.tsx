type ImageSectionProps = {
  images: { url: string; word: string }[];
  image: number;
};

const ImageSection = ({ images, image }: ImageSectionProps) => {
  return (
    <>
      {images.length > 0 ? (
        <img
          className="h-[240px] border-2 border-blue-500"
          src={images[image].url}
          alt={`${images[image].word}`}
        />
      ) : (
        <>
          <p className="text-center">
            You do not have any more words to review
          </p>
        </>
      )}
    </>
  );
};
export default ImageSection;
