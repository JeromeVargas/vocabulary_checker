const Loader = () => {
  return (
    <section className="fixed inset-0 flex h-screen items-center justify-center border-4 border-accent-main bg-neutral-light">
      <div
        className="inline-block h-60 w-60 animate-spin rounded-full border-8 border-solid border-neutral-main border-r-neutral-shade align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] md:h-80 md:w-80"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </section>
  );
};
export default Loader;
