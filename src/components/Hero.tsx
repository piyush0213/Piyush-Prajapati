"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const letterVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

function AnimatedWord({ word, className, delayOffset = 0 }: { word: string; className?: string, delayOffset?: number }) {
  return (
    <span className={`inline-flex overflow-hidden ${className || ""}`}>
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={{
             hidden: { y: 100, opacity: 0 },
             visible: (i: number) => ({
               y: 0,
               opacity: 1,
               transition: { delay: delayOffset + i * 0.05, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }
             })
          }}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();

  // Scatter animations for "damaged" layout effect
  const leftX = useTransform(scrollY, [0, 600], [0, -200]);
  const leftY = useTransform(scrollY, [0, 600], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const rightX = useTransform(scrollY, [0, 600], [0, 200]);
  const rightRotate = useTransform(scrollY, [0, 600], [0, 25]);
  const rightScale = useTransform(scrollY, [0, 600], [1, 0.8]);

  const particleScatter = useTransform(scrollY, [0, 500], [1, 3]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-surface">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, #4a5d45 0%, transparent 50%), radial-gradient(circle at 20% 80%, #4a5d45 0%, transparent 50%)",
        }}
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 18}%`,
            scale: particleScatter
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-[1400px] w-full px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          {/* Left Column */}
          <motion.div className="lg:col-span-8 z-20" style={{ x: leftX, y: leftY, opacity: heroOpacity }}>
            {/* Available Badge */}
            <motion.div
              className="overflow-hidden mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 3.6 }}
            >
              <span className="inline-flex items-center gap-2 font-label text-primary font-bold tracking-[0.4em] uppercase text-sm">
                <motion.span
                  className="inline-block w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Available for Projects
              </span>
            </motion.div>

            {/* Name */}
            <h1 className="font-headline text-[12vw] lg:text-[10vw] leading-[0.85] font-extrabold tracking-tighter text-on-surface uppercase mb-8">
              <div className="overflow-hidden">
                <AnimatedWord word="PIYUSH" delayOffset={3.8} />
              </div>
              <div className="overflow-hidden">
                <AnimatedWord word="PRAJAPATI" className="hero-text-outline" delayOffset={4.1} />
              </div>
            </h1>

            {/* Subtitle & CTA */}
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4.5 }}
            >
              <p className="text-xl md:text-3xl text-on-surface-variant font-body leading-tight mb-8">
                Second-year Computer Science Engineering student at Chitkara
                University. Crafting high-end digital solutions.
              </p>
              <div className="flex items-center gap-6">
                <motion.a
                  href="#work"
                  className="px-8 py-4 bg-primary text-on-primary font-label font-bold uppercase tracking-widest text-sm hover:bg-primary-fixed-dim transition-all duration-300 inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Work
                </motion.a>
                <motion.div
                  className="editorial-line w-24"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 4.8 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Portrait */}
          <motion.div
            className="lg:col-span-4 mt-12 lg:mt-0 relative"
            style={{ x: rightX, rotate: rightRotate, scale: rightScale, opacity: heroOpacity }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 4.0 }}
            >
              <div className="relative group">
              <motion.div
                className="absolute -inset-4 border border-primary/20"
                animate={{ scale: [1.05, 1.08, 1.05] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-high rounded-sm">
                <img
                  alt="Piyush Prajapati Professional Portrait"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                  src="/1.jpg"
                />
              </div>
              {/* QR Code Element */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-surface p-6 border border-outline-variant/30 hidden md:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 4.4 }}
              >
                <div className="w-20 h-20 bg-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-surface text-4xl">
                    qr_code_2
                  </span>
                </div>
                <p className="mt-2 font-label text-[10px] uppercase tracking-widest text-on-surface-variant text-center font-bold">
                  Connect
                </p>
              </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
