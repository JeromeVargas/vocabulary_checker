import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="bg-base-main text-font-main flex h-screen w-full flex-col items-center justify-center text-center text-5xl font-black">
      <h1 className="hover:bg-accent-main w-10/12 rounded-xl border-4 bg-neutral-shade py-4 text-center font-bold text-neutral-contrast">
        <Link to="/">Please go back to the home page</Link>
      </h1>
    </main>
  );
}
