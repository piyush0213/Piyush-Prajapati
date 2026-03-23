"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const certifications = [
  {
    title: "OCI Generative AI Professional",
    issuer: "Oracle University",
    icon: "auto_awesome",
    color: "#FF0000",
    date: "Aug 2025",
    credentialId: "321876899OCI25GAIOCP",
    skills: ["Generative AI", "LLMs", "OCI AI Services"],
    image: "/certs/oracle-genai.jpg",
  },
  {
    title: "Oracle Fusion AI Agent Studio",
    issuer: "Oracle University",
    icon: "smart_toy",
    color: "#C74634",
    date: "Sep 2025",
    credentialId: "321876899OFAASOFA",
    skills: ["AI Agents", "Fusion AI", "Oracle Cloud"],
    image: "/certs/oracle-ai_agent.jpg",
  },
  {
    title: "Software Engineering Simulation",
    issuer: "JP Morgan Chase & Co. (Forage)",
    icon: "account_balance",
    color: "#003A70",
    date: "Aug 2025",
    credentialId: "C6GaWvnPTkwhzKFqR",
    skills: ["Kafka", "REST API", "H2 Integration"],
    image: "/certs/jpmorgan.jpg",
  },
  {
    title: "Advanced Software Engineering",
    issuer: "Walmart Global Tech (Forage)",
    icon: "shopping_cart",
    color: "#0071CE",
    date: "Jan 2026",
    credentialId: "HNqmvL6ticEksYCMq",
    skills: ["Data Structures", "Software Architecture", "DB Design"],
    image: "/certs/walmart.jpg",
  },
  {
    title: "HackQuest Gaia Learner",
    issuer: "HackQuest & Gaia",
    icon: "school",
    color: "#333333",
    date: "Jan 2025",
    credentialId: "No.1002315",
    skills: ["Web3", "Blockchain", "Decentralized AI"],
    image: "/certs/hackquest-gaia.jpg",
  },
  {
    title: "N8N: AI Agent Creation Guide",
    issuer: "Udemy",
    icon: "psychology",
    color: "#A435F0",
    date: "Jul 2025",
    credentialId: "UC-9f31dc43-713e-4d47",
    skills: ["AI Agents", "N8N Automation", "Workflow"],
    image: "/certs/udemy-ai_agent.jpg",
  },
  {
    title: "Full Stack Web Development",
    issuer: "GeeksforGeeks",
    icon: "web",
    color: "#2E8B57",
    date: "2024",
    credentialId: "GFG Nation SkillUp",
    skills: ["React", "Node.js", "Full Stack"],
    image: "/certs/fullstack.jpg",
  },
];

function CertCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[0];
  index: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-64 cursor-pointer"
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      onClick={() => setIsFlipped(!isFlipped)}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      data-cursor-image={cert.image}
      data-cursor-label={cert.title}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl border border-outline-variant/15 p-8 flex flex-col justify-between overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            backgroundColor: "rgba(26,28,25,0.8)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-[0.07] pointer-events-none"
            style={{ backgroundColor: cert.color }}
          />

          <div>
            <motion.div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border"
              style={{
                backgroundColor: `${cert.color}15`,
                borderColor: `${cert.color}25`,
              }}
            >
              <span
                className="material-symbols-outlined text-2xl"
                style={{ color: cert.color }}
              >
                {cert.icon}
              </span>
            </motion.div>
            <h4 className="font-headline text-lg font-bold tracking-tight mb-1">
              {cert.title}
            </h4>
            <p className="text-on-surface-variant/60 text-sm font-label">
              {cert.issuer}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant/40">
              {cert.date}
            </span>
            <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant/30 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">touch_app</span>
              Flip
            </span>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl border p-8 flex flex-col justify-between overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderColor: `${cert.color}30`,
            backgroundColor: "rgba(26,28,25,0.95)",
          }}
        >
          {/* Gradient accent */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
            style={{
              background: `linear-gradient(90deg, ${cert.color}, ${cert.color}40)`,
            }}
          />

          <div>
            <p
              className="text-xs font-label font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: cert.color }}
            >
              Credential
            </p>
            <p className="text-sm text-on-surface-variant mb-1">
              <span className="text-on-surface font-bold">{cert.credentialId}</span>
            </p>
            <p className="text-xs text-on-surface-variant/50 mb-6">
              Issued by {cert.issuer}, {cert.date}
            </p>

            <p
              className="text-[10px] font-label font-bold uppercase tracking-[0.2em] mb-2"
              style={{ color: `${cert.color}80` }}
            >
              Skills Validated
            </p>
            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-full text-[10px] font-label font-bold uppercase tracking-wider border"
                  style={{
                    borderColor: `${cert.color}25`,
                    color: `${cert.color}cc`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: cert.color }}
            />
            <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant/50">
              Verified
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section className="relative py-36 px-8 overflow-hidden" id="certifications">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #b7cdaf 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="mb-20 text-center">
          <motion.span
            className="font-label text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Credentials
          </motion.span>
          <h2 className="font-headline text-6xl md:text-7xl font-black tracking-tighter mb-4">
            {"Certifications".split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
            Hover to preview the certificate · Flip to reveal details ✦
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
