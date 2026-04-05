import { useEffect, useState } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "The English program gave me confidence to work with international clients. The trainers are patient and the lessons feel practical from day one.",
    name: "Dorcas Muhindo.",
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
    <section
      className="border-y border-gray-200/80 bg-gradient-to-b from-white to-page px-6 py-20 md:px-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-primary">
          Voices from our community
        </p>
        <h2
          id="testimonials-heading"
          className="mb-4 text-heading2 font-bold text-brand-secondary"
        >
          What learners say
        </h2>
        <p className="mb-12 text-gray-600">
          Real stories from students and alumni who pushed forward with us.
        </p>
      </div>

      <div className="relative mx-auto max-w-2xl">
        <div
          key={fadeKey}
          className="animate-testimonial-fade rounded-2xl border border-gray-100 bg-white p-8 shadow-section md:p-10"
        >
          <div className="mb-6 flex justify-center gap-1 text-brand-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <i key={i} className="bi bi-star-fill text-lg" aria-hidden />
            ))}
          </div>
          <blockquote className="mb-8 text-center text-lg leading-relaxed text-gray-700 md:text-xl">
            “{active.quote}”
          </blockquote>
          <footer className="text-center">
            <p className="font-semibold text-gray-900">{active.name}</p>
            <p className="mt-1 text-small text-gray-500">{active.role}</p>
          </footer>
        </div>

        <div
          className="mt-8 flex justify-center gap-2"
          role="tablist"
          aria-label="Testimonial slides"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial ${i + 1}`}
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
