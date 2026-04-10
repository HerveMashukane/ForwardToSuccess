import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroBanner from "../assets/images/banner.jpg";
import Testimonials from "../components/home/Testimonials";

const HERO_PHRASES = [
  { text: "Train • Transform • Inspire", color: "text-brand-accent" },
  { text: "Push • Forward", color: "text-brand-primary" },
  { text: "Achieve • Your • Dreams", color: "text-yellow-700" },
] as const;

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = HERO_PHRASES[textIndex].text;
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      timeout = setTimeout(
        () => setDisplayText(current.substring(0, displayText.length + 1)),
        70
      );
      if (displayText === current) timeout = setTimeout(() => setIsDeleting(true), 1400);
    } else if (displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % HERO_PHRASES.length);
      }, 200);
    } else {
      timeout = setTimeout(
        () => setDisplayText(current.substring(0, displayText.length - 1)),
        40
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="relative bg-gradient-to-b from-white via-indigo-50 to-white text-gray-900 overflow-hidden">
      <section className="relative px-6 py-16 sm:py-20 md:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div className="relative z-10 max-w-xl space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-brand-secondary animate-fade-up">
              Build Your Future with <span className="text-brand-accent">Forward To Success</span>
            </h1>

            <h2 className={`${HERO_PHRASES[textIndex].color} text-2xl sm:text-3xl font-semibold h-12 animate-fade-up animate-delay-100`}>
              {displayText}<span className="ml-1 animate-pulse">|</span>
            </h2>

            <p className="text-brand-secondary sm:text-lg animate-fade-up animate-delay-200">
              Master languages, digital skills, and practical subjects with real-world, hands-on training designed to accelerate your growth.
            </p>

            {/* USP */}
            <ul className="text-brand-secondary pl-4 list-disc space-y-2 animate-fade-up animate-delay-300">
              <li>Flexible Online & Offline Classes</li>
              <li>Industry-Experienced Trainers</li>
              <li>Certificate-Ready Programs</li>
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-up animate-delay-400">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-btnRadius 
                        bg-brand-accent px-4 py-3 font-semibold text-white 
                        transition duration-200 hover:bg-brand-accent-hover shadow-btnShadow">
                Start Learning
              </Link>
              <Link to="/courses" className="inline-flex items-center justify-center gap-2 
                        rounded-btnRadius border border-gray-300
                        px-4 py-3 font-semibold bg-white/10
                        transition duration-200 hover:bg-gray-300">
                Explore Courses
              </Link>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-6 text-gray-500 mt-8 animate-fade-up animate-delay-500">
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
                <span>Hands-on Learning</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE + FLOATING ICONS */}
          <div className="relative flex justify-center items-center">
            {/* TOP AND BOTTOM OVALS */}
            <div className="absolute -top-6 -left-8 h-32 w-64 rounded-full bg-indigo-100 animate-hero-oval-down pointer-events-none" />
            <div className="absolute -bottom-4 -right-6 h-28 w-56 rounded-full bg-indigo-100 animate-hero-oval-up pointer-events-none" />

            {/* HERO IMAGE */}
            <img
              src={heroBanner}
              alt="Students learning together"
              className="relative z-10 max-h-[440px] w-full max-w-lg rounded-xl object-cover shadow-xl ring-1 ring-gray-200 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            />

            {/* FLOATING ICONS */}
            <svg className="absolute top-10 left-16 h-6 w-6 text-indigo-300 animate-float-diagonal" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="6" />
            </svg>
            <svg className="absolute bottom-16 right-20 h-5 w-5 text-pink-300 animate-float-diagonal" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12,2 22,22 2,22" />
            </svg>
            <svg className="absolute top-24 right-12 h-4 w-4 text-yellow-400 animate-float-diagonal" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="6" width="12" height="12" />
            </svg>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}