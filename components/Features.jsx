"use client";

import React from "react";
import { Eye, Cloud, ShieldCheck, Mic, Moon, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: <Eye size={22} className="text-[#4FD8FF]" />,
    title: "Night vision HD",
    desc: "Full clarity after dark, when most break-ins happen.",
  },
  {
    icon: <ShieldCheck size={22} className="text-[#4FD8FF]" />,
    title: "AI intruder detection",
    desc: "Recognizes human motion and ignores pets automatically.",
  },
  {
    icon: <Mic size={22} className="text-[#4FD8FF]" />,
    title: "Custom voice warnings",
    desc: "Play a pre-recorded or custom message the moment it detects someone.",
  },
  {
    icon: <Cpu size={22} className="text-[#4FD8FF]" />,
    title: "Real-time mobile alerts",
    desc: "Get notified instantly, with live feed access from anywhere.",
  },
  {
    icon: <Cloud size={22} className="text-[#4FD8FF]" />,
    title: "Cloud and local storage",
    desc: "Save recordings securely online, or keep them on-device.",
  },
  {
    icon: <Moon size={22} className="text-[#4FD8FF]" />,
    title: "Silent mode",
    desc: "Schedule when sound triggers fire, and when they stay quiet.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-[#0B0F17] py-20 px-6 border-y border-[#1D2636]">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Everything a break-in deterrent needs"
          description="Built for real security, not just a recording that gets reviewed after the fact."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-lg border border-[#1D2636] bg-[#05070B] p-6 transition-colors hover:border-[#4FD8FF]/40"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-[#0B0F17] ring-1 ring-[#1D2636]">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-[#EAF0F7]">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8792A3]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
