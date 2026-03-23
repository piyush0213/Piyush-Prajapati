"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const techStack = [
  {
    name: "React",
    color: "#61DAFB",
    logo: (
      <svg viewBox="0 0 256 228" className="w-full h-full">
        <path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.986 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Z" fill="#61DAFB"/>
        <circle cx="128" cy="113.634" r="20.818" fill="#61DAFB"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#ffffff",
    logo: (
      <svg viewBox="0 0 180 180" className="w-full h-full">
        <mask id="nextmask" style={{ maskType: "alpha" }}><circle cx="90" cy="90" r="90" fill="black"/></mask>
        <g mask="url(#nextmask)">
          <circle cx="90" cy="90" r="90" fill="black" stroke="white" strokeWidth="6"/>
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#next-a)"/>
          <rect x="115" y="54" width="12" height="72" fill="url(#next-b)"/>
        </g>
        <defs>
          <linearGradient id="next-a" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient>
          <linearGradient id="next-b" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    logo: (
      <svg viewBox="0 0 256 256" className="w-full h-full">
        <rect width="256" height="256" rx="20" fill="#3178C6"/>
        <path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.15 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.796 10.669-11.672 2.621-4.876 3.931-10.96 3.931-18.253 0-5.237-.924-9.813-2.773-13.727-1.849-3.914-4.406-7.408-7.672-10.482-3.266-3.074-7.094-5.89-11.484-8.448-4.39-2.558-9.104-5.007-14.144-7.347-3.656-1.726-6.949-3.38-9.879-4.962-2.93-1.582-5.427-3.182-7.49-4.8-2.063-1.618-3.656-3.345-4.778-5.179-1.122-1.834-1.683-3.914-1.683-6.24 0-2.147.49-4.084 1.472-5.81.981-1.727 2.375-3.218 4.182-4.476 1.806-1.258 3.993-2.237 6.562-2.937 2.568-.7 5.443-1.05 8.625-1.05 2.264 0 4.636.187 7.118.561 2.481.374 4.963.97 7.445 1.788a45.104 45.104 0 0 1 7.146 3.073 35.783 35.783 0 0 1 6.257 4.311v-25.558c-4.023-1.618-8.471-2.85-13.344-3.696-4.874-.845-10.453-1.268-16.737-1.268-6.557 0-12.786.706-18.685 2.117-5.899 1.411-11.1 3.624-15.602 6.639-4.502 3.015-8.072 6.904-10.71 11.668-2.637 4.764-3.956 10.482-3.956 17.155 0 8.663 2.481 16.001 7.444 22.013 4.963 6.013 12.406 11.085 22.33 15.218 3.961 1.618 7.64 3.2 11.039 4.745 3.399 1.545 6.345 3.164 8.837 4.854 2.493 1.69 4.449 3.542 5.87 5.555 1.42 2.013 2.13 4.35 2.13 7.012 0 1.978-.457 3.806-1.371 5.484-.914 1.678-2.306 3.128-4.175 4.35-1.87 1.22-4.186 2.17-6.949 2.85-2.763.68-5.985 1.02-9.665 1.02-6.338 0-12.54-1.175-18.604-3.524-6.064-2.349-11.556-5.88-16.477-10.591Zm-46.036-68.361H140V109.9H60v22.214h26.008v116.886h18.474V132.114Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "#339933",
    logo: (
      <svg viewBox="0 0 256 292" className="w-full h-full">
        <path d="M127.998 291.97c-3.495 0-6.816-.895-9.791-2.614L87.71 271.462c-4.653-2.614-2.378-3.508-0.843-4.042 9.37-3.268 11.267-3.988 21.245-9.67 1.074-.577 2.44-.36 3.508.36l27.057 16.055c1.015.577 2.441.577 3.335 0l105.47-60.914c1.014-.578 1.652-1.715 1.652-2.917V89.434c0-1.203-.638-2.34-1.652-2.918L142.444 25.63c-1.014-.577-2.32-.577-3.335 0L33.767 86.516c-1.074.577-1.653 1.767-1.653 2.918v120.902c0 1.143.579 2.34 1.653 2.858l28.898 16.697c15.683 7.82 25.226-1.384 25.226-10.672V100.574c0-1.715 1.364-3.07 3.088-3.07h13.406c1.652 0 3.087 1.355 3.087 3.07v118.826c0 20.927-11.388 32.942-31.234 32.942-6.097 0-10.912 0-24.318-6.616L23.73 229.672c-6.037-3.508-9.791-10.03-9.791-16.97V91.802c0-6.94 3.754-13.462 9.791-16.97L129.198 13.92c5.914-3.329 13.727-3.329 19.583 0l105.47 60.913c6.037 3.508 9.791 10.03 9.791 16.97v120.9c0 6.94-3.754 13.462-9.791 16.97l-105.47 60.914c-2.975 1.66-6.396 2.384-9.791 2.384h.008Z" fill="#339933"/>
        <path d="M160.36 207.53c-47.434 0-57.345-21.783-57.345-40.065 0-1.714 1.364-3.069 3.087-3.069h13.707c1.543 0 2.857 1.114 3.087 2.616 2.077 14.126 8.324 21.238 36.603 21.238 22.527 0 32.116-5.077 32.116-17.04 0-6.88-2.736-11.958-37.74-15.407-29.253-2.918-47.373-9.358-47.373-32.758 0-21.603 18.183-34.47 48.7-34.47 34.264 0 51.19 11.897 53.326 37.487a3.323 3.323 0 0 1-.814 2.44 3.22 3.22 0 0 1-2.273.99h-13.767c-1.423 0-2.677-1.054-3.028-2.377-3.335-14.968-11.569-19.744-33.464-19.744-24.619 0-27.476 8.566-27.476 14.968 0 7.76 3.394 10.03 36.603 14.427 32.906 4.35 48.458 10.498 48.458 33.58 0 23.35-19.462 36.698-53.385 36.698" fill="#339933"/>
      </svg>
    ),
  },
  {
    name: "Python",
    color: "#3776AB",
    logo: (
      <svg viewBox="0 0 256 255" className="w-full h-full">
        <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072ZM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13Z" fill="url(#python-a)"/>
        <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897Zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13Z" fill="url(#python-b)"/>
        <defs>
          <linearGradient id="python-a" x1="49.4" y1="0.5" x2="136" y2="136" gradientUnits="userSpaceOnUse"><stop stopColor="#387EB8"/><stop offset="1" stopColor="#366994"/></linearGradient>
          <linearGradient id="python-b" x1="119" y1="118" x2="206" y2="254" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE052"/><stop offset="1" stopColor="#FFC331"/></linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    color: "#47A248",
    logo: (
      <svg viewBox="0 0 256 549" className="w-full h-full">
        <path d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.172 26.133 5.215 58.533 5.215 58.533h9.131s4.044-32.4 5.215-58.533l1.918-1.28s228.703-169.994 31.235-421.89Z" fill="#00ED64"/>
        <path d="M128 526.147s-4.895-3.42-6.396-5.999l-.636-113.784s3.255-3.305 7.032-3.788c3.395.484 7.032 3.788 7.032 3.788l-.636 113.784c-1.501 2.579-6.396 5.999-6.396 5.999Z" fill="#21313C"/>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    logo: (
      <svg viewBox="0 0 256 154" className="w-full h-full">
        <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="#06B6D4"/>
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    logo: (
      <svg viewBox="0 0 256 256" className="w-full h-full">
        <path d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637c1.868.926 3.634 2.11 5.188 3.66 7.663 7.664 7.663 20.075 0 27.74-7.665 7.666-20.076 7.666-27.737 0-7.665-7.665-7.665-20.076 0-27.74 1.964-1.961 4.202-3.477 6.595-4.54V86.926c-2.393-1.064-4.624-2.586-6.591-4.539-5.8-5.8-7.2-14.328-4.227-21.451L81.47 31.466 4.833 108.094c-6.44 6.444-6.44 16.884 0 23.322L116.6 243.178c6.437 6.433 16.873 6.433 23.31 0l111.262-103.266c6.44-6.438 6.44-16.887 0-23.318" fill="#F05032"/>
      </svg>
    ),
  },
  {
    name: "Solidity",
    color: "#8C8C8C",
    logo: (
      <svg viewBox="0 0 256 417" className="w-full h-full">
        <path d="M127.998 0l-63.5 109.975h127L127.998 0Z" fill="#8C8C8C" opacity=".45"/>
        <path d="M127.998 0L64.498 109.975H0l127.998-109.975Z" fill="#8C8C8C" opacity=".6"/>
        <path d="M127.998 0l63.5 109.975h64.498L127.998 0Z" fill="#8C8C8C" opacity=".8"/>
        <path d="M127.998 416.456l63.5-109.975h-127l63.5 109.975Z" fill="#8C8C8C" opacity=".45"/>
        <path d="M127.998 416.456l63.5-109.975h64.498L127.998 416.456Z" fill="#8C8C8C" opacity=".6"/>
        <path d="M127.998 416.456l-63.5-109.975H0l127.998 109.975Z" fill="#8C8C8C" opacity=".8"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    color: "#2496ED",
    logo: (
      <svg viewBox="0 0 256 185" className="w-full h-full">
        <path d="M250.716 70.497c-5.768-3.87-18.945-5.28-29.126-3.33-1.308-9.528-6.691-17.86-16.434-25.339l-5.59-3.725-3.726 5.59c-7.132 10.714-9.143 28.29-1.626 39.994-3.4 1.833-10.044 4.337-18.832 4.168H.15c-3.486 20.18 2.33 46.262 17.195 64.35 14.253 17.342 35.447 26.146 63.01 26.146 59.978 0 104.4-27.615 125.16-77.873 8.163.167 25.75.102 34.754-17.195 0 0 .656-1.167 2.443-4.865l-1.796-1.203 9.8-5.717Z" fill="#2496ED"/>
        <path d="M35.396 80.615h25.18v24.13h-25.18Zm28.55 0h25.18v24.13h-25.18Zm28.55 0h25.18v24.13h-25.18Zm28.548 0h25.181v24.13h-25.18Zm-57.1-28.24h25.18v24.13h-25.18Zm28.55 0h25.18v24.13h-25.18Zm28.55 0h25.18v24.13h-25.18Zm28.548 0h25.181v24.13h-25.18Zm0-28.241h25.181v24.13h-25.18Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Stellar",
    color: "#7B61FF",
    logo: (
      <svg viewBox="0 0 256 256" className="w-full h-full">
        <circle cx="128" cy="128" r="120" fill="none" stroke="#7B61FF" strokeWidth="12"/>
        <path d="M128 60L157 100H99L128 60Z" fill="#7B61FF"/>
        <path d="M128 196L99 156H157L128 196Z" fill="#7B61FF"/>
        <circle cx="128" cy="128" r="24" fill="#7B61FF"/>
      </svg>
    ),
  },
  {
    name: "Fetch.ai",
    color: "#00D4FF",
    logo: (
      <svg viewBox="0 0 256 256" className="w-full h-full">
        <circle cx="128" cy="128" r="120" fill="#1F3B73"/>
        <path d="M80 80h96v20H100v24h56v20h-56v32H80V80Z" fill="white"/>
        <circle cx="188" cy="168" r="16" fill="#00D4FF"/>
      </svg>
    ),
  },
];

const row1 = techStack.slice(0, 6);
const row2 = techStack.slice(6);

function TechCard({
  tech,
  onHover,
  onLeave,
}: {
  tech: (typeof techStack)[0];
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      className="flex-shrink-0 w-28 h-28 md:w-32 md:h-32 relative group cursor-pointer"
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      whileHover={{ scale: 1.25, zIndex: 30, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
    >
      {/* Pulsing glow background */}
      <div
        className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ backgroundColor: `${tech.color}25` }}
      />
      {/* Animated ring */}
      <div
        className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          background: `conic-gradient(from var(--angle, 0deg), transparent, ${tech.color}80, transparent, ${tech.color}40, transparent)`,
          animation: "spin-slow 3s linear infinite",
        }}
      />
      {/* Inner mask for ring */}
      <div className="absolute -inset-[6px] rounded-[14px] bg-surface-container-low opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Card */}
      <div
        className="relative w-full h-full rounded-2xl border border-outline-variant/20 p-5 flex items-center justify-center transition-all duration-500 overflow-hidden group-hover:border-transparent"
        style={{ backgroundColor: "rgba(41,43,39,0.5)" }}
      >
        {/* Shine sweep */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
          <div
            className="absolute -inset-full"
            style={{
              background: `linear-gradient(105deg, transparent 40%, ${tech.color}15 45%, ${tech.color}25 50%, ${tech.color}15 55%, transparent 60%)`,
              animation: "shine 2s ease-in-out infinite",
            }}
          />
        </div>
        {/* Logo */}
        <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-lg relative z-10">
          {tech.logo}
        </div>
      </div>
      {/* Tooltip pill */}
      <motion.div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-label font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg z-20"
        style={{
          backgroundColor: tech.color,
          color:
            tech.color === "#ffffff" || tech.color === "#FFD43B" || tech.color === "#8C8C8C"
              ? "#000"
              : "#fff",
          boxShadow: `0 4px 20px ${tech.color}40`,
        }}
      >
        {tech.name}
      </motion.div>
    </motion.div>
  );
}

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const activeColor = hoveredTech
    ? techStack.find((t) => t.name === hoveredTech)?.color || "#b7cdaf"
    : "#b7cdaf";

  return (
    <section className="relative py-36 px-8 overflow-hidden" id="skills">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #b7cdaf 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Radial glow that follows hovered tech color */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        animate={{ opacity: hoveredTech ? 0.08 : 0.03 }}
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 55%, ${activeColor} 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedSection className="mb-20 text-center">
          <span className="font-label text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Technologies
          </span>
          <h2 className="font-headline text-6xl md:text-7xl font-bold tracking-tighter mb-4">
            Tech Stack
          </h2>
          <div className="w-24 h-[2px] mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6" />
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </AnimatedSection>

        {/* Active tech name display */}
        <div className="h-12 flex items-center justify-center mb-12">
          <motion.span
            key={hoveredTech || "default"}
            className="font-headline text-3xl md:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
            animate={{
              opacity: hoveredTech ? 1 : 0.2,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ color: hoveredTech ? activeColor : "rgba(183,205,175,0.2)" }}
          >
            {hoveredTech || "Hover to explore"}
          </motion.span>
        </div>

        {/* Row 1 — slides left */}
        <div className="relative mb-10">
          <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none bg-gradient-to-r from-surface to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none bg-gradient-to-l from-surface to-transparent" />

          <div className="marquee-row">
            <div className="marquee-track marquee-left">
              {[...row1, ...row1, ...row1, ...row1].map((tech, i) => (
                <TechCard
                  key={`r1-${i}`}
                  tech={tech}
                  onHover={() => setHoveredTech(tech.name)}
                  onLeave={() => setHoveredTech(null)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Animated divider */}
        <div className="relative h-[1px] max-w-2xl mx-auto mb-10 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, transparent, ${activeColor}40, transparent)`,
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent" />
        </div>

        {/* Row 2 — slides right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none bg-gradient-to-r from-surface to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none bg-gradient-to-l from-surface to-transparent" />

          <div className="marquee-row">
            <div className="marquee-track marquee-right">
              {[...row2, ...row2, ...row2, ...row2].map((tech, i) => (
                <TechCard
                  key={`r2-${i}`}
                  tech={tech}
                  onHover={() => setHoveredTech(tech.name)}
                  onLeave={() => setHoveredTech(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for seamless marquee + effects */}
      <style jsx>{`
        .marquee-row {
          overflow-x: clip;
          overflow-y: visible;
          position: relative;
        }
        .marquee-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          padding: 2.5rem 0 3.5rem;
        }
        .marquee-left {
          animation: scroll-left 35s linear infinite;
        }
        .marquee-right {
          animation: scroll-right 40s linear infinite;
        }
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes spin-slow {
          from { --angle: 0deg; }
          to { --angle: 360deg; }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
      `}</style>
    </section>
  );
}
