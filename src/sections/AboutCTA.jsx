"use client";

import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9f9] py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#173751] via-[#142A3D] to-[#0f2431] px-6 py-14 text-center shadow-[0_25px_60px_rgba(19,54,58,0.25)] sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#30ADB2]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#258F94]/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="relative mx-auto max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#67cdd0]">
              Let's Build Something Together
            </p>

            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Ready to bring Monfort into your kitchen?
            </h2>

            <p className="mx-auto mt-4 text-sm leading-6 text-white/65 sm:text-base">
              Whether you're a homeowner, architect, or bulk dealer — our team
              is ready to help you find the right fit.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#258F94] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#258F94]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#30ADB2] hover:shadow-xl"
              >
                Get in Touch
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
        </Reveal>
      </div>
    </section>
  );
}
