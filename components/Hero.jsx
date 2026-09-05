"use client";

import React from "react";
import { motion } from "framer-motion";
import Frame from "./Frame";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#05070B] pt-32 pb-20">
      {/* Ambient tech backdrop: faint dot-grid + radial glow, not a decorative gradient wash */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1D2636 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#4FD8FF]/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 md:flex-row">
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1D2636] bg-[#0B0F17] px-3 py-1 text-xs text-[#8792A3]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A3D]" />
            Live threat detection, on-device
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-[#EAF0F7]"
          >
            The camera that stops trouble before it starts
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-md mx-auto md:mx-0 text-lg text-[#8792A3]"
          >
            Rakshak Cam spots an intruder, sounds a warning, and alerts your
            phone — while a traditional camera is still just recording.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
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
        </div>

        {/* Product image, framed like an active viewfinder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:w-1/2"
        >
          <Frame className="mx-auto max-w-md overflow-hidden rounded-sm">
            <div className="relative overflow-hidden rounded-sm border border-[#1D2636]">
              <img
                src="/hero-section-image.jpg"
                alt="Rakshak AI security camera"
                className="w-full"
              />
              {/* One orchestrated motion moment: a single scan sweep on load */}
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: "220%" }}
                transition={{ duration: 1.6, delay: 0.6, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-[#4FD8FF]/20 to-transparent"
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded bg-[#05070B]/80 px-2 py-1 text-[11px] text-[#4FD8FF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4FD8FF] animate-pulse" />
                Scanning
              </div>
            </div>
          </Frame>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
