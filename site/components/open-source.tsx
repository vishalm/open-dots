import { Star } from "lucide-react";
import { GithubIcon } from "./github-icon";
import { Reveal } from "./reveal";
import { CodeBlock } from "./code-block";

export function OpenSource() {
  return (
    <section
      id="open-source"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="grid grid-cols-1 gap-12 rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs font-medium text-[var(--fg-muted)]">
            <Star size={12} className="text-[var(--dot-yellow)]" aria-hidden="true" />
            Open source on GitHub
          </span>
          <h2 className="text-balance mt-5 text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
            Read every line. Run it on your own servers.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-[var(--fg-muted)]">
            Open Dots is prototype-stage and actively developed in the open.
            Clone it, point it at your own Postgres instance, and bring your
            own Boat API key and Telegram bot token.
          </p>
          <a
            href="https://github.com/vishalm/open-dots"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[var(--fg)] px-6 text-sm font-semibold text-[var(--bg)] transition-opacity duration-200 hover:opacity-85"
          >
            <GithubIcon size={16} />
            View the repository
          </a>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-center gap-3">
          <CodeBlock command="git clone git@github.com:vishalm/open-dots.git" />
          <CodeBlock command="cp backend/.env.example backend/.env" />
          <CodeBlock command="./scripts/dev.sh" />
        </Reveal>
      </div>
    </section>
  );
}
