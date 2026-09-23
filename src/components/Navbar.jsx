"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Menu,
  X,
  Circle,
  ChevronDown,
  ChevronRight,
  Droplet,
  Sparkles,
  Gem,
  ArrowUpRight,
} from "lucide-react";
import { usePathname } from "next/navigation";

const productMenu = [
  {
    group: "Kitchen Sinks",
    href: "/products/kitchen-sinks",
    icon: Droplet,
    items: [
      { name: "Indian Sink", href: "/products/indian-sink" },
      { name: "Handmade Sink", href: "/products/handmade" },
      { name: "Waterfall Sinks", href: "/products/waterfall" },
      { name: "Premium Handmade Kitchen Sink", href: "/products/premium-handmade" },
      { name: "Quartz Sink", href: "/products/quartz-sink" },
    ],
  },
  {
    group: "Bathroom Accessories",
    href: "/products/bathroom-accessories",
    icon: Sparkles,
    items: [
      { name: "Drainer / Jaali", href: "/products/bathroom-accessories/drainer-jaali" },
      { name: "Health Faucets", href: "/products/bathroom-accessories/health-faucets" },
      { name: "Jet Spray", href: "/products/bathroom-accessories/jet-spray" },
      { name: "Soap Dispenser", href: "/products/bathroom-accessories/soap-dispenser" },
      { name: "Overhead Shower", href: "/products/bathroom-accessories/overhead-shower" },
      { name: "Towel Ring, Rack/Rod", href: "/products/bathroom-accessories/towel-ring-rack" },
      { name: "PTMT Taps", href: "/products/ptmt-taps" },
      { name: "Brass Taps", href: "/products/bathroom-accessories/brass-taps" },
      { name: "Acrylic Accessories", href: "/products/bathroom-accessories/acrylic-accessories" },
    ],
  },
  {
    group: "Premium Montfort Accessories",
    href: "/products/premium-montfort-accessories",
    icon: Gem,
    items: [],
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathName = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Testimonial", href: "/#testimonial" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full">
      {/* ================= TOP BAR ================= */}
      <div className="bg-[#222] text-white">
        <div className="mx-auto flex min-h-12 max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-5">
          {/* Phone Numbers */}
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#34acb1]/10">
              <Phone size={15} className="text-[#34acb1]" />
            </div>

            <div className="flex items-center">
              {/* Call Us */}
              <a
                href="tel:+919871667213"
                className="group flex flex-col leading-tight"
              >
                <span className="text-[8px] font-semibold uppercase tracking-[1px] text-gray-500 sm:text-[9px]">
                  Call Us
                </span>

                <span className="mt-0.5 text-[11px] font-medium text-gray-200 transition-colors group-hover:text-[#34acb1] sm:text-sm">
                  +91-9871667213
                </span>
              </a>

              {/* Divider */}
              <span className="mx-3 h-7 w-px bg-white/20 sm:mx-5" />

              {/* Office Number */}
              <a
                href="tel:+918383972282"
                className="group flex flex-col leading-tight"
              >
                <span className="text-[8px] font-semibold uppercase tracking-[1px] text-gray-500 sm:text-[9px]">
                  Office
                </span>

                <span className="mt-0.5 text-[11px] font-medium text-gray-200 transition-colors group-hover:text-[#34acb1] sm:text-sm">
                  +91-8383972282
                </span>
              </a>
            </div>
          </div>

          {/* GST Number */}
          <div className="hidden text-xs font-medium tracking-wide text-gray-400 sm:block">
            GST No. <span className="text-gray-300">07BJSPR2098P1Z1</span>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-5">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="relative block h-[48px] w-[105px] sm:h-[60px] sm:w-[130px]"
          >
            <Image
              src="/logo.jpeg"
              alt="Logo"
              fill
              priority
              sizes="(max-width: 640px) 105px, 130px"
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-10 lg:flex xl:gap-12">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/" ? pathName === "/" : pathName === item.href;

              if (item.name === "Products") {
                const isProductsActive = pathName.startsWith("/products");

                return (
                  <div key={item.name} className="group relative">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 font-medium transition-colors ${
                        isProductsActive
                          ? "text-[#34acb1]"
                          : "text-gray-700 hover:text-[#34acb1]"
                      }`}
                    >
                      <Circle
                        size={9}
                        fill="currentColor"
                        className={`transition-colors ${
                          isProductsActive
                            ? "text-[#34acb1]"
                            : "text-gray-400 group-hover:text-[#34acb1]"
                        }`}
                        strokeWidth={1.5}
                      />
                      {item.name}
                      <ChevronDown
                        size={14}
                        className="text-gray-400 transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#34acb1]"
                      />
                    </Link>

                    {/* Mega menu */}
                    <div className="invisible absolute left-1/2 top-full z-50 w-[720px] max-w-[92vw] -translate-x-1/2 translate-y-1 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_30px_70px_rgba(19,54,58,0.18)]">
                        <div className="grid grid-cols-3 divide-x divide-gray-100">
                          {productMenu.map((section) => (
                            <div key={section.group} className="p-5">
                              <Link
                                href={section.href}
                                className="group/head mb-4 flex items-center gap-2.5"
                              >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#258F94]/10 text-[#258F94] transition-colors duration-300 group-hover/head:bg-[#258F94] group-hover/head:text-white">
                                  <section.icon size={16} strokeWidth={1.8} />
                                </span>
                                <span className="text-sm font-bold leading-tight text-[#142A3D] transition-colors group-hover/head:text-[#258F94]">
                                  {section.group}
                                </span>
                              </Link>

                              {section.items.length > 0 ? (
                                <div className="flex flex-col gap-0.5">
                                  {section.items.map((cat) => (
                                    <Link
                                      key={cat.href}
                                      href={cat.href}
                                      className={`group/item flex items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-[13px] font-medium leading-tight transition-colors ${
                                        pathName === cat.href
                                          ? "bg-[#258F94]/10 text-[#258F94]"
                                          : "text-gray-600 hover:bg-[#258F94]/5 hover:text-[#258F94]"
                                      }`}
                                    >
                                      {cat.name}
                                      <ChevronRight
                                        size={12}
                                        className="shrink-0 opacity-0 transition-opacity duration-200 group-hover/item:opacity-100"
                                      />
                                    </Link>
                                  ))}
                                </div>
                              ) : (
                                <p className="rounded-lg bg-gray-50 px-2.5 py-2 text-[13px] font-medium italic text-gray-400">
                                  Coming Soon
                                </p>
                              )}
                            </div>
                          ))}
                        </div>

                        <Link
                          href="/products"
                          className="group/all flex items-center justify-between border-t border-gray-100 bg-[#f7f9f9] px-5 py-3.5 text-xs font-bold text-[#258F94] transition-colors hover:bg-[#258F94]/5"
                        >
                          View All Products
                          <ArrowUpRight
                            size={14}
                            className="transition-transform duration-300 group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center gap-3 font-medium transition-colors ${
                    isActive
                      ? "text-[#34acb1]"
                      : "text-gray-700 hover:text-[#34acb1]"
                  }`}
                >
                  <Circle
                    size={9}
                    fill="currentColor"
                    className={`transition-colors ${
                      isActive
                        ? "text-[#34acb1]"
                        : "text-gray-400 group-hover:text-[#34acb1]"
                    }`}
                    strokeWidth={1.5}
                  />

                  {item.name}
                </Link>
              );
            })}
          </div>
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 hover:text-[#34acb1] lg:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="border-t border-gray-100 bg-white lg:hidden">
            <div className="mx-auto max-w-7xl px-5 py-5">
              <div className="flex flex-col gap-1">
                {navLinks.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathName === "/"
                      : pathName === item.href;

                  if (item.name === "Products") {
                    const isProductsActive = pathName.startsWith("/products");

                    return (
                      <div key={item.name}>
                        <div
                          className={`flex items-center gap-1 rounded-lg pr-2 font-medium transition ${
                            isProductsActive
                              ? "bg-[#34acb1]/10 text-[#34acb1]"
                              : "text-gray-700"
                          }`}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex flex-1 items-center gap-3 px-3 py-3"
                          >
                            <Circle
                              size={9}
                              fill="currentColor"
                              className={
                                isProductsActive
                                  ? "text-[#34acb1]"
                                  : "text-gray-400"
                              }
                              strokeWidth={1.5}
                            />
                            {item.name}
                          </Link>

                          <button
                            type="button"
                            onClick={() =>
                              setMobileProductsOpen(!mobileProductsOpen)
                            }
                            aria-label={
                              mobileProductsOpen
                                ? "Collapse products"
                                : "Expand products"
                            }
                            aria-expanded={mobileProductsOpen}
                            className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100"
                          >
                            <ChevronDown
                              size={16}
                              className={`text-gray-400 transition-transform duration-300 ${
                                mobileProductsOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        {mobileProductsOpen && (
                          <div className="ml-6 mt-1 flex flex-col gap-3 border-l border-gray-100 pl-4">
                            {productMenu.map((section) => (
                              <div key={section.group}>
                                <Link
                                  href={section.href}
                                  onClick={() => setIsOpen(false)}
                                  className="mb-1 flex items-center gap-2 px-3 py-1"
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#258F94]/10 text-[#258F94]">
                                    <section.icon size={12} strokeWidth={1.8} />
                                  </span>
                                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                                    {section.group}
                                  </span>
                                </Link>

                                {section.items.length > 0 ? (
                                  <div className="flex flex-col gap-0.5">
                                    {section.items.map((cat) => (
                                      <Link
                                        key={cat.href}
                                        href={cat.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                                          pathName === cat.href
                                            ? "bg-[#34acb1]/10 text-[#34acb1]"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-[#34acb1]"
                                        }`}
                                      >
                                        {cat.name}
                                      </Link>
                                    ))}
                                  </div>
                                ) : (
                                  <Link
                                    href={section.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block rounded-lg px-3 py-2.5 text-sm font-medium italic text-gray-400"
                                  >
                                    Coming Soon
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-3 font-medium transition ${
                        isActive
                          ? "bg-[#34acb1]/10 text-[#34acb1]"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#34acb1]"
                      }`}
                    >
                      <Circle
                        size={9}
                        fill="currentColor"
                        className={
                          isActive ? "text-[#34acb1]" : "text-gray-400"
                        }
                        strokeWidth={1.5}
                      />

                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-4 border-t border-gray-100 pt-4">
                <div className="mt-3 text-xs text-gray-600 font-bold">
                  GST No.{" "}
                  <span className="font-medium text-gray-600">
                    07BJSPR2098P1Z1
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
