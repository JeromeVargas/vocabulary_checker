import { Link } from "react-router-dom";
import { ERROR_MESSAGE_LINK } from "../../config/constants";

const Error404Page = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-base-main text-center text-5xl font-black text-font-main">
      <Link
        className="text-neutral-contrast w-10/12 rounded-xl border-4 bg-neutral-shade p-4 text-center font-bold hover:bg-accent-main lg:w-auto"
        to="/"
      >
        {ERROR_MESSAGE_LINK}
      </Link>
    </main>
  );
};

export default Error404Page;
