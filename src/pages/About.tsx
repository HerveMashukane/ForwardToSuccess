export default function About() {
  return (
    <div>

      {/* ABOUT SECTION */}
      <section className="px-6 md:px-16 py-20 bg-gray-50">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-heading2 text-brand-secondary mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600">
            We are a passionate team of qualified trainers committed to empowering individuals 
            through language education, technology, and practical skills that shape real-world success.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT: Description */}
          <div>
            <h3 className="text-heading3 mb-4 text-brand-primary">
              Who We Are
            </h3>

            <p className="text-gray-600 mb-6">
              At Forward To Success, we provide high-quality training in multiple languages 
              including English, French, Spanish, and Chinese. We also offer practical courses 
              in Computer Science and professional Make-up training.
            </p>

            <p className="text-gray-600 mb-6">
              Our mission is to make education accessible and impactful. That’s why our 
              language programs are completely free, while our specialized courses are 
              offered at a minimal cost to ensure sustainability and quality.
            </p>

            <p className="text-gray-600">
              We believe in practical learning, mentorship, and building skills that 
              directly improve career opportunities and personal growth.
            </p>
          </div>

          {/* RIGHT: HIGHLIGHTS / CARDS */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-inputRadius shadow-inputShadow text-center">
              <h4 className="text-heading3 text-brand-primary mb-2">500+</h4>
              <p className="text-gray-600 text-small">Students Trained</p>
            </div>

            <div className="bg-white p-6 rounded-inputRadius shadow-inputShadow text-center">
              <h4 className="text-heading3 text-brand-primary mb-2">5+</h4>
              <p className="text-gray-600 text-small">Courses Offered</p>
            </div>

            <div className="bg-white p-6 rounded-inputRadius shadow-inputShadow text-center">
              <h4 className="text-heading3 text-brand-primary mb-2">Free</h4>
              <p className="text-gray-600 text-small">Language Programs</p>
            </div>

            <div className="bg-white p-6 rounded-inputRadius shadow-inputShadow text-center">
              <h4 className="text-heading3 text-brand-primary mb-2">Expert</h4>
              <p className="text-gray-600 text-small">Certified Trainers</p>
            </div>

          </div>
        </div>
      </section>

      {/* VALUES SECTION (NEW - makes it more professional) */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="text-heading2 text-center mb-12 text-brand-secondary">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Accessibility",
              desc: "We believe education should be available to everyone regardless of background.",
            },
            {
              title: "Practical Learning",
              desc: "We focus on real-world skills that students can immediately apply.",
            },
            {
              title: "Excellence",
              desc: "We maintain high standards through qualified trainers and structured programs.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-inputRadius text-center hover:shadow-btnShadow transition">
              <h3 className="text-heading3 mb-3 text-brand-primary">{item.title}</h3>
              <p className="text-gray-600 text-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 md:px-16 py-20 bg-brand-primary text-white text-center">
        <h2 className="text-heading2 mb-6">
          Start Your Journey Today
        </h2>

        <p className="text-body mb-6">
          Join thousands of learners improving their skills and transforming their future.
        </p>

        <button className="bg-white text-brand-primary py-btnY px-btnX rounded-btnRadius shadow-btnShadow font-bold hover:bg-gray-200 transition">
          Join Now
        </button>
      </section>

    </div>
  );
}