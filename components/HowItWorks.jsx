import React from "react";
import { Camera, Smartphone, ScanFace, AlarmCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    Icon: Camera,
    title: "Mount the camera",
    desc: "Place it near an entry point. Setup takes about five minutes.",
  },
  {
    Icon: Smartphone,
    title: "Connect via the app",
    desc: "Link it to Wi-Fi and set up alerts from your phone.",
  },
  {
    Icon: ScanFace,
    title: "AI starts monitoring",
    desc: "It learns to tell people, pets, and passing motion apart.",
  },
  {
    Icon: AlarmCheck,
    title: "Sound and alert trigger",
    desc: "A threat is detected, a warning plays, and your phone is notified.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative border-t border-line bg-ink-2 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Setup"
          title="From box to protected in four steps"
          description="Install once, then let the AI handle monitoring around the clock."
        />

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ Icon, title, desc }, idx) => (
            <Reveal key={title} delay={idx * 80}>
              <li className="card h-full p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue/25 bg-blue/10 text-sky">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-sm tabular-nums text-dim">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
