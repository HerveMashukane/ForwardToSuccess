import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { btnPrimary, focusRing } from "../../lib/ui";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 rounded-md px-1 py-0.5 transition duration-200 ${
    isActive
      ? "text-brand-accent"
      : "text-gray-700 hover:text-brand-accent"
  }`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const closeMobile = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/80 bg-brand-background/90 px-6 py-4 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="text-heading3 font-bold text-brand-accent transition hover:opacity-90"
          onClick={closeMobile}
        >
          ForwardToSuccess
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6 text-body font-medium">
            <NavLink to="/" end className={navLinkClass}>
              <i className="bi bi-house-fill" aria-hidden />
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              <i className="bi bi-info-circle-fill" aria-hidden />
              About
            </NavLink>
            <NavLink to="/programs" className={navLinkClass}>
              <i className="bi bi-journal-bookmark-fill" aria-hidden />
              Programs
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              <i className="bi bi-envelope-fill" aria-hidden />
              Contact
            </NavLink>

            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-2 text-gray-700 transition hover:text-brand-accent ${focusRing} rounded-md`}
                aria-expanded={langOpen}
                aria-haspopup="true"
              >
                <i className="bi bi-translate" aria-hidden />
                Languages
                <i
                  className={`bi bi-chevron-down text-sm transition-transform ${langOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>

              {langOpen && (
                <div className="absolute left-0 top-11 z-50 flex min-w-[180px] flex-col gap-1 rounded-inputRadius border border-gray-100 bg-white p-2 shadow-lg">
                  <span className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Coming soon
                  </span>
                  <span className="px-3 py-2 text-sm text-gray-600">
                    English / French site toggle
                  </span>
                </div>
              )}
            </div>
          </div>

          <Link
            to="/donate"
            className={`${btnPrimary} shadow-md hover:shadow-lg`}
          >
            <i className="bi bi-heart-fill" aria-hidden />
            Donate
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            to="/donate"
            className={`${btnPrimary} px-4 py-2 text-sm`}
            onClick={closeMobile}
          >
            <i className="bi bi-heart-fill" aria-hidden />
            Donate
          </Link>
          <button
            type="button"
            className={`rounded-md p-2 text-gray-800 ${focusRing}`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"} text-2xl`} />
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 top-full z-40 border-b border-gray-200 bg-brand-background shadow-md transition-all duration-300 ease-out md:hidden ${
          isOpen
            ? "pointer-events-auto max-h-[480px] opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          <NavLink to="/" end className={navLinkClass} onClick={closeMobile}>
            <i className="bi bi-house" aria-hidden />
            Home
          </NavLink>
          <NavLink to="/programs" className={navLinkClass} onClick={closeMobile}>
            <i className="bi bi-journal-bookmark" aria-hidden />
            Programs
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={closeMobile}>
            <i className="bi bi-people" aria-hidden />
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={closeMobile}>
            <i className="bi bi-envelope" aria-hidden />
            Contact
          </NavLink>
          <div className="mt-2 border-t border-gray-100 pt-3 text-sm text-gray-500">
            <span className="flex items-center gap-2 font-semibold text-gray-700">
              <i className="bi bi-translate" aria-hidden />
              Languages
            </span>
            <p className="ml-7 mt-1 text-xs">Localized experience coming soon.</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
