type ImageSectionProps = {
  images: { url: string }[];
  index: number;
  text: string;
};

const ImageSection = ({ images, index, text }: ImageSectionProps) => {
  return (
    <section>
      <img
        className="h-[240px] w-[240px] border-4 border-accent"
        src={images[index].url}
        alt={text}
      />
    </section>
  );
};
export default ImageSection;
