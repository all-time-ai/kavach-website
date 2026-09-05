"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const plans = [
  {
    title: "Starter",
    price: "\u20b94,999",
    features: ["1 AI camera", "Mobile app access", "Custom sound alerts", "7-day cloud storage"],
  },
  {
    title: "Home Bundle",
    price: "\u20b912,999",
    features: [
      "3 AI cameras",
      "Full app access",
      "Custom and smart alerts",
      "30-day cloud storage",
      "Priority support",
    ],
    highlight: true,
  },
  {
    title: "Pro Security",
    price: "\u20b922,499",
    features: [
      "6 AI cameras",
      "Unlimited cloud storage",
      "Advanced AI filtering",
      "24/7 monitoring support",
      "Custom API integration",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#05070B] py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Choose your plan"
          description="Whether you need one camera or a full property setup, there's a plan that fits."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className={`flex h-full flex-col rounded-lg p-8 ${
                plan.highlight
                  ? "border-2 border-[#FF8A3D] bg-[#0B0F17]"
                  : "border border-[#1D2636] bg-[#0B0F17]"
              }`}
            >
              {plan.highlight && (
                <span className="mb-4 inline-block w-fit rounded-full bg-[#FF8A3D] px-3 py-1 text-xs font-semibold text-[#05070B]">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-[#EAF0F7]">{plan.title}</h3>
              <p className="mt-2 mb-6 text-3xl font-semibold text-[#EAF0F7]">{plan.price}</p>
              <ul className="mb-8 flex-grow space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#8792A3]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4FD8FF]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#buy"
                className={`inline-flex justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-[#FF8A3D] text-[#05070B] hover:bg-[#FFA05E]"
                    : "border border-[#1D2636] text-[#EAF0F7] hover:border-[#4FD8FF]/60"
                }`}
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
