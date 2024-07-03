import { Link } from "react-router-dom";
import data from "../data/attributesSchema.json";

const titles = Object.keys(data);
const values = Object.values(data);

const topics: { title: string; translation: string }[] = titles.map(
  (title, index) => {
    return { title, translation: values[index].translation };
  },
);

function TopicsIndex() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background p-10 text-center text-5xl font-black text-text-base">
      <h1>シャドーイングアプリ</h1>
      <section className="m-12 flex flex-col gap-6">
        {topics.map(({ title, translation }) => {
          return (
            <Link
              key={title}
              className="rounded-xl border-4 bg-accent px-10 py-4 text-center text-2xl font-normal text-text-base opacity-90 hover:-translate-y-1 hover:translate-x-1 hover:bg-green-300 md:text-5xl"
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
