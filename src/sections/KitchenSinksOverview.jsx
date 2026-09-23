"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import ProductTileGrid from "@/sections/ProductTileGrid";

const kitchenSinkTiles = [
  {
    number: "01",
    title: "Indian Kitchen Sink",
    description:
      "Strong and durable stainless steel Indian sinks designed for everyday kitchen use with a practical design, smooth finish and easy maintenance.",
    image: "/products/indian_sink.webp",
    href: "/products/indian-sink",
  },
  {
    number: "02",
    title: "Handmade Kitchen Sink",
    description:
      "Premium handmade stainless steel sinks crafted with precision, elegant designs and superior finishing for modern and stylish kitchens.",
    image: "/products/handmade-sink.webp",
    href: "/products/handmade",
  },
  {
    number: "03",
    title: "Waterfall Sinks",
    description:
      "Modern waterfall sinks featuring an integrated waterfall-style water outlet, premium finishing and a unique design for contemporary kitchens.",
    image: "/products/waterfall_sink.webp",
    href: "/products/waterfall",
  },
  {
    number: "04",
    title: "Premium Handmade Kitchen Sink",
    description:
      "High-grade handmade sinks manufactured with premium stainless steel, precise craftsmanship and superior finishing.",
    image: "/products/grade304-sink.webp",
    href: "/products/premium-handmade",
  },
  {
    number: "05",
    title: "Quartz Sink",
    description:
      "Premium quartz sinks available in multiple sizes and elegant finishes for modern kitchens.",
    image: "/products/metallicAndgranite.webp",
    href: "/products/quartz-sink",
  },
];

export default function KitchenSinksOverview() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9f9]">
      {/* ================= DARK HERO BAND ================= */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2431] via-[#142A3D] to-[#173751] pb-16 pt-8 lg:pb-20 lg:pt-12">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#30ADB2]/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#258F94]/15 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm transition-all duration-300 group-hover:-translate-x-1 group-hover:border-white/30">
              <ArrowLeft className="h-4 w-4" />
            </span>
            Back to Products
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
              Kitchen <span className="text-[#67cdd0]">Sinks</span>
            </h1>

            <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#258F94] to-[#67cdd0]" />

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              Crafted for modern kitchens &amp; living — discover our
              collection of premium kitchen sinks, engineered for durability
              and timeless design.
            </p>
          </div>
        </div>
      </div>

      {/* ================= TILE GRID ================= */}
      <div className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <ProductTileGrid tiles={kitchenSinkTiles} />
      </div>

      <div className="h-16 lg:h-24" />
    </section>
  );
}
