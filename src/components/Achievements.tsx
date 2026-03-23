"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const achievements = [
  {
    number: "01",
    title: "Top 23 — HackIndia National Web3 Hackathon",
    description:
      "Ranked among the top innovators in a national-level Web3 hackathon, building a blockchain-based infrastructure monitoring system.",
    icon: "trophy",
    accent: "#FFD700",
    year: "2024",
  },
  {
    number: "02",
    title: "FinWell — National Finalist, Fetch.ai Hackathon",
    description:
      "Built a decentralized AI copilot using Fetch.ai's uAgents for managing stocks, crypto, and health insurance decisions.",
    icon: "neurology",
    accent: "#00D4FF",
    year: "2024",
  },
  {
    number: "03",
    title: "NusaPay — Stellar Blockchain Global Hackathon",
    description:
      "Created a permissionless cross-border payment protocol on Stellar with near-zero fees and Hyperlane cross-chain interoperability.",
    icon: "public",
    accent: "#8b5cf6",
    year: "2025",
  },
  {
    number: "04",
    title: "Microsoft AI on Azure Certification",
    description:
      "Validated expertise in Microsoft Azure Artificial Intelligence services and cloud-based ML deployments.",
    icon: "verified",
    accent: "#00A4EF",
    year: "2024",
  },
  {
    number: "05",
    title: "Student Ambassador — Let's Upgrade & Internshala",
    description:
      "Representing leading ed-tech platforms within the Chitkara University community, mentoring peers in technology.",
    icon: "groups",
    accent: "#b7cdaf",
    year: "2024",
  },
  {
    number: "06",
    title: "10+ Hackathons — 5+ National Finals",
    description:
      "Consistent top performer at CodeSlam, HackIndia, Stellar Build, and other national-level coding competitions.",
    icon: "emoji_events",
    accent: "#FF6B6B",
    year: "2023–25",
  },
];

function AchievementCard({
  item,
  index,
}: {
  item: (typeof achievements)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative flex gap-6 md:gap-8 p-6 md:p-8 rounded-2xl border border-outline-variant/10 overflow-hidden"
        style={{ backgroundColor: "rgba(30,32,29,0.5)" }}
        whileHover={{
          y: -6,
          borderColor: `${item.accent}40`,
          backgroundColor: "rgba(30,32,29,0.8)",
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: isHovered ? 0.06 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: `radial-gradient(circle at 20% 50%, ${item.accent} 0%, transparent 60%)`,
          }}
        />

        {/* Left — Icon + Number */}
        <div className="flex-shrink-0 relative">
          <motion.div
            className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border relative overflow-hidden"
            style={{
              backgroundColor: `${item.accent}10`,
              borderColor: `${item.accent}25`,
            }}
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <span
              className="material-symbols-outlined text-2xl md:text-3xl relative z-10"
              style={{ color: item.accent }}
            >
              {item.icon}
            </span>
            {/* Pulse behind icon */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{ backgroundColor: `${item.accent}15` }}
              animate={{
                scale: isHovered ? [1, 1.4, 1] : 1,
                opacity: isHovered ? [0.3, 0, 0.3] : 0,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
              }}
            />
          </motion.div>
          {/* Timeline dot connector */}
          {index < achievements.length - 1 && (
            <div className="hidden md:block absolute top-20 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-outline-variant/20" />
          )}
        </div>

        {/* Right — Content */}
        <div className="flex-1 min-w-0 relative z-10">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h4 className="font-headline text-lg md:text-xl font-bold tracking-tight leading-tight">
              {item.title}
            </h4>
            <motion.span
              className="flex-shrink-0 px-3 py-1 rounded-full text-[10px] font-label font-bold uppercase tracking-widest border"
              style={{
                borderColor: `${item.accent}30`,
                color: `${item.accent}90`,
              }}
              animate={{
                borderColor: isHovered ? `${item.accent}60` : `${item.accent}30`,
              }}
            >
              {item.year}
            </motion.span>
          </div>
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
            {item.description}
          </p>
          {/* Bottom accent */}
          <motion.div
            className="h-[1px] mt-4"
            style={{
              background: `linear-gradient(90deg, ${item.accent}40, transparent)`,
              transformOrigin: "left",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Achievements() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} className="relative py-36 px-8 overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div
        className="absolute right-0 top-20 font-headline text-[20rem] font-black leading-none pointer-events-none select-none opacity-[0.02]"
        style={{ y: parallaxY }}
      >
        ★
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left — Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <AnimatedSection direction="left">
              <motion.span
                className="font-label text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Milestones
              </motion.span>

              <h2 className="font-headline text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
                {"Achievements & Recognition".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-3"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>

              {/* Quote card */}
              <motion.div
                className="p-8 rounded-2xl border border-primary/20 relative overflow-hidden"
                style={{ backgroundColor: "rgba(74,93,69,0.15)" }}
                whileHover={{ scale: 1.02, borderColor: "rgba(183,205,175,0.4)" }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Decorative quote mark */}
                <motion.span
                  className="absolute -top-4 -left-2 text-8xl font-headline font-black text-primary/10 select-none pointer-events-none"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  &ldquo;
                </motion.span>

                <p className="font-headline text-xl md:text-2xl font-bold text-on-primary-container leading-snug mb-6 relative z-10">
                  Building the future, one hackathon at a time.
                </p>
                <div className="flex items-center gap-3 relative z-10">
                  <motion.span
                    className="material-symbols-outlined text-primary"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    verified
                  </motion.span>
                  <div>
                    <span className="font-label uppercase tracking-widest text-xs font-bold text-on-primary-container/80 block">
                      Piyush Prajapati
                    </span>
                    <span className="font-label uppercase tracking-widest text-[10px] text-on-primary-container/50">
                      CSE @ Chitkara University
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Right — Achievement Cards */}
          <div className="lg:col-span-7 space-y-4">
            {achievements.map((item, i) => (
              <AchievementCard key={item.number} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
