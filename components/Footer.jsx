import React from "react";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-sky-900 text-white py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Copyright */}
                <div className="text-lg font-semibold">
                    © 2025 Rakshak Cam
                </div>

                {/* Navigation Links */}
                <div className="flex gap-6 text-sm text-gray-300">
                    <a href="#features" className="hover:text-white">Features</a>
                    <a href="#pricing" className="hover:text-white">Pricing</a>
                    <a href="#testimonials" className="hover:text-white">Testimonials</a>
                    <a href="#demo" className="hover:text-white">Demo</a>
                </div>

                {/* Social Media + Email */}
                <div className="flex items-center gap-4 text-gray-300">

                    {/* Social Icons */}
                    <a
                        href="https://www.linkedin.com/in/all-time-ai-46a9b53aa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-white transition-colors"
                    >
                        <FaLinkedinIn className="text-lg" />
                    </a>

                    <a
                        href="https://www.youtube.com/@alltimeai_official"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="hover:text-white transition-colors"
                    >
                        <FaYoutube className="text-lg" />
                    </a>

                    <a
                        href="https://x.com/All_Time_AI"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                        className="hover:text-white transition-colors"
                    >
                        <FaXTwitter className="text-lg" />
                    </a>

                    <a
                        href="https://www.instagram.com/alltimeai_official/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-white transition-colors"
                    >
                        <FaInstagram className="text-lg" />
                    </a>

                    {/* Divider */}
                    <span className="mx-2 h-4 w-px bg-white/30"></span>

                    {/* Support Email */}
                    <span className="text-sm text-gray-400">
                        tech@alltimeai.com
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
