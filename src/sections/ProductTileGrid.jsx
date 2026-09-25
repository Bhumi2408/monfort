"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Droplets } from "lucide-react";

import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

// cover: image fills the whole box (main categories).
// Default: whole product visible (contain) with padding.
export default function ProductTileGrid({ tiles, cover = false }) {
  return (
    <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
      {tiles.map((tile) => (
        <StaggerItem key={tile.number}>
          <Link href={tile.href} className="group relative block h-full">
            {/* ================= CARD ================= */}
            <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_8px_35px_rgba(19,54,58,0.07)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_55px_rgba(19,54,58,0.14)]">
              {/* ================= IMAGE SECTION ================= */}
              <div className="relative h-[285px] shrink-0 overflow-hidden bg-gradient-to-br from-[#183241] via-[#1f4256] to-[#0f2431] sm:h-[300px]">
                {/* colored halo behind the product — keeps light/steel items visible */}
                <div className={`${cover ? "hidden" : ""} pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.14] blur-2xl transition-all duration-700 group-hover:h-52 group-hover:w-52 group-hover:bg-white/[0.2]`} />

                {/* soft grounding shadow under the product */}
                {!cover && (
                  <div className="pointer-events-none absolute bottom-10 left-1/2 h-6 w-32 -translate-x-1/2 rounded-full bg-black/25 blur-md" />
                )}

                <span className="absolute -right-2 -top-7 z-0 select-none text-[150px] font-black leading-none tracking-[-0.08em] text-white/[0.05] transition-all duration-700 group-hover:scale-105 group-hover:text-white/[0.08]">
                  {tile.number}
                </span>

                <div className={`absolute inset-0 z-10 flex items-center justify-center ${cover ? "" : "p-6"}`}>
                  {tile.image ? (
                    <Image
                      src={tile.image}
                      alt={tile.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`transition-transform duration-700 ease-out ${
                        cover
                          ? "object-cover group-hover:scale-105"
                          : "object-contain p-4 drop-shadow-[0_16px_18px_rgba(0,0,0,0.45)] group-hover:scale-[1.08]"
                      }`}
                    />
                  ) : (
                    // No product photo — show an icon badge instead
                    <div className="flex flex-col items-center gap-3 transition-transform duration-700 ease-out group-hover:scale-[1.08]">
                      <span className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-white/[0.08] text-[#67cdd0] backdrop-blur-sm">
                        <Droplets size={36} strokeWidth={1.5} />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                        Contact us to buy
                      </span>
                    </div>
                  )}
                </div>

                <div className="absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-[#0f2431]/50 to-transparent" />

                <div className="absolute bottom-5 left-5 z-30 flex items-center gap-2">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#67cdd0]">
                    {tile.number}
                  </span>
                  <span className="h-px w-8 bg-[#67cdd0]/40" />
                </div>
              </div>

              {/* ================= DARK CONTENT PANEL ================= */}
              {/* -mt-px overlaps the image box by 1px to hide the hairline
                  seam Chrome/Safari render at rounded-corner + overflow-hidden
                  boundaries between two differently-colored sibling blocks */}
              <div className="relative -mt-px flex flex-1 flex-col overflow-hidden bg-[#258f94] px-6 pb-6 pt-6 sm:px-7 sm:pb-7">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#258F94]/20 blur-3xl transition-all duration-700 group-hover:scale-150" />

                <span className="pointer-events-none absolute -bottom-8 -right-2 text-[110px] font-black leading-none text-white/[0.025]">
                  {tile.number}
                </span>

                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="max-w-[240px] text-xl font-bold leading-tight text-white transition-colors duration-300 sm:text-[22px]">
                      {tile.title}
                    </h3>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-all duration-500 group-hover:rotate-45 group-hover:border-[#67cdd0] group-hover:bg-[#258F94]">
                      <ArrowUpRight size={18} strokeWidth={1.8} />
                    </div>
                  </div>

                  <p className="line-clamp-3 mt-2 text-sm leading-6">
                    {tile.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                      Explore Product
                    </span>
                    <span className="text-xs font-medium text-white">
                      View Details
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
