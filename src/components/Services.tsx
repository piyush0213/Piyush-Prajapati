"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: "terminal",
    title: "Frontend Engineering",
    description:
      "Building responsive, lightning-fast interfaces using modern frameworks and standard HTML/CSS/JS practices.",
    skills: ["React & Next.js", "Tailwind CSS", "Interaction Design"],
    accent: "#61DAFB",
    number: "01",
  },
  {
    icon: "api",
    title: "Backend Integration",
    description:
      "Developing robust logic and connecting frontends to secure, scalable server-side environments.",
    skills: ["RESTful APIs", "Python & Node.js", "Database Management"],
    accent: "#339933",
    number: "02",
  },
  {
    icon: "deployed_code",
    title: "Web3 & Blockchain",
    description:
      "Building decentralized applications with smart contracts, token integrations, and cross-chain interoperability.",
    skills: ["Solidity & Soroban", "Stellar & Solana", "DeFi Protocols"],
    accent: "#8b5cf6",
    number: "03",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-36 px-8 overflow-hidden" id="services">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(183,205,175,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(183,205,175,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedSection className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <motion.span
                className="font-label text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Offerings
              </motion.span>
              <h2 className="font-headline text-6xl md:text-7xl font-black tracking-tighter">
                {"My Services".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.03,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h2>
            </div>
            <motion.p
              className="text-xl text-on-surface-variant leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Specialized solutions focused on performance, accessibility, and
              high-end aesthetics.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="relative group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="relative h-full p-10 rounded-2xl border border-outline-variant/15 overflow-hidden"
                style={{ backgroundColor: "rgba(26,28,25,0.8)" }}
                whileHover={{
                  y: -12,
                  borderColor: `${service.accent}40`,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Top gradient glow */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
                  animate={{
                    opacity: hoveredIndex === i ? 0.15 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${service.accent} 0%, transparent 70%)`,
                  }}
                />

                {/* Number watermark */}
                <motion.span
                  className="absolute top-4 right-6 font-headline text-8xl font-black pointer-events-none select-none"
                  style={{ color: `${service.accent}08` }}
                  animate={{
                    color: hoveredIndex === i ? `${service.accent}15` : `${service.accent}08`,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {service.number}
                </motion.span>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border"
                    style={{
                      backgroundColor: `${service.accent}10`,
                      borderColor: `${service.accent}20`,
                    }}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span
                      className="material-symbols-outlined text-3xl"
                      style={{ color: service.accent }}
                    >
                      {service.icon}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Accent line */}
                  <motion.div
                    className="h-[2px] mb-6"
                    style={{
                      background: `linear-gradient(90deg, ${service.accent}, transparent)`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                  />

                  {/* Description */}
                  <p className="text-on-surface-variant mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Skill pills */}
                  <ul className="space-y-3">
                    {service.skills.map((skill, j) => (
                      <motion.li
                        key={skill}
                        className="flex items-center gap-3 text-sm font-label"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.4 + i * 0.1 + j * 0.08,
                          duration: 0.4,
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: service.accent }}
                          animate={{
                            scale: hoveredIndex === i ? [1, 1.5, 1] : 1,
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: hoveredIndex === i ? Infinity : 0,
                            delay: j * 0.2,
                          }}
                        />
                        <span className="uppercase tracking-wider text-on-surface-variant/80">
                          {skill}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: service.accent, transformOrigin: "left" }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 1 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
