import { Link } from "react-router-dom";
import { btnPrimary, btnSecondary } from "../lib/ui";

const courses = [
  {
    title: "English",
    blurb: "Build fluency with conversation-first lessons and real-world tasks.",
  },
  {
    title: "French",
    blurb: "Structured progression from foundations to confident daily use.",
  },
  {
    title: "Spanish",
    blurb: "Practical vocabulary and listening skills for travel and work.",
  },
  {
    title: "Chinese",
    blurb: "Introduction to tones, characters, and everyday expressions.",
  },
  {
    title: "Make-up",
    blurb: "Professional techniques, hygiene, and portfolio-ready looks.",
  },
  {
    title: "Computer Science",
    blurb: "Foundations in logic, tools, and problem-solving for tech careers.",
  },
];

export default function Programs() {
  return (
    <section className="px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-primary">
            What we offer
          </p>
          <h1 className="mb-4 text-heading2 font-bold text-brand-secondary">
            Our programs
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Choose a track that matches your goals. Every program pairs expert
            guidance with hands-on practice.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-section transition duration-300 hover:-translate-y-1 hover:border-brand-primary/20 hover:shadow-lg"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary transition group-hover:bg-brand-primary group-hover:text-white">
                <i className="bi bi-book-half text-lg" aria-hidden />
              </div>
              <h2 className="mb-2 text-heading3 font-bold text-brand-secondary">
                {course.title}
              </h2>
              <p className="mb-6 flex-1 text-body text-gray-600">
                {course.blurb}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition hover:gap-3"
              >
                Enquire
                <i className="bi bi-arrow-right" aria-hidden />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-brand-primary/30 bg-brand-primary/5 px-8 py-10 text-center md:flex-row md:text-left">
          <div className="flex-1">
            <h2 className="text-heading3 font-bold text-brand-secondary">
              Not sure where to start?
            </h2>
            <p className="mt-2 text-gray-600">
              Tell us about your goals—we will recommend a path and next steps.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className={btnPrimary}>
              Talk to us
            </Link>
            <Link to="/about" className={btnSecondary}>
              About the team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
