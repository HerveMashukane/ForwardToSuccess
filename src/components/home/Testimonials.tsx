import { useEffect, useState } from "react";
import herve from "../../assets/images/team/herve.jpg";
import manasse from "../../assets/images/team/manasse.jpg";
import patricia from "../../assets/images/team/patricia.jpg";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "The English program gave me confidence to work with international clients.",
    name: "Dorcas Muhindo",
    role: "Alumni · English graduate",
    avatar: herve,
  },
  {
    quote:
      "I started from zero in French and now I can hold real conversations.",
    name: "Jean-Paul Agizo",
    role: "Student · French track",
    avatar: patricia,
  },
  {
    quote:
      "Computer Science fundamentals were explained clearly and practical.",
    name: "Cham's R.",
    role: "Student · Junior developer",
    avatar: manasse,
  },
  {
    quote: "Make-up classes helped me start freelancing quickly.",
    name: "Christelle K.",
    role: "Alumni · Freelance artist",
    avatar: herve,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const SLIDE_INTERVAL = 3500;

  // AUTO LOOP
  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(id);
  }, [paused]);

  // DUPLICATE ARRAY FOR SMOOTH INFINITE EFFECT
  const extended = [...testimonials, ...testimonials];

  return (
    <section
      className="px-6 py-16 md:px-16 md:py-24 bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">
          What our students say
        </h2>
        <p className="text-gray-600 mt-3">
          Real experiences from learners who grew with us
        </p>
      </div>

      {/* CAROUSEL WRAPPER */}
      <div className="mx-auto max-w-6xl overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 33.333}%)`,
          }}
        >
          {extended.map((t, i) => {
            const realIndex = i % testimonials.length;
            const isCenter = realIndex === index % testimonials.length;

            return (
              <div
                key={i}
                className="min-w-[33.333%] flex-shrink-0 rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  transform: isCenter ? "scale(1.05)" : "scale(0.95)",
                  opacity: isCenter ? 1 : 0.85,
                }}
              >
                {/* IMAGE */}
                <div className="flex justify-center mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-16 w-16 rounded-full object-cover ring-2 ring-brand-accent/30 transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* QUOTE */}
                <p className="text-gray-600 text-center italic mb-6">
                  “{t.quote}”
                </p>

                {/* NAME */}
                <h3 className="text-center font-semibold text-brand-secondary">
                  {t.name}
                </h3>

                <p className="text-center text-sm text-gray-500">{t.role}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* DOT NAVIGATION */}
      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "w-8 bg-brand-primary"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}