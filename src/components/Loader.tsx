import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <section className="fixed inset-0 flex h-screen items-center justify-center border-4 border-accent-main bg-neutral-light">
      <Oval height="200" width="200" />
    </section>
  );
};
export default Loader;
