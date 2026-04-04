

export default function About() {

  return (
    <div className="bg-brand-background text-gray-800">

      {/* ABOUT INTRO */}
      <section className="px-6 md:px-16 py-20 bg-gray-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-heading2 text-brand-secondary mb-6">
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
            <h3 className="text-heading3 mb-4 text-brand-primary">
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

          {/* RIGHT STATS */}
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

      {/* VALUES */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="text-heading2 text-center mb-12 text-brand-secondary">
          Our Core Values
        </h2>

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
              <h3 className="text-heading3 mb-3 text-brand-primary">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-20 bg-brand-primary text-white text-center">
        <h2 className="text-heading2 mb-6">
          Start Your Journey Today
        </h2>

        <p className="text-body mb-6">
          Join hundreds of learners transforming their future with us.
        </p>

        <button className="bg-white text-brand-primary py-btnY px-btnX rounded-btnRadius shadow-btnShadow font-bold hover:bg-gray-200 transition">
          Join Now
        </button>
      </section>

    </div>
  );
}