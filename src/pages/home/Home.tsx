import data from "../../data/attributesSchema.json";
import { Link } from "react-router-dom";
import ThemeButton from "./components/ThemeButton";

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

const Home = ({ theme, handleChangeTheme }: TopicsIndexProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-base-main p-2 text-center text-5xl font-black text-font-main">
      <ThemeButton theme={theme} handleChangeTheme={handleChangeTheme} />
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
};

export default Home;
