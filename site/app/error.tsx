"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-semibold text-[var(--fg)]">
        Something went wrong.
      </h1>
      <p className="max-w-md text-[var(--fg-muted)]">
        This page hit an unexpected error. Try reloading it.
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-flex h-11 cursor-pointer items-center rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-foreground)] transition-colors duration-200 hover:bg-[var(--accent-hover)]"
      >
        Try again
      </button>
    </div>
  );
}
