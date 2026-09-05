import React from "react";
import { Minus, Check, Zap } from "lucide-react";
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
    new: "Instant search for \u2018person in red shirt\u2019 or \u2018unrecognized face\u2019.",
  },
  {
    feature: "Active deterrence",
    old: "Passive recording. Intruders aren't stopped.",
    new: "Automated voice warnings and strobe lights to scare off intruders.",
  },
];

const ComparisonSection = () => {
  return (
    <section className="bg-[#05070B] py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Rakshak vs. traditional CCTV"
          title="A recording is evidence. A warning is prevention."
        />

        <div className="overflow-hidden rounded-xl border border-[#1D2636]">
          {/* header */}
          <div className="grid grid-cols-[1fr_1fr] sm:grid-cols-[1.1fr_1fr_1fr] bg-[#0B0F17]">
            <div className="hidden sm:block p-5 text-sm font-medium text-[#8792A3]">Capability</div>
            <div className="p-5 text-sm font-medium text-[#8792A3] border-l border-[#1D2636]">
              Traditional cameras
            </div>
            <div className="relative p-5 text-sm font-semibold text-[#4FD8FF] border-l border-[#1D2636]">
              <span className="absolute left-0 top-0 h-full w-[2px] bg-[#4FD8FF]" />
              <span className="inline-flex items-center gap-1.5">
                <Zap className="h-4 w-4" /> Rakshak Cam
              </span>
            </div>
          </div>

          {comparisons.map((item) => (
            <div
              key={item.feature}
              className="grid grid-cols-[1fr_1fr] sm:grid-cols-[1.1fr_1fr_1fr] border-t border-[#1D2636]"
            >
              <div className="hidden sm:flex items-start p-5 text-sm font-medium text-[#EAF0F7] bg-[#0B0F17]/40">
                {item.feature}
              </div>
              <div className="flex items-start gap-3 p-5 border-l border-[#1D2636]">
                <Minus className="mt-0.5 h-4 w-4 shrink-0 text-[#8792A3]" />
                <div>
                  <span className="sm:hidden mb-1 block text-xs font-medium text-[#EAF0F7]">
                    {item.feature}
                  </span>
                  <span className="text-sm leading-relaxed text-[#8792A3]">{item.old}</span>
                </div>
              </div>
              <div className="relative flex items-start gap-3 p-5 border-l border-[#1D2636] bg-[#4FD8FF]/[0.04]">
                <span className="absolute left-0 top-0 h-full w-[2px] bg-[#4FD8FF]/40" />
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4FD8FF]" />
                <span className="text-sm leading-relaxed text-[#EAF0F7]">{item.new}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
