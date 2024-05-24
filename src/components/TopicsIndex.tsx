import { Link } from "react-router-dom";
import data from "../data/images.json";

const titles = Object.keys(data);
const values = Object.values(data);

const topics: { title: string; translation: string }[] = titles.map(
  (title, index) => {
    return { title, translation: values[index].translation };
  },
);

function TopicsIndex() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background pt-10 text-center text-5xl font-black text-text-base">
      <h1>Shadowing App</h1>
      <div className="mt-10 flex flex-col">
        {topics.map(({ title, translation }) => {
          return (
            <Link
              key={title}
              className="mt-6 rounded bg-neutral-main px-10 py-4 text-center font-bold text-neutral-contrast hover:bg-neutral-shade"
              to={`/${title}`}
            >
              {translation}
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export default TopicsIndex;
