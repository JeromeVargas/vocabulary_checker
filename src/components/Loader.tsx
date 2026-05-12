import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      navigate("/not_found");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return showLoader ? (
    <section
      className="fixed inset-0 z-50 flex h-dvh items-center justify-center bg-base-main/80 backdrop-blur-sm"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-neutral-shade border-t-accent-main" />
        <span className="text-sm font-medium text-neutral-main">Loading…</span>
      </div>
    </section>
  ) : null;
};

export default Loader;
