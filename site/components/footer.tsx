import { GithubIcon } from "./github-icon";
import { LogoMark } from "./logo-mark";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between sm:px-8">
        <div className="flex items-center gap-2 text-sm font-medium text-[var(--fg)]">
          <LogoMark size={20} />
          Open Dots
        </div>

        <p className="text-sm text-[var(--fg-muted)]">
          Built by{" "}
          <a
            href="https://github.com/vishalm"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--fg)] underline-offset-4 hover:underline"
          >
            Vishal Mishra
          </a>
        </p>

        <a
          href="https://github.com/vishalm/open-dots"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Dots on GitHub"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] transition-colors duration-200 hover:text-[var(--fg)]"
        >
          <GithubIcon size={16} />
        </a>
      </div>
    </footer>
  );
}
