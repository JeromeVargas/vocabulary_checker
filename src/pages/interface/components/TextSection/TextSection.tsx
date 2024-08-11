import useInterfaceData from "../../../../hooks/useInterfaceData";
import Text from "./components/Text";

const TextSection = () => {
  const { imagesData: images } = useInterfaceData();
  return (
    <section className="flex min-h-20 w-full flex-col items-center justify-center">
      {images.length > 0 ? <Text /> : null}
    </section>
  );
};

export default TextSection;
