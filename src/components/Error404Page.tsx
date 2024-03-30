import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="h-screen flex items-center justify-center flex-col bg-background w-full text-5xl text-text-base font-black text-center">
      <h1 className="w-10/12 bg-neutral-main hover:bg-neutral-shade text-neutral-contrast font-bold py-4 rounded text-center">
        <Link to="/">Please go back to the home page</Link>
      </h1>
    </main>
  );
}
