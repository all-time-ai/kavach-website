"use client";

import React from "react";
import { Eye, Cloud, ShieldCheck, Mic, Moon, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const Features = () => {
  return (
    <section id="features" className="bg-[#0B0F17] py-24 px-6 border-y border-[#1D2636]">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="left"
          title="Everything a break-in deterrent needs"
          description="Built for real security, not just a recording that gets reviewed after the fact."
        />

        {/* Bento grid: one wide feature tile, five even tiles - not a uniform 3-col card kit */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto md:auto-rows-[200px]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-lg border border-[#1D2636] bg-[#05070B] p-7 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-[#0B0F17] ring-1 ring-[#1D2636] text-[#4FD8FF]">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-xl font-semibold text-[#EAF0F7]">AI intruder detection</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#8792A3]">
                Recognizes human shape and movement, and ignores pets and
                stray animals &mdash; so alerts mean something.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono tabular-nums text-[#4FD8FF] mt-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4FD8FF] animate-pulse" />
              live model &middot; 99.2% precision
            </div>
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#4FD8FF]/10 blur-3xl" />
          </motion.div>

          {[
            { Icon: Eye,   title: "Night vision HD",      desc: "Full clarity after dark." },
            { Icon: Mic,   title: "Voice warnings",        desc: "Custom messages, on trigger." },
            { Icon: Cpu,   title: "Mobile alerts",         desc: "Live feed, wherever you are." },
            { Icon: Cloud, title: "Cloud & local storage", desc: "Your footage, your choice." },
            { Icon: Moon,  title: "Silent mode",           desc: "Schedule when sound fires." },
          ].map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * (idx + 1) }}
              className="rounded-lg border border-[#1D2636] bg-[#05070B] p-6 flex flex-col justify-between"
            >
              <div className="text-[#4FD8FF]"><f.Icon size={20} /></div>
              <div>
                <h3 className="text-sm font-semibold text-[#EAF0F7]">{f.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[#8792A3]">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
