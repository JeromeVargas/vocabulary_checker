import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout to hide the loader after 10s
    const timer = setTimeout(() => {
      setShowLoader(false);
      // navigate to a not_found a non existent route to trigger the error 404 component
      navigate("/not_found");
    }, 10000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return showLoader ? (
    <section className="fixed inset-0 flex h-dvh items-center justify-center border-8 border-accent-main bg-neutral-light">
      <div
        className="inline-block h-60 w-60 animate-spin rounded-full border-8 border-solid border-neutral-main border-r-neutral-shade align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] md:h-80 md:w-80"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </section>
  ) : null;
};

export default Loader;
