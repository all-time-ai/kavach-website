import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const Demo = () => {
  return (
    <section id="demo" className="relative border-t border-line py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Demo"
          title="Watch Rakshak Cam catch a threat, live"
          description="From detection to warning in under two seconds."
        />

        <Reveal>
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[1.75rem] bg-blue/10 blur-3xl"
              aria-hidden
            />
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line-strong bg-panel shadow-[0_40px_100px_-30px_rgba(79,140,255,0.3)]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/eaDMckYP6Sg"
                title="Rakshak Cam demo"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Demo;
