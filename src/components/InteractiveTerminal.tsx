"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

const COMMANDS: Record<string, { output: string; color?: string }> = {
  help: {
    output: `Available commands:
  about      → Who is Piyush?
  skills     → Technical skills
  projects   → Featured projects
  contact    → Get in touch
  education  → Academic background
  hackathons → Hackathon history
  tools      → Favorite tools
  fun        → Fun facts
  clear      → Clear terminal
  sudo hire  → 😏`,
    color: "#b7cdaf",
  },
  about: {
    output: `┌─────────────────────────────────────────┐
│  Piyush Prajapati                       │
│  19 y/o Full-Stack Dev & Web3 Builder   │
│  📍 Chandigarh, India                       │
│  🎓 CSE @ Chitkara University           │
│  ⚡ Building the future with AI + Web3  │
└─────────────────────────────────────────┘`,
    color: "#00ff88",
  },
  skills: {
    output: `Frontend   → React, Next.js, TypeScript, Tailwind
Backend    → Node.js, Python, Express, FastAPI
Blockchain → Solidity, Soroban, Stellar SDK, Rust
AI/ML      → Fetch.ai uAgents, Gemini API, LangChain
Database   → MongoDB, PostgreSQL, Firebase
DevOps     → Docker, Git, Vercel, AWS`,
    color: "#00b4ff",
  },
  projects: {
    output: `[01] Interview.io  → AI Interview Coach (React + Gemini API)
[02] FinWell       → Decentralized AI Finance Copilot (Fetch.ai)
[03] NusaPay       → Cross-border Payments on Stellar

↑ Scroll up to the Projects section to explore!`,
    color: "#8b5cf6",
  },
  contact: {
    output: `📧 Email     → contact.piyushprajapati@gmail.com
🐙 GitHub    → github.com/piyush0213
💼 LinkedIn  → linkedin.com/in/piyushprajapati0213
🐦 Twitter   → @piyush0213

Let's build something together! 🚀`,
    color: "#FFD700",
  },
  education: {
    output: `🎓 B.E. Computer Science Engineering
   Chitkara University, Punjab
   2024 – 2028
   
   Focus: AI, Blockchain, Full-Stack Dev
   Activities: 10+ Hackathons, Tech Lead`,
    color: "#FF6B6B",
  },
  hackathons: {
    output: `🏆 HackIndia 2024        → Top 23 (National Web3)
🥇 Fetch.ai Hackathon    → National Finalist
🌐 Stellar Build          → Global Participant
💻 CodeSlam IEEE          → Active Participant
🔥 10+ hackathons, 3+ national finals

Age 19. Just getting started.`,
    color: "#00D4FF",
  },
  tools: {
    output: `Editor     → VS Code + Cursor AI
Terminal   → Windows Terminal + PowerShell
Design     → Figma
Hosting    → Vercel + AWS
Music      → Lo-fi beats ☕
Fuel       → Cold Coffee (non-negotiable)`,
    color: "#FF9F43",
  },
  fun: {
    output: `→ Started coding at 17
→ First hackathon win before turning 20
→ Can debug CSS faster than making Maggi 🍜
→ "It works on my machine" is my love language
→ is so good at each and every sport 🏅
→ Dream: Build a startup by 22
→ Believes AI + Blockchain = Future`,
    color: "#b7cdaf",
  },
  "sudo hire": {
    output: `
   ╔═══════════════════════════════════════╗
   ║                                       ║
   ║   ACCESS GRANTED ✅                    ║
   ║                                       ║
   ║   You've unlocked: Full-Stack Dev     ║
   ║   Status: Available for opportunities ║
   ║   DM me on LinkedIn! 🚀               ║
   ║                                       ║
   ╚═══════════════════════════════════════╝`,
    color: "#00ff88",
  },
};

interface HistoryEntry {
  command: string;
  output: string;
  color: string;
  id: number;
}

