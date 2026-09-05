import React from "react";
import { XCircle, CheckCircle2, Zap } from "lucide-react";
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
    <section className="bg-[#05070B] py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Rakshak vs. traditional CCTV"
          title="A recording is evidence. A warning is prevention."
        />

        {/* Mobile: stacked */}
        <div className="block md:hidden space-y-5">
          {comparisons.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg border border-[#1D2636]">
              <div className="bg-[#0B0F17] px-4 py-3 text-sm font-semibold text-[#EAF0F7]">
                {item.feature}
              </div>
              <div className="space-y-4 bg-[#05070B] p-4">
                <div className="flex items-start gap-3 opacity-60">
                  <XCircle className="w-4 h-4 text-[#8792A3] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#8792A3]">Traditional CCTV</p>
                    <p className="text-sm text-[#8792A3]">{item.old}</p>
                  </div>
                </div>
                <div className="border-t border-[#1D2636]" />
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#4FD8FF] shrink-0 mt-0.5" />
                  <div>
                    <p className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#4FD8FF]">
                      Rakshak Cam <Zap className="w-3 h-3" />
                    </p>
                    <p className="text-sm font-medium text-[#EAF0F7]">{item.new}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: table */}
        <div className="hidden md:block overflow-hidden rounded-lg border border-[#1D2636]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0B0F17] text-[#EAF0F7]">
                <th className="p-5 text-sm font-semibold w-1/4">Capability</th>
                <th className="p-5 text-sm font-semibold w-1/3 border-l border-[#1D2636] text-[#8792A3]">
                  Traditional cameras
                </th>
                <th className="p-5 text-sm font-semibold w-1/3 border-l border-[#1D2636]">
                  <span className="inline-flex items-center gap-1.5 text-[#4FD8FF]">
                    <Zap className="w-4 h-4" /> Rakshak Cam
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1D2636]">
              {comparisons.map((item, index) => (
                <tr key={index} className="bg-[#05070B]">
                  <td className="p-5 font-medium text-[#EAF0F7] border-r border-[#1D2636] align-top">
                    {item.feature}
                  </td>
                  <td className="p-5 border-r border-[#1D2636] align-top">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-[#8792A3] shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed text-[#8792A3]">{item.old}</span>
                    </div>
                  </td>
                  <td className="p-5 align-top">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#4FD8FF] shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed text-[#EAF0F7]">{item.new}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
