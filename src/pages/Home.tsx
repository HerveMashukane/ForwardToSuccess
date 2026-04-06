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
        timeout = setTimeout(() => setIsDeleting(true), 1400);
      }
    } else if (displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % HERO_TYPING_PHRASES.length);
      }, 200);
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
      <section className="relative overflow-hidden px-6 py-16 sm:py-20 md:px-16 lg:py-24">
        
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-xl">
            
            <h1 className="mb-6 text-3xl font-bold leading-tight text-brand-primary sm:text-heading2 md:text-heading1">
              Build Your Future with{" "}
              <span className="text-brand-accent">
                Forward To Success
              </span>
            </h1>

            {/* TYPING EFFECT */}
            <div className="mb-6 h-[2.5rem] sm:h-[3rem]">
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl">
                <span className="text-brand-accent">
                  {displayText}
                </span>
                <span className="ml-1 animate-pulse text-brand-accent">|</span>
              </h2>
            </div>

            <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg">
              Learn English, French, Spanish, Chinese, make-up, and Computer
              Science with modern, practical training designed for real-world
              results.
            </p>

            {/* CTA */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/contact" className={`${btnPrimary} justify-center`}>
                Start Learning
              </Link>
              <Link to="/programs" className={`${btnSecondary} justify-center`}>
                Explore Programs
              </Link>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <i className="bi bi-people-fill text-brand-primary" />
                <span>500+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="bi bi-patch-check-fill text-brand-primary" />
                <span>Certified Trainers</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="bi bi-lightning-fill text-brand-primary" />
                <span>Practical Learning</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center">
            
            {/* TOP OVAL */}
            <div className="pointer-events-none absolute -left-8 -top-6 z-0 h-[7.5rem] w-[19rem] rounded-[50%] bg-brand-primary/10 animate-hero-oval-down md:h-[8.5rem] md:w-[22rem]" />

            <img
              src={heroBanner}
              alt="Students learning together"
              className="relative z-10 max-h-[420px] w-full max-w-lg rounded-xl object-cover shadow-lg ring-1 ring-black/5 transition duration-500 hover:scale-[1.02] hover:shadow-2xl"
            />

            {/* BOTTOM OVAL */}
            <div className="pointer-events-none absolute -bottom-4 -right-6 z-0 h-[6.5rem] w-[15rem] rounded-[50%] bg-brand-primary/10 animate-hero-oval-up md:h-[7rem] md:w-[17rem]" />
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}