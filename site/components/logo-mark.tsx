export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="10" cy="10" r="5" fill="var(--dot-blue)" />
      <circle cx="22" cy="10" r="5" fill="var(--dot-red)" />
      <circle cx="10" cy="22" r="5" fill="var(--dot-yellow)" />
      <circle cx="22" cy="22" r="5" fill="var(--dot-green)" />
    </svg>
  );
}
