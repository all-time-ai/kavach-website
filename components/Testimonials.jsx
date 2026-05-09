"use client"

import React from "react";
import { motion } from "framer-motion";

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
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-sky-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Customers Say
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Join thousands of homeowners who trust Rakshak Cam to protect their property.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-grey-500 italic">“{t.feedback}”</p>
              <p className="mt-4 text-sm font-semibold text-sky-800">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
