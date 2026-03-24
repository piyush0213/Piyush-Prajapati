"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Total duration is ~4.2s, wait 4.5s to unmount
    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 4500); 

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center font-headline"
        >
          {/* Base Dark Background - disappears when swipe covers */}
          <motion.div
            className="absolute inset-0 bg-surface"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ times: [0, 0.85, 0.851, 1], duration: 4 }}
          />

          {/* Faint Watermark Logo */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center opacity-[0.03]"
            animate={{ opacity: [0.03, 0.03, 0, 0] }}
            transition={{ times: [0, 0.85, 0.851, 1], duration: 4 }}
          >
            <h1 className="text-[25vw] font-extrabold whitespace-nowrap text-on-surface select-none">
              PIYUSH
            </h1>
          </motion.div>

          {/* Mask container for text sequence */}
          <motion.div 
            className="relative z-10 flex items-center overflow-hidden h-32 md:h-40"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ times: [0, 0.85, 0.851, 1], duration: 4 }}
          >
             <div className="flex items-center text-4xl md:text-7xl font-extrabold text-on-surface tracking-widest uppercase">
                {/* Popping 'P' */}
                <motion.span 
                  className="inline-block origin-center text-primary"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.2, 1], opacity: 1 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                >
                  P
                </motion.span>
                {/* Expanding rest of the name */}
                <motion.span
                  className="overflow-hidden whitespace-nowrap block"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ delay: 1.0, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                >
                  IYUSH PRAJAPATI
                </motion.span>
             </div>
          </motion.div>

          {/* Sweeping Transition Block */}
          {/* Swipes up from bottom, covers screen, then continues up */}
          <motion.div
            className="absolute inset-0 z-20 bg-primary"
            initial={{ y: "100%" }}
            animate={{ y: ["100%", "0%", "-100%"] }}
            transition={{
              times: [0, 0.5, 1],
              duration: 1.6,
              delay: 2.6, 
              ease: [0.65, 0, 0.35, 1]
            }}
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
