"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Circle } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Testimonials", href: "/testimonial" },
    { name: "Contact Us", href: "/contact" },
  ];

  const products = [
    { name: "Indian Sink", href: "/products/indian-sink" },
    { name: "Handmade Sink", href: "/products/handmade" },
    { name: "Waterfall Sinks", href: "/products/waterfall" },
    { name: "Premium Handmade Kitchen Sink", href: "/products/premium-handmade" },
    { name: "Quartz Sink", href: "/products/quartz-sink" },
    { name: "PTMT Taps", href: "/products/ptmt-taps" },
  ];

  return (
    <footer className="bg-[#0c0c0c] text-gray-300 mt-15">
      {/* Main Footer */}
      <div className="w-full mx-auto px-7 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact */}
          <div>
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-8">
              Contact Us
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded bg-[#1c1c1c] flex items-center justify-center">
                  <Phone className="text-[#34acb1]" size={24} />
                </div>

                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+918383972282"
                    className="text-sm md:text-base text-gray-300 hover:text-[#34acb1] transition"
                  >
                    +91-8383972282
                  </a>
                  <a
                    href="tel:+919871667213"
                    className="text-sm md:text-base text-gray-300 hover:text-[#34acb1] transition"
                  >
                    +91-9871667213
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded bg-[#1c1c1c] flex items-center justify-center">
                  <Mail className="text-[#34acb1]" size={24} />
                </div>
                <a
                  href="mailto:harshkansal280@gmail.com"
                  className="text-sm md:text-base text-gray-300  hover:text-[#34acb1] transition break-all"
                >
                  harshkansal280@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-center md:items-start gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded bg-[#1c1c1c] flex items-center justify-center">
                  <MapPin className="text-[#34acb1] w-[120]" size={24} />
                </div>
                <p className="text-sm md:text-base leading-7 max-w-xs">
                  G-108, sector -3, Bawana industrial area, Delhi-11039 (INDIA)
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-8">
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 border-b border-gray-800 pb-5 hover:text-[#34acb1] transition text-sm md:text-base"
                >
                  <Circle
                    size={7}
                    className=" text-[#34acb1]"
                    fill="currentColor"
                  />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-8">
              Products
            </h3>
            <div className="space-y-3">
              {products.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 border-b border-gray-800 pb-5 text-sm md:text-base hover:text-[#34acb1] transition"
                >
                  <Circle
                    size={7}
                    className="text-[#34acb1]"
                    fill="currentColor"
                  />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-8">
              Location
            </h3>
            <iframe
              src="https://www.google.com/maps?q=Delhi&output=embed"
              className="w-full h-56 rounded"
              loading="lazy"
            />
            <h4 className="text-white text-xl md:text-2xl font-semibold mt-8 mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center md:justify-start">
              <Link
                href="#"
                className="w-12 h-12 bg-[#1d1d1d] text-[#34acb1] hover:text-white  rounded flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaFacebookF size={18} />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 bg-[#1d1d1d]  text-[#34acb1] hover:text-white rounded flex items-center justify-center hover:bg-pink-500 transition"
              >
                <FaInstagram size={18} />
              </Link>
              <Link
                href="https://wa.me/917838951950"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#1d1d1d] text-[#34acb1] hover:text-white rounded flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaWhatsapp size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#34acb1] text-center py-5 text-white">
        <p className="text-sm md:text-base">
          Copyright ©2026 Monfort Kitchens. All Rights Reserved. Designed by{" "}
          <span className="font-bold ">Cybertricks media pvt ltd</span>
        </p>
      </div>
    </footer>
  );
}
