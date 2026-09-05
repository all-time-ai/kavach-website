"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScanFace } from "lucide-react";

const stats = [
  { value: "1.8s", label: "avg. response time" },
  { value: "99.2%", label: "detection accuracy" },
  { value: "10,000+", label: "homes protected" },
];

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#05070B] pt-36 pb-24">
      {/* Mesh glow, not a flat gradient wash */}
      <div className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-[#4FD8FF]/10 blur-[110px]" />
      <div className="absolute top-10 right-0 h-[380px] w-[380px] rounded-full bg-[#FF8A3D]/10 blur-[110px]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #1D2636 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1D2636] bg-[#0B0F17] px-3 py-1 text-xs text-[#8792A3]"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF8A3D] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF8A3D]" />
              </span>
              On-device AI &middot; no monthly detection fee
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-[family-name:var(--font-display)] text-5xl md:text-[4.2rem] font-semibold leading-[0.98] tracking-tight text-[#EAF0F7]"
            >
              Stops trouble
              <br />
              <span className="text-[#4FD8FF]">before it starts.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-7 max-w-md text-lg text-[#8792A3]"
            >
              Rakshak Cam spots an intruder, sounds a warning, and alerts your
              phone &mdash; while a traditional camera is still just recording.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#buy"
                className="rounded-md bg-[#FF8A3D] px-7 py-3.5 text-sm font-semibold text-[#05070B] transition-colors hover:bg-[#FFA05E]"
              >
                Buy Now
              </a>
              <a
                href="#demo"
                className="rounded-md border border-[#1D2636] px-7 py-3.5 text-sm font-semibold text-[#EAF0F7] transition-colors hover:border-[#4FD8FF]/60"
              >
                Watch it detect a threat
              </a>
            </motion.div>

            {/* Live telemetry strip - real product numbers, not decoration */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-[#1D2636] pt-8"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-2xl font-semibold tabular-nums text-[#EAF0F7]">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-[#8792A3]">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Product visual: live-detection mockup, not a static photo in a frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl border border-[#1D2636]">
              <img
                src="/hero-section-image.jpg"
                alt="Rakshak AI security camera"
                className="w-full"
              />
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: "220%" }}
                transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-[#4FD8FF]/15 to-transparent"
              />
              {/* corner brackets baked into the visual itself */}
              <span className="pointer-events-none absolute top-3 left-3 h-5 w-5 border-l-2 border-t-2 border-[#4FD8FF]/70" />
              <span className="pointer-events-none absolute top-3 right-3 h-5 w-5 border-r-2 border-t-2 border-[#4FD8FF]/70" />
              <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-l-2 border-b-2 border-[#4FD8FF]/70" />
              <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-r-2 border-b-2 border-[#4FD8FF]/70" />
            </div>

            {/* Floating detection badge, overlapping the frame like a live UI overlay */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-lg border border-[#1D2636] bg-[#0B0F17]/95 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#FF8A3D]/10 text-[#FF8A3D]">
                <ScanFace className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#EAF0F7]">Person detected</div>
                <div className="font-mono text-[11px] tabular-nums text-[#8792A3]">confidence 98.4%</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
