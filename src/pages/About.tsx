import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TeamAvatar from "../components/ui/TeamAvatar";

/* =======================
   IMAGES
======================= */
import bright from "../assets/images/team/bright.png";
import herve from "../assets/images/team/herve.jpg";
import patricia from "../assets/images/team/patricia.png";
import manasse from "../assets/images/team/manasse.png";
import fadhili from "../assets/images/team/fadhili.png";
import jansen from "../assets/images/team/jansen.png";
import breeder from "../assets/images/team/breeder.png";
import guylaine from "../assets/images/team/guylaine.png";
import sylvie from "../assets/images/team/sylvie.png";
import marie from "../assets/images/team/marie.png";
import authentic from "../assets/images/team/authenctic.png";

/* =======================
   TYPES
======================= */

type TeamMember = {
  name: string;
  role: string;
  avatar: string;
};

type TeamGroup = {
  title: string;
  icon: string;
  members: TeamMember[];
};

/* =======================
   FULL ASBL STRUCTURE
======================= */

const teamGroups: TeamGroup[] = [
  {
    title: "Leadership",
    icon: "bi-person-badge-fill",
    members: [
      {
        name: "Bright Mugabe",
        role: "Executive Director & English / Spanish Instructor",
        avatar: bright,
      },
      {
        name: "Hervé Mashukane",
        role: "Head of Technology & Finance / English & Programming Instructor",
        avatar: herve,
      },
      {
        name: "Patricia Masiri",
        role: "Training Officer & English Instructor",
        avatar: patricia,
      },
    ],
  },
  // {
  //   title: "Training & Academic Coordination",
  //   icon: "bi-mortarboard",
  //   members: [
  //     {
  //       name: "Patricia Masiri",
  //       role: "Training Officer & English Instructor",
  //       avatar: patricia,
  //     },
  //   ],
  // },
  {
    title: "Communication & Marketing",
    icon: "bi-megaphone-fill",
    members: [
      {
        name: "Manasse Aksanti",
        role: "Head of Communications & Marketing / English Instructor",
        avatar: manasse,
      },
      {
        name: "Fadhili Nfundiko",
        role: "Communications Assistant",
        avatar: fadhili,
      },
    ],
  },
  {
    title: "English Department",
    icon: "bi-translate",
    members: [
      {
        name: "Guylaine Kashingi",
        role: "English Instructor & Head of Teachers Practical Sessions",
        avatar: guylaine,
      },
      {
        name: "Jansen Magambo",
        role: "English & Computer Science Instructor",
        avatar: jansen,
      },
      {
        name: "Sylvie Bululu",
        role: "Head of Alumni Program & English Instructor",
        avatar: sylvie,
      },
      {
        name: "Daniel Akilimali",
        role: "English Instructor & Alumni Program Assistant",
        avatar: "",
      },
      {
        name: "Precious Heshima",
        role: "English Instructor & Alumni Program Assistant",
        avatar: "",
      },
    ],
  },
  {
    title: "Languages & Cultural Programs",
    icon: "bi-globe2",
    members: [
      {
        name: "Authentic Binombe",
        role: "Spanish & Chinese Instructor / Head of Cultural Activities",
        avatar: authentic,
      },
      {
        name: "Breeder Sumbwa",
        role: "Spanish, Chinese & Computer Science Instructor",
        avatar: breeder,
      },
    ],
  },
  {
    title: "Beauty & Makeup",
    icon: "bi-brush-fill",
    members: [
      {
        name: "Anne-Marie Semba",
        role: "Makeup Specialist",
        avatar: marie,
      },
    ],
  },
];
/* =======================
   TEAM CAROUSEL (FIXED)
======================= */

