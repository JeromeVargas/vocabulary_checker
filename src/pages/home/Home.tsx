import { Link } from "react-router-dom";

import Header from "./components/Header";

import dataFetcher from "../../services/dataFetcher";

const Home = () => {
  const data = dataFetcher();

  const keys = Object.keys(data);
  const values = Object.values(data);

  const topics = keys.map((topic, index) => {
    return {
      topic,
      topicTargetLanguage: values[index].translation,
      emoji: values[index].emoji,
    };
  });

  return (
    <>
      <Header />
      <main className="w-full">
        <section className="mx-auto w-full max-w-sm px-6 pb-10 pt-8 md:max-w-md">
          {/* Hero */}
          <div className="mb-8 text-center">
            <p className="mb-3 text-4xl">🚀</p>
            <p className="text-lg font-semibold text-font-main">
              What will you learn today?
            </p>
            <p className="mt-1 text-sm text-neutral-main">
              Choose a topic and start practising
            </p>
          </div>

          {/* Topic count label */}
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-main">
              Topics
            </p>
            <span className="rounded-full bg-base-shade px-2 py-0.5 text-xs font-medium text-neutral-main ring-1 ring-neutral-shade/50">
              {topics.length}
            </span>
          </div>

          {/* Topic list */}
          <ul className="space-y-3">
            {topics.map(({ topic, topicTargetLanguage, emoji }, index) => {
              return (
                <li
                  key={topic}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <Link
                    className="group flex w-full items-center justify-between rounded-xl bg-base-shade px-4 py-3.5 text-base font-medium text-font-main shadow-sm ring-1 ring-neutral-shade/50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-accent-main/60"
                    to={`/${topic}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-base-main text-lg">
                        {emoji}
                      </span>
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
