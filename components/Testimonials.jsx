"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Anjali S.",
    location: "Bengaluru",
    feedback:
      "I caught someone sneaking into my yard and the camera shouted at them. They ran instantly. Worth every rupee.",
  },
  {
    name: "Rahul M.",
    location: "Pune",
    feedback:
      "Finally a camera that doesn't just record. The sound warning is loud and effective, and it was easy to install.",
  },
  {
    name: "Priya K.",
    location: "Jaipur",
    feedback:
      "Setup was simple, and I love the app alerts. I feel far more secure when I travel now.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#0B0F17] py-20 px-6 border-y border-[#1D2636]">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="What our customers say"
          description="Homeowners across the country trust Rakshak Cam to protect their property."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="rounded-lg border border-[#1D2636] bg-[#05070B] p-7"
            >
              <p className="text-[#EAF0F7] leading-relaxed">{t.feedback}</p>
              <p className="mt-5 text-sm font-medium text-[#8792A3]">
                {t.name} · {t.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
