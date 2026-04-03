import { useEffect, useState } from "react";
import heroBanner from "../assets/images/banner.jpg";

export default function Home() {
  const texts = [
    "Train • Transform • Inspire",
    "Push Forward",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, 70);

      if (displayText === currentText) {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }, 40);

      if (displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="bg-brand-background text-gray-800">

        {/* HERO SECTION */}
        <section className="relative px-6 md:px-16 py-20 grid md:grid-cols-2 gap-12 items-center overflow-hidden">
        {/* LEFT: Animated Text */}
            <div className="relative z-10">
                <h1 className="text-heading2 md:text-heading1 font-bold text-brand-secondary leading-tight mb-6">
                Build Your Future with <span className="text-brand-primary">Forward To Success</span>
                </h1>
                <h2 className="text-heading3 md:text-heading2 font-bold text-gray-900 leading-tight mb-6">
                <span className="text-brand-primary">{displayText}</span>
                <span className="ml-1 animate-pulse text-brand-primary">|</span>
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                Learn English, French, Spanish, Chinese and Computer Science with modern,
                practical training designed to get you real-world results.
                </p>

                {/* CTA */}
                <div className="flex flex-wrap gap-4 mb-6">
                <button className="bg-brand-primary hover:bg-brand-primary-hover text-white px-btnX py-btnY rounded-btnRadius shadow-btnShadow font-semibold transition">
                    Start Learning
                </button>
                <button className="border border-gray-300 text-gray-700 px-btnX py-btnY rounded-btnRadius hover:bg-gray-100 transition font-semibold">
                    Explore Programs
                </button>
                </div>

                {/* TRUST BADGES */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                    <i className="bi bi-people-fill text-brand-primary"></i>
                    <span>500+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                    <i className="bi bi-patch-check-fill text-brand-secondary"></i>
                    <span>Certified Trainers</span>
                </div>
                <div className="flex items-center gap-2">
                    <i className="bi bi-lightning-fill text-brand-primary"></i>
                    <span>Practical Learning</span>
                </div>
                </div>
            </div>

            {/* RIGHT: Hero Image with Opposite Oval Motion Circles */}
            <div className="relative flex justify-center items-center">

                {/* Top-left circle going down */}
                <div className="absolute w-72 h-72 bg-brand-secondary/20 rounded-full -left-16 -top-16 z-0"></div>

                {/* Hero Image */}
                <img src={heroBanner} alt="hero banner" className="relative z-10 rounded-xl shadow-lg" />

                {/* Bottom-right circle going up */}
                <div className="absolute w-56 h-56 bg-brand-secondary/30 rounded-full -right-12 bottom-0 z-0"></div>
            </div>
        </section>

      {/* COURSES SECTION */}
      {/* <section className="px-6 md:px-16 py-20">
        <h2 className="text-heading2 text-center mb-12 text-brand-primary">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["English", "French", "Spanish", "Chinese", "Computer Science"].map((course, i) => (
            <div key={i} className="border rounded-inputRadius p-6 hover:shadow-btnShadow transition cursor-pointer">
              <h3 className="text-heading3 mb-2">{course}</h3>
              <p className="text-body text-gray-600">
                Learn {course} with structured lessons and expert guidance.
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA SECTION */}
      {/* <section className="px-6 md:px-16 py-20 bg-brand-primary text-white text-center">
        <h2 className="text-heading2 mb-6">
          Start Your Journey Today
        </h2>

        <p className="text-body mb-6">
          Join thousands of learners improving their skills and transforming their future.
        </p>

        <button className="bg-white text-brand-primary py-btnY px-btnX rounded-btnRadius shadow-btnShadow font-bold hover:bg-gray-200 transition">
          Join Now
        </button>
      </section> */}

        {/* FOOTER */}
        {/* <footer className="px-6 md:px-16 py-10 bg-gray-900 text-gray-400">
            <div className="grid md:grid-cols-3 gap-8">

                <div>
                    <h3 className="text-white text-heading3 mb-4">ForwardToSuccess</h3>
                    <p className="flex flex-col text-small">
                        Push Forward
                    <span className="text-xs">Empowering students with language and technology skills.</span>
                    </p>
                </div>

                <div>
                    <h4 className="text-white mb-3">Quick Links</h4>
                    <ul className="space-y-2">
                    <li>Home</li>
                    <li>Courses</li>
                    <li>Team</li>
                    <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white mb-3">Contact</h4>
                    <p>Email: contact@forwardtosuccess.com</p>
                    <p>Phone: +243 XXX XXX XXX</p>
                </div>
            </div>

            <div className="text-center mt-10 text-small">
                &copy;{new Date().getFullYear()}. Made with 
                <span>
                    <i className="bi bi-heart-fill text-brand-primary"></i>
                </span> 
                by Hervé Mashukane. All rights reserved.
            </div>
        </footer> */}
    </div>
  );
}