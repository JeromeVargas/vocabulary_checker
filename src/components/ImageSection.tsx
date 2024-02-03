type ImageSectionProps = {
  images: string[];
  image: number;
};

const ImageSection = ({ images, image }: ImageSectionProps) => {
  return (
    <section>
      {images.length > 0 ? (
        <div className="h-64">
          <img
            className="flex-1 h-full"
            src={`src/assets/${images[image]}.png`}
            alt={`${images[image]}`}
          />
        </div>
      ) : (
        <p>You do not have any more words to review</p>
      )}
    </section>
  );
};
export default ImageSection;
