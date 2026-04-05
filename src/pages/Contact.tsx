import { memo, useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // VALIDATION
  const validate = (field: string, value: string) => {
    let error = "";

    if (field === "name" && value.trim().length < 3) {
      error = "Name must be at least 3 characters";
    }

    if (
      field === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      error = "Invalid email format";
    }

    if (field === "message" && value.trim().length < 10) {
      error = "Message must be at least 10 characters";
    }

    setErrors((prev: any) => ({ ...prev, [field]: error }));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validate(name, value);
  };

  // SUBMIT
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Check errors
    const hasErrors = Object.values(errors).some((e) => e);
    const hasEmpty = Object.values(form).some((v) => !v);

    if (hasErrors || hasEmpty) return;

    // Success state
    setSubmitted(true);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    // Reset form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="px-6 md:px-16 py-20 bg-gray-50 relative">

      {/* TOAST */}
      {showToast && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          Message sent successfully 🚀
        </div>
      )}

      {/* SUCCESS STATE */}
      {submitted && (
        <div className="text-center mb-10 animate-fade-in">
          <h3 className="text-green-600 text-xl font-bold">
            ✅ Your message has been sent!
          </h3>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-12">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md space-y-6"
        >
          <h3 className="text-xl font-bold text-brand-primary">
            Send a Message
          </h3>

          {/* FLOATING INPUT COMPONENT */}
          {["name", "email"].map((field) => (
            <div key={field} className="relative">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={form[field as keyof typeof form]}
                onChange={handleChange}
                className="peer w-full border border-gray-300 px-4 pt-5 pb-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                placeholder=" "
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-3.5 
                peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-gray-400
                peer-focus:top-2 
                peer-focus:text-sm 
                peer-focus:text-brand-primary">
                {field === "name" ? "Full Name" : "Email"}
              </label>

              {errors[field] && (
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
              className="peer w-full border border-gray-300 px-4 pt-5 pb-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder=" "
            ></textarea>

            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-3.5 
              peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400
              peer-focus:top-2 
              peer-focus:text-sm 
              peer-focus:text-brand-primary">
              Message
            </label>

            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-brand-primary text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition transform"
          >
            Send Message
          </button>
        </form>

        {/* SIMPLE FAQ (kept clean) */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-brand-secondary">
            FAQs
          </h3>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-medium">How do I enroll?</h4>
            <p className="text-sm text-gray-600">
              Click "Start Learning" and follow instructions.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-medium">Are courses free?</h4>
            <p className="text-sm text-gray-600">
              Language courses are free; others may require a fee.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-medium">Do I get a certificate?</h4>
            <p className="text-sm text-gray-600">
              Yes, after completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);