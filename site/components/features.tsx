import {
  KeyRound,
  MessageSquare,
  Clock,
  Server,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "./reveal";
import { GithubIcon } from "./github-icon";

const FEATURES = [
  {
    icon: MessageSquare,
    title: "Telegram or the web, your call",
    description:
      "One backend, two front doors. Run the same tasks from a Telegram bot or a browser - guest sessions work without Telegram at all.",
    span: "lg:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Approve every risky action",
    description:
      "File writes, shell commands, and git pushes pause for your decision before they run. Allow once, always allow, or deny.",
    span: "",
  },
  {
    icon: GithubIcon,
    title: "GitHub-native",
    description:
      "Device-flow login links your own GitHub account, so tasks push as you - not a shared, anonymous identity.",
    span: "",
  },
  {
    icon: Clock,
    title: "Schedule recurring runs",
    description:
      "Turn any prompt into a cron schedule - hourly, daily, or weekly - and get the result delivered back automatically.",
    span: "",
  },
  {
    icon: KeyRound,
    title: "Credentials stay encrypted",
    description:
      "OAuth tokens and GitHub credentials are encrypted at rest, with key rotation built into the storage layer.",
    span: "",
  },
  {
    icon: Server,
    title: "Disposable sandboxes",
    description:
      "Every task runs in its own sandbox, so one run never leaks state - or secrets - into the next.",
    span: "lg:col-span-2",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="max-w-2xl">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
          Everything a hosted agent product promises, run on your terms.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[var(--fg-muted)]">
          No vendor lock-in, no black-box billing. Open Dots gives you the
          same workflow with full visibility into the sandbox, the database,
          and every approval decision.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 0.05} className={feature.span}>
            <article className="group h-full rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-25px_rgba(0,0,0,0.3)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                <feature.icon size={20} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--fg)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--fg-muted)]">
                {feature.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
