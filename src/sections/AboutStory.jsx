"use client";

import Image from "next/image";
import { Caveat } from "next/font/google";
import { Quote, Crown } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const pills = ["Premium Stainless Steel", "Handcrafted Finish", "Pan-India Delivery"];

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#258F94]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#30ADB2]/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* ================= LEFT — CONTENT ================= */}
          <Reveal direction="left" className="relative">
            <p
              className={`${caveat.className} pointer-events-none absolute -top-8 left-0 hidden -rotate-3 text-3xl leading-tight text-[#258F94]/40 sm:block`}
            >
              Crafted with care
            </p>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#258F94]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#258F94]">
                Our Story
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#142A3D] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              More than a sink.{" "}
              <span className="text-[#258F94]">A promise of quality.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
              Monfort Kitchen Sink has been dedicated to bringing quality,
              functionality, and timeless design to modern kitchens since
              2000. We focus on creating sinks that combine practical
              everyday performance with elegant design — making every
              kitchen more convenient, hygienic, and visually appealing.
            </p>

            {/* Floating quote card */}
            <div className="relative mt-8 overflow-hidden rounded-2xl bg-[#f7f9f9] p-6 shadow-[0_10px_30px_rgba(19,54,58,0.06)]">
              <Quote size={22} className="mb-2 text-[#258F94]" fill="#258F94" />
              <p className="text-base font-medium italic leading-7 text-[#142A3D]">
                From contemporary kitchens to traditional spaces, Monfort
                sinks are designed to complement every style.
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#258F94] to-[#30ADB2]" />
            </div>

            {/* Value pills */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-[#258F94]/20 bg-white px-4 py-2 text-xs font-semibold text-[#258F94] shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>

          {/* ================= RIGHT — IMAGE COLLAGE ================= */}
          <Reveal direction="right" className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] bg-[#0f2431] shadow-[0_30px_80px_rgba(19,54,58,0.22)] sm:aspect-[5/6]">
                <Image
                  src="/about/aboutimage.webp"
                  alt="Monfort Kitchen Sink"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5" />

                {/* Since 2000 badge */}
                <div className="absolute left-5 top-5 z-20">
                  <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3.5 py-2 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#67cdd0]" />
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-white">
                      Since 2000
                    </span>
                  </div>
                </div>

                {/* 25+ years badge */}
                <div className="absolute -right-3 -top-3 z-20 sm:-right-4 sm:-top-4">
                  <div className="flex h-20 w-20 rotate-6 flex-col items-center justify-center rounded-full border-2 border-[#67cdd0] bg-[#0f2431] text-center shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:h-24 sm:w-24">
                    <Crown size={16} className="mb-0.5 text-[#67cdd0]" />
                    <p className="text-lg font-bold leading-none text-white sm:text-xl">
                      25+
                    </p>
                    <p className="mt-1 px-1 text-[6px] font-bold uppercase leading-tight tracking-[1px] text-gray-300 sm:text-[7px]">
                      Years Of Excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating accent photo */}
              <div className="absolute -bottom-7 -left-6 z-20 hidden w-32 -rotate-6 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_20px_45px_rgba(0,0,0,0.18)] transition-transform duration-500 hover:rotate-0 sm:block sm:w-36">
                <div className="relative aspect-square">
                  <Image
                    src="/about/designer.jpg"
                    alt="Designer finish"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 z-20 rounded-2xl border border-gray-100 bg-white px-5 py-4 text-center shadow-[0_20px_45px_rgba(0,0,0,0.14)] sm:-right-6">
                <p className="text-2xl font-bold text-[#142A3D] sm:text-3xl">
                  6000+
                </p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Dealers Trust Us
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
