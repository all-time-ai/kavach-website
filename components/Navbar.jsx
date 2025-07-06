"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-sky-900">
          Kavach Cam
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-sky-800">
          <a href="#features" className="hover:text-sky-950 transition">Features</a>
          <a href="#how-it-works" className="hover:text-sky-950 transition">How It Works</a>
          <a href="#pricing" className="hover:text-sky-950 transition">Pricing</a>
          <a href="#testimonials" className="hover:text-sky-950 transition">Testimonials</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#buy"
            className="bg-sky-700 text-white px-5 py-2 rounded-full text-sm hover:bg-sky-800 transition"
          >
            Buy Now
          </a>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-sky-900 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-sky-100 shadow-lg px-6 py-4 space-y-4 text-sky-800 font-medium">
          <a href="#features" className="block hover:text-sky-950" onClick={toggleMenu}>Features</a>
          <a href="#how-it-works" className="block hover:text-sky-950" onClick={toggleMenu}>How It Works</a>
          <a href="#pricing" className="block hover:text-sky-950" onClick={toggleMenu}>Pricing</a>
          <a href="#testimonials" className="block hover:text-sky-950" onClick={toggleMenu}>Testimonials</a>
          <a
            href="#buy"
            className="block bg-sky-700 text-white text-center px-4 py-2 rounded-full hover:bg-sky-800 transition"
            onClick={toggleMenu}
          >
            Buy Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
