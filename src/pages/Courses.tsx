

export default function Courses() {
    return(
        <div>
            {/* COURSES SECTION */}
            <section className="px-6 md:px-16 py-20">
                <h2 className="text-heading2 text-center mb-12 text-brand-primary">
                Our Programs
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                {["English", "French", "Spanish", "Chinese", "make up", "Computer Science"].map((course, i) => (
                    <div key={i} className="border rounded-inputRadius p-6 hover:shadow-btnShadow transition cursor-pointer">
                    <h3 className="text-heading3 mb-2">{course}</h3>
                    <p className="text-body text-gray-600">
                        Learn {course} with structured lessons and expert guidance.
                    </p>
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
    )
}