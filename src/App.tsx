import { Link } from "react-router-dom";

function App() {
  return (
    <main className="min-h-screen flex items-center flex-col pt-10 bg-background text-5xl text-text-base font-black text-center">
      <h1>Shadowing App</h1>
      <div className="flex flex-col mt-20">
        <Link
          className="bg-neutral-main hover:bg-neutral-shade text-neutral-contrast font-bold py-4 px-10 rounded text-center"
          to="/article-noun"
        >
          Articles
        </Link>
        <br />
        <Link
          className="bg-neutral-main hover:bg-neutral-shade text-neutral-contrast font-bold py-4 px-10 rounded text-center"
          to="/adjective"
        >
          Adjectives
        </Link>
        <br />
        <Link
          className="bg-neutral-main hover:bg-neutral-shade text-neutral-contrast font-bold py-4 px-10 rounded text-center"
          to="/verb-to-be"
        >
          Verb To Be
        </Link>
        <br />
        <Link
          className="bg-neutral-main hover:bg-neutral-shade text-neutral-contrast font-bold py-4 px-10 rounded text-center"
          to="/possessive-pronouns"
        >
          Possessives
        </Link>
        <br />
      </div>
    </main>
  );
}

export default App;
