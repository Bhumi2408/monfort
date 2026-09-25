"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle, Phone, Sparkles } from "lucide-react";

const FALLBACK_IMAGE = "/products/handmade-sink.webp";

export default function AccessoryCategoryPage({
  title,
  description,
  image,
  items,
  backHref = "/products/bathroom-accessories",
  backLabel = "Back to Bathroom Accessories",
  badge = "Bathroom Accessories",
  textOnly = false,
}) {
  return (
    <section className="relative overflow-hidden bg-[#f7f9f9]">
      {/* ================= DARK HERO BAND ================= */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2431] via-[#142A3D] to-[#173751] pb-16 pt-8 lg:pb-20 lg:pt-12">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#30ADB2]/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#258F94]/15 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Link
            href={backHref}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm transition-all duration-300 group-hover:-translate-x-1 group-hover:border-white/30">
              <ArrowLeft className="h-4 w-4" />
            </span>
            {backLabel}
          </Link>

          <div className="mx-auto mt-10 max-w-2xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#67cdd0]/60" />
                <span className="relative h-2 w-2 rounded-full bg-[#67cdd0]" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#67cdd0]">
                {badge}
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#258F94] to-[#67cdd0]" />

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* ================= ITEMS ================= */}
      <div className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        {textOnly ? (
          <TextOnlyItems title={title} items={items} />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {items.map((item, index) => (
              <AccessoryCard key={item.name + index} item={item} fallbackImage={image} />
            ))}
          </div>
        )}

        {/* ================= CTA ================= */}
        <div className="relative mt-16 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#142A3D] via-[#1a3a4f] to-[#0f2431] px-6 py-12 text-center shadow-[0_25px_60px_rgba(19,54,58,0.25)] sm:px-10 sm:py-14 lg:mt-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#30ADB2]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#258F94]/20 blur-3xl" />

          <div className="relative">
            <h3 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
              Interested in {title.toLowerCase()}?
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/70 sm:text-base">
              Talk to our team for pricing, bulk orders and finish options.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#258F94] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#258F94]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#30ADB2] hover:shadow-xl"
              >
                Enquire About This Product
                <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href="https://wa.me/917838951950"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                <MessageCircle className="h-[18px] w-[18px] text-[#67cdd0]" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 lg:h-24" />
    </section>
  );
}

/**
 * Names-only listing (no product images) with a contact-to-buy note.
 */
function TextOnlyItems({ title, items }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-gray-200/70 bg-white shadow-[0_8px_30px_rgba(19,54,58,0.06)]">
      <div className="flex flex-col gap-4 border-b border-gray-100 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#258F94]">
            Available Categories
          </p>
          <h2 className="mt-1 text-xl font-bold text-[#142A3D] sm:text-2xl">
            {items.length} varieties of {title.toLowerCase()}
          </h2>
        </div>

        <span className="inline-flex items-center gap-2 self-start rounded-full bg-[#258F94]/10 px-4 py-2 text-xs font-bold text-[#258F94] sm:self-auto">
          <span className="h-2 w-2 rounded-full bg-[#258F94]" />
          Available at Monfort
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 p-6 sm:grid-cols-3 sm:p-8 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.name}
            className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-gray-100 bg-[#f7f9f9] px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#30ADB2]/40 hover:bg-white hover:shadow-[0_12px_28px_rgba(37,143,148,0.12)]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#142A3D] to-[#1f4256] text-[11px] font-bold text-[#67cdd0]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-bold text-[#142A3D] sm:text-base">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between gap-4 bg-gradient-to-r from-[#142A3D] to-[#1d4a5c] px-6 py-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="text-sm font-semibold text-white">
          Available in Monfort —{" "}
          <span className="text-[#67cdd0]">contact us to buy.</span>
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#258F94] px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#30ADB2]"
        >
          <Phone className="h-4 w-4" />
          Contact Us
        </Link>
      </div>
    </div>
  );
}

