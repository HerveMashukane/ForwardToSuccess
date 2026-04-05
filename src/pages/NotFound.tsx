import { Link } from "react-router-dom";
import { btnPrimary, btnSecondary } from "../lib/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-primary">
        404
      </p>
      <h1 className="mb-4 text-heading2 font-bold text-gray-900 md:text-heading1">
        Page not found
      </h1>
      <p className="mb-10 max-w-md text-gray-600">
        The page you are looking for does not exist or has been moved. Use the
        links below to continue exploring ForwardToSuccess.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/" className={btnPrimary}>
          <i className="bi bi-house-fill" aria-hidden />
          Home
        </Link>
        <Link to="/contact" className={btnSecondary}>
          Contact us
        </Link>
      </div>
    </section>
  );
}
