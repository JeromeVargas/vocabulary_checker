import { Link } from "react-router-dom";

import Header from "./components/Header";

import dataFetcher from "../../services/dataFetcher";

const Home = () => {
  const data = dataFetcher();

  const keys = Object.keys(data);
  const values = Object.values(data);

  const topics = keys.map((topic, index) => {
    return { topic, topicTargetLanguage: values[index].translation };
  });

  return (
    <>
      <Header />
      <main className="w-full">
        <section className="mx-auto w-full max-w-sm px-6 pb-10 pt-8 md:max-w-md">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-main">
              Topics
            </p>
            <span className="rounded-full bg-base-shade px-2 py-0.5 text-xs font-medium text-neutral-main ring-1 ring-neutral-shade/50">
              {topics.length}
            </span>
          </div>
          <ul className="space-y-3">
            {topics.map(({ topic, topicTargetLanguage }) => {
              return (
                <li key={topic}>
                  <Link
                    className="group flex w-full items-center justify-between rounded-xl bg-base-shade px-5 py-4 text-base font-medium text-font-main shadow-sm ring-1 ring-neutral-shade/50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-accent-main/60"
                    to={`/${topic}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-shade transition-colors duration-200 group-hover:bg-accent-main" />
                      <span>{topicTargetLanguage}</span>
                    </div>
                    <svg
                      className="h-4 w-4 text-neutral-main transition-colors duration-200 group-hover:text-accent-main"
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
