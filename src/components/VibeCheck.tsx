"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const bentoItems = [
  {
    type: "status",
    span: "col-span-2 row-span-1",
    content: {
      emoji: "⚡",
      label: "Currently",
      value: "Building cool sh*t with AI + Web3",
    },
  },
  {
    type: "location",
    span: "col-span-1 row-span-1",
    content: {
      emoji: "📍",
      label: "Based in",
      value: "Punjab, India",
    },
  },
  {
    type: "stack",
    span: "col-span-1 row-span-2",
    content: {
      emoji: "🛠",
      label: "Daily Stack",
      items: ["Next.js", "TypeScript", "Python", "Tailwind", "MongoDB"],
    },
  },
  {
    type: "vibe",
    span: "col-span-1 row-span-1",
    content: {
      emoji: "🎵",
      label: "Coding Fuel",
      value: "Lo-fi + Chai ☕",
    },
  },
  {
    type: "fact",
    span: "col-span-1 row-span-1",
    content: {
      emoji: "🏆",
      label: "Flex",
      value: "10+ Hackathons before 20",
    },
  },
  {
    type: "quote",
    span: "col-span-2 row-span-1",
    content: {
      emoji: "💭",
      label: "Life Motto",
      value: "\"Ship fast, break things, learn faster.\"",
    },
  },
  {
    type: "learning",
    span: "col-span-1 row-span-1",
    content: {
      emoji: "📚",
      label: "Learning",
      value: "Rust + ZK Proofs",
    },
  },
  {
    type: "age",
    span: "col-span-1 row-span-1",
    content: {
      emoji: "🎂",
      label: "Age",
      value: "19",
    },
  },
];

function BentoCard({
  item,
  index,
}: {
  item: (typeof bentoItems)[0];
  index: number;
}) {
  const colors = [
    "#00ff88", "#00b4ff", "#8b5cf6", "#FFD700",
    "#FF6B6B", "#b7cdaf", "#00D4FF", "#FF9F43",
  ];
  const accent = colors[index % colors.length];

  return (
    <motion.div
      className={`${item.span} group relative`}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="h-full rounded-2xl border border-outline-variant/10 p-6 md:p-8 relative overflow-hidden"
        style={{ backgroundColor: "rgba(26,28,25,0.7)" }}
        whileHover={{
          y: -4,
          borderColor: `${accent}35`,
          transition: { duration: 0.3 },
        }}
      >
        {/* Corner glow */}
        <motion.div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700"
          style={{ backgroundColor: accent }}
        />

        {/* Emoji */}
        <motion.div
          className="text-3xl md:text-4xl mb-3 inline-block"
          whileHover={{ scale: 1.3, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {item.content.emoji}
        </motion.div>

        {/* Label */}
        <p
          className="text-[10px] font-label font-bold uppercase tracking-[0.25em] mb-2"
          style={{ color: `${accent}90` }}
        >
          {item.content.label}
        </p>

        {/* Value / Content */}
        {item.type === "stack" && "items" in item.content ? (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {(item.content as { items: string[] }).items.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-label font-bold border"
                style={{
                  borderColor: `${accent}20`,
                  color: `${accent}cc`,
                  backgroundColor: `${accent}08`,
                }}
                whileHover={{
                  borderColor: accent,
                  backgroundColor: `${accent}15`,
                  scale: 1.05,
                }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        ) : (
          <p className="font-headline text-lg md:text-xl font-bold tracking-tight leading-snug">
            {"value" in item.content ? (item.content as { value: string }).value : ""}
          </p>
        )}

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] rounded-b-2xl"
          style={{ backgroundColor: accent }}
          initial={{ width: 0 }}
          whileInView={{ width: "40%" }}
          transition={{ delay: 0.5 + index * 0.08, duration: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function VibeCheck() {
  return (
    <section className="relative py-36 px-8 overflow-hidden" id="vibe">
      {/* Background noise */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(183,205,175,0.3) 1px, transparent 1px), linear-gradient(-45deg, rgba(183,205,175,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="mb-16 text-center">
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 mb-8"
            style={{ backgroundColor: "rgba(183,205,175,0.05)" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, borderColor: "rgba(183,205,175,0.4)" }}
          >
            <motion.span
              animate={{ rotate: [0, 14, -14, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xl"
            >
              ✌️
            </motion.span>
            <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Vibe Check
            </span>
          </motion.div>

          <h2 className="font-headline text-5xl md:text-6xl font-black tracking-tighter mb-4">
            {"Get to know me".split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.025, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <p className="text-on-surface-variant text-base max-w-md mx-auto">
            Beyond the code — a quick snapshot of who I am ✦
          </p>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 auto-rows-auto">
          {bentoItems.map((item, i) => (
            <BentoCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
