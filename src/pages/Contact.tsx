import { memo, useCallback, useRef, useState } from "react";
import { inputBase } from "../lib/ui";

const RATE_LIMIT_MS = 10_000;

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "Use Start Learning on the home page or contact us — we will guide you through registration.",
  },
  {
    question: "Are courses free?",
    answer:
      "Language courses are free. Some specialized programs require a small fee.",
  },
  {
    question: "Do I receive a certificate?",
    answer: "Yes, certificates are issued upon successful completion.",
  },
  {
    question: "Is support available?",
    answer:
      "Our team is available to assist you throughout your learning journey.",
  },
];

type ToastState =
  | { phase: "in"; message: string; variant: "success" | "error" }
  | { phase: "out"; message: string; variant: "success" | "error" };

function runValidation(field: string, value: string): string {
  if (field === "name" && value.trim().length < 3) {
    return "Please enter at least 3 characters.";
  }
  if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Please enter a valid email address.";
  }
  if (field === "message" && value.trim().length < 10) {
    return "Your message should be at least 10 characters.";
  }
  return "";
}

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [lastSubmit, setLastSubmit] = useState(0);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const validateField = useCallback((field: string, value: string) => {
    const error = runValidation(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
    return error;
  }, []);

  const validateAll = useCallback(() => {
    const next: Record<string, string> = {
      name: runValidation("name", form.name),
      email: runValidation("email", form.email),
      message: runValidation("message", form.message),
    };
    setErrors(next);
    return !Object.values(next).some(Boolean);
  }, [form]);

  const showToast = useCallback(
    (message: string, variant: "success" | "error") => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
      setToast({ phase: "in", message, variant });
      hideTimeoutRef.current = setTimeout(() => {
        setToast((t) =>
          t && t.phase === "in" ? { ...t, phase: "out" } : t
        );
      }, 2600);
    },
    []
  );

  const handleToastAnimationEnd = () => {
    setToast((t) => (t?.phase === "out" ? null : t));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    validateField(name, value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const now = Date.now();

    if (now - lastSubmit < RATE_LIMIT_MS) {
      const waitSec = Math.ceil(
        (RATE_LIMIT_MS - (now - lastSubmit)) / 1000
      );
      showToast(
        `Please wait about ${waitSec}s before sending another message.`,
        "error"
      );
      return;
    }

    setTouched({ name: true, email: true, message: true });
    if (!validateAll()) return;

    setLoading(true);
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setLastSubmit(Date.now());

    showToast("Message sent successfully.", "success");
    setForm({ name: "", email: "", message: "" });
    setTouched({});
  };

  const toastStyles =
    toast?.variant === "error"
      ? "bg-red-600"
      : "bg-emerald-600";

  return (
    <div className="relative bg-page px-6 py-16 md:px-16 md:py-20">
      {toast && (
        <div
          role="status"
          aria-live="polite"
          onAnimationEnd={handleToastAnimationEnd}
          className={`fixed right-6 top-6 z-[70] max-w-sm rounded-inputRadius px-5 py-3 text-sm font-medium text-white shadow-lg ${toastStyles} ${
            toast.phase === "in" ? "animate-toastIn" : "animate-toastOut"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-primary">
          We are here to help
        </p>
        <h1 className="mb-4 text-heading2 font-bold text-brand-secondary">
          Contact us
        </h1>
        <p className="text-gray-600">
          Send a message or browse answers to common questions.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-section"
          noValidate
        >
          <h2 className="text-heading3 font-semibold text-brand-primary">
            Send a message
          </h2>

          {(["name", "email"] as const).map((field) => (
            <div key={field} className="relative">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                id={`contact-${field}`}
                value={form[field]}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder=" "
                autoComplete={field === "email" ? "email" : "name"}
                className={`${inputBase} border-gray-300 focus:ring-brand-primary ${
                  touched[field] && errors[field]
                    ? "border-red-400 focus:ring-red-400"
                    : ""
                }`}
              />
              <label
                htmlFor={`contact-${field}`}
                className="pointer-events-none absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-brand-primary"
              >
                {field === "name" ? "Full name" : "Email"}
              </label>
              {touched[field] && errors[field] && (
                <p className="mt-1 text-xs text-red-600">{errors[field]}</p>
              )}
            </div>
          ))}

          <div className="relative">
            <textarea
              name="message"
              id="contact-message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder=" "
              className={`${inputBase} min-h-[120px] resize-y border-gray-300 focus:ring-brand-primary ${
                touched.message && errors.message
                  ? "border-red-400 focus:ring-red-400"
                  : ""
              }`}
            />
            <label
              htmlFor="contact-message"
              className="pointer-events-none absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-brand-primary"
            >
              Message
            </label>
            {touched.message && errors.message && (
              <p className="mt-1 text-xs text-red-600">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-btnRadius bg-brand-primary py-3 font-semibold text-white shadow-btnShadow transition duration-200 hover:bg-brand-primary-hover disabled:pointer-events-none disabled:opacity-60"
          >
            {loading ? (
              <>
                <span
                  className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                  aria-hidden
                />
                Sending…
              </>
            ) : (
              "Send message"
            )}
          </button>
        </form>

        <div>
          <h2 className="mb-6 text-heading3 font-semibold text-brand-secondary">
            FAQs
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-inputRadius border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
              >
                <button
                  type="button"
                  id={`faq-${index}`}
                  aria-expanded={activeFAQ === index}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() =>
                    setActiveFAQ(activeFAQ === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-gray-900 transition hover:bg-gray-50"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span
                    className={`text-brand-accent transition-transform duration-300 ${
                      activeFAQ === index ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    <i className="bi bi-chevron-down" />
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    activeFAQ === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
