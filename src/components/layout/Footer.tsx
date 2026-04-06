import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-12 text-gray-400 md:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        {/* Logo & Description */}
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

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Quick links</h4>
          <ul className="space-y-2 text-small">
            {[
              { name: "Home", to: "/" },
              { name: "Programs", to: "/programs" },
              { name: "About", to: "/about" },
              { name: "Contact", to: "/contact" },
              { name: "Donate", to: "/donate" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="transition duration-300 hover:text-white hover:translate-x-1"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Social</h4>
          <ul className="flex flex-wrap gap-6">
            {[
              { name: "Facebook", href: "https://facebook.com", icon: "bi-facebook text-brand-primary" },
              { name: "WhatsApp", href: "https://wa.me/243985219157", icon: "bi-whatsapp text-green-500" },
              { name: "TikTok", href: "https://tiktok.com", icon: "bi-tiktok text-gray-300" },
              { name: "YouTube", href: "https://youtube.com", icon: "bi-youtube text-brand-accent" },
            ].map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex flex-col items-center gap-1 text-xs transition-transform duration-300 hover:text-white hover:-translate-y-1 hover:scale-110"
                >
                  <i className={`bi ${social.icon} text-2xl`} aria-hidden />
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Contact</h4>
          <p className="text-small">
            <a
              href="mailto:forwardtosuccess@gmail.com"
              className="transition duration-300 hover:text-white hover:underline"
            >
              forwardtosuccess@gmail.com
            </a>
          </p>
          <p className="mt-2 text-small">
            <a
              href="tel:+243985219157"
              className="transition duration-300 hover:text-white hover:underline"
            >
              +243 985 219 157
            </a>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-12 max-w-7xl border-t border-gray-800 pt-6 text-center text-xs text-gray-500 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
        <span>© {new Date().getFullYear()} ForwardToSuccess</span>
        <span className="flex items-center gap-1">
          Made with{" "}
          <i className="bi bi-heart-fill text-brand-accent animate-pulse" aria-hidden /> by Hervé Mashukane
        </span>
        <span>• All rights reserved.</span>
      </div>
    </footer>
  );
}