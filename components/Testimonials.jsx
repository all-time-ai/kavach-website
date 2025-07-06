import React from "react";

const testimonials = [
    {
        name: "Anjali S.",
        feedback:
            "I caught someone sneaking into my yard and the camera shouted at them. They ran instantly! Worth every rupee.",
    },
    {
        name: "Rahul M.",
        feedback:
            "Finally a camera that doesn’t just record. The sound warning is loud and effective. Easy to install too.",
    },
    {
        name: "Priya K.",
        feedback:
            "Setup was simple, and I love the app alerts. I feel way more secure when I travel now.",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-6">
                    What Our Customers Say
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    Join thousands of homeowners who trust Kavach Cam to protect their property.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
                        >
                            <p className="text-grey-500 italic">“{t.feedback}”</p>
                            <p className="mt-4 text-sm font-semibold text-sky-800">— {t.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
