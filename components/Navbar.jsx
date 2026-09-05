"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "bg-[#05070B]/90 border-[#1D2636] backdrop-blur-md"
          : "bg-[#05070B]/40 border-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0B0F17] ring-1 ring-[#1D2636]">
            <Image alt="Rakshak Cam" src="/logo/logo-small.png" className="rounded" width={22} height={22} />
          </div>
          <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[#EAF0F7]">
            Rakshak Cam
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[#8792A3]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-[#EAF0F7]">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#buy"
          className="hidden md:inline-flex items-center rounded-md bg-[#FF8A3D] px-4 py-2 text-sm font-semibold text-[#05070B] transition-colors hover:bg-[#FFA05E]"
        >
          Buy Now
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden text-[#EAF0F7]"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-[#1D2636] bg-[#05070B]"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-sm text-[#8792A3] hover:text-[#EAF0F7]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#buy"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex justify-center rounded-md bg-[#FF8A3D] px-4 py-2.5 text-sm font-semibold text-[#05070B]"
              >
                Buy Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
