import React from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-[#05070B] px-6 pb-24">
      <div className="mx-auto max-w-5xl">
      <div className="relative overflow-hidden rounded-xl border border-[#1D2636] bg-[#0B0F17] px-8 py-12 md:px-14">
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-[#FF8A3D]/10 blur-[100px]" />
      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold text-[#EAF0F7] max-w-md">
            Don't wait for a security breach to upgrade.
          </h3>
          <p className="mt-2 text-[#8792A3]">Put AI on watch today.</p>
        </div>
        <button className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-[#FF8A3D] px-7 py-3.5 text-sm font-semibold text-[#05070B] transition-colors hover:bg-[#FFA05E]">
          Upgrade My Security
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
      </div>
      </div>
    </section>
  );
};

export default CTA;
