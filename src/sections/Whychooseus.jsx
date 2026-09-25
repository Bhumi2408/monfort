import Image from "next/image";
import { TrendingUp, BadgeCheck, Handshake } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const features = [
  {
    icon: TrendingUp,
    title: "Large Production Line",
    description:
      "The company owns a well integrated and spacious production unit where all the kitchen sinks are manufactured in bulk quantity.",
  },
  {
    icon: BadgeCheck,
    title: "Assurance Of Quality",
    description:
      "We maintain strict quality standards with premium raw materials and rigorous quality checks to deliver durable kitchen sinks.",
  },
  {
    icon: Handshake,
    title: "Our Strengths",
    description:
      "We offer a wide range of premium kitchen sinks with modern designs, superior finishing and long-lasting durability.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-10  lg:py-15 scroll-mt-24">
      {/* Background Decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#258F94]/5 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#258F94]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ================= LEFT ================= */}
          <Reveal direction="left">
            {/* Small Heading */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#258F94]" />

              <span className="text-sm font-bold tracking-[0.18em] text-[#258F94]">
                WHY CHOOSE US
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="mb-5 text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl">
              Why Choose <span className="text-[#258F94]">Us?</span>
            </h2>

            {/* Description */}
            <p className="max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              <span className="font-bold text-[#258F94]">Monfort Kitchens</span>{" "}
              started our business journey in the year{" "}
              <span className="font-semibold text-gray-900">2000</span>. With a
              strong commitment to quality and innovation, we continue to
              deliver reliable and stylish kitchen solutions.
            </p>

            {/* Features */}
            <StaggerGroup className="mt-10 space-y-7">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <StaggerItem
                    key={index}
                    className="group flex gap-5 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-[#258F94]/15 hover:bg-[#258F94]/5 hover:shadow-lg hover:shadow-[#258F94]/5 sm:gap-6 sm:p-5"
                  >
                    {/* Icon */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#258F94]/10 transition-all duration-300 group-hover:bg-[#258F94] group-hover:shadow-lg group-hover:shadow-[#258F94]/20 sm:h-[72px] sm:w-[72px]">
                      <Icon className="h-8 w-8 text-[#34acb1] transition-colors duration-300 group-hover:text-white sm:h-9 sm:w-9" />
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#258F94] sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </Reveal>

          {/* ================= RIGHT ================= */}
          <Reveal direction="right" className="relative flex justify-center lg:justify-end">
            {/* Decorative Circle */}
            <div className="absolute -right-4 -top-6 h-24 w-24 rounded-full border-[10px] border-[#258F94]/10 sm:h-28 sm:w-28" />

            {/* Decorative Circle */}
            <div className="absolute -bottom-6 -left-4 h-28 w-28 rounded-full border-[10px] border-[#258F94]/10 sm:h-36 sm:w-36" />

            {/* Image Container */}
            <div className="relative w-full max-w-[620px] overflow-hidden rounded-[2rem] border border-[#258F94]/10 bg-[#258F94]/5 p-3 shadow-xl shadow-[#258F94]/10 sm:p-5">
              <div className="overflow-hidden rounded-[1.5rem] bg-white">
                <Image
                  src="/why-choose.webp"
                  alt="Why Choose Monfort Kitchens"
                  width={620}
                  height={620}
                  className="h-auto w-full object-contain transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
