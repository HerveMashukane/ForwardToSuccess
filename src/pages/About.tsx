import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TeamAvatar from "../components/ui/TeamAvatar";
import { btnOnDark } from "../lib/ui";

const teamMembers = [
  { name: "Name Example", role: "CEO & Founder" },
  { name: "Name Example", role: "CTO & Co-Founder" },
  { name: "Name Example", role: "Training Officer" },
  { name: "Name Example", role: "Team Lead" },
  { name: "Name Example", role: "English Teacher" },
  { name: "Name Example", role: "Spanish Teacher" },
  { name: "Name Example", role: "Chinese Teacher" },
  { name: "Name Example", role: "French Teacher" },
  { name: "Name Example", role: "MakeUp Specialist" },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="bg-brand-background text-gray-800">
      {/* Intro */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-white to-page px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-primary">
            Our story
          </p>
          <h1 className="mb-6 text-heading2 font-bold text-brand-secondary md:text-heading1">
            About ForwardToSuccess
          </h1>
          <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
            Forward To Success exists to make real-world skills accessible—
            from language fluency to digital expertise—so anyone committed to
            growth can unlock new opportunities, careers, and confidence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-14">
          <article className="rounded-2xl border border-gray-100 bg-white p-8 shadow-section transition duration-300 hover:shadow-md">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
              <i className="bi bi-bullseye text-lg" />
            </div>
            <h2 className="mb-3 text-heading3 font-bold text-brand-secondary">
              Mission
            </h2>
            <p className="leading-relaxed text-gray-600">
              Deliver accessible, practical education—especially free language
              programs—so learners can communicate with confidence and compete
              in a connected world.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Focused on impact, not just completion.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-8 shadow-section transition duration-300 hover:shadow-md">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
              <i className="bi bi-eye text-lg" />
            </div>
            <h2 className="mb-3 text-heading3 font-bold text-brand-secondary">
              Vision
            </h2>
            <p className="leading-relaxed text-gray-600">
              A community where every motivated learner—regardless of
              background—can push forward with skills that translate into
              work, study, and everyday life.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Built for long-term transformation.
            </p>
          </article>
        </div>
      </section>

      {/* Who we are + Team */}
      <section className="bg-page px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <h2 className="mb-4 text-heading3 font-bold text-brand-secondary">
              Who we are
            </h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              Forward To Success offers high-quality training in English,
              French, Spanish, and Chinese, alongside professional programs in
              Computer Science and make-up artistry.
            </p>
            <p className="mb-4 leading-relaxed text-gray-600">
              Language programs are free to protect accessibility; specialized
              tracks are priced modestly so we can sustain quality materials and
              mentorship.
            </p>
            <p className="leading-relaxed text-gray-600">
              Every course is built around real-world practice, guided by
              experienced trainers who care about your progress—not just
              completion.
            </p>
          </div>

          {/* RIGHT - TEAM */}
          <div>
            <h2 className="mb-2 text-heading3 font-bold text-brand-secondary">
              Meet the team
            </h2>
            <p className="mb-8 text-sm text-gray-500">
              The people behind your learning experience.
            </p>

            <div className="relative mx-auto min-h-[220px] max-w-md">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name + index}
                  className={`absolute inset-x-0 top-0 transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? "z-10 translate-y-0 scale-100 opacity-100"
                      : "z-0 translate-y-10 scale-95 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-lg transition duration-500 hover:shadow-xl">
                    <TeamAvatar name={member.name} className="mb-4" />
                    <h3 className="text-xl font-semibold text-brand-secondary">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-small text-gray-600">
                      {member.role}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-wide text-gray-400">
                      Forward To Success Team
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {teamMembers.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-8 bg-brand-primary"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-heading3 font-bold text-brand-secondary">
            Impact at a glance
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "500+", label: "Students trained" },
              { value: "5+", label: "Learning tracks" },
              { value: "Free", label: "Core language programs" },
              { value: "Expert", label: "Certified trainers" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-section transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-3xl font-extrabold text-brand-accent md:text-4xl">
                  {item.value}
                </p>
                <p className="mt-2 text-small text-gray-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-gray-100 bg-page px-6 py-16 md:px-16 md:py-24">
        <h2 className="mb-10 text-center text-heading3 font-bold text-brand-secondary">
          Our core values
        </h2>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {[
            {
              title: "Accessibility",
              desc: "Education should be within reach regardless of background or income.",
            },
            {
              title: "Practical learning",
              desc: "Lessons tie directly to real conversations, projects, and workplace skills.",
            },
            {
              title: "Excellence",
              desc: "Structured programs and expert trainers keep standards high and consistent.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-section transition duration-300 hover:shadow-md"
            >
              <h3 className="mb-3 text-heading3 font-bold text-brand-accent">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center md:px-16 md:py-24">
        <div className="mx-auto max-w-2xl rounded-2xl bg-brand-primary px-8 py-12 text-white shadow-section">
          <h2 className="mb-4 text-heading2 font-bold">
            Start your journey today
          </h2>
          <p className="mb-8 text-body text-white/90">
            Take the next step toward fluency, technical skills, and real-world
            confidence. Start learning with a system designed for results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className={btnOnDark}>
              Get in touch
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-btnRadius border border-white/40 px-btnX py-btnY font-semibold text-white transition duration-200 hover:bg-white/10"
            >
              View programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}