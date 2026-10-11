import React from "react";
import { ArrowRight } from "lucide-react";
import { CONTACT_HREF } from "@/lib/contact";
import Reveal from "./Reveal";

const CTA = () => {
  return (
    <section id="contact" className="px-6 py-24 lg:py-32">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-line-strong bg-gradient-to-br from-blue/15 via-panel to-signal/10 px-8 py-14 md:px-14">
          <div
            className="glow pointer-events-none absolute -top-24 left-1/3 h-64 w-96 rounded-full bg-blue/25"
            aria-hidden
          />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-4xl">
                Don&apos;t wait for a security breach to upgrade.
              </h2>
              <p className="mt-3 text-lg text-mute">Put AI on watch today.</p>
            </div>
            <a href={CONTACT_HREF} className="btn btn-primary group shrink-0">
              Upgrade my security
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CTA;
