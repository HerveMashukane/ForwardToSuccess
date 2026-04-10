import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import TeamAvatar from "../components/ui/TeamAvatar";
import herve from "../assets/images/team/herve.jpg";
import manasse from "../assets/images/team/manasse.jpg";
import patricia from "../assets/images/team/patricia.jpg";

type TeamMember = {
  name: string;
  role: string;
  avatar: string;
};

const teamMembers: TeamMember[] = [
  { name: "Hervé Mashukane", role: "CEO & Founder", avatar: herve },
  { name: "Manasse Mubayi", role: "CTO & Co-Founder", avatar: manasse },
  { name: "Patricia Nkomo", role: "Training Officer", avatar: patricia },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // AUTOPLAY
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // NAVIGATION
  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };

  // SWIPE
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) goNext();
    if (diff < -50) goPrev();
  };

  return (
    <div className="bg-brand-background text-gray-800">

      {/* INTRO */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-white to-page px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-primary">
            Our story
          </p>

          <h1 className="mb-6 text-heading3 font-bold text-brand-secondary md:text-heading1">
            About ForwardToSuccess
          </h1>

          <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
            Forward To Success exists to make real-world skills accessible—
            from language fluency to digital expertise—so anyone committed to
            growth can unlock new opportunities, careers, and confidence.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">

          <article className="rounded-2xl border border-gray-100 bg-white p-8 shadow-section hover:shadow-md transition">
            <h2 className="mb-3 text-heading3 font-bold text-brand-secondary">
              Mission
            </h2>
            <p className="text-gray-600">
              Deliver accessible, practical education—especially free language
              programs—so learners can communicate with confidence and compete
              in a connected world.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-8 shadow-section hover:shadow-md transition">
            <h2 className="mb-3 text-heading3 font-bold text-brand-secondary">
              Vision
            </h2>
            <p className="text-gray-600">
              A community where every motivated learner—regardless of
              background—can build skills that translate into real-world
              opportunities.
            </p>
          </article>

        </div>
      </section>

      {/* WHO WE ARE + TEAM */}
      <section className="bg-page px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <h2 className="mb-4 text-heading3 font-bold text-brand-secondary">
              Who we are
            </h2>

            <p className="mb-4 text-gray-600">
              We provide high-quality training in English, French, Spanish,
              and Chinese, alongside professional programs in Computer Science
              and make-up artistry.
            </p>

            <p className="text-gray-600">
              Our programs are built around real-world practice, guided by
              experienced trainers committed to your growth.
            </p>
          </div>

          {/* RIGHT - TEAM CAROUSEL */}
          <div>
            <h2 className="mb-2 text-heading3 font-bold text-brand-secondary">
              Meet the team
            </h2>

            <div
              className="relative mx-auto min-h-[260px] max-w-md"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >

              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                    index === currentIndex
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-95 z-0 pointer-events-none"
                  }`}
                >
                  <div className="w-full rounded-2xl bg-white p-8 text-center shadow-lg">

                    <TeamAvatar
                      name={member.name}
                      avatar={member.avatar}
                      className="mx-auto mb-4"
                    />

                    <h3 className="text-xl font-semibold text-brand-secondary">
                      {member.name}
                    </h3>

                    <p className="text-gray-600 mt-1">
                      {member.role}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-wide text-gray-400">
                      Forward To Success Team
                    </p>
                  </div>
                </div>
              ))}

              {/* ARROWS */}
              <button
                onClick={goPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
              >
                ‹
              </button>

              <button
                onClick={goNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
              >
                ›
              </button>
            </div>

            {/* DOTS */}
            <div className="mt-6 flex justify-center gap-2">
              {teamMembers.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full ${
                    i === currentIndex
                      ? "w-8 bg-brand-primary"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="px-6 py-16 md:px-16 md:py-24">
        <h2 className="mb-10 text-center text-heading3 font-bold text-brand-secondary">
          Impact at a glance
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "500+", label: "Students trained" },
            { value: "5+", label: "Programs offered" },
            { value: "Free", label: "Core language courses" },
            { value: "Expert", label: "Certified trainers" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white p-6 text-center shadow-section hover:shadow-lg transition"
            >
              <p className="text-3xl font-bold text-brand-accent">
                {item.value}
              </p>
              <p className="text-gray-600 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-page px-6 py-16 md:px-16 md:py-24">
        <h2 className="mb-10 text-center text-heading3 font-bold text-brand-secondary">
          Our core values
        </h2>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {[
            {
              title: "Accessibility",
              desc: "Education should be available regardless of background.",
            },
            {
              title: "Practical learning",
              desc: "We focus on real-world skills and application.",
            },
            {
              title: "Excellence",
              desc: "We maintain high standards in teaching and outcomes.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-8 text-center shadow-section"
            >
              <h3 className="text-brand-accent font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center md:px-16 md:py-24">
        <div className="mx-auto max-w-2xl bg-brand-primary text-white p-10 rounded-2xl">

          <h2 className="text-2xl font-bold mb-4">
            Start your journey today
          </h2>

          <p className="mb-6 text-white/90">
            Take the next step toward fluency, technical skills, and confidence.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-accent px-4 py-3 rounded text-white"
            >
              Get in touch
            </Link>

            <Link
              to="/programs"
              className="border border-white/40 px-4 py-3 rounded"
            >
              View programs
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}