"use client";

import React, { useState } from "react";
import { Store, Warehouse, Building2, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const industries = [
  {
    title: "Retail & showrooms",
    Icon: Store,
    description:
      "Prevent shrinkage with AI that identifies suspicious loitering and unauthorized stockroom access before theft occurs.",
    benefit: "Reduce inventory loss by 40%",
  },
  {
    title: "Warehouses & logistics",
    Icon: Warehouse,
    description:
      "Secure large perimeters with virtual tripwires. Tell authorized staff and intruders apart automatically.",
    benefit: "24/7 autonomous perimeter guard",
  },
  {
    title: "Corporate offices",
    Icon: Building2,
    description:
      "Manage high-traffic entry points with face recognition and instant alerts for barred individuals.",
    benefit: "Seamless access management",
  },
];

const IndustrySolutions = () => {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section className="bg-[#0B0F17] py-24 px-6 border-y border-[#1D2636]">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          align="left"
          title="Tailored intelligence for every premise"
          description="Generic cameras record crime. Rakshak AI understands your environment to prevent it."
        />

        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-2 rounded-xl border border-[#1D2636] overflow-hidden">
          {/* Tab list */}
          <div className="flex md:flex-col border-b md:border-b-0 md:border-r border-[#1D2636] bg-[#05070B]">
            {industries.map((item, idx) => (
              <button
                key={item.title}
                onClick={() => setActive(idx)}
                className={`flex-1 md:flex-none flex items-center gap-3 px-5 py-5 text-left text-sm font-medium transition-colors border-l-2 md:border-l-2 ${
                  active === idx
                    ? "text-[#EAF0F7] border-[#4FD8FF] bg-[#0B0F17]"
                    : "text-[#8792A3] border-transparent hover:text-[#EAF0F7]"
                }`}
              >
                <span className={active === idx ? "text-[#4FD8FF]" : "text-[#8792A3]"}>
                  <item.Icon className="w-5 h-5" />
                </span>
                <span className="hidden sm:inline">{item.title}</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="relative p-8 md:p-10 bg-[#05070B] min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-xl font-semibold text-[#EAF0F7] mb-4">{current.title}</h3>
                <p className="text-[#8792A3] leading-relaxed max-w-md mb-8">
                  {current.description}
                </p>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#1D2636] px-4 py-2 text-sm font-medium text-[#4FD8FF]">
                  <ShieldCheck className="w-4 h-4" />
                  {current.benefit}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 text-center md:text-left">
          <button className="rounded-md bg-[#FF8A3D] px-7 py-3.5 text-sm font-semibold text-[#05070B] transition-colors hover:bg-[#FFA05E]">
            Get a custom solution for my business
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
