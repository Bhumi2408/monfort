"use client";

import Link from "next/link";
import { ArrowLeft, Users, Store, Globe, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "150+", label: "Distributors" },
  { icon: Store, value: "6000+", label: "Dealers" },
  { icon: Globe, value: "23+", label: "States Covered" },
  { icon: Award, value: "25+", label: "Years Experience" },
];

export default function AboutHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2431] via-[#142A3D] to-[#173751] pb-16 pt-8 sm:pb-20 lg:pb-24 lg:pt-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#30ADB2]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#258F94]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm transition-all duration-300 group-hover:-translate-x-1 group-hover:border-white/30">
            <ArrowLeft className="h-4 w-4" />
          </span>
          Back to Home
        </Link>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#67cdd0]/60" />
              <span className="relative h-2 w-2 rounded-full bg-[#67cdd0]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#67cdd0]">
              About Monfort
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Built on Trust, <span className="text-[#67cdd0]">Made for Life</span>
          </h1>

          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#258F94] to-[#67cdd0]" />

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            Two decades of crafting kitchen sinks that combine everyday
            performance with elegant, timeless design — trusted by dealers
            and homeowners across India.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-[#67cdd0]">
                <stat.icon className="h-[18px] w-[18px]" />
              </div>
              <p className="text-xl font-bold text-white sm:text-2xl">
                {stat.value}
              </p>
              <p className="text-[11px] font-medium uppercase tracking-wider text-white/45">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
