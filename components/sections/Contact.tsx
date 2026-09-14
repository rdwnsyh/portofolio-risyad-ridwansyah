"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Mail,
  MapPin,
  RotateCcw,
  Send,
} from "lucide-react";
import { useContent } from "@/lib/i18n";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Magnet } from "@/components/shared/Magnet";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Contact() {
  const { contact: t, shared } = useContent();

  const infoItems = [
    {
      name: t.emailLabel,
      value: shared.email,
      href: `mailto:${shared.email}`,
      Icon: "mail",
    },
    {
      name: t.linkedinLabel,
      value: "in/risyad-ridwansyah",
      href: shared.linkedin,
      Icon: "linkedin",
    },
    {
      name: t.githubLabel,
      value: "github.com/rdwnsyh",
      href: shared.github,
      Icon: "github",
    },
  ] as const;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${t.mailSubject} ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${shared.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setMessage("");
  };

function InfoIcon({ kind, className }: { kind: string; className?: string }) {
  if (kind === "github") return <GithubIcon className={className} />;
  if (kind === "linkedin") return <LinkedinIcon className={className} />;
  return <Mail className={className} aria-hidden="true" />;
}

const inputClass =
  "h-12 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 text-base sm:text-[15px] text-slate-100 placeholder:text-slate-500 transition-colors focus:border-emerald-300/60 focus:outline-none";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-20 border-t border-slate-900 bg-slate-950 py-16 sm:py-24 md:py-28 text-slate-100"
    >
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeader
          slug={t.slug}
          num={t.num}
          label={t.label}
          title={t.title}
          accent={t.accent}
          align="center"
          sub={t.tagline}
        />

        <div className="mt-12 sm:mt-14 grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Sisi info kontak */}
          <Reveal as="aside" className="h-full">
            <div className="flex h-full flex-col gap-6">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-50">
                  {t.introTitle}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
                  {t.introDescription}
                </p>
              </div>
              <address className="not-italic">
                <ul className="space-y-3">
                  {infoItems.map(({ name: label, value, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        aria-label={`${t.contactVia} ${value}`}
                        className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-900"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-800/80 transition-colors group-hover:border-emerald-300/40">
                          <InfoIcon
                            kind={Icon}
                            className="h-5 w-5 text-emerald-300"
                          />
                        </span>
                        <span>
                          <b className="block text-[13px] font-medium tracking-wider text-slate-500 uppercase">
                            {label}
                          </b>
                          <span className="mt-0.5 block text-[15px] font-medium break-all text-slate-100">
                            {value}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </address>
            </div>
          </Reveal>

          {/* Panel formulir */}
          <Reveal delay={120} className="h-full">
            <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                  <CheckCircle2
                    className="h-12 w-12 text-emerald-300"
                    aria-hidden="true"
                  />
                  <h3 className="font-display mt-5 text-2xl font-semibold text-slate-50">
                    {t.successTitle}
                  </h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-slate-400">
                    {t.successTextPre}{" "}
                    <a
                      href={`mailto:${shared.email}`}
                      className="text-emerald-300 underline-offset-4 hover:underline"
                    >
                      {shared.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-7 inline-flex h-11 items-center gap-2 rounded-full border border-slate-700 px-6 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    {t.successAgain}
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="font-mono2 mb-2 block text-xs tracking-[0.14em] text-slate-400 uppercase">
                        {t.formName}
                      </span>
                      <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.formNamePlaceholder}
                        autoComplete="name"
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <span className="font-mono2 mb-2 block text-xs tracking-[0.14em] text-slate-400 uppercase">
                        {t.formEmail}
                      </span>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.formEmailPlaceholder}
                        autoComplete="email"
                        className={inputClass}
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="font-mono2 mb-2 block text-xs tracking-[0.14em] text-slate-400 uppercase">
                      {t.formMessage}
                    </span>
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.formMessagePlaceholder}
                      rows={6}
                      className="min-h-36 w-full resize-y rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3.5 text-[15px] text-slate-100 placeholder:text-slate-500 transition-colors focus:border-emerald-300/60 focus:outline-none"
                    />
                  </label>
                  <Magnet className="mt-1 self-start max-sm:w-full max-sm:[&>button]:w-full">
                    <button
                      type="submit"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-300 px-8 text-base font-semibold text-slate-950 shadow-[0_0_45px_-12px_rgba(52,211,153,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 active:scale-[0.98] max-sm:w-full"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      {t.formSubmit}
                    </button>
                  </Magnet>
                  <p className="text-[13px] leading-relaxed text-slate-500">
                    {t.formNote}
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Lokasi */}
        <Reveal className="mt-6">
          <div className="relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 px-6 py-7">
            <span className="relative flex h-3 w-3">
              <span className="hero-pulse-dot relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
            </span>
            <MapPin className="h-6 w-6 text-emerald-300" aria-hidden="true" />
            <span className="font-display text-xl text-slate-100 italic sm:text-2xl">
              {t.location}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
