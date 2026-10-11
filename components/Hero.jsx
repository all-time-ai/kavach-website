import Image from "next/image";
import { ScanFace, BellRing } from "lucide-react";
import { CONTACT_HREF } from "@/lib/contact";

const stats = [
  { value: "1.8s", label: "Average response time" },
  { value: "99.2%", label: "Detection accuracy" },
  { value: "10,000+", label: "Homes protected" },
];

const Hero = () => {
  return (
    <section id="top" className="relative w-full overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="grid-bg absolute inset-0" />
        <div className="glow absolute -top-40 left-1/4 h-[460px] w-[620px] rounded-full bg-blue/25" />
        <div className="glow absolute top-20 -right-32 h-[380px] w-[420px] rounded-full bg-signal/15" />
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-white/[0.03] px-3.5 py-1.5 text-xs text-mute">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-signal" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              On-device AI &middot; no monthly detection fee
            </div>

            <h1 className="mt-7 text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-[4.4rem]">
              <span className="text-fade">Stops trouble</span>
              <br />
              <span className="text-gradient">before it starts.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-mute md:text-xl">
              Rakshak Cam spots an intruder, sounds a warning, and alerts your phone &mdash; while a
              traditional camera is still just recording.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={CONTACT_HREF} className="btn btn-primary">
                Get Rakshak Cam
              </a>
              <a href="#demo" className="btn btn-secondary">
                Watch it detect a threat
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dd className="font-mono text-2xl font-semibold tabular-nums sm:text-3xl">
                    {s.value}
                  </dd>
                  <dt className="mt-1 text-xs leading-snug text-mute">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          {/* Product visual */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-blue/10 blur-3xl" aria-hidden />
            <div className="relative aspect-[1024/945] overflow-hidden rounded-2xl border border-line-strong bg-panel shadow-[0_40px_100px_-30px_rgba(79,140,255,0.35)]">
              <Image
                src="/hero-section-image.jpg"
                alt="Rakshak AI security camera detecting an intruder at a window"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
              <div
                className="animate-scan pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-transparent via-sky/15 to-transparent"
                aria-hidden
              />
              <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-sky/70" aria-hidden />
              <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-sky/70" aria-hidden />
              <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-sky/70" aria-hidden />
              <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-sky/70" aria-hidden />
            </div>

            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-line-strong bg-ink-2/95 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur sm:-left-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal/15 text-signal">
                <ScanFace size={18} />
              </div>
              <div>
                <div className="text-xs font-semibold">Person detected</div>
                <div className="font-mono text-[11px] tabular-nums text-mute">confidence 98.4%</div>
              </div>
            </div>

            <div className="absolute -top-4 right-4 hidden items-center gap-2 rounded-xl border border-line-strong bg-ink-2/95 px-3.5 py-2.5 text-xs font-medium shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur sm:flex">
              <BellRing size={14} className="text-sky" />
              Alert sent to your phone
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
