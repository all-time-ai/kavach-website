import React from "react";
import { ShieldAlert } from "lucide-react";

const CTA = () => {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-lg border border-[#1D2636] bg-[#0B0F17] p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#FF8A3D]/10 text-[#FF8A3D]">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <p className="max-w-md text-[#EAF0F7]">
          Don't wait for a security breach to upgrade. Put AI on watch today.
        </p>
      </div>
      <button className="rounded-md bg-[#FF8A3D] px-7 py-3 text-sm font-semibold text-[#05070B] transition-colors hover:bg-[#FFA05E]">
        Upgrade My Security
      </button>
    </div>
  );
};

export default CTA;
