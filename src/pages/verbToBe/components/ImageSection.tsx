type ImageSectionProps = {
  images: { url: string; wordAdjective: string }[];
  image: number;
};

const ImageSection = ({ images, image }: ImageSectionProps) => {
  return (
    <>
      {images.length > 0 ? (
        <img
          className="h-[240px] border-2 border-orange-400"
          src={images[image].url}
          alt={`${images[image].wordAdjective}`}
        />
      ) : (
        <>
          <p className="text-center m-5">Congrats!</p>
        </>
      )}
    </>
  );
};
export default ImageSection;
