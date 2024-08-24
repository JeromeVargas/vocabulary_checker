import { Link } from "react-router-dom";

import ThemeButton from "./components/ThemeButton";

import dataFetcher from "../../services/dataFetcher";

const Home = () => {
  const data = dataFetcher();

  const keys = Object.keys(data);
  const values = Object.values(data);

  // maps the keys (paths in original language) as topic and its translations (topics in target language) as link text
  const topics = keys.map((topic, index) => {
    return { topic, topicTargetLanguage: values[index].translation };
  });

  return (
    <>
      <header className="mt-16">
        <ThemeButton />
        <h1 className="text-font-main">Vocabulary Shadowing</h1>
      </header>
      <main>
        <section className="m-10 md:m-20">
          <ul className="space-y-6 md:space-y-9">
            {topics.map(({ topic, topicTargetLanguage }) => {
              return (
                <li key={topic} className="flex flex-col items-center">
                  <Link
                    className="w-10/12 rounded-xl border-4 bg-accent-main py-4 text-center text-2xl font-normal text-font-main opacity-90 hover:-translate-y-1 hover:translate-x-1 hover:bg-neutral-shade md:w-1/2 md:text-5xl lg:w-1/3 xl:w-1/4 2xl:w-1/5"
                    to={`/${topic}`}
                  >
                    {topicTargetLanguage}
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
