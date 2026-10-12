"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CodeBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-4">
      <code className="overflow-x-auto font-mono text-sm text-[var(--fg)]">
        {command}
      </code>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Copied" : "Copy command"}
        className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] transition-colors duration-200 hover:text-[var(--fg)]"
      >
        {copied ? (
          <Check size={14} className="text-[var(--dot-green)]" />
        ) : (
          <Copy size={14} />
        )}
      </button>
    </div>
  );
}
