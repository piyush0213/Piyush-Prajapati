"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target);
  const isNumeric = !isNaN(numericTarget);

  useEffect(() => {
    if (isInView && isNumeric) {
      let start = 0;
      const end = numericTarget;
      const duration = 2000;
      const step = Math.max(duration / end, 10);
      const increment = Math.ceil(end / (duration / step));

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, step);

      return () => clearInterval(timer);
    }
  }, [isInView, isNumeric, numericTarget]);

  return (
    <span ref={ref} className="font-headline font-black">
      {isNumeric ? `${count}${suffix}` : target}
    </span>
  );
}

const stats = [
  { value: "15", suffix: "+", label: "Projects Built", icon: "code" },
  { value: "10", suffix: "+", label: "Hackathons", icon: "emoji_events" },
  { value: "5", suffix: "+", label: "National Finalist", icon: "military_tech" },
];

const highlights = [
  "Full-Stack Development",
  "AI / ML Integration",
  "Blockchain & Web3",
  "Hackathon Champion",
];

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-36 px-8 overflow-hidden"
      id="about"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          y: bgY,
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, #b7cdaf 0%, transparent 60%)",
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #b7cdaf 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — Heading */}
          <div className="lg:col-span-5">
            <AnimatedSection direction="left">
              <motion.span
                className="font-label text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block"
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Introduction
              </motion.span>

              <h2 className="font-headline text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-8">
                {"Turning ideas into digital reality.".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-3"
                    initial={{ opacity: 0, y: 40, rotateX: 60 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>

              {/* Highlight pills */}
              <motion.div
                className="flex flex-wrap gap-2 mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                {highlights.map((item, i) => (
                  <motion.span
                    key={item}
                    className="px-4 py-2 rounded-full border border-primary/30 text-xs font-label font-bold uppercase tracking-wider text-primary/80"
                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{
                      backgroundColor: "rgba(183,205,175,0.15)",
                      borderColor: "#b7cdaf",
                      color: "#b7cdaf",
                      scale: 1.05,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Right — Content */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.2}>
              <motion.p
                className="text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-14 font-body"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                viewport={{ once: true }}
              >
                I enjoy turning ideas into practical projects that solve everyday
                problems. Actively participated in{" "}
                <span className="text-primary font-bold">10+ hackathons</span>,
                led teams, and built innovative solutions. Currently a
                second-year engineering student at{" "}
                <span className="text-primary font-bold">
                  Chitkara University
                </span>{" "}
                dedicated to mastering the full stack.
              </motion.p>
            </AnimatedSection>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="relative group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="relative p-8 rounded-2xl border border-outline-variant/20 backdrop-blur-sm overflow-hidden"
                    style={{ backgroundColor: "rgba(41,43,39,0.4)" }}
                    whileHover={{
                      y: -8,
                      borderColor: "rgba(183,205,175,0.4)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "radial-gradient(circle at 50% 0%, rgba(183,205,175,0.08) 0%, transparent 70%)",
                        }}
                      />
                    </div>

                    {/* Icon */}
                    <motion.span
                      className="material-symbols-outlined text-primary/40 text-3xl mb-4 block"
                      whileHover={{ rotate: 12, scale: 1.1 }}
                    >
                      {stat.icon}
                    </motion.span>

                    {/* Number */}
                    <div className="text-5xl mb-2 text-on-surface">
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>

                    {/* Label */}
                    <div className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold">
                      {stat.label}
                    </div>

                    {/* Bottom accent line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.6 + i * 0.15, duration: 0.8 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
