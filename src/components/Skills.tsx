"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skills = [
  {
    title: "Languages",
    description:
      "Proficient in Python, JavaScript, HTML, and CSS for building diverse solutions.",
  },
  {
    title: "Tools & Tech",
    description:
      "Experienced with Git version control, RESTful APIs, and Arduino hardware prototyping.",
  },
  {
    title: "Soft Skills",
    description:
      "Natural leadership, high adaptability, and strong collaborative teamwork in fast-paced environments.",
  },
];

export default function Skills() {
  return (
    <section className="py-32 px-8 bg-surface-container-low" id="skills">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-20">
          <span className="font-label text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Capabilities
          </span>
          <h2 className="font-headline text-6xl font-bold tracking-tighter">
            Skills
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-outline-variant/30">
          {skills.map((skill, i) => (
            <AnimatedSection key={skill.title} delay={i * 0.15}>
              <motion.div
                className={`p-12 border-b border-outline-variant/30 ${
                  i < 2 ? "md:border-r" : ""
                } ${i === 0 ? "lg:border-r" : ""} hover:bg-surface-bright transition-colors duration-300 group cursor-default h-full`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-start mb-12">
                  <h3 className="font-headline text-3xl font-bold">
                    {skill.title}
                  </h3>
                  <motion.span
                    className="material-symbols-outlined text-primary"
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    arrow_outward
                  </motion.span>
                </div>
                <p className="text-on-surface-variant text-lg">
                  {skill.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
