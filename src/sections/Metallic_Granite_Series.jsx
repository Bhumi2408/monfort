"use client";

import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { metallicGraniteProducts } from "@/data";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

function ProductSwiper({ title, products }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [size, type] = title.split(" - ");

  return (
    <div className="group/section relative w-full">
      {/* CATEGORY HEADER */}
      <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        {/* LEFT */}
        <div>
          {/* COLLECTION LABEL */}
          <div className="mb-2.5 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#30ADB2]/50" />
              <span className="relative h-2 w-2 rounded-full bg-[#30ADB2]" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#30ADB2] sm:text-xs">
              Premium Collection
            </span>
          </div>

          {/* TITLE */}
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
              {size}
            </h3>

            {type && (
              <>
                <span className="hidden h-6 w-px bg-gray-200 sm:block" />

                <span className="rounded-full border border-[#30ADB2]/20 bg-[#30ADB2]/10 px-3 py-1 text-xs font-semibold text-[#258F94] sm:text-sm">
                  {type}
                </span>
              </>
            )}
          </div>
        </div>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-2">
          {/* ENQUIRE */}
          <Link
            href="/#contact"
            className="group/enquire flex h-10 items-center gap-2 rounded-full bg-[#30ADB2] px-5 text-xs font-bold text-white shadow-[0_7px_22px_rgba(48,173,178,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#258F94] hover:shadow-[0_10px_28px_rgba(48,173,178,0.32)] active:scale-95 sm:px-6"
          >
            Enquire Now
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover/enquire:translate-x-0.5 group-hover/enquire:-translate-y-0.5"
            />
          </Link>

          {/* PREVIOUS */}
          <button
            ref={prevRef}
            type="button"
            aria-label={`Previous ${title}`}
            className="group/prev flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-300 hover:border-[#30ADB2] hover:bg-[#30ADB2] hover:text-white hover:shadow-[0_8px_24px_rgba(48,173,178,0.25)] active:scale-90"
          >
            <ChevronLeft
              size={18}
              className="transition-transform duration-300 group-hover/prev:-translate-x-0.5"
            />
          </button>

          {/* NEXT */}
          <button
            ref={nextRef}
            type="button"
            aria-label={`Next ${title}`}
            className="group/next flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-300 hover:border-[#30ADB2] hover:bg-[#30ADB2] hover:text-white hover:shadow-[0_8px_24px_rgba(48,173,178,0.25)] active:scale-90"
          >
            <ChevronRight
              size={18}
              className="transition-transform duration-300 group-hover/next:translate-x-0.5"
            />
          </button>
        </div>
      </div>

      {/* SWIPER */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={14}
          slidesPerView={1}
          loop={products.length > 4}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 22,
            },
          }}
          className="!w-full !overflow-visible"
        >
          {products.map((product, index) => {
            const productName = product.name
              .replace(/\.[^/.]+$/, "")
              .replace(/_/g, " ");

            return (
              <SwiperSlide key={`${title}-${index}`} className="!h-auto !py-2">
                {/* PRODUCT CARD */}
                <div className="group relative h-full overflow-hidden rounded-[26px] border border-gray-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.055)] transition-all duration-500 hover:-translate-y-2 hover:border-[#30ADB2]/40 hover:shadow-[0_22px_50px_rgba(48,173,178,0.17)]">
                  {/* TOP ACCENT */}
                  <div className="absolute left-1/2 top-0 z-30 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#30ADB2] via-teal-300 to-[#30ADB2] shadow-[0_0_14px_rgba(48,173,178,0.7)] transition-all duration-500 group-hover:w-3/5" />

                  {/* IMAGE SECTION */}
                  <div className="relative flex h-[265px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#30ADB2]/[0.08] via-white to-gray-50 px-3 py-3 sm:h-[275px] md:h-[245px] lg:h-[275px] xl:h-[290px]">
                    {/* GRID */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#30ADB2_1px,transparent_1px),linear-gradient(90deg,#30ADB2_1px,transparent_1px)] [background-size:24px_24px]" />

                    {/* CENTER GLOW */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#30ADB2]/10 blur-3xl transition-all duration-700 group-hover:h-44 group-hover:w-52 group-hover:bg-[#30ADB2]/20" />

                    {/* TOP LEFT CORNER */}
                    <div className="absolute left-4 top-4 h-7 w-7 border-l border-t border-[#30ADB2]/20 transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-[#30ADB2]/50" />

                    {/* BOTTOM RIGHT CORNER */}
                    <div className="absolute bottom-4 right-4 h-7 w-7 border-b border-r border-[#30ADB2]/20 transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-[#30ADB2]/50" />

                    {/* PRODUCT NUMBER */}
                    <div className="absolute left-4 top-4 z-10 flex h-8 min-w-8 items-center justify-center rounded-full border border-white/80 bg-white/75 px-2 text-[9px] font-extrabold tracking-wider text-[#258F94] shadow-sm backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* PREMIUM BADGE */}
                    <div className="absolute right-4 top-4 z-10 flex translate-y-[-5px] items-center gap-1.5 rounded-full border border-white/80 bg-white/75 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#30ADB2] opacity-0 shadow-md backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <Sparkles size={10} />
                      Premium
                    </div>

                    {/* PRODUCT IMAGE */}
                    <img
                      src={product.image}
                      alt={productName}
                      className="relative z-[2] h-full w-full object-contain drop-shadow-[0_16px_15px_rgba(0,0,0,0.14)] transition-all duration-700 ease-out group-hover:scale-[1.08] group-hover:rotate-1"
                    />

                    {/* SHINE */}
                    <div className="pointer-events-none absolute -left-[100%] top-0 z-10 h-full w-[45%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-all duration-1000 group-hover:left-[130%] group-hover:opacity-100" />
                  </div>

                  {/* PRODUCT INFO */}
                  <div className="relative border-t border-gray-100 bg-white px-4 py-4">
                    {/* PRODUCT NAME */}
                    <h4 className="truncate text-center text-sm font-bold capitalize tracking-wide text-gray-700 transition-colors duration-300 group-hover:text-[#30ADB2]">
                      {productName}
                    </h4>

                    {/* ACCENT LINE */}
                    <div className="relative mx-auto mt-2.5 h-[2px] w-10 overflow-hidden rounded-full bg-[#30ADB2]/15">
                      <div className="absolute inset-0 -translate-x-full rounded-full bg-[#30ADB2] transition-transform duration-500 group-hover:translate-x-0" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default function MetallicGraniteSeries({ backHref = "/products" }) {
  const categories = Object.entries(metallicGraniteProducts);

  return (
    <section
      id="metallic-granite"
      className="relative w-full overflow-hidden bg-[#F8FAFA] py-14 sm:py-16 md:py-20 lg:py-24"
    >
      {/* BACKGROUND LIGHTS */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#30ADB2]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#30ADB2]/5 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#30ADB2]/[0.025] blur-3xl" />

      {/* MAIN CONTAINER */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        {/* BACK LINK */}
        <Link
          href={backHref}
          className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#258F94] transition-colors hover:text-[#207c80]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#258F94]/20 bg-white shadow-sm transition-all duration-300 group-hover:-translate-x-1 group-hover:border-[#258F94]/50">
            <ArrowLeft className="h-4 w-4" />
          </span>
          Back to Products
        </Link>

        {/* SECTION HEADER */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 md:mb-16">
          {/* BADGE */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#30ADB2]/20 bg-white px-4 py-2 shadow-[0_5px_20px_rgba(48,173,178,0.08)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#30ADB2]/50" />
              <span className="relative h-2 w-2 rounded-full bg-[#30ADB2]" />
            </span>

            <Sparkles size={13} className="text-[#30ADB2]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#30ADB2] sm:text-xs">
              Premium Sink Collection
            </span>
          </div>

          {/* MAIN TITLE */}
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl md:text-4xl ">
            Quartz{" "}
            <span className="relative inline-block text-[#30ADB2]">
              Sink
              <span className="absolute -bottom-2 left-1/2 h-[3px] w-14 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#30ADB2] to-transparent sm:-bottom-3 sm:w-20" />
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
            Discover our premium quartz sinks, available in multiple sizes,
            bowl configurations and elegant finishes crafted for modern
            kitchens.
          </p>

          {/* DECORATIVE DIVIDER */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gray-200 sm:w-16" />

            <span className="h-2 w-2 rounded-full bg-[#30ADB2] shadow-[0_0_12px_rgba(48,173,178,0.6)]" />

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gray-200 sm:w-16" />
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="w-full space-y-14 sm:space-y-16 md:space-y-20">
          {categories.map(([title, products]) => (
            <ProductSwiper key={title} title={title} products={products} />
          ))}
        </div>
      </div>
    </section>
  );
}
