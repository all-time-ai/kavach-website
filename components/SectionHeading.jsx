import React from "react";

const SectionHeading = ({ eyebrow, title, description, align = "center" }) => {
  const wrap =
    align === "left"
      ? "text-left items-start"
      : "text-center items-center mx-auto";

  return (
    <div className={`flex flex-col ${wrap} max-w-2xl mb-12 md:mb-16`}>
      {eyebrow && (
        <span className="mb-3 text-sm font-medium text-[#4FD8FF]">{eyebrow}</span>
      )}
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[2.6rem] leading-[1.15] font-semibold text-[#EAF0F7]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[#8792A3] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
