"use client"

import React from "react";
import { ShieldAlert, Volume2, BellRing, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <ShieldAlert size={32} className="text-blue-600" />,
    title: "Smart Motion Detection",
    desc: "AI distinguishes between humans, pets, and random motion.",
  },
  {
    icon: <Volume2 size={32} className="text-cyan-600" />,
    title: "Loud Sound Alarm",
    desc: "Plays a siren or custom voice warning when a threat is detected.",
  },
  {
    icon: <BellRing size={32} className="text-sky-600" />,
    title: "Instant Alerts",
    desc: "Get notified instantly on your phone with live feed access.",
  },
  {
    icon: <Zap size={32} className="text-indigo-600" />,
    title: "Prevents Theft",
    desc: "Scares intruders before they act. Not just passive recording.",
  },
];

const WhyKavach = () => {
  return (
    <section id="features" className="bg-sky-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-sky-900 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Traditional Cameras Just Record. Ours Takes Action.
        </motion.h2>
        <motion.p
          className="text-sky-800 text-lg mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Most cameras only record what already happened. Kavach Cam detects danger early and <strong>prevents it</strong> — using real-time AI, sound alerts, and smart detection.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKavach;
