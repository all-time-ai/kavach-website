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
    <section id="pricing" className="bg-[#05070B] py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Choose your plan"
          description="Whether you need one camera or a full property setup, there's a plan that fits."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className={
                plan.highlight
                  ? "relative z-10 flex flex-col rounded-xl border border-[#4FD8FF]/50 bg-[#0B0F17] p-9 shadow-[0_20px_60px_rgba(79,216,255,0.12)] md:-my-4 md:scale-105"
                  : "flex flex-col rounded-xl border border-[#1D2636] bg-[#0B0F17]/60 p-8"
              }
            >
              {plan.highlight && (
                <span className="mb-4 inline-block w-fit rounded-full bg-[#4FD8FF]/10 px-3 py-1 text-xs font-semibold text-[#4FD8FF]">
                  Most popular
                </span>
              )}
              <h3 className={plan.highlight ? "text-lg font-semibold text-[#EAF0F7]" : "text-base font-medium text-[#8792A3]"}>
                {plan.title}
              </h3>
              <p className={plan.highlight ? "mt-2 mb-6 text-4xl font-semibold text-[#EAF0F7]" : "mt-2 mb-6 text-2xl font-semibold text-[#EAF0F7]"}>
                {plan.price}
              </p>
              <ul className="mb-8 flex-grow space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-[#8792A3]">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlight ? "text-[#4FD8FF]" : "text-[#4FD8FF]/60"}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#buy"
                className={
                  plan.highlight
                    ? "inline-flex justify-center rounded-md bg-[#FF8A3D] px-6 py-3 text-sm font-semibold text-[#05070B] transition-colors hover:bg-[#FFA05E]"
                    : "inline-flex justify-center rounded-md border border-[#1D2636] px-6 py-3 text-sm font-semibold text-[#EAF0F7] transition-colors hover:border-[#4FD8FF]/60"
                }
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
