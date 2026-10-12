"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { HeroVisual } from "./hero-visual";

const BADGES = ["Open source", "Self-hosted", "Telegram + Web", "GitHub-native"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 overflow-hidden px-5 pt-14 pb-20 sm:px-8 sm:pt-20 lg:flex-row lg:gap-8 lg:pt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex w-full max-w-xl flex-col items-start text-left"
      >
        <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--fg-muted)]">
          Self-hosted - run your own agent infrastructure
        </span>

        <h1 className="text-balance mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--fg)] sm:text-5xl lg:text-6xl">
          Run Claude Code from anywhere. Own every byte.
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--fg-muted)]">
          Open Dots is an open-source, self-hosted alternative to paid AI
          agent products. Run coding tasks from Telegram or the web, approve
          every risky action, and keep credentials on infrastructure you
          control.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/vishalm/open-dots"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-[var(--accent-foreground)] transition-colors duration-200 hover:bg-[var(--accent-hover)]"
          >
            Get started on GitHub
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            href="https://youtu.be/b4ZTfs0KwR0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 text-sm font-semibold text-[var(--fg)] transition-colors duration-200 hover:bg-[var(--surface-hover)]"
          >
            <PlayCircle size={16} aria-hidden="true" />
            Watch the demo
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2" aria-label="Key properties">
          {BADGES.map((badge) => (
            <li
              key={badge}
              className="flex items-center gap-2 text-sm text-[var(--fg-muted)]"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                aria-hidden="true"
              />
              {badge}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="flex w-full max-w-md items-center justify-center lg:max-w-xl"
      >
        <HeroVisual />
      </motion.div>
    </section>
  );
}
