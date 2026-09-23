"use client";

import { Gem, Cog, ShieldCheck, Leaf } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const values = [
  {
    icon: Gem,
    title: "Premium Quality",
    text: "Every sink is built with premium stainless steel to last a lifetime, not just a few years.",
  },
  {
    icon: Cog,
    title: "Innovative Designs",
    text: "We blend function with style, engineering sinks that look as good as they perform.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Thousands",
    text: "Two decades of consistency have earned us the trust of dealers and homeowners nationwide.",
  },
  {
    icon: Leaf,
    title: "Healthier Kitchens",
    text: "Designed with hygiene and well-being in mind, for kitchens that feel as good as they look.",
  },
];

export default function AboutValues() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9f9] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#258F94]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#258F94]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#258F94]/20 bg-white px-4 py-2 shadow-[0_5px_20px_rgba(37,143,148,0.08)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#30ADB2]/50" />
              <span className="relative h-2 w-2 rounded-full bg-[#30ADB2]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#258F94]">
              What Drives Us
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-[#142A3D] sm:text-3xl">
            Our <span className="text-[#258F94]">Values</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            The principles that shape every sink we make.
          </p>
        </Reveal>

        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <StaggerItem key={value.title}>
              <div className="group relative h-full overflow-hidden rounded-[26px] border border-gray-200/70 bg-white p-7 shadow-[0_8px_30px_rgba(19,54,58,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#30ADB2]/40 hover:shadow-[0_22px_50px_rgba(37,143,148,0.16)]">
                <span className="pointer-events-none absolute -right-2 -top-6 select-none text-[90px] font-black leading-none text-[#258F94]/[0.05] transition-all duration-700 group-hover:text-[#258F94]/[0.09]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#258F94]/10 text-[#258F94] transition-all duration-500 group-hover:bg-[#258F94] group-hover:text-white">
                  <value.icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="relative mt-5 text-lg font-bold text-[#142A3D]">
                  {value.title}
                </h3>

                <p className="relative mt-2 text-sm leading-6 text-gray-600">
                  {value.text}
                </p>

                <div className="relative mt-5 h-[2px] w-8 rounded-full bg-[#258F94] transition-all duration-500 group-hover:w-16" />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
