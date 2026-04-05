

export default function Programs() {
    return(
        <div>
            {/* COURSES SECTION */}
            <section className="px-6 md:px-16 py-20">
                <h2 className="text-heading2 text-center mb-12 text-brand-primary">
                Our Programs
                </h2>

                <div className="grid md:grid-cols-3 gap-6 text-brand-secondary">
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
        </div>
    )
}