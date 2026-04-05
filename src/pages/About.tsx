import { useState, useEffect } from "react";

export default function About() {
  const teamMembers = [
    {
    name: "Bright Mugabe",
    role: "CEO & Founder",
    image: "assets/aimages/herve.jpg",
    },
    {
    name: "Herve Mashukane",
    role: "CTO & CO-Founder",
    image: "assets/aimages/herve.jpg",
    },
    {
    name: "Patricia Masiri",
    role: "Training Officer",
    image: "assets/aimages/herve.jpg",
    },
    {
    name: "Anne-Marie Semba",
    role: "Make-up Specialist",
    image: "assets/aimages/herve.jpg",
    },
  ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

  return (
    <div className="bg-brand-background text-gray-800">

      {/* FIRST SECTION GRID */}
      <section className="px-6 md:px-16 py-20 bg-gray-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-heading2 text-brand-primary mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600">
            We are a passionate team of qualified trainers committed to empowering individuals 
            through language education, technology, and practical skills that shape real-world success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div>
            <h3 className="text-heading3 mb-4 text-brand-secondary">
              Who We Are
            </h3>

            <p className="text-gray-600 mb-6">
              Forward To Success provides high-quality training in English, French, Spanish, and Chinese, 
              alongside professional programs in Computer Science and Make-up.
            </p>

            <p className="text-gray-600 mb-6">
              Our language programs are offered completely free to ensure accessibility, while our 
              specialized trainings are provided at a minimal cost to maintain quality and sustainability.
            </p>

            <p className="text-gray-600">
              We focus on practical, real-world learning guided by experienced trainers, helping 
              students build confidence, gain skills, and unlock new opportunities.
            </p>
          </div>
          {/* TEAM */}
          <div className="px-6 md:px-16 py-20 text-center">
              <h3 className="text-heading3 mb-4 text-brand-secondary">
                  Meet Our Team
              </h3>

              <div className="flex justify-center items-center h-[250px] w-full">

                  {teamMembers.map((member, index) => (
                  <div
                      key={index}
                      className={`absolute transition-all duration-700 ease-in-out
                      ${index === currentIndex
                          ? "opacity-100 translate-y-0 scale-100 z-10"
                          : "opacity-0 translate-y-10 scale-95 z-0"
                      }`}
                  >
                      <div className="bg-gray-50 p-6 rounded-inputRadius shadow-btnShadow md:w-[500px">

                      <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-brand-accent"
                      />

                      <h3 className="text-xl text-brand-secondary">
                          {member.name}
                      </h3>

                      <p className="text-gray-600 text-small">
                          {member.role}
                      </p>

                      </div>
                  </div>
                  ))}
              </div>
          </div>
        </div>
      </section>
      {/* SECOND SECTION GRID */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT STATS */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-inputRadius shadow-inputShadow text-center">
            <h4 className="text-heading3 text-brand-accent mb-2">500+</h4>
            <p className="text-gray-600 text-small">Students Trained</p>
          </div>

          <div className="bg-white p-6 rounded-inputRadius shadow-inputShadow text-center">
            <h4 className="text-heading3 text-brand-accent mb-2">5+</h4>
            <p className="text-gray-600 text-small">Courses Offered</p>
          </div>

          <div className="bg-white p-6 rounded-inputRadius shadow-inputShadow text-center">
            <h4 className="text-heading3 text-brand-accent mb-2">Free</h4>
            <p className="text-gray-600 text-small">Language Programs</p>
          </div>

          <div className="bg-white p-6 rounded-inputRadius shadow-inputShadow text-center">
            <h4 className="text-heading3 text-brand-accent mb-2">Expert</h4>
            <p className="text-gray-600 text-small">Certified Trainers</p>
          </div>
        </div>
        {/* RIGHT VALUES */}
        <section className="px-6 md:px-16 py-20">
          <h3 className="text-heading3 mb-4 text-brand-secondary">
            Our Core Values
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Accessibility",
                desc: "Education should be available to everyone regardless of background.",
              },
              {
                title: "Practical Learning",
                desc: "We focus on skills that can be applied in real-world situations.",
              },
              {
                title: "Excellence",
                desc: "We maintain high standards through expert trainers and structured programs.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-inputRadius text-center hover:shadow-btnShadow transition">
                <h3 className="text-heading3 mb-3 text-brand-accent">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="px-6 md:px-16 py-20 bg-brand-primary text-white text-center">
        <h2 className="text-heading2 mb-6">
          Start Your Journey Today
        </h2>

        <p className="text-body mb-6">
          Join hundreds of learners transforming their future with us.
        </p>

        <button className="bg-brand-accent text-white py-btnY px-btnX rounded-btnRadius shadow-btnShadow font-bold hover:bg-brand-accent-hover transition">
          Join Now
        </button>
      </section>

    </div>
  );
}