import { Users, Store, Globe, Award, ArrowUpRight } from "lucide-react";
import CountUp from "@/components/motion/CountUp";

const stats = [
  {
    icon: Users,
    number: "150+",
    title: "Distributors",
  },
  {
    icon: Store,
    number: "6000+",
    title: "Dealers",
  },
  {
    icon: Globe,
    number: "23+",
    title: "States Covered",
  },
  {
    icon: Award,
    number: "25+",
    title: "Years Experience",
  },
];

export default function StatsSection() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-10 lg:py-15"
      style={{
        backgroundImage: "url('/images/stats-bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Teal Tint */}
      <div className="absolute inset-0 bg-[#258F94]/10" />

      {/* Background Glow */}
      <div className="absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#258F94]/20 blur-[100px]" />
      <div className="absolute -right-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#258F94]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#258F94]" />

            <span className="text-xs font-bold tracking-[0.2em] text-[#5fc2c6]">
              OUR ACHIEVEMENTS
            </span>

            <span className="h-px w-8 bg-[#258F94]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Numbers That <span className="text-[#5fc2c6]">Speaks</span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-300">
            Our growing network and experience reflect the trust we have earned
            over the years.
          </p>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.08] p-5 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#258F94]/60 hover:bg-white/[0.12] hover:shadow-xl hover:shadow-[#258F94]/10 sm:p-6"
              >
                {/* Top Number */}
                <span className="absolute right-3 top-2 text-5xl font-black text-white/[0.035]">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-[#258F94]/30 bg-[#258F94]/10 transition-all duration-500 group-hover:scale-105 group-hover:border-[#258F94] group-hover:bg-[#258F94]">
                  <Icon
                    size={26}
                    strokeWidth={1.8}
                    className="text-[#69d0d3] transition-colors duration-500 group-hover:text-white"
                  />
                </div>

                {/* Number */}
                <h3 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <CountUp value={item.number} className="tabular-nums" />
                </h3>

                {/* Title */}
                <p className="mt-1.5 text-xs font-medium text-gray-300 sm:text-sm">
                  {item.title}
                </p>

                {/* Hover Arrow */}
                <div className="absolute right-3 bottom-3 flex h-7 w-7 translate-y-2 items-center justify-center rounded-full bg-[#258F94] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={14} className="text-white" />
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#258F94] transition-all duration-500 group-hover:w-2/3" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
