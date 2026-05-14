import { Link } from "react-router-dom";
import { ERROR_MESSAGE_LINK } from "../../config/constants";

const Error404Page = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-6 bg-base-main px-6 text-center">
      <div className="space-y-1">
        <p className="text-5xl font-bold text-accent-main">404</p>
        <p className="text-base font-medium text-neutral-main">
          Page not found
        </p>
      </div>
      <Link
        className="inline-flex items-center gap-2 rounded-xl bg-accent-main px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-accent-shade hover:shadow-md"
        to="/"
      >
        {ERROR_MESSAGE_LINK}
      </Link>
    </main>
  );
};

export default Error404Page;
