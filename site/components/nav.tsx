import Link from "next/link";
import { GithubIcon } from "./github-icon";
import { LogoMark } from "./logo-mark";
import { ThemeToggle } from "./theme-toggle";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#open-source", label: "Open source" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#top"
          className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-[var(--fg)]"
        >
          <LogoMark size={24} />
          Open Dots
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--fg-muted)] transition-colors duration-200 hover:text-[var(--fg)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://github.com/vishalm/open-dots"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-full bg-[var(--fg)] px-4 text-sm font-medium text-[var(--bg)] transition-opacity duration-200 hover:opacity-85"
          >
            <GithubIcon size={15} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
