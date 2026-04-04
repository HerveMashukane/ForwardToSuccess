import { useEffect, useState } from "react";
import heroBanner from "../assets/images/banner.jpg";

export default function Home() {
  const texts = [
    "Train • Transform • Inspire",
    "Push Forward",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, 70);

      if (displayText === currentText) {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }, 40);

      if (displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="bg-brand-background text-gray-800">

        {/* HERO SECTION */}
      <section className="relative px-6 md:px-16 py-20 grid md:grid-cols-2 gap-12 items-center overflow-hidden">
      {/* LEFT: Animated Text */}
          <div className="relative z-10">
              <h1 className="text-heading2 md:text-heading1 font-bold text-brand-primary leading-tight mb-6">
              Build Your Future with <span className="text-brand-accent">Forward To Success</span>
              </h1>
              <h2 className="text-heading3 md:text-heading2 font-bold text-gray-900 leading-tight mb-6">
              <span className="text-brand-accent">{displayText}</span>
              <span className="ml-1 animate-pulse text-brand-accent">|</span>
              </h2>

              <p className="text-lg text-gray-600 mb-8">
              Learn English, French, Spanish, Chinese make up and Computer Science with modern,
              practical training designed to get you real-world results.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mb-6">
              <button className="bg-brand-accent hover:bg-brand-accent-hover text-white px-btnX py-btnY rounded-btnRadius shadow-btnShadow font-semibold transition">
                  Start Learning
              </button>
              <button className="border border-gray-300 text-gray-700 px-btnX py-btnY rounded-btnRadius hover:bg-gray-100 transition font-semibold">
                  Explore Programs
              </button>
              </div>

              {/* TRUST BADGES */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                  <i className="bi bi-people-fill text-brand-primary"></i>
                  <span>500+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                  <i className="bi bi-patch-check-fill text-brand-primary"></i>
                  <span>Certified Trainers</span>
              </div>
              <div className="flex items-center gap-2">
                  <i className="bi bi-lightning-fill text-brand-primary"></i>
                  <span>Practical Learning</span>
              </div>
              </div>
          </div>

          {/* RIGHT: Hero Image with Circles */}
          <div className="relative flex justify-center items-center">

              {/* Top-left circle */}
              <div className="absolute w-72 h-72 bg-brand-secondary/10 rounded-full -left-16 -top-16 z-0 animate-pulse"></div>

              {/* Hero Image */}
              <img src={heroBanner} alt="hero banner" className="relative z-10 rounded-xl shadow-lg" />

              {/* Bottom-right circle */}
              <div className="absolute w-56 h-56 bg-brand-secondary/10 rounded-full -right-12 bottom-0 z-0 animate-pulse"></div>
          </div>
      </section>
    </div>
  );
}