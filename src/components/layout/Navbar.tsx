import { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { btnPrimary, focusRing } from "../../lib/ui";
import WhatsAppFloat from "../ui/WhatsAppFloat";
import ScrollToTop from "../ui/ScrollToTop";
import logo from "../../assets/images/logo.png";

const navLinks = [
  { to: "/", label: "Home", icon: "bi-house-fill", end: true },
  { to: "/about", label: "About", icon: "bi-info-circle-fill" },
  { to: "/programs", label: "Programs", icon: "bi-journal-bookmark-fill" },
  { to: "/contact", label: "Contact", icon: "bi-envelope-fill" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 px-4 py-3 rounded-md text-sm font-semibold transition ${
    isActive ? "text-brand-accent font-bold" : "text-gray-800 hover:text-brand-accent hover:font-bold"
  }`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const closeMobile = () => setIsOpen(false);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) setIsOpen(false);
    };
    handleResize(mediaQuery);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-gray-200/80 bg-brand-background/90 backdrop-blur-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          {/* LOGO */}
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <Link
              to="/"
              className="flex items-center gap-3"
              onClick={closeMobile}
            >
              <img
                src={logo}
                alt="ForwardToSuccess Logo"
                className="h-10 w-auto object-contain transition-transform duration-300"
              />
              <span className="text-xl font-bold text-brand-accent">
                ForwardToSuccess
              </span>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-6 font-medium">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={navLinkClass}
                >
                  <i className={`bi ${link.icon}`} />
                  {link.label}
                </NavLink>
              ))}

              {/* LANGUAGE */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className={`flex items-center gap-2 ${focusRing} rounded-md px-2 py-1 text-gray-700 hover:text-brand-accent`}
                  aria-haspopup="true"
                  aria-expanded={langOpen}
                >
                  <i className="bi bi-translate" />
                  Languages
                  <i
                    className={`bi bi-chevron-down text-xs transition-transform ${
                      langOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {langOpen && (
                  <div className="absolute top-10 left-0 w-44 rounded-lg border bg-white/80 backdrop-blur-sm shadow-lg z-50">
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
              <i className="bi bi-heart-fill" /> Donate
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className={`md:hidden p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition ${focusRing}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"} text-2xl`} />
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {isOpen && (
          <>
            {/* Overlay behind mobile menu */}
            <div
              className="fixed inset-0 bg-black/30 z-40"
              onClick={closeMobile}
            />

            <div className="md:hidden absolute top-full left-0 w-full bg-white backdrop-blur-sm shadow-lg rounded-b-lg animate-toastIn z-50">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={navLinkClass}
                  onClick={closeMobile}
                >
                  <i className={`bi ${link.icon}`} />
                  {link.label}
                </NavLink>
              ))}

              {/* Languages link in mobile */}
              <div className="flex items-center gap-2 px-4 py-3 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100 cursor-pointer">
                <i className="bi bi-translate" />
                Languages: English / French<span className="text-xs text-gray-400 uppercase">soon</span>
              </div>

              <Link
                to="/donate"
                className={`${btnPrimary} m-4`}
                onClick={closeMobile}
              >
                <i className="bi bi-heart-fill" /> Donate
              </Link>
            </div>
          </>
        )}
      </nav>

      {/* FLOAT BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppFloat />
      </div>

      <ScrollToTop />
    </>
  );
}