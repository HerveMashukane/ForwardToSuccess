import { memo, useState } from "react";

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "Click on 'Start Learning' and follow the registration process.",
  },
  {
    question: "Are courses free?",
    answer:
      "Language courses are free. Some specialized programs require a small fee.",
  },
  {
    question: "Do I receive a certificate?",
    answer:
      "Yes, certificates are issued upon successful completion.",
  },
  {
    question: "Is support available?",
    answer:
      "Our team is available to assist you throughout your learning journey.",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [touched, setTouched] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<"idle" | "show" | "hide">("idle");
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [lastSubmit, setLastSubmit] = useState<number>(0);

  // VALIDATION
  const validate = (field: string, value: string) => {
    let error = "";

    if (field === "name" && value.trim().length < 3) {
      error = "Please enter at least 3 characters.";
    }

    if (
      field === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      error = "Please enter a valid email address.";
    }

    if (field === "message" && value.trim().length < 10) {
      error = "Your message should be at least 10 characters.";
    }

    setErrors((prev: any) => ({ ...prev, [field]: error }));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validate(name, value);
  };

  const handleBlur = (e: any) => {
    const { name } = e.target;
    setTouched((prev: any) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmit < 10000) {
      setToast("show");
      return;
    }

    const hasErrors = Object.values(errors).some(Boolean);
    const hasEmpty = Object.values(form).some((v) => !v);

    if (hasErrors || hasEmpty) {
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setLoading(true);

    await new Promise((res) => setTimeout(res, 1500));

    setLoading(false);
    setLastSubmit(now);

    setToast("show");
    setTimeout(() => setToast("hide"), 2500);
    setTimeout(() => setToast("idle"), 3000);

    setForm({ name: "", email: "", message: "" });
    setTouched({});
  };

  return (
    <div className="px-6 md:px-16 py-20 bg-gray-50 relative">

      {/* TOAST */}
      {toast !== "idle" && (
        <div
          className={`fixed top-6 right-6 px-6 py-3 rounded-lg shadow-lg text-white
          ${toast === "show" ? "bg-green-500 animate-toastIn" : "bg-green-500 animate-toastOut"}`}
        >
          Message sent successfully
        </div>
      )}

      {/* TITLE */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-heading2 text-brand-secondary mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600">
          Reach out to us or explore frequently asked questions.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md space-y-6"
        >
          <h3 className="text-heading3 text-brand-primary">
            Send a Message
          </h3>

          {["name", "email"].map((field) => (
            <div key={field} className="relative">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={form[field as keyof typeof form]}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder=" "
                className={`peer w-full px-4 pt-5 pb-2 rounded-lg border
                ${
                  touched[field] && errors[field]
                    ? "border-red-400 focus:ring-red-400"
                    : "border-gray-300 focus:ring-brand-primary"
                }
                focus:outline-none focus:ring-2`}
              />

              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all
                peer-placeholder-shown:top-3.5
                peer-placeholder-shown:text-base
                peer-focus:top-2
                peer-focus:text-sm
                peer-focus:text-brand-primary">
                {field === "name" ? "Full Name" : "Email"}
              </label>

              {touched[field] && errors[field] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[field]}
                </p>
              )}
            </div>
          ))}

          {/* TEXTAREA */}
          <div className="relative">
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder=" "
              className={`peer w-full px-4 pt-5 pb-2 rounded-lg border
              ${
                touched.message && errors.message
                  ? "border-red-400 focus:ring-red-400"
                  : "border-gray-300 focus:ring-brand-primary"
              }
              focus:outline-none focus:ring-2`}
            />

            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all
              peer-placeholder-shown:top-3.5
              peer-focus:top-2
              peer-focus:text-brand-primary">
              Message
            </label>

            {touched.message && errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-primary text-white py-3 rounded-lg font-semibold
              flex items-center justify-center gap-2
              disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* FAQ */}
        <div>
          <h3 className="text-heading3 text-brand-secondary mb-6">
            FAQs
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveFAQ(activeFAQ === index ? null : index)
                  }
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-100"
                >
                  <span>{faq.question}</span>
                  <span>{activeFAQ === index ? "-" : "+"}</span>
                </button>

                <div
                  className={`px-6 transition-all duration-300 ${
                    activeFAQ === index
                      ? "max-h-40 py-4 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-sm text-gray-600">{faq.answer}</p>
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