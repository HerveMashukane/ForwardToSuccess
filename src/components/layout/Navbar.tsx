import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-background/90 backdrop-blur-md shadow-md px-6 py-4 flex items-center justify-between">
      {/* LOGO */}
      <div className="text-heading3 font-bold text-brand-accent">
        ForwardToSuccess
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-6 text-body relative font-medium">
        <a href="#" className="flex items-center gap-2 hover:text-brand-accent">
          <i className="bi bi-house-fill"></i>
          Home
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-brand-accent">
          <i className="bi bi-info-circle-fill"></i>
          About
        </a>

        {/* DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 hover:text-brand-accent"
          >
            <i className="bi bi-translate"></i>
            Languages
            <i className="bi bi-chevron-down text-sm"></i>
          </button>

          {langOpen && (
            <div className="absolute top-10 left-0 bg-white shadow-lg rounded-inputRadius p-3 flex flex-col gap-2 min-w-[180px]">
              <a href="#" className="hover:text-brand-accent">English</a>
              <a href="#" className="hover:text-brand-accent">French</a>
            </div>
          )}
        </div>

        <a href="#" className="flex items-center gap-2 hover:text-brand-accent">
          <i className="bi bi-journal-bookmark-fill"></i>
          Courses
        </a>

        {/* NEW TEAM LINK */}
        <a href="#" className="flex items-center gap-2 hover:text-brand-accent">
          <i className="bi bi-person-badge-fill"></i>
          Our Team
        </a>

        <a href="#" className="flex items-center gap-2 hover:text-brand-accent">
          <i className="bi bi-envelope-fill"></i>
          Contact
        </a>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex items-center gap-4">
        <button className="bg-brand-secondary hover:bg-brand-secondary-hover text-white py-btnY px-btnX rounded-btnRadius shadow-btnShadow flex items-center gap-2 transition">
          <i className="bi bi-heart-fill"></i>
          Donate
        </button>
        {/* <button className="border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white py-btnY px-btnX rounded-btnRadius transition">
          Login
        </button> */}
      </div>

      {/* MOBILE BUTTON */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <i className="bi bi-list text-2xl"></i>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`absolute top-16 left-0 w-full bg-brand-background shadow-md flex flex-col p-6 gap-4 md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <a href="#" className="flex items-center gap-2">
          <i className="bi bi-house"></i>
          Home
        </a>

        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-2 font-semibold">
            <i className="bi bi-translate"></i>
            Languages
          </span>
          <a href="#" className="ml-6">English</a>
          <a href="#" className="ml-6">French</a>
          <a href="#" className="ml-6">Spanish</a>
          <a href="#" className="ml-6">Chinese</a>
        </div>

        <a href="#" className="flex items-center gap-2">
          <i className="bi bi-laptop"></i>
          Computer Science
        </a>

        <a href="#" className="flex items-center gap-2">
          <i className="bi bi-journal-bookmark"></i>
          Courses
        </a>

        <a href="#" className="flex items-center gap-2">
          <i className="bi bi-people"></i>
          About
        </a>

        {/* TEAM LINK MOBILE */}
        <a href="#" className="flex items-center gap-2">
          <i className="bi bi-person-badge"></i>
          Team
        </a>

        <a href="#" className="flex items-center gap-2">
          <i className="bi bi-envelope"></i>
          Contact
        </a>

        <button className="border border-brand-primary text-brand-primary py-btnY px-btnX rounded-btnRadius mt-2">
          Login
        </button>

        <button className="bg-brand-primary hover:bg-brand-primary-hover text-white py-btnY px-btnX rounded-btnRadius shadow-btnShadow flex items-center justify-center gap-2 mt-2">
          <i className="bi bi-heart-fill"></i>
          Donate
        </button>
      </div>
    </nav>
  );
}