type ImageSectionProps = {
  images: { url: string }[];
  index: number;
  text: string;
};

const ImageSection = ({ images, index, text }: ImageSectionProps) => {
  return (
    <section>
      {images.length > 0 ? (
        <img
          className="h-[240px] border-2 border-orange-400"
          src={images[index].url}
          alt={text}
        />
      ) : (
        <>
          <p className="text-center m-5">Congrats!</p>
        </>
      )}
    </section>
  );
};
export default ImageSection;
