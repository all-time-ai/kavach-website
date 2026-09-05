import React from "react";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { href: "https://www.linkedin.com/in/all-time-ai-46a9b53aa/", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "https://www.youtube.com/@alltimeai_official", label: "YouTube", Icon: FaYoutube },
  { href: "https://x.com/All_Time_AI", label: "X", Icon: FaXTwitter },
  { href: "https://www.instagram.com/alltimeai_official/", label: "Instagram", Icon: FaInstagram },
];

const Footer = () => {
  return (
    <footer className="border-t border-[#1D2636] bg-[#05070B] px-6 py-10 text-[#8792A3]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="font-[family-name:var(--font-display)] text-base font-semibold text-[#EAF0F7]">
          © 2025 Rakshak Cam
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#features" className="hover:text-[#EAF0F7]">Features</a>
          <a href="#pricing" className="hover:text-[#EAF0F7]">Pricing</a>
          <a href="#testimonials" className="hover:text-[#EAF0F7]">Testimonials</a>
          <a href="#demo" className="hover:text-[#EAF0F7]">Demo</a>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors hover:text-[#EAF0F7]"
            >
              <Icon className="text-base" />
            </a>
          ))}
          <span className="mx-1 h-4 w-px bg-[#1D2636]" />
          <span className="text-sm">tech@alltimeai.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
