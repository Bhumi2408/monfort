"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Ruler,
  Sparkles,
  Package,
  MessageCircle,
} from "lucide-react";

// Rows that share a `groupKey` are merged into a single card, with a
// row-toggle switching between them (different models, or a model +
// its distinct-looking add-on variant like Back Coating / Taphole).
function groupModels(data) {
  const groups = [];
  const indexByKey = new Map();

  data.forEach((row) => {
    if (row.groupKey && indexByKey.has(row.groupKey)) {
      groups[indexByKey.get(row.groupKey)].push(row);
      return;
    }

    if (row.groupKey) indexByKey.set(row.groupKey, groups.length);
    groups.push([row]);
  });

  return groups;
}

export default function CategoryPage({
  title,
  description,
  image,
  imageFolder,
  data,
  sizeSpecs,
  backHref = "/products",
}) {
  const isRangeCategory = data.some((item) => item.range);

  const hasSizes = data.some(
    (item) =>
      item.size &&
      (Array.isArray(item.size) ? item.size.length > 0 : item.size),
  );

  const uniqueSizes = [
    ...new Set(
      data.flatMap((item) => {
        if (!item.size) return [];
        return Array.isArray(item.size) ? item.size : [item.size];
      }),
    ),
  ];

  const modelGroups = useMemo(() => groupModels(data), [data]);

  const stats = [
    { label: "Models", value: modelGroups.length, icon: Package },
    ...(hasSizes
      ? [{ label: "Sizes", value: uniqueSizes.length, icon: Ruler }]
      : []),
    { label: "Quality", value: "Premium", icon: Sparkles },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f9f9]">
      {/* ================= DARK HERO BAND ================= */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2431] via-[#142A3D] to-[#173751] pb-36 pt-8 lg:pb-44 lg:pt-12">
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
            Back to Products
          </Link>

          <div className="mx-auto mt-10 max-w-3xl text-center">
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
              {title}
            </h1>

            <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#258F94] to-[#67cdd0]" />

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              {description}
            </p>
          </div>

          {/* Stats — divided row, not boxes */}
          <div className="mx-auto mt-10 flex w-fit items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-sm sm:gap-10 sm:px-10">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
                {i > 0 && <div className="h-10 w-px bg-white/10" />}
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-[#67cdd0]">
                    <stat.icon className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <p className="text-xl font-bold text-white sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-white/45">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FLOATING PRODUCT IMAGE ================= */}
      <div className="relative mx-auto -mt-24 max-w-4xl px-5 sm:px-6 lg:-mt-28 lg:px-8">
        <div className="group relative overflow-hidden rounded-[32px] border border-white bg-white shadow-[0_30px_70px_rgba(19,54,58,0.22)]">
          <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#258F94_1px,transparent_1px),linear-gradient(90deg,#258F94_1px,transparent_1px)] [background-size:26px_26px]" />

          <div className="relative flex h-64 items-center justify-center bg-gradient-to-br from-[#eef5f5] via-white to-[#e4f0f0] sm:h-80 lg:h-96">
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="relative object-contain p-10 drop-shadow-[0_20px_20px_rgba(0,0,0,0.12)] transition-transform duration-700 group-hover:scale-105 sm:p-14"
            />
          </div>
        </div>
      </div>

      {/* ================= PRODUCT DETAILS ================= */}
      <div className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#258F94]/20 bg-white px-4 py-2 shadow-[0_5px_20px_rgba(37,143,148,0.08)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#30ADB2]/50" />
              <span className="relative h-2 w-2 rounded-full bg-[#30ADB2]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#258F94]">
              Product Details
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-[#142A3D] sm:text-3xl">
            Available <span className="text-[#258F94]">Models</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Explore the available sizes, finishes and specifications of our{" "}
            {title.toLowerCase()} range.
          </p>
        </div>

        {/* ================= MODEL CARDS ================= */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {modelGroups.map((group, index) => (
            <ModelCard
              key={group[0].groupKey ?? `single-${index}`}
              group={group}
              index={index}
              isRangeCategory={isRangeCategory}
              fallbackImage={image}
              imageFolder={imageFolder}
              sizeSpecs={sizeSpecs}
            />
          ))}
        </div>

        {/* ================= CTA ================= */}
        <div className="relative mt-16 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#142A3D] via-[#1a3a4f] to-[#0f2431] px-6 py-12 text-center shadow-[0_25px_60px_rgba(19,54,58,0.25)] sm:px-10 sm:py-14 lg:mt-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#30ADB2]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#258F94]/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="relative">
            <h3 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
              Interested in the {title.toLowerCase()}?
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/70 sm:text-base">
              Talk to our team for pricing, bulk orders and custom finishes
              on any model shown above.
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

/* ================= MODEL CARD ================= */
const slugify = (value) =>
  String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Whether the rows in a group are genuinely different models (different
// footprint) vs. one model plus a distinct-looking add-on (Back Coating,
// Taphole, ...).
function groupDiffersBySize(group) {
  return new Set(group.map((row) => row.size ?? "")).size > 1;
}

function getRowLabel(row) {
  if (row.variantLabel) return row.variantLabel;
  if (row.size) return Array.isArray(row.size) ? row.size.join(" / ") : row.size;
  return row.code || row.range || "Standard";
}

/**
 * `group` is one or more data rows rendered as a single card:
 *  - Rows that differ by size (merged for catalog simplicity) become
 *    "Model" tabs — each a genuinely different look, its own image.
 *  - A base row plus a `variantLabel` row (Back Coating, Taphole, ...)
 *    become "Variant" tabs — the add-on looks different, gets its own image.
 *  - `weightOptions` on a row (same size, same look across gauges) is
 *    shown as plain info, never as a tab.
 *
 * Per-model images resolve in this order:
 *   1. `row.images[activeVariant]` — explicit map keyed by a finish variant
 *   2. `row.image` — an explicit image set directly on that row in data.js
 *   3. A conventional fallback path from the category's `imageFolder`
 *   4. The category's hero image, as a last resort.
 * If a resolved image 404s, onError silently drops back to the hero image
 * instead of showing a broken image icon.
 */
function ModelCard({
  group,
  index,
  isRangeCategory,
  fallbackImage,
  imageFolder,
  sizeSpecs,
}) {
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const item = group[activeRowIndex] ?? group[0];

  const variantType =
    Array.isArray(item.finish) && item.finish.length > 1
      ? "finish"
      : isRangeCategory && Array.isArray(item.size) && item.size.length > 1
        ? "size"
        : null;

  const variantValues = variantType ? item[variantType] : null;

  const [activeVariant, setActiveVariant] = useState(
    variantValues ? variantValues[0] : null,
  );

  // Reset the finish toggle whenever a different row (model/variant) is picked
  useEffect(() => {
    setActiveVariant(variantValues ? variantValues[0] : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeRowIndex]);

  const modelIdentifier =
    item.code || item.range || (typeof item.size === "string" ? item.size : null);

  const conventionImage =
    imageFolder && modelIdentifier
      ? `/products/${imageFolder}/${slugify(
          [modelIdentifier, item.variantLabel, activeVariant].filter(Boolean).join("-"),
        )}.webp`
      : null;

  // Ordered fallback chain: try the variant-specific photo first, then the
  // row's own photo, then the conventional path, then the category hero.
  // onError advances through this list instead of jumping straight to the
  // generic hero image, so a still-missing size-specific shot (e.g. PTMT
  // taps before per-size photos are added) falls back to the model's own
  // real photo rather than a generic one.
  const imageCandidates = [
    activeVariant && item.images?.[activeVariant],
    item.image,
    conventionImage,
    fallbackImage,
  ].filter(Boolean);

  const [candidateIndex, setCandidateIndex] = useState(0);

  useEffect(() => {
    setCandidateIndex(0);
  }, [imageCandidates[0]]);

  const imgSrc =
    imageCandidates[Math.min(candidateIndex, imageCandidates.length - 1)];

  const primaryLabel = isRangeCategory
    ? item.range || `Model ${String(index + 1).padStart(2, "0")}`
    : item.code || item.size || `Model ${String(index + 1).padStart(2, "0")}`;

  const specs = [
    item.bowl && { label: "Bowl", value: item.bowl },
    item.weightKg !== undefined && {
      label: "Weight",
      value: `${item.weightKg} Kg`,
    },
    item.polish && { label: "Polish", value: item.polish },
  ].filter(Boolean);

  const rowsDifferBySize = group.length > 1 && groupDiffersBySize(group);
  const rowToggleLabel = rowsDifferBySize ? "Model" : "Variant";

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-gray-200/70 bg-white shadow-[0_8px_30px_rgba(19,54,58,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#30ADB2]/40 hover:shadow-[0_22px_50px_rgba(37,143,148,0.16)]">
      {/* Top accent line */}
      <div className="absolute left-1/2 top-0 z-30 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#30ADB2] via-teal-300 to-[#30ADB2] shadow-[0_0_14px_rgba(48,173,178,0.7)] transition-all duration-500 group-hover:w-3/5" />

      {/* ================= IMAGE ================= */}
      <div className="relative flex h-[240px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#183241] via-[#1f4256] to-[#0f2431] sm:h-[260px]">
        {/* diagonal accent band for visual interest */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rotate-45 bg-gradient-to-br from-[#30ADB2]/25 to-transparent" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#67cdd0_1px,transparent_1px),linear-gradient(90deg,#67cdd0_1px,transparent_1px)] [background-size:22px_22px]" />

        {/* colored halo directly behind the product — keeps white/chrome items visible */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.14] blur-2xl transition-all duration-700 group-hover:h-48 group-hover:w-48 group-hover:bg-white/[0.2]" />

        {/* soft grounding shadow under the product */}
        <div className="pointer-events-none absolute bottom-9 left-1/2 h-5 w-28 -translate-x-1/2 rounded-full bg-black/25 blur-md" />

        <span className="pointer-events-none absolute -right-2 -top-8 z-0 select-none text-[120px] font-black leading-none tracking-[-0.08em] text-white/[0.05] transition-all duration-700 group-hover:text-white/[0.08]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="absolute left-4 top-4 h-7 w-7 border-l border-t border-white/25 transition-all duration-500 group-hover:h-9 group-hover:w-9 group-hover:border-[#67cdd0]/70" />
        <div className="absolute bottom-4 right-4 h-7 w-7 border-b border-r border-white/25 transition-all duration-500 group-hover:h-9 group-hover:w-9 group-hover:border-[#67cdd0]/70" />

        {item.code && (
          <div className="absolute left-4 top-4 z-10 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold tracking-wide text-white backdrop-blur-md">
            {item.code}
          </div>
        )}

        <div className="relative z-[2] h-full w-full p-6">
          <Image
            src={imgSrc}
            alt={`${primaryLabel}${activeVariant ? ` - ${activeVariant}` : ""}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-3 drop-shadow-[0_16px_18px_rgba(0,0,0,0.45)] transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            onError={() =>
              setCandidateIndex((i) => Math.min(i + 1, imageCandidates.length - 1))
            }
          />
        </div>

        <div className="pointer-events-none absolute -left-[100%] top-0 z-10 h-full w-[45%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-1000 group-hover:left-[130%] group-hover:opacity-100" />

        {/* bottom fade into the white body */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-14 bg-gradient-to-t from-[#0f2431]/40 to-transparent" />
      </div>

      {/* ================= BODY ================= */}
      <div className="relative flex flex-1 flex-col border-t border-gray-100 bg-white p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#258F94]/70">
              {isRangeCategory ? "Range" : "Model"}
            </p>
            <h3 className="mt-1 text-lg font-bold leading-tight text-[#142A3D]">
              {primaryLabel}
            </h3>
          </div>

          {!isRangeCategory && item.size && (
            <span className="shrink-0 rounded-full bg-[#258F94]/10 px-3 py-1.5 text-xs font-bold text-[#258F94]">
              {item.size}
            </span>
          )}
        </div>

        {/* Quick specs */}
        {specs.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {specs.map((spec) => (
              <div key={spec.label} className="rounded-xl bg-[#f7f9f9] px-3 py-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  {spec.label}
                </p>
                <p className="mt-0.5 truncate text-sm font-semibold text-[#142A3D]">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Available weights — plain info, same photo regardless of gauge */}
        {item.weightOptions?.length > 0 && (
          <div className="mt-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Available Weights
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.weightOptions.map((w) => (
                <span
                  key={w}
                  className="rounded-full bg-[#f7f9f9] px-3 py-1 text-xs font-semibold text-gray-600"
                >
                  {w} Kg
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Row toggle — switches between merged models / add-on variants */}
        {group.length > 1 && (
          <div className="mt-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              {rowToggleLabel}{" "}
              <span className="normal-case text-[#258F94]">— tap to preview</span>
            </p>

            <div className="mt-2 flex flex-wrap gap-1.5">
              {group.map((row, rowIndex) => (
                <button
                  key={rowIndex}
                  type="button"
                  onClick={() => setActiveRowIndex(rowIndex)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    activeRowIndex === rowIndex
                      ? "bg-[#142A3D] text-white shadow-[0_6px_16px_rgba(20,42,61,0.3)]"
                      : "bg-[#142A3D]/5 text-[#142A3D] hover:bg-[#142A3D]/10"
                  }`}
                >
                  {getRowLabel(row)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Finish/Size toggle — switches the image above */}
        {variantValues && (
          <div className="mt-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              {variantType === "finish" ? "Finish" : "Size"}{" "}
              <span className="normal-case text-[#258F94]">— tap to preview</span>
            </p>

            <div className="mt-2 flex flex-wrap gap-1.5">
              {variantValues.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setActiveVariant(value)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    activeVariant === value
                      ? "bg-[#258F94] text-white shadow-[0_6px_16px_rgba(37,143,148,0.35)]"
                      : "bg-[#258F94]/10 text-[#258F94] hover:bg-[#258F94]/20"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Colors / handle types for the active size — same across every range */}
        {variantType === "size" && sizeSpecs?.[activeVariant] && (
          <div className="mt-4 space-y-3">
            {sizeSpecs[activeVariant].colors?.length > 0 && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Colors
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {sizeSpecs[activeVariant].colors.map((color) => (
                    <span
                      key={color}
                      className="rounded-full bg-[#f7f9f9] px-3 py-1 text-xs font-semibold text-gray-600"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {sizeSpecs[activeVariant].handles?.length > 0 && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Handle Type
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {sizeSpecs[activeVariant].handles.map((handle) => (
                    <span
                      key={handle}
                      className="rounded-full bg-[#f7f9f9] px-3 py-1 text-xs font-semibold text-gray-600"
                    >
                      {handle}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Static finish display when there's nothing to toggle */}
        {!variantValues && item.finish && (
          <div className="mt-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Finish
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {(Array.isArray(item.finish) ? item.finish : [item.finish]).map(
                (finish) => (
                  <span
                    key={finish}
                    className="rounded-full bg-[#258F94]/10 px-3 py-1.5 text-xs font-semibold text-[#258F94]"
                  >
                    {finish}
                  </span>
                ),
              )}
            </div>
          </div>
        )}

        {/* Static size list — only when there's no toggle for it */}
        {!variantValues && item.size && Array.isArray(item.size) && (
          <div className="mt-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Sizes
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.size.map((size) => (
                <span
                  key={size}
                  className="rounded-full bg-[#258F94]/10 px-3 py-1.5 text-xs font-semibold text-[#258F94]"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {item.options?.length > 0 && (
          <div className="mt-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Options
            </p>
            <div className="mt-2 space-y-1.5">
              {item.options.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#258F94]" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}

        {item.notes && (
          <p className="mt-4 text-xs leading-5 text-gray-500">{item.notes}</p>
        )}

        <div className="mt-auto pt-4">
          <div className="h-[2px] w-0 rounded-full bg-[#258F94] transition-all duration-500 group-hover:w-full" />
        </div>
      </div>
    </div>
  );
}
