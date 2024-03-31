import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-background text-center text-5xl font-black text-text-base">
      <h1 className="w-10/12 rounded bg-neutral-main py-4 text-center font-bold text-neutral-contrast hover:bg-neutral-shade">
        <Link to="/">Please go back to the home page</Link>
      </h1>
    </main>
  );
}
