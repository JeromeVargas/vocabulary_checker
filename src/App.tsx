import { Link } from "react-router-dom";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background pt-10 text-center text-5xl font-black text-text-base">
      <h1>Shadowing App</h1>
      <div className="mt-20 flex flex-col">
        <Link
          className="rounded bg-neutral-main px-10 py-4 text-center font-bold text-neutral-contrast hover:bg-neutral-shade"
          to="/article-noun"
        >
          Articles
        </Link>
        <br />
        <Link
          className="rounded bg-neutral-main px-10 py-4 text-center font-bold text-neutral-contrast hover:bg-neutral-shade"
          to="/adjective"
        >
          Adjectives
        </Link>
        <br />
        <Link
          className="rounded bg-neutral-main px-10 py-4 text-center font-bold text-neutral-contrast hover:bg-neutral-shade"
          to="/verb-to-be"
        >
          Verb To Be
        </Link>
        <br />
        <Link
          className="rounded bg-neutral-main px-10 py-4 text-center font-bold text-neutral-contrast hover:bg-neutral-shade"
          to="/possessive-pronouns"
        >
          Possessives
        </Link>
        <br />
        <Link
          className="rounded bg-neutral-main px-10 py-4 text-center font-bold text-neutral-contrast hover:bg-neutral-shade"
          to="/plural-basic"
        >
          Plurals basics
        </Link>
        <br />
        <Link
          className="rounded bg-neutral-main px-10 py-4 text-center font-bold text-neutral-contrast hover:bg-neutral-shade"
          to="/there-to-be"
        >
          There to Be 1
        </Link>
        <br />
        <Link
          className="rounded bg-neutral-main px-10 py-4 text-center font-bold text-neutral-contrast hover:bg-neutral-shade"
          to="/there-to-be-new"
        >
          There to Be 2
        </Link>
        <br />
        <Link
          className="rounded bg-neutral-main px-10 py-4 text-center font-bold text-neutral-contrast hover:bg-neutral-shade"
          to="/simple-present"
        >
          Simple present 1
        </Link>
        <br />
        <Link
          className="rounded bg-neutral-main px-10 py-4 text-center font-bold text-neutral-contrast hover:bg-neutral-shade"
          to="/simple-present-new"
        >
          Simple present 2
        </Link>
        <br />
        <Link
          className="rounded bg-neutral-main px-10 py-4 text-center font-bold text-neutral-contrast hover:bg-neutral-shade"
          to="/auxiliary"
        >
          Auxiliary Do / Does
        </Link>
        <br />
        <Link
          className="rounded bg-neutral-main px-10 py-4 text-center font-bold text-neutral-contrast hover:bg-neutral-shade"
          to="/questions"
        >
          Auxiliary questions
        </Link>
        <br />
      </div>
    </main>
  );
}

export default App;
