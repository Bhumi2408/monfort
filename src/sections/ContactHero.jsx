"use client";

import Link from "next/link";
import { ChevronRight, Home, Phone, Mail, Clock3 } from "lucide-react";

const chips = [
  { icon: Phone, label: "Call Us", value: "+91-9871667213" },
  { icon: Mail, label: "Email", value: "harshkansal280@gmail.com" },
  { icon: Clock3, label: "Hours", value: "Mon – Sat, 9AM – 7PM" },
];

export default function ContactHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2431] via-[#142A3D] to-[#173751] pb-16 pt-8 sm:pb-20 lg:pb-24 lg:pt-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#30ADB2]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#258F94]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1.5 font-medium text-white/60 transition-colors hover:text-white"
              >
                <Home className="h-3.5 w-3.5" />
                Home
              </Link>
            </li>

            <li className="flex items-center text-white/25">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>

            <li aria-current="page" className="font-semibold text-[#67cdd0]">
              Contact Us
            </li>
          </ol>
        </nav>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#67cdd0]/60" />
              <span className="relative h-2 w-2 rounded-full bg-[#67cdd0]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#67cdd0]">
              Get In Touch
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Contact <span className="text-[#67cdd0]">Us</span>
          </h1>

          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#258F94] to-[#67cdd0]" />

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            We&apos;d love to hear from you — reach out anytime and our team
            will get back to you shortly.
          </p>
        </div>

        {/* Quick contact chips */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {chips.map((chip) => (
            <div
              key={chip.label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-[#67cdd0]">
                <chip.icon className="h-[18px] w-[18px]" />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/45">
                  {chip.label}
                </p>
                <p className="truncate text-sm font-semibold text-white">
                  {chip.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
