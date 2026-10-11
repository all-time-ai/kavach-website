import React from "react";
import { Minus, Check, Zap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const comparisons = [
  {
    feature: "Threat detection",
    old: "Records the crime as it happens. No instant alerts.",
    new: "Detects suspicious loitering and alerts you before entry.",
  },
  {
    feature: "False alarms",
    old: "Triggered by shadows, rain, or stray animals.",
    new: "Human-only detection. Ignores pets and environmental noise.",
  },
  {
    feature: "Search efficiency",
    old: "Manually scrubbing through hours of footage.",
    new: "Instant search for ‘person in red shirt’ or ‘unrecognized face’.",
  },
  {
    feature: "Active deterrence",
    old: "Passive recording. Intruders aren't stopped.",
    new: "Automated voice warnings and strobe lights to scare off intruders.",
  },
];

const ComparisonSection = () => {
  return (
    <section className="relative border-t border-line bg-ink-2 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Rakshak vs. traditional CCTV"
          title="A recording is evidence. A warning is prevention."
        />

        <Reveal>
          <div className="card overflow-hidden">
            <div className="grid grid-cols-2 bg-white/[0.03] sm:grid-cols-[1fr_1.2fr_1.2fr]">
              <div className="hidden p-5 text-sm font-medium text-mute sm:block">Capability</div>
              <div className="border-l border-line p-5 text-sm font-medium text-mute sm:border-l">
                Traditional cameras
              </div>
              <div className="border-l border-line p-5 text-sm font-semibold text-sky">
                <span className="inline-flex items-center gap-1.5">
                  <Zap size={16} /> Rakshak Cam
                </span>
              </div>
            </div>

            {comparisons.map((item) => (
              <div
                key={item.feature}
                className="grid grid-cols-2 border-t border-line sm:grid-cols-[1fr_1.2fr_1.2fr]"
              >
                <div className="hidden items-start p-5 text-sm font-medium sm:flex">
                  {item.feature}
                </div>
                <div className="flex items-start gap-3 border-l border-line p-5">
                  <Minus size={16} className="mt-0.5 shrink-0 text-dim" />
                  <div>
                    <span className="mb-1 block text-xs font-medium text-text sm:hidden">
                      {item.feature}
                    </span>
                    <span className="text-sm leading-relaxed text-mute">{item.old}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-l border-line bg-blue/[0.05] p-5">
                  <Check size={16} className="mt-0.5 shrink-0 text-sky" />
                  <span className="text-sm leading-relaxed text-text">{item.new}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ComparisonSection;
