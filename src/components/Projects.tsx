"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    category: "AI & Full Stack",
    title: "Interview.io",
    description:
      "AI-Powered Real-Time Interview Coach with simulated interview environment, adaptive quizzes, AI-based Q&A, and video calling. Helps users sharpen interview skills with personalized AI feedback.",
    tags: ["React", "Node.js", "MongoDB", "Gemini API", "Socket.io"],
    image: "/interview-io.png",
    accent: "#00ff88",
    github: "https://github.com/piyush0213/Interview.io",
    year: "2024",
  },
  {
    category: "AI Agents & Blockchain",
    title: "FinWell",
    description:
      "Decentralized AI copilot for managing stock portfolios, crypto assets, and health insurance decisions — built using Fetch.ai's uAgents, ChatProtocol, and ASI1 Mini LLM.",
    tags: ["Python", "Fetch.ai", "uAgents", "Solana", "LLM"],
    image: "/finwell.png",
    accent: "#00b4ff",
    github: "https://github.com/piyush0213/FinWell",
    year: "2024",
  },
  {
    category: "Web3 & DeFi",
    title: "NusaPay",
    description:
      "Permissionless cross-border payment protocol built on Stellar blockchain. Enables fast, near-zero fee international payroll and remittances with cross-chain interoperability via Hyperlane.",
    tags: ["Stellar", "Soroban", "TypeScript", "Hyperlane", "Rust"],
    image: "/nusapay.png",
    accent: "#8b5cf6",
    github: "https://github.com/piyush0213/Nusapay",
    year: "2025",
  },
];

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [index % 2 === 0 ? -40 : 40, 0, 0, index % 2 === 0 ? -40 : 40]
  );

  return (
    <motion.div
      ref={rowRef}
      style={{ opacity, x }}
      className="group relative"
      data-cursor-image={project.image}
      data-cursor-label={`View ${project.title}`}
    >
      {/* Main card container */}
      <motion.div
        className="relative py-12 md:py-16 border-b border-outline-variant/10 transition-colors duration-500 group-hover:border-transparent"
        whileHover={{ x: 12 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Background glow on hover */}
        <motion.div
          className="absolute inset-0 -mx-8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${project.accent}06 0%, transparent 50%, ${project.accent}03 100%)`,
          }}
        />

        {/* Top row: Number + Category + Year */}
        <div className="flex items-center gap-6 mb-6 relative z-10">
          <motion.span
            className="font-headline text-sm font-bold tracking-[0.3em] uppercase"
            style={{ color: `${project.accent}60` }}
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            0{index + 1}
          </motion.span>
          <div className="h-[1px] w-8 bg-outline-variant/30" />
          <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant/60 font-bold">
            {project.category}
          </span>
          <span className="ml-auto font-label text-xs text-on-surface-variant/40 tracking-widest">
            {project.year}
          </span>
        </div>

        {/* Title — Large, takes full width */}
        <div className="relative z-10 mb-8">
          <h3 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] transition-colors duration-300 group-hover:text-on-surface">
            {project.title.split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + i * 0.025,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h3>

          {/* Accent underline on hover */}
          <motion.div
            className="h-[3px] mt-4 rounded-full origin-left"
            style={{ backgroundColor: project.accent }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 0.15 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="h-[3px] -mt-[3px] rounded-full origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-0"
            style={{ backgroundColor: project.accent }}
          />
        </div>

        {/* Bottom row: Description + Tags + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end relative z-10">
          {/* Description */}
          <motion.p
            className="md:col-span-5 text-on-surface-variant text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {project.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            className="md:col-span-4 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                className="px-3 py-1 rounded-full border text-[10px] font-label font-bold uppercase tracking-wider"
                style={{
                  borderColor: `${project.accent}25`,
                  color: `${project.accent}99`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  borderColor: project.accent,
                  color: project.accent,
                  backgroundColor: `${project.accent}10`,
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            className="md:col-span-3 flex justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border font-label font-bold uppercase tracking-[0.15em] text-[10px] transition-all duration-300 group/btn"
              style={{
                borderColor: `${project.accent}30`,
                color: `${project.accent}cc`,
              }}
              whileHover={{
                scale: 1.05,
                borderColor: project.accent,
                backgroundColor: `${project.accent}10`,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
              <motion.span
                className="material-symbols-outlined text-xs"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                north_east
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} className="relative py-36 px-8 overflow-hidden" id="work" style={{ position: 'relative' }}>
      {/* Parallax decorative text */}
      <motion.div
        className="absolute -right-20 top-40 font-headline text-[16rem] md:text-[22rem] font-black leading-none pointer-events-none select-none opacity-[0.015] -rotate-90"
        style={{ y: parallaxY }}
      >
        WORK
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <div>
              <motion.span
                className="font-label text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Portfolio
              </motion.span>
              <h2 className="font-headline text-7xl md:text-8xl font-black tracking-tighter leading-none">
                {"Recent Work".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.04,
                      duration: 0.6,
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
              className="text-on-surface-variant font-label text-sm uppercase tracking-widest max-w-xs text-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Hover to preview · Click to explore
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Top border */}
        <motion.div
          className="h-[1px] bg-gradient-to-r from-primary/40 via-outline-variant/20 to-transparent mb-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "left" }}
        />

        {/* Project Rows */}
        {projects.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
