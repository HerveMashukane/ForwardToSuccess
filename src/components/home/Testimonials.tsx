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

  const SLIDE_INTERVAL = 3200;

  // AUTO LOOP (SAME AS TEAM)
  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(id);
  }, [paused]);

  // GET 3 ITEMS (LEFT, CENTER, RIGHT)
  const getVisible = () => {
    const prev =
      (index - 1 + testimonials.length) % testimonials.length;
    const next = (index + 1) % testimonials.length;

    return [
      testimonials[prev],
      testimonials[index],
      testimonials[next],
    ];
  };

  const visible = getVisible();

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

      {/* CARDS */}
      <div className="mx-auto max-w-6xl flex justify-center items-center gap-6 relative">

        {visible.map((t, i) => {
          const isCenter = i === 1;

          return (
            <div
              key={t.name}
              className={`w-[300px] rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-700 ${
                isCenter
                  ? "scale-105 opacity-100 z-10"
                  : "scale-95 opacity-60 z-0"
              }`}
            >
              {/* IMAGE */}
              <div className="flex justify-center mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-brand-accent/30"
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

              <p className="text-center text-sm text-gray-500">
                {t.role}
              </p>
            </div>
          );
        })}
      </div>

      {/* DOTS */}
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