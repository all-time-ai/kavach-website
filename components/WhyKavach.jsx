import React from "react";
import { ScanFace, Volume2, BellRing, Zap } from "lucide-react";
import Reveal from "./Reveal";

const pipeline = [
  {
    time: "00:00.0",
    Icon: ScanFace,
    title: "Motion classified",
    desc: "AI tells a person apart from a pet or a passing shadow.",
  },
  {
    time: "00:00.4",
    Icon: Volume2,
    title: "Warning sounds",
    desc: "A siren or custom voice message plays on the spot.",
  },
  {
    time: "00:01.1",
    Icon: BellRing,
    title: "You're notified",
    desc: "Your phone gets a push alert with a live feed link.",
  },
  {
    time: "00:01.8",
    Icon: Zap,
    title: "Threat deterred",
    desc: "Most intruders leave before ever reaching the door.",
  },
];

const WhyKavach = () => {
  return (
    <section id="why-it-works" className="relative border-t border-line py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="eyebrow mb-4">What a traditional camera can&apos;t do</p>
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-fade md:text-5xl">
            From motion to deterrence in under two seconds.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-mute">
            This is the sequence that runs on-device every time Rakshak Cam sees something worth
            acting on &mdash; no cloud round-trip, no waiting for someone to review footage later.
          </p>
        </Reveal>

        <ol className="relative space-y-4">
          {pipeline.map(({ time, Icon, title, desc }, idx) => (
            <Reveal key={time} delay={idx * 80}>
              <li className="card flex items-start gap-5 p-5 sm:p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue/25 bg-blue/10 text-sky">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-xs tabular-nums text-signal">{time}</span>
                  <h3 className="mt-1 text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mute">{desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WhyKavach;
