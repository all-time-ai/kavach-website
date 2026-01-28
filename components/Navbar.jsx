"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-sky-900"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
              <Image alt='A' src="/logo/logo-small.png" className='rounded-lg' width={30} height={30} />
            </div>
            <span className="text-xl font-bold tracking-tighter text-sky-900 uppercase">
              AllTimeAI
            </span>
            <span className='h-8 flex items-start justify-start text-[12px] font-semibold text-red-800' >TM</span>
            Kavach Cam
          </div>
        </motion.div>

        {/* Desktop Nav Links */}
        <motion.div
          className="hidden md:flex space-x-8 text-sm font-medium text-sky-800"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <a href="#features" className="hover:text-sky-950 transition">Features</a>
          <a href="#how-it-works" className="hover:text-sky-950 transition">How It Works</a>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="#buy"
            className="bg-sky-700 text-white px-5 py-2 rounded-full text-sm hover:bg-sky-800 transition"
          >
            Buy Now
          </a>
        </motion.div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-sky-900 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-sky-100 shadow-lg px-6 py-4 space-y-4 text-sky-800 font-medium"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#features" className="block hover:text-sky-950" onClick={toggleMenu}>Features</a>
            <a href="#how-it-works" className="block hover:text-sky-950" onClick={toggleMenu}>How It Works</a>
            <a
              href="#buy"
              className="block bg-sky-700 text-white text-center px-4 py-2 rounded-full hover:bg-sky-800 transition"
              onClick={toggleMenu}
            >
              Buy Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
