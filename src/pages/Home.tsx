import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroBanner from "../assets/images/banner.jpg";
import Testimonials from "../components/home/Testimonials";
import { btnPrimary, btnSecondary } from "../lib/ui";

const HERO_TYPING_PHRASES = [
  "Train • Transform • Inspire",
  "Push Forward",
] as const;

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = HERO_TYPING_PHRASES[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, 70);

      if (displayText === currentText) {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else if (displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % HERO_TYPING_PHRASES.length);
      }, 0);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }, 40);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="bg-brand-background text-gray-800">
      {/* HERO */}
      <section className="relative grid items-center gap-12 overflow-hidden px-6 py-20 md:grid-cols-2 md:px-16">
        <div className="relative z-10">
          <h1 className="mb-6 text-heading2 font-bold leading-tight text-brand-primary md:text-heading1">
            Build Your Future with{" "}
            <span className="text-brand-accent">Forward To Success</span>
          </h1>
          <h2 className="mb-6 text-heading3 font-bold leading-tight text-gray-900 md:text-heading2">
            <span className="text-brand-accent">{displayText}</span>
            <span className="ml-1 animate-pulse text-brand-accent">|</span>
          </h2>

          <p className="mb-8 text-lg text-gray-600">
            Learn English, French, Spanish, Chinese, make-up, and Computer
            Science with modern, practical training designed for real-world
            results.
          </p>

          <div className="mb-6 flex flex-wrap gap-4">
            <Link to="/contact" className={btnPrimary}>
              Start Learning
            </Link>
            <Link to="/programs" className={btnSecondary}>
              Explore Programs
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <i className="bi bi-people-fill text-brand-primary" aria-hidden />
              <span>500+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <i
                className="bi bi-patch-check-fill text-brand-primary"
                aria-hidden
              />
              <span>Certified Trainers</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="bi bi-lightning-fill text-brand-primary" aria-hidden />
              <span>Practical Learning</span>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[280px] items-center justify-center md:min-h-[360px]">
          {/* Top decorative oval — drifts downward; GPU-friendly transform only */}
          <div
            className="pointer-events-none absolute -left-8 -top-6 z-0 h-[7.5rem] w-[19rem] rounded-[50%] bg-brand-primary/10 will-change-transform animate-hero-oval-down md:h-[8.5rem] md:w-[22rem]"
            aria-hidden
          />

          <img
            src={heroBanner}
            alt="Students learning together at ForwardToSuccess"
            className="relative z-10 max-h-[420px] w-full max-w-lg rounded-xl object-cover shadow-lg ring-1 ring-black/5 transition duration-500 hover:shadow-xl"
          />

          {/* Bottom decorative oval — drifts upward (opposite phase to top) */}
          <div
            className="pointer-events-none absolute -bottom-4 -right-6 z-0 h-[6.5rem] w-[15rem] rounded-[50%] bg-brand-primary/10 will-change-transform animate-hero-oval-up md:bottom-0 md:h-[7rem] md:w-[17rem]"
            aria-hidden
          />
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
