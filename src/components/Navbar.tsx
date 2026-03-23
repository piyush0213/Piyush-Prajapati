"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 py-6 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-bold tracking-tighter text-primary font-headline"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Piyush Prajapati
        </motion.a>

        {/* Desktop Nav */}
        <motion.div
          className="hidden md:flex gap-12 font-bold text-sm tracking-widest uppercase font-label"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Right side */}
        <motion.div
          className="hidden md:block text-primary font-label font-bold text-sm tracking-widest uppercase"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Since 2024
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary z-60 relative"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={mobileOpen ? "open" : "closed"}
            className="flex flex-col gap-1.5"
          >
            <motion.span
              className="block w-6 h-0.5 bg-primary origin-center"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 4 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-primary"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-primary origin-center"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -4 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 top-0 bg-surface/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-3xl font-headline font-bold text-on-surface hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
