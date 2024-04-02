import { Link } from "react-router-dom";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background pt-10 text-center text-5xl font-black text-text-base">
      <h1>Shadowing App</h1>
      <div className="mt-20 flex flex-col">
        <Link
          className="rounded bg-neutral-main px-10 py-4 text-center font-bold text-neutral-contrast hover:bg-neutral-shade"
          to="/instructions"
        >
          せつめいしょ
        </Link>
        <br />
      </div>
    </main>
  );
}

export default App;
