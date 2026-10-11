import React from "react";
import { Eye, Cloud, ShieldCheck, Mic, Moon, Smartphone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const small = [
  { Icon: Eye, title: "Night vision HD", desc: "Full clarity after dark." },
  { Icon: Mic, title: "Voice warnings", desc: "Custom messages, on trigger." },
  { Icon: Smartphone, title: "Mobile alerts", desc: "Live feed, wherever you are." },
  { Icon: Cloud, title: "Cloud & local storage", desc: "Your footage, your choice." },
  { Icon: Moon, title: "Silent mode", desc: "Schedule when sound fires." },
];

const Features = () => {
  return (
    <section id="features" className="relative border-t border-line py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          align="left"
          eyebrow="Features"
          title="Everything a break-in deterrent needs"
          description="Built for real security, not just a recording that gets reviewed after the fact."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="card relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden p-8">
              <div
                className="glow pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-blue/25"
                aria-hidden
              />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue/25 bg-blue/10 text-sky">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">AI intruder detection</h3>
                <p className="mt-3 max-w-md leading-relaxed text-mute">
                  Recognizes human shape and movement, and ignores pets and stray animals &mdash; so
                  alerts mean something.
                </p>
              </div>
              <div className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-line-strong bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs tabular-nums text-sky">
                <span className="h-1.5 w-1.5 rounded-full bg-sky" />
                live model &middot; 99.2% precision
              </div>
            </div>
          </Reveal>

          {small.map(({ Icon, title, desc }, idx) => (
            <Reveal key={title} delay={(idx + 1) * 60}>
              <div className="card flex h-full min-h-[150px] flex-col justify-between p-6">
                <Icon size={22} className="text-sky" />
                <div className="mt-8">
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mute">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
