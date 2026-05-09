"use client"

import React from "react";
import { Eye, Cloud, ShieldCheck, Mic, Moon, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Eye size={28} className="text-sky-600" />,
    title: "Night Vision HD",
    desc: "See everything clearly, even in total darkness.",
  },
  {
    icon: <ShieldCheck size={28} className="text-emerald-600" />,
    title: "AI Intruder Detection",
    desc: "Smart AI detects human motion and ignores pets.",
  },
  {
    icon: <Mic size={28} className="text-rose-500" />,
    title: "Custom Voice Warnings",
    desc: "Play pre-recorded or custom warnings automatically.",
  },
  {
    icon: <Cpu size={28} className="text-indigo-600" />,
    title: "Real-Time Mobile Alerts",
    desc: "Instant notifications and live feed access on your phone.",
  },
  {
    icon: <Cloud size={28} className="text-purple-600" />,
    title: "Cloud & Local Storage",
    desc: "Save recordings securely online or offline.",
  },
  {
    icon: <Moon size={28} className="text-yellow-600" />,
    title: "Silent Mode",
    desc: "Control sound triggers for specific times or events.",
  },
];

const Features = () => {
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
          Powerful Features Built for Real Security
        </motion.h2>

        <motion.p
          className="text-lg text-sky-800 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Rakshak Cam offers cutting-edge features that go beyond traditional cameras.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
