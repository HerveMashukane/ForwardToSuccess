import { useEffect, useState } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar?: string; // future-proof
};

const testimonials: Testimonial[] = [
  {
    quote:
      "The English program gave me confidence to work with international clients. The trainers are patient and the lessons feel practical from day one.",
    name: "Dorcas Muhindo",
    role: "Alumni · English graduate",
  },
  {
    quote:
      "I started from zero in French and now I can hold real conversations. The community here is supportive and the schedule worked with my job.",
    name: "Jean-Paul Agizo",
    role: "Student · French track",
  },
  {
    quote:
      "Computer Science fundamentals were explained clearly and I could apply them immediately. This is training that respects your time.",
    name: "Cham's R.",
    role: "Student · Junior developer",
  },
  {
    quote:
      "Make-up classes were hands-on and professional. I built a portfolio I am proud of and got my first paid gigs within months.",
    name: "Christelle K.",
    role: "Alumni · Freelance artist",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
      setFadeKey((k) => k + 1);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  const active = testimonials[index];

  return (
    <section className="border-y border-gray-200/80 bg-gradient-to-b from-white to-page px-6 py-16 md:px-16 lg:py-20">
      
      {/* HEADER */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">
          Voices from our community
        </p>

        <h2 className="mb-4 text-2xl font-bold text-brand-secondary md:text-3xl lg:text-4xl">
          What learners say
        </h2>

        <p className="mb-12 text-gray-600">
          Real stories from students and alumni who pushed forward with us.
        </p>
      </div>

      {/* CARD */}
      <div className="relative mx-auto max-w-2xl">
        <div
          key={fadeKey}
          className="transform rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition duration-500 hover:shadow-xl md:p-10"
        >
          {/* STARS */}
          <div className="mb-6 flex justify-center gap-1 text-brand-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <i key={i} className="bi bi-star-fill text-lg" />
            ))}
          </div>

          {/* QUOTE */}
          <blockquote className="mb-8 text-center text-base leading-relaxed text-gray-700 md:text-lg lg:text-xl">
            “{active.quote}”
          </blockquote>

          {/* USER */}
          <div className="flex flex-col items-center gap-3">
            
            {/* AVATAR */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10 text-sm font-bold text-brand-primary">
              {getInitials(active.name)}
            </div>

            <div className="text-center">
              <p className="font-semibold text-gray-900">
                {active.name}
              </p>
              <p className="text-sm text-gray-500">
                {active.role}
              </p>
            </div>
          </div>
        </div>

        {/* DOTS */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                setFadeKey((k) => k + 1);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-brand-primary"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}