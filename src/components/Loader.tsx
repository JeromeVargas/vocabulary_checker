import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/not_found"), 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section
      className="fixed inset-0 z-50 flex h-dvh items-center justify-center bg-base-main/90 backdrop-blur-sm"
      role="status"
      aria-label="Loading"
    >
      <div className="flex items-center gap-3">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="size-4 animate-big-bounce rounded-full bg-accent-main will-change-transform"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    </section>
  );
};

export default Loader;
