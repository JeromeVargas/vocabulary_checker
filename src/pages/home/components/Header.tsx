import ThemeButton from "./ThemeButton";
import { HOME_HEADING } from "../../../config/constants";

const Header = () => {
  return (
    <header className="flex w-full items-center border-b border-neutral-shade/40 px-6 py-5">
      <div className="flex-1" />
      <h1 className="text-2xl font-semibold tracking-tight text-font-main md:text-3xl">
        {HOME_HEADING}
      </h1>
      <div className="flex flex-1 justify-end">
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
