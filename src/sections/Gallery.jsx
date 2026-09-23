"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

// Every real photo/product image used across the website.
const photos = [
  { img: "/hero/hero1.jpg", w: 3500, h: 2333, caption: "Premium Kitchen Sinks", type: "photo" },
  { img: "/about/singlBowl.jpg", w: 550, h: 550, caption: "Single Bowl", type: "photo" },
  { img: "/products/indian_sink.webp", w: 442, h: 247, caption: "Indian Kitchen Sink", type: "product" },
  { img: "/metallicGraniteProducts/24_18/black.webp", w: 500, h: 500, caption: "24x18 — Black Finish", type: "product" },
  { img: "/about/doubleBowl.jpg", w: 1024, h: 1024, caption: "Double Bowl", type: "photo" },
  { img: "/products/handmade-sink.webp", w: 588, h: 424, caption: "Handmade Kitchen Sink", type: "product" },
  { img: "/metallicGraniteProducts/37_18/Ivory Sand.webp", w: 612, h: 408, caption: "37x18 — Ivory Sand", type: "product" },
  { img: "/about/designer.jpg", w: 800, h: 800, caption: "Designer Finish", type: "photo" },
  { img: "/products/waterfall_sink.webp", w: 1536, h: 1024, caption: "Waterfall Sink", type: "product" },
  { img: "/metallicGraniteProducts/24_18/gray_stone.webp", w: 512, h: 487, caption: "24x18 — Gray Stone", type: "product" },
  { img: "/products/metallicAndgranite.webp", w: 612, h: 408, caption: "Quartz Sink", type: "product" },
  { img: "/metallicGraniteProducts/37_18/Red Moon.webp", w: 612, h: 408, caption: "37x18 — Red Moon", type: "product" },
  { img: "/why_choose.jpg", w: 1100, h: 732, caption: "Why Choose Monfort", type: "photo" },
  { img: "/metallicGraniteProducts/24_18/Cera_Dotted_Finish.webp", w: 522, h: 478, caption: "24x18 — Cera Dotted", type: "product" },
  { img: "/products/Grade_Handmade_Sinks.webp", w: 1536, h: 1024, caption: "Premium Handmade Kitchen Sink", type: "product" },
  { img: "/metallicGraniteProducts/37_18/black.webp", w: 612, h: 408, caption: "37x18 — Black Finish", type: "product" },
  { img: "/metallicGraniteProducts/24_18/Brown_Finish.webp", w: 547, h: 456, caption: "24x18 — Brown Finish", type: "product" },
  { img: "/products/pmtp.webp", w: 1536, h: 1024, caption: "PTMT Taps", type: "product" },
  { img: "/metallicGraniteProducts/37_18/Peach Ivory.webp", w: 612, h: 408, caption: "37x18 — Peach Ivory", type: "product" },
  { img: "/metallicGraniteProducts/24_18/Red Moon Finish.webp", w: 500, h: 500, caption: "24x18 — Red Moon", type: "product" },
  { img: "/metallicGraniteProducts/37_18/gray Finish.webp", w: 700, h: 356, caption: "37x18 — Gray Finish", type: "product" },
  { img: "/metallicGraniteProducts/24_18/gray.webp", w: 512, h: 487, caption: "24x18 — Gray", type: "product" },
  { img: "/metallicGraniteProducts/37_18/Cera Dotted.webp", w: 612, h: 408, caption: "37x18 — Cera Dotted", type: "product" },
  { img: "/metallicGraniteProducts/24_18/Ivory Sand.webp", w: 518, h: 482, caption: "24x18 — Ivory Sand", type: "product" },
];

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

        <div className="mt-14 columns-2 gap-3 sm:mt-16 sm:columns-3 sm:gap-4 lg:columns-4">
          {photos.map((item, index) => (
            <Reveal
              key={index}
              delay={(index % 8) * 0.05}
              className="relative mb-3 break-inside-avoid overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(11,17,18,0.06)] sm:mb-4 sm:rounded-2xl"
            >
              <div
                className={`group relative w-full overflow-hidden ${
                  item.type === "product" ? "bg-[#EFF8F8] p-5 sm:p-6" : ""
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.caption}
                  width={item.w}
                  height={item.h}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className={`block h-auto w-full transition-transform duration-700 group-hover:scale-110 ${
                    item.type === "product" ? "object-contain" : "object-cover"
                  }`}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050909]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <p className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-3 text-[11px] font-semibold leading-tight text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4 sm:text-sm">
                  {item.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