/**
 * Three item shapes:
 *  - `simple: true`   -> no variants, just image + name, no card chrome
 *  - `variants: [...]` -> each variant looks different, tabs + own image
 *  - `sizeOptions`    -> same look across sizes, one image, sizes as info
 */
function AccessoryCard({ item, fallbackImage }) {
  const hasVariants = Array.isArray(item.variants) && item.variants.length > 0;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVariant = hasVariants ? item.variants[activeIndex] : null;

  const resolvedImage = activeVariant?.image || item.image || fallbackImage || FALLBACK_IMAGE;
  const [imgSrc, setImgSrc] = useState(resolvedImage);

  useEffect(() => {
    setImgSrc(resolvedImage);
  }, [resolvedImage]);

  // Simple item — minimal presentation, no spec card
  if (item.simple) {
    return (
      <div className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-gray-200/70 bg-white shadow-[0_8px_24px_rgba(19,54,58,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#30ADB2]/40 hover:shadow-[0_16px_36px_rgba(37,143,148,0.12)]">
        <div className="relative flex h-64 shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-[#183241] via-[#1f4256] to-[#0f2431]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.14] blur-2xl" />
          <div className="relative h-full w-full p-6">
            <Image
              src={imgSrc}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain p-2 drop-shadow-[0_10px_14px_rgba(0,0,0,0.4)]"
              onError={() => setImgSrc(fallbackImage || FALLBACK_IMAGE)}
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center px-4 py-4">
          <p className="text-center text-sm font-bold text-[#142A3D]">
            {item.name}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-gray-200/70 bg-white shadow-[0_8px_30px_rgba(19,54,58,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#30ADB2]/40 hover:shadow-[0_22px_50px_rgba(37,143,148,0.16)]">
      <div className="absolute left-1/2 top-0 z-30 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#30ADB2] via-teal-300 to-[#30ADB2] shadow-[0_0_14px_rgba(48,173,178,0.7)] transition-all duration-500 group-hover:w-3/5" />

      {/* Image */}
      <div className="relative flex h-[220px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#183241] via-[#1f4256] to-[#0f2431]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.14] blur-2xl transition-all duration-700 group-hover:h-44 group-hover:w-44 group-hover:bg-white/[0.2]" />
        <div className="pointer-events-none absolute bottom-8 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-black/25 blur-md" />

        <div className="relative z-[2] h-full w-full p-6">
          <Image
            src={imgSrc}
            alt={`${item.name}${activeVariant ? ` - ${activeVariant.label}` : ""}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-3 drop-shadow-[0_14px_16px_rgba(0,0,0,0.4)] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            onError={() => setImgSrc(fallbackImage || FALLBACK_IMAGE)}
          />
        </div>
      </div>

      {/* Body */}
      <div className="relative flex flex-1 flex-col border-t border-gray-100 bg-white p-5">
        <h3 className="text-lg font-bold leading-tight text-[#142A3D]">
          {item.name}
        </h3>

        {/* Variant tabs — image changes per tab */}
        {hasVariants && (
          <div className="mt-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Options{" "}
              <span className="normal-case text-[#258F94]">— tap to preview</span>
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.variants.map((variant, vIndex) => (
                <button
                  key={variant.label}
                  type="button"
                  onClick={() => setActiveIndex(vIndex)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    activeIndex === vIndex
                      ? "bg-[#258F94] text-white shadow-[0_6px_16px_rgba(37,143,148,0.35)]"
                      : "bg-[#258F94]/10 text-[#258F94] hover:bg-[#258F94]/20"
                  }`}
                >
                  {variant.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Static size info — same look across sizes */}
        {item.sizeOptions?.length > 0 && (
          <div className="mt-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Available Sizes
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.sizeOptions.map((size) => (
                <span
                  key={size}
                  className="rounded-full bg-[#f7f9f9] px-3 py-1 text-xs font-semibold text-gray-600"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-4">
          <div className="h-[2px] w-0 rounded-full bg-[#258F94] transition-all duration-500 group-hover:w-full" />
        </div>
      </div>
    </div>
  );
}
