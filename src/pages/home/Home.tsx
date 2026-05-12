import { Link } from "react-router-dom";

import ThemeButton from "./components/ThemeButton";

import dataFetcher from "../../services/dataFetcher";
import { HOME_HEADING } from "../../config/constants";

const Home = () => {
  const data = dataFetcher();

  const keys = Object.keys(data);
  const values = Object.values(data);

  const topics = keys.map((topic, index) => {
    return { topic, topicTargetLanguage: values[index].translation };
  });

  return (
    <>
      <header className="relative mt-10 w-full px-6 pb-6 pt-4 text-center">
        <ThemeButton />
        <h1 className="text-2xl font-semibold tracking-tight text-font-main md:text-3xl">
          {HOME_HEADING}
        </h1>
      </header>
      <main>
        <section className="mx-auto w-full max-w-sm px-6 pb-10 md:max-w-md">
          <ul className="space-y-3">
            {topics.map(({ topic, topicTargetLanguage }) => {
              return (
                <li key={topic}>
                  <Link
                    className="flex w-full items-center justify-between rounded-xl bg-base-shade px-5 py-4 text-base font-medium text-font-main shadow-sm ring-1 ring-neutral-shade/50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-accent-main/60"
                    to={`/${topic}`}
                  >
                    <span>{topicTargetLanguage}</span>
                    <svg
                      className="h-4 w-4 text-neutral-main"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12l4-4-4-4"
                      />
                    </svg>
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
