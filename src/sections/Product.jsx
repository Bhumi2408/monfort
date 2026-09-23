"use client";

import Link from "next/link";
import { ArrowLeft, LayoutGrid, Sparkles } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import ProductTileGrid from "@/sections/ProductTileGrid";

const mainCategories = [
  {
    number: "01",
    title: "Kitchen Sinks",
    description:
      "Indian, handmade, waterfall, premium handmade and quartz sinks — crafted for every kind of kitchen.",
    image: "/products/handmade-sink.webp",
    href: "/products/kitchen-sinks",
  },
  {
    number: "02",
    title: "Bathroom Accessories",
    description:
      "Drainers, faucets, sprays, dispensers, showers, taps and more for a complete bathroom fit-out.",
    image: "/products/pmtp.webp",
    href: "/products/bathroom-accessories",
  },
  {
    number: "03",
    title: "Premium Montfort Accessories",
    description:
      "Our upcoming Raykar Brass and premium accessory range — coming soon.",
    image: "/products/metallicAndgranite.webp",
    href: "/products/premium-montfort-accessories",
  },
];

export default function Products({ standalone = false }) {
  return (
    <section id="products" className="relative overflow-hidden bg-[#f7f9f9]">
      {/* =====================================================
          STANDALONE PAGE HERO (only on /products, not the homepage section)
      ====================================================== */}

      {standalone && (
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2431] via-[#142A3D] to-[#173751] pb-16 pt-8 sm:pb-10 lg:pb-12 lg:pt-12">
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
                  Our Products
                </span>
              </div>

              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Crafted for modern{" "}
                <span className="text-[#67cdd0]">kitchens &amp; living</span>
              </h1>

              <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#258F94] to-[#67cdd0]" />

              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
                From kitchen sinks to bathroom accessories — explore our
                complete product range.
              </p>
            </div>

            {/* Stats — divided row, not boxes */}
            <div className="mx-auto mt-10 flex w-fit items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-sm sm:gap-10 sm:px-10">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-[#67cdd0]">
                  <LayoutGrid className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    {mainCategories.length}
                  </p>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-white/45">
                    Categories
                  </p>
                </div>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-[#67cdd0]">
                  <Sparkles className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Premium
                  </p>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-white/45">
                    Quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#258F94]/[0.035] blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#258F94]/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-6 sm:px-6 sm:pt-20 sm:pb-8 lg:px-8 lg:pt-24 lg:pb-10">
        {/* =====================================================
            HEADER (homepage section only)
        ====================================================== */}

        {!standalone && (
          <Reveal className="mb-12 sm:mb-14 lg:mb-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              {/* Left */}
              <div className="max-w-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[#258F94]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#258F94]">
                    Our Products
                  </span>
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-[#142A3D] sm:text-4xl lg:text-[50px] lg:leading-[1.08]">
                  Crafted for modern
                  <br />
                  <span className="text-[#258F94]">kitchens &amp; living</span>
                </h2>
              </div>

              {/* Right */}
              <div className="max-w-md lg:pb-1">
                <p className="text-sm leading-7 text-slate-500 sm:text-base">
                  From kitchen sinks to bathroom accessories — explore our
                  complete product range.
                </p>
              </div>
            </div>
          </Reveal>
        )}

        {/* =====================================================
            MAIN CATEGORY GRID
        ====================================================== */}
        <ProductTileGrid tiles={mainCategories} />
      </div>
    </section>
  );
}
