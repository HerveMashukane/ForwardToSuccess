import { memo, useState } from "react";

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      'You can enroll by clicking the "Start Learning" button on our homepage and following the steps.',
  },
  {
    question: "Are there any fees for the courses?",
    answer:
      "Our language programs are free. Some advanced courses require a small fee.",
  },
  {
    question: "Do I get a certificate?",
    answer:
      "Yes, you will receive a certificate after completing your course.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Yes, our team is available to guide you throughout your learning journey.",
  },
];

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-6 md:px-16 py-20 bg-gray-50">

      {/* TITLE */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-heading2 text-brand-secondary mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600">
          Have questions or want to get started? Send us a message or explore our FAQs.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT: FORM */}
        <div className="bg-white p-8 rounded-inputRadius shadow-inputShadow">

          <h3 className="text-heading3 text-brand-primary mb-6">
            Send a Message
          </h3>

          <form className="space-y-5">

            {/* NAME */}
            <div>
              <label className="block text-sm mb-1 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-inputRadius border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-inputRadius border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary transition"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm mb-1 font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-inputRadius border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary transition"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-brand-primary text-white py-3 rounded-btnRadius font-semibold shadow-btnShadow hover:bg-brand-primary-hover transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT: FAQ */}
        <div>

          <h3 className="text-heading3 text-brand-secondary mb-6">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-inputRadius shadow-inputShadow overflow-hidden"
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-brand-primary">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`px-6 transition-all duration-300 ${
                    activeIndex === index
                      ? "max-h-40 py-4 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
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