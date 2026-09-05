"use client";

import React from "react";
import { ShieldAlert, Volume2, BellRing, Zap } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const points = [
  {
    icon: <ShieldAlert size={22} className="text-[#4FD8FF]" />,
    title: "Tells people from pets",
    desc: "AI distinguishes humans from pets and passing motion, so it only acts on real threats.",
  },
  {
    icon: <Volume2 size={22} className="text-[#4FD8FF]" />,
    title: "Sounds a warning",
    desc: "Plays a siren or a custom voice message the moment it detects a threat.",
  },
  {
    icon: <BellRing size={22} className="text-[#4FD8FF]" />,
    title: "Alerts you instantly",
    desc: "Sends a phone notification with live feed access, wherever you are.",
  },
  {
    icon: <Zap size={22} className="text-[#4FD8FF]" />,
    title: "Acts before it's too late",
    desc: "Intervenes while the threat is still outside — not after the footage is already recorded.",
  },
];

const WhyKavach = () => {
  return (
    <section id="why-it-works" className="bg-[#05070B] py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="left"
          title="Most cameras only remember what happened. This one changes what happens."
          description="Rakshak Cam is built to intervene while a threat is still outside — using on-device AI, sound, and instant alerts."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px overflow-hidden rounded-lg border border-[#1D2636] bg-[#1D2636] lg:grid-cols-4">
          {points.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="bg-[#0B0F17] p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-[#1D2636] bg-[#05070B]">
                {p.icon}
              </div>
              <h3 className="text-base font-semibold text-[#EAF0F7]">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8792A3]">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKavach;
