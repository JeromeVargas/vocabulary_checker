import { Link } from "react-router-dom";

import ThemeButton from "./components/ThemeButton";

import dataFetcher from "../../services/dataFetcher";

type TopicsIndexProps = {
  theme: string;
  handleChangeTheme: () => void;
};

const Home = ({ theme, handleChangeTheme }: TopicsIndexProps) => {
  const { topics } = dataFetcher();

  return (
    <>
      <header className="mt-16">
        <ThemeButton theme={theme} handleChangeTheme={handleChangeTheme} />
        <h1 className="text-font-main">シャドーイング アプリ</h1>
      </header>
      <main>
        <section className="m-10 md:m-20">
          <ul className="space-y-8 md:space-y-16">
            {topics.map(({ topic, linkText }) => {
              return (
                <li key={topic}>
                  <Link
                    className="rounded-xl border-4 bg-accent-main px-8 py-2 text-center text-2xl font-normal text-font-main opacity-90 hover:-translate-y-1 hover:translate-x-1 hover:bg-neutral-shade md:text-5xl"
                    to={`/${topic}`}
                  >
                    {linkText}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Home;
