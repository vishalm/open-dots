import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-sans",
  subsets: ["latin"],
});

const siteUrl = "https://open-dots.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Open Dots - Stop renting your AI agent",
  description:
    "Open Dots is an open-source, self-hosted alternative to paid AI agent products. Run Claude Code tasks from Telegram or the web, approve every risky action, and keep your credentials on your own infrastructure.",
  keywords: [
    "Open Dots",
    "self-hosted AI agent",
    "Claude Code",
    "open source coding agent",
    "Telegram bot",
  ],
  authors: [{ name: "Vishal Mishra", url: "https://github.com/vishalm" }],
  openGraph: {
    title: "Open Dots - Stop renting your AI agent",
    description:
      "Self-hosted, open-source alternative to paid AI agent products. Run tasks from Telegram or the web, approve every risky action.",
    url: siteUrl,
    siteName: "Open Dots",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Dots - Stop renting your AI agent",
    description:
      "Self-hosted, open-source alternative to paid AI agent products.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${mono.variable} antialiased`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
