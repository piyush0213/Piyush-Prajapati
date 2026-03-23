"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const contactLinks = [
  { label: "Email", href: "mailto:contact@piyushprajapati.com", primary: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/piyushprajapati0213 ", primary: false },
  { label: "GitHub", href: "https://github.com/piyush0213", primary: false },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-surface w-full border-t border-primary-container/20 overflow-hidden"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center w-full px-8 py-20 text-center relative">
        {/* Giant Name */}
        <AnimatedSection>
          <div className="text-[8rem] md:text-[12rem] font-headline font-bold text-primary-container opacity-30 select-none uppercase leading-none mb-12">
            Piyush
          </div>
        </AnimatedSection>

        {/* Contact Links */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-16">
            {contactLinks.map((link, i) => (
              <div key={link.label} className="flex items-center gap-8">
                <motion.a
                  href={link.href}
                  className={`text-3xl md:text-5xl font-headline font-bold transition-all duration-500 ${
                    link.primary
                      ? "text-primary hover:scale-105"
                      : "text-on-surface-variant hover:text-primary hover:translate-x-2"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
                {i < contactLinks.length - 1 && (
                  <span className="hidden md:block w-2 h-2 rounded-full bg-primary-container" />
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Copyright */}
        <AnimatedSection delay={0.3}>
          <p className="font-label text-primary opacity-60 tracking-widest uppercase text-sm mb-12">
            © 2024 Piyush Prajapati. Built with Precision.
          </p>
        </AnimatedSection>

        {/* Back to Top */}
        <motion.button
          onClick={scrollToTop}
          className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary hover:bg-primary-fixed-dim transition-colors cursor-pointer"
          whileHover={{ y: -4, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <span className="material-symbols-outlined">arrow_upward</span>
        </motion.button>
      </div>
    </footer>
  );
}
