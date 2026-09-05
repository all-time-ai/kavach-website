"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

const initials = (name) => name.split(" ").map((n) => n[0]).join("");

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const go = (dir) => {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-[#0B0F17] py-24 px-6 border-y border-[#1D2636]">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          title="What our customers say"
          description="Homeowners across the country trust Rakshak Cam to protect their property."
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl leading-snug text-[#EAF0F7]">
                &ldquo;{t.feedback}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#05070B] text-sm font-semibold text-[#4FD8FF] ring-1 ring-[#1D2636]">
                  {initials(t.name)}
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-[#EAF0F7]">{t.name}</div>
                  <div className="text-xs text-[#8792A3]">{t.location}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1D2636] text-[#8792A3] transition-colors hover:text-[#EAF0F7] hover:border-[#4FD8FF]/60"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-[#4FD8FF]" : "w-1.5 bg-[#1D2636]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1D2636] text-[#8792A3] transition-colors hover:text-[#EAF0F7] hover:border-[#4FD8FF]/60"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
