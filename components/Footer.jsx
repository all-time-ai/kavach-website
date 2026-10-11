import React from "react";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CONTACT_EMAIL, CONTACT_HREF } from "@/lib/contact";

const socials = [
  { href: "https://www.linkedin.com/in/all-time-ai-46a9b53aa/", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "https://www.youtube.com/@alltimeai_official", label: "YouTube", Icon: FaYoutube },
  { href: "https://x.com/All_Time_AI", label: "X", Icon: FaXTwitter },
  { href: "https://www.instagram.com/alltimeai_official/", label: "Instagram", Icon: FaInstagram },
];

const nav = [
  { href: "#why-it-works", label: "How it protects" },
  { href: "#features", label: "Features" },
  { href: "#solutions", label: "Solutions" },
  { href: "#demo", label: "Demo" },
];

const Footer = () => {
  return (
    <footer className="border-t border-line bg-ink-2 px-6 pb-8 pt-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                alt=""
                src="/logo/logo-small.png"
                width={34}
                height={34}
                className="rounded-lg ring-1 ring-line-strong"
              />
              <span className="text-lg font-semibold tracking-tight">Rakshak Cam</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">
              AI security that stops trouble before it starts. A product of AllTimeAI Products and
              Solutions Private Limited.
            </p>
          </div>

          <div>
            <h4 className="eyebrow !text-dim mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-mute">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-text">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow !text-dim mb-4">Contact</h4>
            <a href={CONTACT_HREF} className="text-sm text-mute transition-colors hover:text-text">
              {CONTACT_EMAIL}
            </a>
            <div className="mt-5 flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-line-strong text-mute transition-colors hover:border-sky/50 hover:bg-sky/10 hover:text-text"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-sm text-dim md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} AllTimeAI Products and Solutions Private Limited. All
            rights reserved.
          </p>
          <a href="https://alltimeai.com" className="transition-colors hover:text-text">
            alltimeai.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
