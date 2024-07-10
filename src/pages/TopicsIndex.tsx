import data from "../data/attributesSchema.json";
import { Link } from "react-router-dom";

type TopicsIndexProps = {
  theme: string;
  handleChangeTheme: () => void;
};

const titles = Object.keys(data);
const values = Object.values(data);

const topics: { title: string; translation: string }[] = titles.map(
  (title, index) => {
    return { title, translation: values[index].translation };
  },
);

function TopicsIndex({ theme, handleChangeTheme }: TopicsIndexProps) {
  return (
    <main className="flex min-h-screen flex-col items-center bg-base-main p-2 text-center text-5xl font-black text-font-main">
      <button
        className="absolute right-0 top-0 p-2"
        onClick={handleChangeTheme}
      >
        {theme === "dark" ? (
          <svg
            className="h-12 w-12 text-white transition-none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
            />
          </svg>
        ) : (
          <svg
            className="h-12 w-12 text-gray-800 transition-none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      <h1 className="mt-10">シャドーイング アプリ</h1>
      <section className="m-12 flex flex-col gap-6">
        {topics.map(({ title, translation }) => {
          return (
            <Link
              key={title}
              className="rounded-xl border-4 bg-accent-main px-10 py-4 text-center text-2xl font-normal text-font-main opacity-90 hover:-translate-y-1 hover:translate-x-1 hover:bg-neutral-shade md:text-5xl"
              to={`/${title}`}
            >
              {translation}
            </Link>
          );
        })}
      </section>
    </main>
  );
}

export default TopicsIndex;
