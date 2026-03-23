"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverImage, setHoverImage] = useState<string | null>(null);
  const [label, setLabel] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  // Smooth follow with different stiffness for main dot vs trailing ring
  const dotX = useSpring(cursorX, { stiffness: 800, damping: 35 });
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 35 });
  const ringX = useSpring(cursorX, { stiffness: 120, damping: 20 });
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 20 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    setIsMounted(true);
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for project image cursor
      const projectEl = target.closest("[data-cursor-image]");
      if (projectEl) {
        setHoverImage(projectEl.getAttribute("data-cursor-image") || null);
        setLabel(projectEl.getAttribute("data-cursor-label") || "");
        setIsHovering(true);
        return;
      }

      // Check for interactive elements
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select"
      );
      if (interactive) {
        setIsHovering(true);
        setLabel(interactive.getAttribute("data-cursor") || "");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const projectEl = target.closest("[data-cursor-image]");
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select"
      );
      if (projectEl || interactive) {
        setIsHovering(false);
        setHoverImage(null);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [handleMouseMove]);

  if (!isMounted) return null;

  return (
    <>
      {/* ---- Dot (fast, precise) ---- */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          className="rounded-full bg-primary"
          animate={{
            width: isClicking ? 6 : hoverImage ? 0 : isHovering ? 6 : 8,
            height: isClicking ? 6 : hoverImage ? 0 : isHovering ? 6 : 8,
            x: isClicking ? -3 : hoverImage ? 0 : isHovering ? -3 : -4,
            y: isClicking ? -3 : hoverImage ? 0 : isHovering ? -3 : -4,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
          style={{ mixBlendMode: "difference" }}
        />
      </motion.div>

      {/* ---- Ring (slower, trailing) ---- */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:flex items-center justify-center"
        style={{ x: ringX, y: ringY }}
      >
        <AnimatePresence mode="wait">
          {hoverImage ? (
            /* ---- Project Image Cursor ---- */
            <motion.div
              key="image-cursor"
              className="relative"
              initial={{ scale: 0, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{
                x: -160,
                y: -100,
              }}
            >
              {/* Image container */}
              <div className="w-80 h-52 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 relative">
                <img
                  src={hoverImage}
                  alt="Project preview"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Label */}
                {label && (
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-white text-xs font-label font-bold uppercase tracking-[0.2em]">
                      {label}
                    </span>
                  </div>
                )}
              </div>
              {/* Shadow glow */}
              <div
                className="absolute -inset-4 rounded-2xl -z-10 blur-2xl opacity-30"
                style={{ backgroundColor: "rgba(183,205,175,0.3)" }}
              />
            </motion.div>
          ) : (
            /* ---- Default Ring ---- */
            <motion.div
              key="ring-cursor"
              className="rounded-full border"
              initial={{ scale: 0 }}
              animate={{
                width: isHovering ? 60 : 40,
                height: isHovering ? 60 : 40,
                x: isHovering ? -30 : -20,
                y: isHovering ? -30 : -20,
                scale: isClicking ? 0.85 : 1,
                borderColor: isHovering
                  ? "rgba(183, 205, 175, 0.6)"
                  : "rgba(183, 205, 175, 0.2)",
                borderWidth: isHovering ? 2 : 1,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              style={{ mixBlendMode: "difference" }}
            >
              {/* Inner label text */}
              <AnimatePresence>
                {label && isHovering && !hoverImage && (
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center text-[8px] font-label font-bold uppercase tracking-wider text-primary"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Hide native cursor on desktop */}
      <style jsx global>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