export default function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(0);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    setHistory([
      {
        command: "",
        output: `Last login: ${new Date().toLocaleString("en-US", { weekday: "short", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })} on ttys001
Welcome to Piyush's terminal! 🚀  Type "help" to see available commands.`,
        color: "#666",
        id: idCounter.current++,
      },
    ]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    setCmdHistory((prev) => [trimmed, ...prev]);
    setHistoryIndex(-1);

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const result = COMMANDS[trimmed];
    const entry: HistoryEntry = {
      command: trimmed,
      output: result
        ? result.output
        : `zsh: command not found: ${trimmed}`,
      color: result?.color || "#FF6B6B",
      id: idCounter.current++,
    };

    setHistory((prev) => [...prev, entry]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIndex = Math.min(historyIndex + 1, cmdHistory.length - 1);
      setHistoryIndex(newIndex);
      if (cmdHistory[newIndex]) setInput(cmdHistory[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIndex);
      setInput(newIndex === -1 ? "" : cmdHistory[newIndex] || "");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = Object.keys(COMMANDS).find((cmd) =>
        cmd.startsWith(input.toLowerCase())
      );
      if (match) setInput(match);
    }
  };

  return (
    <section className="relative py-36 px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection className="mb-12 text-center">
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 mb-8"
            style={{ backgroundColor: "rgba(183,205,175,0.05)" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="material-symbols-outlined text-primary text-sm"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              terminal
            </motion.span>
            <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Interactive
            </span>
          </motion.div>

          <h2 className="font-headline text-5xl md:text-6xl font-black tracking-tighter mb-4">
            {"Explore via Terminal".split("").map((char, i) => (
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
            Type commands below. Try <span className="text-primary font-mono text-sm">Tab</span> to autocomplete ↓
          </p>
        </AnimatedSection>

        {/* macOS Window */}
        <motion.div
          className="rounded-xl overflow-hidden"
          style={{
            boxShadow: isFocused
              ? "0 25px 80px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.04)"
              : "0 20px 60px -12px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {/* Title Bar — macOS Sequoia style */}
          <div
            className="flex items-center px-4 py-[10px] border-b select-none"
            style={{
              background: "linear-gradient(180deg, rgba(56,56,56,0.98) 0%, rgba(42,42,42,0.98) 100%)",
              borderColor: "rgba(255,255,255,0.06)",
            }}
          >
            {/* Traffic lights */}
            <div className="flex gap-[7px] items-center group">
              <button
                className="w-[13px] h-[13px] rounded-full relative transition-all"
                style={{ backgroundColor: "#FF605C", boxShadow: "inset 0 -1px 2px rgba(0,0,0,0.15)" }}
              >
                <span className="absolute inset-0 flex items-center justify-center text-[8px] text-black/0 group-hover:text-black/80 transition-colors font-bold leading-none">
                  ×
                </span>
              </button>
              <button
                className="w-[13px] h-[13px] rounded-full relative transition-all"
                style={{ backgroundColor: "#FFBD44", boxShadow: "inset 0 -1px 2px rgba(0,0,0,0.15)" }}
              >
                <span className="absolute inset-0 flex items-center justify-center text-[7px] text-black/0 group-hover:text-black/80 transition-colors font-bold leading-none">
                  −
                </span>
              </button>
              <button
                className="w-[13px] h-[13px] rounded-full relative transition-all"
                style={{ backgroundColor: "#00CA4E", boxShadow: "inset 0 -1px 2px rgba(0,0,0,0.15)" }}
              >
                <span className="absolute inset-0 flex items-center justify-center text-[6px] text-black/0 group-hover:text-black/80 transition-colors font-bold leading-none">
                  ⤢
                </span>
              </button>
            </div>

            {/* Tab */}
            <div className="flex-1 flex justify-center">
              <div
                className="flex items-center gap-2 px-6 py-[3px] rounded-md text-[11px]"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" opacity={0.5}>
                  <path d="M0 2.5A2.5 2.5 0 0 1 2.5 0h11A2.5 2.5 0 0 1 16 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 13.5v-11zM2.5 1A1.5 1.5 0 0 0 1 2.5v.5h14v-.5A1.5 1.5 0 0 0 13.5 1h-11z" />
                </svg>
                <span style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" }}>
                  piyush — zsh — 80×24
                </span>
              </div>
            </div>

            {/* Right icon placeholder */}
            <div className="w-16" />
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            className="p-5 h-[420px] overflow-y-auto terminal-scrollbar"
            style={{
              backgroundColor: "rgba(30, 30, 30, 0.97)",
              fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'Menlo', monospace",
              fontSize: "13px",
              lineHeight: "1.7",
              backdropFilter: "blur(20px)",
            }}
            onClick={() => inputRef.current?.focus()}
          >
            <AnimatePresence>
              {history.map((entry) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="mb-3"
                >
                  {entry.command && (
                    <div className="flex items-center gap-0 mb-[2px]">
                      <span style={{ color: "#00CA4E" }}>❯</span>
                      <span className="ml-2" style={{ color: "rgba(255,255,255,0.85)" }}>
                        {entry.command}
                      </span>
                    </div>
                  )}
                  <pre
                    className="whitespace-pre-wrap pl-[18px]"
                    style={{ color: entry.color, fontSize: "12.5px" }}
                  >
                    {entry.output}
                  </pre>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-0 mt-1">
              <span style={{ color: "#00CA4E" }}>❯</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="flex-1 bg-transparent outline-none ml-2"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  caretColor: "#00CA4E",
                  fontFamily: "inherit",
                  fontSize: "13px",
                }}
                placeholder="type a command..."
                autoComplete="off"
                spellCheck="false"
              />
              <motion.div
                className="w-[7px] h-[17px] rounded-[1px]"
                style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </form>
          </div>

          {/* Bottom Bar — command suggestions */}
          <div
            className="flex items-center gap-1 px-4 py-2.5 border-t overflow-x-auto"
            style={{
              background: "linear-gradient(180deg, rgba(42,42,42,0.98) 0%, rgba(36,36,36,0.98) 100%)",
              borderColor: "rgba(255,255,255,0.06)",
            }}
          >
            <span className="text-[10px] mr-2 shrink-0" style={{ color: "rgba(255,255,255,0.25)" }}>
              ⌘ Quick:
            </span>
            {["help", "about", "skills", "projects", "contact", "hackathons", "fun", "sudo hire"].map(
              (cmd) => (
                <motion.button
                  key={cmd}
                  className="px-3 py-[3px] rounded-md text-[11px] shrink-0 transition-all duration-200"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: "'SF Mono', 'Fira Code', monospace",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.8)",
                    borderColor: "rgba(255,255,255,0.12)",
                    scale: 1.04,
                  }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    setInput(cmd);
                    setTimeout(() => {
                      inputRef.current?.form?.requestSubmit();
                    }, 50);
                  }}
                >
                  {cmd}
                </motion.button>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Terminal scrollbar styles */}
      <style jsx>{`
        .terminal-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .terminal-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .terminal-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 3px;
        }
        .terminal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </section>
  );
}
