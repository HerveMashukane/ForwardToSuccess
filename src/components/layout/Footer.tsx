import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-12 text-gray-400 md:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-heading3 font-bold text-white">
            ForwardToSuccess
          </h3>
          <p className="text-small leading-relaxed">
            <span className="block font-medium text-gray-200">Push Forward</span>
            <span className="mt-1 block text-xs text-gray-500">
              Empowering students with language and technology skills.
            </span>
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Quick links</h4>
          <ul className="space-y-2 text-small">
            <li>
              <Link
                to="/"
                className="transition hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/programs"
                className="transition hover:text-white"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/donate" className="transition hover:text-white">
                Donate
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Social</h4>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 text-xs transition hover:text-white"
              >
                Facebook
                <i className="bi bi-facebook text-2xl text-brand-primary" aria-hidden />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/243985219157"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 text-xs transition hover:text-white"
              >
                WhatsApp
                <i className="bi bi-whatsapp text-2xl text-green-500" aria-hidden />
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 text-xs transition hover:text-white"
              >
                TikTok
                <i className="bi bi-tiktok text-2xl text-gray-300" aria-hidden />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 text-xs transition hover:text-white"
              >
                YouTube
                <i className="bi bi-youtube text-2xl text-brand-accent" aria-hidden />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Contact</h4>
          <p className="text-small">
            <a
              href="mailto:forwardtosuccess@gmail.com"
              className="transition hover:text-white"
            >
              forwardtosuccess@gmail.com
            </a>
          </p>
          <p className="mt-2 text-small">
            <a
              href="tel:+243985219157"
              className="transition hover:text-white"
            >
              +243 985 219 157
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-gray-800 pt-8 text-center text-small text-gray-500">
        © {new Date().getFullYear()} ForwardToSuccess• Made with{" "}
        <i className="bi bi-heart-fill text-brand-accent" aria-hidden /> by
        Hervé Mashukane• All rights reserved.
      </div>
    </footer>
  );
}
