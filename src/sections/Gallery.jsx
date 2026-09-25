"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

// Every real photo/product image used across the website.
// `sink: true` photos are shown first on mobile and tablet.
const photos = [
  { img: "/about/designer.jpg", sink: true, w: 3500, h: 2333,  type: "photo" },
  { img: "/gallery/tumbler.webp", w: 550, h: 550, type: "photo" },
  { img: "/gallery/shower.webp", w: 442, h: 247,  type: "photo" },
  { img: "/gallery/tap.webp", w: 500, h: 500, type: "photo" },
  { img: "/gallery/corner.webp", w: 1024, h: 1024,  type: "photo" },
  { img: "/hero/hero1.jpg", sink: true, w: 500, h: 420, type: "photo" },
  { img: "/gallery/dispenser.webp", w: 612, h: 408, type: "photo" },
  { img: "/gallery/faucet.webp", w: 800, h: 800, type: "photo" },
  { img: "/gallery/hanger.webp", w: 1536, h: 1024, type: "photo" },

  { img: "/gallery/rod.webp", w: 612, h: 408, type: "photo" },
  { img: "/gallery/brass-tap.webp", w: 1100, h: 732, type: "photo" },
  { img: "/gallery/rose-sink.webp", sink: true, w: 612, h: 428, type: "photo" },
  { img: "/gallery/image1.webp", w: 522, h: 478, type: "photo" },
  { img: "/gallery/liquid-dispenser.webp", w: 1536, h: 1024, type: "photo" },
  
  { img: "/gallery/sandwich-shower.webp", w: 547, h: 456, type: "photo" },
  { img: "/gallery/waterfall-sink.webp", sink: true, w: 700, h: 356, type: "photo" },
  { img: "/gallery/soap-tumbler.webp", w: 612, h: 408, type: "photo" },
  { img: "/gallery/dolphin.webp", w: 500, h: 500, type: "photo" },
  
  { img: "/gallery/double-soap.webp", w: 512, h: 487, type: "photo" },
  { img: "/gallery/brass-2.jpg", w: 612, h: 408, type: "photo" },

];

// Mobile + tablet: sinks on top, then everything else, in an even square grid
const mobilePhotos = [
  ...photos.filter((p) => p.sink),
  ...photos.filter((p) => !p.sink),
];

// square: fixed 1:1 tile (mobile/tablet grid). Otherwise natural height (masonry).
function GalleryItem({ item, index, square = false }) {
  return (
    <Reveal
      delay={(index % 8) * 0.05}
      className={`relative overflow-hidden bg-white shadow-[0_8px_24px_rgba(11,17,18,0.06)] ${
        square ? "rounded-xl sm:rounded-2xl" : "mb-4 break-inside-avoid rounded-2xl"
      }`}
    >
      <div
        className={`group relative w-full overflow-hidden ${square ? "aspect-square" : ""}`}
      >
        {square ? (
          <Image
            src={item.img}
            alt={item.caption || "Monfort gallery"}
            fill
            sizes="(max-width: 640px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <Image
            src={item.img}
            alt={item.caption || "Monfort gallery"}
            width={item.w}
            height={item.h}
            sizes="25vw"
            className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050909]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {item.caption && (
          <p className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-3 text-[11px] font-semibold leading-tight text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4 sm:text-sm">
            {item.caption}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFA] py-16 md:py-10">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#34acb1]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#34acb1]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#34acb1]" />
            <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#258F94] sm:text-xs">
              Gallery
            </span>
            <span className="h-[2px] w-10 bg-[#34acb1]" />
          </div>

          <h2 className="text-2xl font-semibold leading-[1.25] text-[#0B1112] sm:text-3xl lg:text-4xl">
            A Complete Look At
            <br />
            <span className="font-medium text-[#34acb1]">Monfort Kitchen.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Sinks, taps, finishes and craftsmanship — every image from our
            collection in one place.
          </p>
        </Reveal>

        {/* Mobile + tablet: sinks first, then the rest */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4 lg:hidden">
          {mobilePhotos.map((item, index) => (
            <GalleryItem key={item.img} item={item} index={index} square />
          ))}
        </div>

        {/* Desktop: original masonry order */}
        <div className="mt-16 hidden columns-4 gap-4 lg:block">
          {photos.map((item, index) => (
            <GalleryItem key={item.img} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
