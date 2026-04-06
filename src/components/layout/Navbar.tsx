import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { btnPrimary, focusRing } from "../../lib/ui";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 rounded-md px-3 py-2 text-sm transition ${
    isActive
      ? "text-brand-accent"
      : "text-gray-700 hover:text-brand-accent"
  }`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);

  const closeMobile = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // check screen size on resize and clode
  useEffect(() => {
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
    if (e.matches) {
      setIsOpen(false); // close menu when switching to desktop
    }
  };

  // Run once on mount
  handleResize(mediaQuery);

  // Listen for changes
  mediaQuery.addEventListener("change", handleResize);

  return () => {
    mediaQuery.removeEventListener("change", handleResize);
  };
}, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/80 bg-brand-background/90 backdrop-blur-md">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl md:text-heading3 font-bold text-brand-accent"
          onClick={closeMobile}
        >
          ForwardToSuccess
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-10 md:flex">
          
          <div className="flex items-center gap-6 font-medium">
            <NavLink to="/" end className={navLinkClass}>
              <i className="bi bi-house-fill" />
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              <i className="bi bi-info-circle-fill" />
              About
            </NavLink>
            <NavLink to="/programs" className={navLinkClass}>
              <i className="bi bi-journal-bookmark-fill" />
              Programs
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              <i className="bi bi-envelope-fill" />
              Contact
            </NavLink>

            {/* LANGUAGE */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-2 ${focusRing} rounded-md px-2 py-1 text-gray-700 hover:text-brand-accent`}
              >
                <i className="bi bi-translate" />
                Languages
                <i className={`bi bi-chevron-down text-xs ${langOpen ? "rotate-180" : ""}`} />
              </button>

              {langOpen && (
                <div className="absolute top-10 left-0 w-44 rounded-lg border bg-white shadow-lg">
                  <div className="p-3 text-xs text-gray-400 uppercase">
                    Coming soon
                  </div>
                  <div className="px-3 pb-3 text-sm text-gray-600">
                    English / French
                  </div>
                </div>
              )}
            </div>
          </div>

          <Link to="/donate" className={`${btnPrimary}`}>
            <i className="bi bi-heart-fill" />
            Donate
          </Link>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className={`md:hidden p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition ${focusRing}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"} text-2xl`} />
        </button>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={closeMobile}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER (IMPORTANT ADDITION) */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <span className="font-semibold text-brand-accent">
            Menu
          </span>

          <button
            onClick={closeMobile}
            className="rounded-md p-2 hover:bg-gray-100 transition"
          >
            <i className="bi bi-x-lg text-xl transition-transform duration-300 ease-in-out hover:rotate-90 hover:scale-110" />
          </button>
        </div>

        {/* LINKS */}
        <div className="bg-white flex flex-col gap-3 p-6">
          <NavLink to="/" end className={navLinkClass} onClick={closeMobile}>
            <i className="bi bi-house-fill" />
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={closeMobile}>
            <i className="bi bi-info-circle-fill" />
            About
          </NavLink>
          <NavLink to="/programs" className={navLinkClass} onClick={closeMobile}>
            <i className="bi bi-journal-bookmark-fill" />
            Programs
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={closeMobile}>
            <i className="bi bi-envelope-fill" />
            Contact
          </NavLink>

          <Link
            to="/donate"
            className={`${btnPrimary} mt-4`}
            onClick={closeMobile}
          >
            <i className="bi bi-heart-fill" />
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}