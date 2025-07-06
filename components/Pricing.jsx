"use client"

import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Starter",
    price: "₹4,999",
    features: [
      "1 AI Camera",
      "Mobile App Access",
      "Custom Sound Alerts",
      "7-Day Cloud Storage",
    ],
  },
  {
    title: "Home Bundle",
    price: "₹12,999",
    features: [
      "3 AI Cameras",
      "Full App Access",
      "Custom & Smart Alerts",
      "30-Day Cloud Storage",
      "Priority Support",
    ],
    highlight: true,
  },
  {
    title: "Pro Security",
    price: "₹22,499",
    features: [
      "6 AI Cameras",
      "Unlimited Cloud Storage",
      "Advanced AI Filtering",
      "24/7 Monitoring Support",
      "Custom API Integration",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-sky-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Choose Your Plan
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Whether you need one camera or a full property setup, we’ve got a plan that works for you.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`w-full h-auto flex flex-col items-start justify-start border p-8 rounded-2xl shadow-sm ${
                plan.highlight ? "bg-white border-black" : "bg-white"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
              <p className="text-3xl font-extrabold text-black mb-4">{plan.price}</p>
              <ul className="flex flex-col items-start justify-start text-sm text-gray-600 mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              <a
                href="#buy"
                className="inline-block bg-sky-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
              >
                Buy Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
