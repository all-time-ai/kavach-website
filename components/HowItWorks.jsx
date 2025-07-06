"use client"

import React from "react";
import { Camera, Smartphone, ScanFace, AlarmCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <Camera size={32} className="text-black" />,
    title: "Mount the Camera",
    desc: "Place it near entry points — setup takes 5 minutes.",
  },
  {
    icon: <Smartphone size={32} className="text-black" />,
    title: "Connect via App",
    desc: "Easily link to Wi-Fi and configure alerts with our app.",
  },
  {
    icon: <ScanFace size={32} className="text-black" />,
    title: "AI Starts Monitoring",
    desc: "Smart detection differentiates humans, pets, and motion.",
  },
  {
    icon: <AlarmCheck size={32} className="text-black" />,
    title: "Sound + Alert Triggered",
    desc: "Camera plays sound & notifies you instantly.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-sky-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          How Kavach Cam Works
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Just install, connect, and let the AI handle the rest. Your property is protected 24/7.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 bg-white p-4 rounded-full shadow">{step.icon}</div>
              <h3 className="text-lg font-semibold text-sky-800">{`${idx + 1}. ${step.title}`}</h3>
              <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
