"use client";

import Image from "next/image";
import { Caveat } from "next/font/google";
import {
  Crown,
  Gem,
  Cog,
  ShieldCheck,
  Leaf,
  ChevronRight,
  Quote,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const products = [
  {
    img: "/about/singlBowl.jpg",
    title: "Single Bowl",
    subtitle: "Minimal & Modern",
  },
  {
    img: "/about/doubleBowl.jpg",
    title: "Double Bowl",
    subtitle: "More Space, More Ease",
  },
  {
    img: "/about/designer.jpg",
    title: "Designer",
    subtitle: "Innovative & Stylish",
  },
];

const features = [
  {
    icon: Gem,
    title: "Premium Quality",
    text: "Built to last",
  },
  {
    icon: Cog,
    title: "Innovative Designs",
    text: "Function meets style",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Thousands",
    text: "A legacy of trust",
  },
  {
    icon: Leaf,
    title: "Healthier Kitchens",
    text: "Designed for well-being",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8FAFA] pb-16 pt-8 scroll-mt-24 sm:pb-20 sm:pt-10 lg:pb-28 lg:pt-14"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute left-[-180px] top-[8%] h-[420px] w-[420px] rounded-full bg-[#34ACB1]/10 blur-[110px]" />
      <div className="pointer-events-none absolute right-[-180px] top-[42%] h-[500px] w-[500px] rounded-full bg-[#34ACB1]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-16 pt-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* =====================================================
              LEFT — IMAGE
          ====================================================== */}

          <Reveal direction="left" className="relative">
            <div className="relative overflow-visible">
              {/* Main Image Card */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-[#0B1112] shadow-[0_30px_80px_rgba(11,17,18,0.2)] sm:aspect-[5/6]">
                <Image
                  src="/about/aboutimage.webp"
                  alt="Monfort Kitchen Sink"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

                {/* Since 2000 badge */}
                <div className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6">
                  <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3.5 py-2 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#34ACB1]" />
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-white">
                      Since 2000
                    </span>
                  </div>
                </div>

                {/* 25+ Years badge */}
                <div className="absolute -right-3 -top-3 z-20 sm:-right-4 sm:-top-4">
                  <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 border-[#34ACB1] bg-[#0B1112] text-center shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:h-24 sm:w-24">
                    <Crown size={16} className="mb-0.5 text-[#34ACB1]" />
                    <p className="text-lg font-bold leading-none text-white sm:text-xl">
                      25+
                    </p>
                    <p className="mt-1 px-1 text-[6px] font-bold uppercase leading-tight tracking-[1px] text-gray-300 sm:text-[7px]">
                      Years Of Excellence
                    </p>
                  </div>
                </div>

               
          
                
              </div>

              {/* Floating Product Cards */}
              <div className="relative z-30 mt-[-56px] px-3 sm:absolute sm:-bottom-10 sm:left-1/2 sm:mt-0 sm:w-[92%] sm:-translate-x-1/2 sm:px-0">
                <div className="grid grid-cols-3 gap-2 sm:flex sm:justify-center sm:gap-4">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="group rounded-2xl border border-white/70 bg-white p-2 shadow-[0_20px_45px_rgba(0,0,0,0.14)] transition-all duration-500 hover:-translate-y-2 hover:border-[#34ACB1] sm:w-32 sm:rounded-2xl sm:p-2.5"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#E8F7F7]">
                        <Image
                          src={product.img}
                          alt={product.title}
                          width={130}
                          height={130}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />
                      </div>

                      <p className="mt-2 text-center text-[9px] font-bold uppercase tracking-wide text-gray-900 sm:text-[10px]">
                        {product.title}
                      </p>
                      <p className="text-center text-[8px] text-gray-500 sm:text-[9px]">
                        {product.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* =====================================================
              RIGHT — CONTENT
          ====================================================== */}

          <Reveal
            direction="right"
            className="relative pt-16 sm:pt-8 lg:pt-2"
          >
            {/* Decorative script text */}
            <p
              className={`${caveat.className} pointer-events-none absolute -top-2 right-0 hidden -rotate-6 text-2xl leading-tight text-gray-300 sm:block sm:text-3xl`}
            >
              More Than Just
              <br />
              A Sink
            </p>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#34ACB1]" />
              <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#34ACB1] sm:text-xs">
                Our Story
              </span>
            </div>

            <h2 className="text-2xl font-semibold leading-[1.2] tracking-tight text-[#0B1112] sm:text-3xl lg:text-4xl">
              Monfort Kitchen Sink
              <br />
              <span className="text-[#34ACB1]">Since 2000</span>
            </h2>

            <p className="mt-3 text-base text-gray-500 sm:text-lg">
              Built on Trust, Made for Life.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-[15px]">
              Monfort Kitchen Sink has been dedicated to bringing quality,
              functionality, and timeless design to modern kitchens since
              2000. With years of experience in the kitchen sink industry, we
              focus on creating sinks that combine practical everyday
              performance with elegant design. Our aim is to make every
              kitchen more convenient, hygienic, and visually appealing.
            </p>

            {/* Feature Icons Row */}
            <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F7F7]">
                      <Icon size={22} className="text-[#34ACB1]" strokeWidth={1.8} />
                    </div>
                    <p className="text-xs font-semibold leading-tight text-gray-900 sm:text-sm">
                      {feature.title}
                    </p>
                    <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quote + Stat Row */}
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
              <div className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(11,17,18,0.06)] sm:p-6">
                <Quote size={20} className="mb-2 text-[#34ACB1]" fill="#34ACB1" />
                <p className="text-sm leading-6 text-gray-600">
                  From contemporary kitchens to traditional spaces, Monfort
                  Kitchen Sinks are designed to complement a wide range of
                  kitchen styles while meeting the demands of everyday use.
                </p>
              </div>

              <div className="flex flex-row items-center justify-center gap-3 rounded-2xl bg-white px-6 py-5 text-center shadow-[0_10px_30px_rgba(11,17,18,0.06)] sm:flex-col sm:justify-center">
                <p className="text-3xl font-bold text-[#0B1112] sm:text-4xl">
                  2+
                </p>
                <div className="text-left sm:text-center">
                  <p className="text-sm font-semibold text-[#0B1112]">
                    Decades
                  </p>
                  <p className="text-[9px] font-bold uppercase tracking-[2px] text-gray-400">
                    Of Excellence
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
