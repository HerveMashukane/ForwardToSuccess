import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 400;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollUp}
      className={`fixed bottom-24 right-6 z-[55] flex h-11 w-11 items-center justify-center rounded-full hover:border hover:border-gray-200 bg-brand-accent/95 text-white shadow-md backdrop-blur-sm transition-all duration-300 ease-out hover:border-brand-primary/40 hover:bg-brand-accent-hover hover:shadow-lg active:scale-95 md:bottom-28 md:right-8 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <i className="bi bi-arrow-up text-lg" aria-hidden />
    </button>
  );
}
