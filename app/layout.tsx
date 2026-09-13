import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono2",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Risyad Ridwansyah — Web Developer | QA | Backend | Fullstack",
  description:
    "Portofolio Risyad Ridwansyah, lulusan D3 Teknik Informatika: Web Developer, Quality Assurance, Backend & Fullstack Developer. Tersedia untuk full-time roles.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
