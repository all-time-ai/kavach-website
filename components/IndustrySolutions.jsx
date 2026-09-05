import React from "react";
import { Store, Warehouse, Building2, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const industries = [
  {
    title: "Retail and showrooms",
    description:
      "Prevent shrinkage with AI that identifies suspicious loitering and unauthorized stockroom access before theft occurs.",
    icon: <Store className="w-6 h-6 text-[#4FD8FF]" />,
    benefit: "Reduce inventory loss by 40%",
  },
  {
    title: "Warehouses and logistics",
    description:
      "Secure large perimeters with virtual tripwires. Tell authorized staff and intruders apart automatically.",
    icon: <Warehouse className="w-6 h-6 text-[#4FD8FF]" />,
    benefit: "24/7 autonomous perimeter guard",
  },
  {
    title: "Corporate offices",
    description:
      "Manage high-traffic entry points with face recognition and instant alerts for barred individuals.",
    icon: <Building2 className="w-6 h-6 text-[#4FD8FF]" />,
    benefit: "Seamless access management",
  },
];

const IndustrySolutions = () => {
  return (
    <section className="bg-[#0B0F17] py-20 px-6 border-y border-[#1D2636]">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Tailored intelligence for every premise"
          description="Generic cameras record crime. Rakshak AI understands your environment to prevent it."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((item, index) => (
            <div
              key={index}
              className="flex h-full flex-col rounded-lg border border-[#1D2636] bg-[#05070B] p-7"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-[#0B0F17] ring-1 ring-[#1D2636]">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#EAF0F7] mb-3">{item.title}</h3>
              <p className="flex-grow text-sm leading-relaxed text-[#8792A3] mb-6">
                {item.description}
              </p>
              <div className="pt-5 border-t border-[#1D2636]">
                <div className="flex items-center text-sm font-medium text-[#4FD8FF]">
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  {item.benefit}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-md bg-[#FF8A3D] px-7 py-3.5 text-sm font-semibold text-[#05070B] transition-colors hover:bg-[#FFA05E]">
            Get a custom solution for my business
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
