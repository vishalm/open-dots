import { Reveal } from "./reveal";

const STEPS = [
  {
    title: "Connect Claude",
    description:
      "Start the OAuth login flow inside a fresh sandbox - from Telegram's /connect or the web UI's \"Start login\".",
  },
  {
    title: "Connect GitHub (optional)",
    description:
      "Device-flow login links your own GitHub account, so tasks that push code do so as you.",
  },
  {
    title: "Submit a task",
    description:
      "Send a prompt in plain text. It runs inside your sandbox and the result comes back in the same thread.",
  },
  {
    title: "Approve or schedule",
    description:
      "Risky actions pause for your decision. Or turn the prompt into a recurring schedule and let it run itself.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <Reveal className="max-w-2xl">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
          From zero to a running agent in four steps.
        </h2>
      </Reveal>

      <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <div
          className="absolute top-5 right-0 left-0 hidden h-px bg-[var(--border)] lg:block"
          aria-hidden="true"
        />
        {STEPS.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.08} className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-sm font-semibold text-[var(--fg)]">
              {index + 1}
            </div>
            <h3 className="mt-5 text-base font-semibold text-[var(--fg)]">
              {step.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--fg-muted)]">
              {step.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
