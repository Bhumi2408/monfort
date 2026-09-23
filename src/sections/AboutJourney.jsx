"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  PencilRuler,
  Factory,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const steps = [
  {
    icon: Lightbulb,
    title: "Requirement Analysis",
    description:
      "We understand your requirements, preferred dimensions, finish, and application to recommend the ideal kitchen sink solution.",
  },
  {
    icon: PencilRuler,
    title: "Design & Engineering",
    description:
      "Our experts create precise designs using advanced manufacturing techniques for superior functionality.",
  },
  {
    icon: Factory,
    title: "Precision Manufacturing",
    description:
      "Every sink is manufactured using premium stainless steel with modern machinery and skilled craftsmanship.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection",
    description:
      "Each product undergoes strict quality checks for durability, finishing, drainage performance, and corrosion resistance.",
  },
  {
    icon: Truck,
    title: "Packaging & Delivery",
    description:
      "Products are securely packed and delivered across India through our reliable logistics network.",
  },
];

// A smooth S-curve winding top to bottom — purely decorative, so it
// doesn't need to hit exact node coordinates at every breakpoint.
const ARC_PATH =
  "M 100 0 C 185 90, 185 150, 100 240 C 15 330, 15 390, 100 480 C 185 570, 185 630, 100 720 C 15 810, 15 870, 100 960 C 150 1010, 150 1010, 100 1050";

export default function AboutJourney() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2431] via-[#142A3D] to-[#173751] py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#30ADB2]/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#258F94]/15 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-xl text-center sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#67cdd0]/60" />
              <span className="relative h-2 w-2 rounded-full bg-[#67cdd0]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#67cdd0]">
              From Steel to Sink
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            How We <span className="text-[#67cdd0]">Get There</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-white/60">
            Every Monfort sink passes through five deliberate stages before
            it reaches your kitchen.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Animated drawing arc (desktop) */}
          <motion.svg
            viewBox="0 0 200 1050"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
            fill="none"
          >
            <path
              d={ARC_PATH}
              stroke="url(#arcGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
            <motion.path
              d={ARC_PATH}
              stroke="#67cdd0"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              style={{
                filter: "drop-shadow(0 0 6px rgba(103,205,208,0.7))",
              }}
            />
            <defs>
              <linearGradient id="arcGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#67cdd0" stopOpacity="0" />
                <stop offset="50%" stopColor="#67cdd0" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#67cdd0" stopOpacity="0" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Mobile line */}
          <div className="absolute left-6 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-transparent via-white/15 to-transparent sm:hidden" />

          <div className="space-y-10 sm:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <Reveal
                  key={step.title}
                  direction={isEven ? "left" : "right"}
                  delay={index * 0.08}
                >
                  <div
                    className={`group relative flex gap-5 sm:w-1/2 sm:gap-6 ${
                      isEven
                        ? "sm:pr-10"
                        : "sm:ml-auto sm:flex-row-reverse sm:pl-10 sm:text-right"
                    } ${index > 0 ? "sm:mt-16" : ""}`}
                  >
                    {/* Node */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center">
                      <span className="absolute inset-0 rounded-full bg-[#67cdd0]/20 opacity-0 transition-opacity duration-500 group-hover:animate-ping group-hover:opacity-100" />
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#67cdd0] bg-[#142A3D] text-[#67cdd0] shadow-[0_0_0_6px_rgba(103,205,208,0.08)] transition-all duration-500 group-hover:scale-110 group-hover:border-white group-hover:bg-[#258F94] group-hover:text-white">
                        <step.icon size={20} strokeWidth={1.8} />
                      </div>
                    </div>

                    <div className="pb-10 sm:pb-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#67cdd0]/70">
                        Step {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1.5 text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#67cdd0]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/55">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
