import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--fg)] px-8 py-16 text-center sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, var(--dot-blue), transparent 40%), radial-gradient(circle at 80% 20%, var(--dot-red), transparent 40%), radial-gradient(circle at 20% 80%, var(--dot-yellow), transparent 40%), radial-gradient(circle at 80% 80%, var(--dot-green), transparent 40%)",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--bg)] sm:text-4xl">
              Your agent. Your infrastructure. Your rules.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[var(--bg)]/70">
              Deploy Open Dots in an afternoon and keep full control over
              every credential, every sandbox, and every approval.
            </p>
            <a
              href="https://github.com/vishalm/open-dots"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[var(--bg)] px-6 text-sm font-semibold text-[var(--fg)] transition-opacity duration-200 hover:opacity-85"
            >
              Get started on GitHub
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