function TeamSection() {
  const [groupIndex, setGroupIndex] = useState(0);
  const [memberIndex, setMemberIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const group = teamGroups[groupIndex];
  const member = group.members[memberIndex];

  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      setMemberIndex((prevMember) => {
        const isLastMember = prevMember + 1 >= group.members.length;

        if (!isLastMember) {
          return prevMember + 1;
        }

        // move to next group
        setGroupIndex((prevGroup) => {
          const nextGroup = (prevGroup + 1) % teamGroups.length;

          // reset member index when group changes
          setMemberIndex(0);

          return nextGroup;
        });

        return 0;
      });
    }, 3200);

    return () => clearInterval(id);
  }, [paused, group.members.length, groupIndex]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="space-y-6"
    >
      {/* GROUP HEADER */}
      <h2 className="flex items-center gap-2 text-heading3 font-bold text-brand-secondary">
        <i className={`bi ${group.icon} text-brand-primary`} />
        {group.title}
      </h2>

      {/* MEMBER CARD */}
      <div className="rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-700">
        <TeamAvatar
          name={member.name}
          avatar={member.avatar}
          className="mx-auto mb-4"
        />

        <h3 className="text-xl font-semibold text-brand-secondary">
          {member.name}
        </h3>

        <p className="text-gray-600 mt-1">{member.role}</p>

        <p className="mt-2 text-xs uppercase tracking-wide text-gray-400">
          Forward To Success Team
        </p>
      </div>

      {/* DOT NAV */}
      <div className="flex justify-center gap-2">
        {group.members.map((_, i) => (
          <button
            key={i}
            onClick={() => setMemberIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === memberIndex
                ? "w-8 bg-brand-primary"
                : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* =======================
   MAIN PAGE
======================= */

export default function About() {
  return (
    <div className="bg-brand-background text-gray-800">

      {/* INTRO */}
      <section className="border-b bg-gradient-to-b from-white to-page px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-widest text-brand-primary font-semibold">
            Our story
          </p>

          <h1 className="text-heading3 md:text-heading1 font-bold text-brand-secondary mb-6">
            About Forward To Success
          </h1>

          <p className="text-lg text-gray-600 md:text-xl leading-relaxed">
            Forward To Success is an educational institution focused on languages,
            digital skills, and empowerment through practical training.
          </p>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">

          <article className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-section transition duration-300 hover:-translate-y-1 hover:border-brand-primary/20 hover:shadow-lg">
            <div className="flex space-x-2">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary transition group-hover:bg-brand-primary group-hover:text-white">
               <i className="bi bi-bullseye text-heading3" aria-hidden/>
              </div>
              <h2 className="flex items-center gap-2 text-heading3 font-bold text-brand-secondary mb-3">
                Mission
              </h2>
            </div>
            <p className="text-gray-600">
              Deliver accessible education and practical skills training for languages, technology, and personal development.
            </p>
          </article>

          <article className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-section transition duration-300 hover:-translate-y-1 hover:border-brand-primary/20 hover:shadow-lg">
            <div className="flex space-x-2">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary transition group-hover:bg-brand-primary group-hover:text-white">
                <i className="bi bi-eye text-heading3" aria-hidden/>
              </div>
              <h2 className="flex items-center gap-2 text-heading3 font-bold text-brand-secondary mb-3">
                Vision
              </h2>
            </div>
            <p className="text-gray-600">
              Build a community where every learner can transform skills into real opportunities.
            </p>
          </article>

        </div>
      </section>

      {/* WHO WE ARE + TEAM */}
      <section className="bg-page px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">

          <div>
            <h2 className="flex items-center gap-2 text-heading3 font-bold text-brand-secondary mb-4">
              <i className="bi bi-people-fill text-brand-primary" />
              Who we are
            </h2>

            <p className="text-gray-600 mb-4">
              We are an educational institution offering structured training in languages, programming, communication, and cultural development.
            </p>

            <p className="text-gray-600">
              Our team is organized into departments to ensure quality education delivery and student success.
            </p>
          </div>

          <div>
            <TeamSection />
          </div>

        </div>
      </section>

      {/* IMPACT */}
      <section className="px-6 py-16 md:px-16 md:py-24">
        <h2 className="text-center text-heading3 font-bold text-brand-secondary mb-10">
          Impact at a glance
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "500+", label: "Students trained" },
            { value: "6+", label: "Departments" },
            { value: "Free", label: "Core programs" },
            { value: "Expert", label: "Professional trainers" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white p-6 text-center shadow-section transition duration-300 hover:-translate-y-1 hover:border-brand-primary/20 hover:shadow-lg"
            >
              <p className="text-3xl font-bold text-brand-accent">
                {item.value}
              </p>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-page px-6 py-16 md:px-16 md:py-24">
        <h2 className="text-center text-heading3 font-bold text-brand-secondary mb-10">
          Our core values
        </h2>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {[
            { title: "Accessibility", desc: "Education for everyone regardless of background." },
            { title: "Practical Learning", desc: "Real-world skills applied directly." },
            { title: "Excellence", desc: "High-quality teaching and structure." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-8 text-center shadow-section transition duration-300 hover:-translate-y-1 hover:border-brand-primary/20 hover:shadow-lgshadow-section"
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
            Join Forward To Success and build real skills for the future.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full max-w-md mx-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center bg-brand-accent px-5 py-3 rounded-btnRadius text-white font-medium transition hover:opacity-90"
            >
              Get in touch
            </Link>

            <Link
              to="/programs"
              className="w-full sm:w-auto text-center border border-white/40 px-5 py-3 rounded-btnRadius text-white font-medium transition hover:bg-white/10"
            >
              View programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}