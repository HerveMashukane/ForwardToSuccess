import { useEffect, useState } from "react";

export default function Team() {
    const teamMembers = [
        {
        name: "Bright Mugabe",
        role: "CEO & Founder",
        image: "https://i.pravatar.cc/150?img=1",
        },
        {
        name: "Herve Mashukane",
        role: "CTO & Co-Founder",
        image: "https://i.pravatar.cc/150?img=2",
        },
        {
        name: "Patricia Masiri",
        role: "Training Officer",
        image: "https://i.pravatar.cc/150?img=3",
        },
        {
        name: "Anne-Marie Semba",
        role: "Make-up Specialist",
        image: "https://i.pravatar.cc/150?img=4",
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
        <div>
            {/* TEAM (ANIMATED) */}
            <section className="px-6 md:px-16 py-20 bg-white text-center">
                <h2 className="text-heading2 text-brand-secondary mb-12">
                    Meet Our Team
                </h2>

                <div className="relative flex justify-center items-center h-[250px]">

                    {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`absolute transition-all duration-700 ease-in-out
                        ${index === currentIndex
                            ? "opacity-100 translate-y-0 scale-100 z-10"
                            : "opacity-0 translate-y-10 scale-95 z-0"
                        }`}
                    >
                        <div className="bg-gray-50 p-6 rounded-inputRadius shadow-btnShadow w-[260px]">

                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-brand-primary"
                        />

                        <h3 className="text-heading3 text-brand-primary">
                            {member.name}
                        </h3>

                        <p className="text-gray-600 text-small">
                            {member.role}
                        </p>

                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </div>
    )
}


