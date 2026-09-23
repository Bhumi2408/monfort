import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function PremiumMontfortAccessoriesPage() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-gradient-to-br from-[#0f2431] via-[#142A3D] to-[#173751] py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#30ADB2]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#258F94]/15 blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="group mb-10 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm transition-all duration-300 group-hover:-translate-x-1 group-hover:border-white/30">
            <ArrowLeft className="h-4 w-4" />
          </span>
          Back to Products
        </Link>

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#67cdd0]/60" />
            <span className="relative h-2 w-2 rounded-full bg-[#67cdd0]" />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#67cdd0]">
            Coming Soon
          </span>
        </div>

        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Premium Montfort <span className="text-[#67cdd0]">Accessories</span>
        </h1>

        <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#258F94] to-[#67cdd0]" />

        <p className="mx-auto mt-6 max-w-md text-base leading-7 text-white/65">
          Our Raykar Brass and premium accessory range is on its way.
          Check back soon, or reach out to our team for early details.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#258F94] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#258F94]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#30ADB2] hover:shadow-xl"
          >
            <Sparkles className="h-[18px] w-[18px]" />
            Get Notified
          </Link>
        </div>
      </div>
    </section>
  );
}
