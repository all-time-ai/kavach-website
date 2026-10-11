"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { CONTACT_HREF } from "@/lib/contact";


const links = [
  { href: "#why-it-works", label: "How it protects" },
  { href: "#features", label: "Features" },
  { href: "#solutions", label: "Solutions" },
  { href: "#demo", label: "Demo" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4">
      <nav
        aria-label="Primary"
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
          scrolled || isOpen
            ? "border-line-strong/60 bg-ink-2/85 backdrop-blur-xl shadow-[0_10px_40px_-14px_rgba(0,0,0,0.9)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 md:px-5">
          <a href="#top" className="flex items-center gap-3" aria-label="Rakshak Cam home">
            <Image
              alt=""
              src="/logo/logo-small.png"
              width={34}
              height={34}
              className="rounded-lg ring-1 ring-line-strong"
            />
            <span className="text-[17px] font-semibold tracking-tight">Rakshak Cam</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-mute transition-colors hover:bg-white/5 hover:text-text"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href={CONTACT_HREF} className="btn btn-primary !min-h-10 !px-5 !text-sm">
              Get Rakshak Cam
            </a>
          </div>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden -mr-2 p-2 text-text"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-line px-4 pb-5 pt-2">
            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-base font-medium text-text"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <a href={CONTACT_HREF} className="btn btn-primary mt-3 w-full">
              Get Rakshak Cam
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
