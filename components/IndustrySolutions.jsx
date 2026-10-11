"use client";

import React, { useState } from "react";
import { Store, Warehouse, Building2, ShieldCheck } from "lucide-react";
import { CONTACT_HREF } from "@/lib/contact";
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
    <section id="solutions" className="relative border-t border-line bg-ink-2 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          align="left"
          eyebrow="Solutions"
          title="Tailored intelligence for every premise"
          description="Generic cameras record crime. Rakshak AI understands your environment to prevent it."
        />

        <div className="card overflow-hidden md:grid md:grid-cols-[0.8fr_1.2fr]">
          <div
            role="tablist"
            aria-label="Industries"
            className="flex border-b border-line md:flex-col md:border-b-0 md:border-r"
          >
            {industries.map((item, idx) => {
              const selected = active === idx;
              return (
                <button
                  key={item.title}
                  role="tab"
                  id={`tab-${idx}`}
                  aria-selected={selected}
                  aria-controls="industry-panel"
                  onClick={() => setActive(idx)}
                  className={`flex flex-1 items-center justify-center gap-3 border-b-2 px-4 py-5 text-left text-sm font-medium transition-colors md:flex-none md:justify-start md:border-b-0 md:border-l-2 md:px-6 ${
                    selected
                      ? "border-sky bg-white/[0.04] text-text"
                      : "border-transparent text-mute hover:text-text"
                  }`}
                >
                  <item.Icon size={20} className={selected ? "text-sky" : ""} />
                  <span className="hidden sm:inline">{item.title}</span>
                </button>
              );
            })}
          </div>

          <div
            id="industry-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            className="min-h-[280px] p-8 md:p-10"
          >
            <h3 className="text-2xl font-semibold tracking-tight">{current.title}</h3>
            <p className="mt-4 max-w-md leading-relaxed text-mute">{current.description}</p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-4 py-2 text-sm font-medium text-sky">
              <ShieldCheck size={16} />
              {current.benefit}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <a href={CONTACT_HREF} className="btn btn-secondary">
            Get a custom solution for my business
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
