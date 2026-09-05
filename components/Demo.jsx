"use client";

import React from "react";
import { motion } from "framer-motion";
import Frame from "./Frame";
import SectionHeading from "./SectionHeading";

const Demo = () => {
  return (
    <section id="demo" className="bg-[#0B0F17] py-20 px-6 border-y border-[#1D2636]">
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeading
          title="Watch Rakshak Cam catch a threat, live"
          description="Real footage from real customers — from detection to warning in under two seconds."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Frame className="mx-auto max-w-4xl" tone="amber">
            <div className="aspect-video w-full overflow-hidden rounded-sm border border-[#1D2636]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/eaDMckYP6Sg"
                title="Rakshak Cam Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Frame>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;
