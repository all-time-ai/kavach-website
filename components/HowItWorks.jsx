"use client";

import React from "react";
import { Camera, Smartphone, ScanFace, AlarmCheck } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: <Camera size={22} />,
    title: "Mount the camera",
    desc: "Place it near an entry point. Setup takes about five minutes.",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Connect via the app",
    desc: "Link it to Wi-Fi and set up alerts from your phone.",
  },
  {
    icon: <ScanFace size={22} />,
    title: "AI starts monitoring",
    desc: "It learns to tell people, pets, and passing motion apart.",
  },
  {
    icon: <AlarmCheck size={22} />,
    title: "Sound and alert trigger",
    desc: "A threat is detected, a warning plays, and your phone is notified.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-[#05070B] py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="From box to protected in four steps"
          description="Install once, then let the AI handle monitoring around the clock."
        />

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {/* Connecting line, desktop only */}
          <div className="pointer-events-none absolute top-6 left-0 right-0 hidden h-px bg-[#1D2636] lg:block" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative flex flex-col items-start text-left"
            >
              <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#1D2636] bg-[#0B0F17] text-[#4FD8FF]">
                {step.icon}
              </div>
              <span className="text-xs font-medium text-[#8792A3]">Step {idx + 1}</span>
              <h3 className="mt-1 text-base font-semibold text-[#EAF0F7]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8792A3]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
