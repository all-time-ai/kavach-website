"use client";

import React from "react";
import { ScanFace, Volume2, BellRing, Zap } from "lucide-react";
import { motion } from "framer-motion";

const pipeline = [
  {
    time: "00:00.0",
    icon: <ScanFace size={18} />,
    title: "Motion classified",
    desc: "AI tells a person apart from a pet or a passing shadow.",
  },
  {
    time: "00:00.4",
    icon: <Volume2 size={18} />,
    title: "Warning sounds",
    desc: "A siren or custom voice message plays on the spot.",
  },
  {
    time: "00:01.1",
    icon: <BellRing size={18} />,
    title: "You're notified",
    desc: "Your phone gets a push alert with a live feed link.",
  },
  {
    time: "00:01.8",
    icon: <Zap size={18} />,
    title: "Threat deterred",
    desc: "Most intruders leave before ever reaching the door.",
  },
];

const WhyKavach = () => {
  return (
    <section id="why-it-works" className="bg-[#05070B] py-24 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16">
        {/* Sticky-feeling left column, not centered marketing copy */}
        <div>
          <span className="mb-3 block text-sm font-medium text-[#4FD8FF]">
            What a traditional camera can't do
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[2.4rem] leading-[1.15] font-semibold text-[#EAF0F7]">
            From motion to deterrence in under two seconds.
          </h2>
          <p className="mt-5 text-[#8792A3] leading-relaxed max-w-sm">
            This is the actual sequence that runs on-device every time
            Rakshak Cam sees something worth acting on &mdash; no cloud
            round-trip, no waiting for someone to review footage later.
          </p>
        </div>

        {/* Live pipeline / event log */}
        <div className="relative">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-[#1D2636]" />
          <div className="space-y-8">
            {pipeline.map((step, idx) => (
              <motion.div
                key={step.time}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex gap-5"
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#1D2636] bg-[#0B0F17] text-[#4FD8FF]">
                  {step.icon}
                </div>
                <div className="pt-1">
                  <span className="font-mono text-xs tabular-nums text-[#FF8A3D]">{step.time}</span>
                  <h3 className="mt-1 text-base font-semibold text-[#EAF0F7]">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#8792A3]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKavach;
