import React from "react";

/**
 * Viewfinder-style corner brackets — echoes an active camera tracking frame.
 * Wrap a hero image, video, or other "this is what the camera sees" element.
 */
const Frame = ({ children, className = "", tone = "cyan" }) => {
  const color = tone === "amber" ? "border-[#FF8A3D]/70" : "border-[#4FD8FF]/70";

  return (
    <div className={`relative ${className}`}>
      <span className={`pointer-events-none absolute -top-2 -left-2 h-6 w-6 border-l-2 border-t-2 ${color}`} />
      <span className={`pointer-events-none absolute -top-2 -right-2 h-6 w-6 border-r-2 border-t-2 ${color}`} />
      <span className={`pointer-events-none absolute -bottom-2 -left-2 h-6 w-6 border-l-2 border-b-2 ${color}`} />
      <span className={`pointer-events-none absolute -bottom-2 -right-2 h-6 w-6 border-r-2 border-b-2 ${color}`} />
      {children}
    </div>
  );
};

export default Frame;
