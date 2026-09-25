
"use client";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "a2be3110-9cf8-494a-ba32-8f3a28caa0f4",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="overflow-hidden bg-white">
      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden bg-[#F7FAF9] py-16 sm:py-20 lg:py-24"
      >
        {/* =====================================================
            BACKGROUND DECORATION
        ====================================================== */}

        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#34acb1]/10 blur-[100px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#34acb1]/10 blur-[110px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#34acb1]/5" />

        <div className="relative mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-12">
          {/* =====================================================
              HEADER
          ====================================================== */}

          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#34acb1]" />

              <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#258F94] sm:text-xs sm:tracking-[4px]">
                Contact Us
              </span>

              <span className="h-px w-10 bg-[#34acb1]" />
            </div>

            <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#101718] sm:text-4xl lg:text-5xl">
              Let&apos;s Create Your
              <span className="block text-[#34acb1]">
                Perfect Kitchen.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#66716D] sm:text-base sm:leading-8 lg:text-lg">
              Have a question about our kitchen sinks or looking for the right
              solution for your project? Our team is here to help you make the
              right choice.
            </p>
          </Reveal>

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}

          <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:mt-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
            {/* =================================================
                LEFT — PREMIUM CONTACT PANEL
            ================================================== */}

            <Reveal direction="left" className="min-w-0">
              <div className="relative h-full overflow-hidden rounded-3xl border border-[#DDE9E5] bg-white p-5 shadow-[0_20px_70px_rgba(15,40,35,0.06)] sm:rounded-[32px] sm:p-8 lg:p-10">
                {/* Decorative circle */}

                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[30px] border-[#34acb1]/5" />

                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#34acb1]/5" />

                <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#34acb1]/5 blur-2xl" />

                <div className="relative z-10">
                  {/* Label */}

                  <div className="inline-flex items-center gap-2 rounded-full border border-[#34acb1]/20 bg-[#EAF7F6] px-4 py-2">
                    <Sparkles
                      size={14}
                      className="text-[#258F94]"
                    />

                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#258F94]">
                      Get In Touch
                    </span>
                  </div>

                  <h2 className="mt-6 max-w-sm text-3xl font-semibold leading-[1.15] tracking-tight text-[#101718] sm:text-4xl">
                    We&apos;d Love To
                    <span className="block text-[#34acb1]">
                      Hear From You.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#68736F] sm:text-base">
                    Whether you&apos;re a homeowner, interior designer,
                    contractor or business, our team is ready to help you find
                    the right kitchen sink.
                  </p>

                  {/* Accent line */}

                  <div className="my-8 h-px w-full bg-gradient-to-r from-[#34acb1]/30 via-[#34acb1]/10 to-transparent" />

                  {/* =================================================
                      CONTACT DETAILS
                  ================================================== */}

                  <div className="space-y-3">
                    {/* Phone */}

                    <a
                      href="tel:+919871667213"
                      className="group flex items-center gap-3 rounded-2xl border border-[#E5EEEB] bg-[#F8FBFA] p-3.5 sm:gap-4 sm:p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#34acb1]/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(52,172,177,0.10)]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E7F6F5] text-[#258F94] transition-all duration-300 group-hover:bg-[#34acb1] group-hover:text-white">
                        <Phone size={18} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#8A9691]">
                          Call Us
                        </p>

                        <p className="mt-1 text-sm font-semibold break-words text-[#18201F]">
                          +91-9871667213
                        </p>
                      </div>

                      <ArrowRight
                        size={16}
                        className="ml-auto shrink-0 text-[#B8C3BF] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#34acb1]"
                      />
                    </a>

                    {/* Office */}

                    <a
                      href="tel:+918383972282"
                      className="group flex items-center gap-3 rounded-2xl border border-[#E5EEEB] bg-[#F8FBFA] p-3.5 sm:gap-4 sm:p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#34acb1]/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(52,172,177,0.10)]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E7F6F5] text-[#258F94] transition-all duration-300 group-hover:bg-[#34acb1] group-hover:text-white">
                        <Phone size={18} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#8A9691]">
                          Office No.
                        </p>

                        <p className="mt-1 text-sm font-semibold break-words text-[#18201F]">
                          +91-8383972282
                        </p>
                      </div>

                      <ArrowRight
                        size={16}
                        className="ml-auto shrink-0 text-[#B8C3BF] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#34acb1]"
                      />
                    </a>

                    {/* Email */}

                    <a
                      href="mailto:harshkansal280@gmail.com"
                      className="group flex items-center gap-3 rounded-2xl border border-[#E5EEEB] bg-[#F8FBFA] p-3.5 sm:gap-4 sm:p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#34acb1]/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(52,172,177,0.10)]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E7F6F5] text-[#258F94] transition-all duration-300 group-hover:bg-[#34acb1] group-hover:text-white">
                        <Mail size={18} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#8A9691]">
                          Email Us
                        </p>

                        <p className="mt-1 truncate text-sm font-semibold text-[#18201F]">
                          harshkansal280@gmail.com
                        </p>
                      </div>

                      <ArrowRight
                        size={16}
                        className="ml-auto shrink-0 text-[#B8C3BF] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#34acb1]"
                      />
                    </a>

                    {/* Location */}

                    <div className="group flex items-center gap-3 rounded-2xl border border-[#E5EEEB] bg-[#F8FBFA] p-3.5 sm:gap-4 sm:p-4 transition-all duration-300 hover:border-[#34acb1]/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(52,172,177,0.10)]">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E7F6F5] text-[#258F94] transition-all duration-300 group-hover:bg-[#34acb1] group-hover:text-white">
                        <MapPin size={18} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#8A9691]">
                          Visit Us
                        </p>

                        <p className="mt-1 text-sm font-semibold leading-5 text-[#18201F]">
                          G-108, Sector-3, Bawana Industrial Area,
                          Delhi-110039
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      BUSINESS HOURS
                  ================================================== */}

                  <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#10201E] p-4 sm:gap-4 sm:p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#34acb1]/15 text-[#34acb1]">
                      <Clock3 size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Business Hours
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/55">
                        Monday – Saturday
                        <span className="mx-2 text-white/20">•</span>
                        9:00 AM – 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* =================================================
                RIGHT — CONTACT FORM
            ================================================== */}

            <Reveal direction="right" className="min-w-0">
              <div className="relative h-full rounded-3xl border border-[#DDE9E5] bg-white p-5 shadow-[0_20px_70px_rgba(15,40,35,0.07)] sm:rounded-[32px] sm:p-8 lg:p-10">
                {/* Top accent */}

                <div className="absolute left-8 right-8 top-0 h-[3px] rounded-b-full bg-[#34acb1] sm:left-10 sm:right-10" />

                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#258F94]">
                      Send An Enquiry
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#101718] sm:text-3xl">
                      Tell Us What You Need.
                    </h2>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-[#78837F]">
                      Share your requirements with us and our team will get
                      back to you as soon as possible.
                    </p>
                  </div>

                  <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EAF7F6] text-[#258F94] sm:flex">
                    <MessageCircle size={24} />
                  </div>
                </div>

                {/* Form */}

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  {/* Name + Phone */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-[1.2px] text-[#4D5955]"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[#E0E9E6] bg-[#F8FBFA] px-4 py-3.5 text-base sm:text-sm text-[#17201E] outline-none transition-all placeholder:text-[#AAB4B0] focus:border-[#34acb1] focus:bg-white focus:ring-4 focus:ring-[#34acb1]/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-[1.2px] text-[#4D5955]"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[#E0E9E6] bg-[#F8FBFA] px-4 py-3.5 text-base sm:text-sm text-[#17201E] outline-none transition-all placeholder:text-[#AAB4B0] focus:border-[#34acb1] focus:bg-white focus:ring-4 focus:ring-[#34acb1]/10"
                      />
                    </div>
                  </div>

                  {/* Email + Subject */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-[1.2px] text-[#4D5955]"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[#E0E9E6] bg-[#F8FBFA] px-4 py-3.5 text-base sm:text-sm text-[#17201E] outline-none transition-all placeholder:text-[#AAB4B0] focus:border-[#34acb1] focus:bg-white focus:ring-4 focus:ring-[#34acb1]/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-[1.2px] text-[#4D5955]"
                      >
                        Subject
                      </label>

                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full appearance-none rounded-xl border border-[#E0E9E6] bg-[#F8FBFA] px-4 py-3.5 text-base sm:text-sm text-[#17201E] outline-none transition-all focus:border-[#34acb1] focus:bg-white focus:ring-4 focus:ring-[#34acb1]/10"
                      >
                        <option value="">
                          Select enquiry type
                        </option>
                        <option value="product-enquiry">
                          Product Enquiry
                        </option>
                        <option value="bulk-order">
                          Bulk Order
                        </option>
                        <option value="commercial-project">
                          Commercial Project
                        </option>
                        <option value="dealer-enquiry">
                          Dealer Enquiry
                        </option>
                        <option value="other">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[1.2px] text-[#4D5955]"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full resize-none rounded-xl border border-[#E0E9E6] bg-[#F8FBFA] px-4 py-3.5 text-base sm:text-sm leading-6 text-[#17201E] outline-none transition-all placeholder:text-[#AAB4B0] focus:border-[#34acb1] focus:bg-white focus:ring-4 focus:ring-[#34acb1]/10"
                    />
                  </div>

                  {/* Submit */}

                  <div className="flex flex-col gap-4 border-t border-[#EEF2F0] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-[#34acb1]"
                      />

                      <span className="text-xs text-[#7A8581]">
                        We&apos;ll respond to your enquiry shortly.
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#10201E] px-7 py-4 sm:w-auto text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#34acb1] hover:shadow-[0_12px_30px_rgba(52,172,177,0.25)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                    >
                      {status === "sending"
                        ? "Sending..."
                        : "Send Enquiry"}

                      <Send
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>

                  {/* Status */}

                  {status === "success" && (
                    <p className="rounded-xl bg-[#EAF7F6] px-4 py-3 text-sm font-semibold text-[#258F94]">
                      Thank you! Your enquiry has been sent successfully.
                    </p>
                  )}

                  {status === "error" && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                      Something went wrong. Please try again or contact us
                      directly.
                    </p>
                  )}
                </form>
              </div>
            </Reveal>
          </div>

          {/* =====================================================
              QUICK ACTIONS
          ====================================================== */}

          <Reveal className="mt-8 lg:mt-10">
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              <Link
                href="/#products"
                className="group flex items-center gap-4 rounded-2xl border border-[#E1EBE8] bg-white p-4 sm:p-5 shadow-[0_8px_30px_rgba(15,40,35,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#34acb1]/30 hover:shadow-[0_15px_35px_rgba(15,40,35,0.08)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF7F6] text-[#258F94] transition-all group-hover:bg-[#34acb1] group-hover:text-white">
                  <ArrowRight size={18} />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-bold text-[#18201F]">
                    Explore Products
                  </p>

                  <p className="mt-1 text-xs text-[#7C8783]">
                    Find your perfect sink
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  className="shrink-0 text-[#C2CCC8] transition-all group-hover:translate-x-1 group-hover:text-[#34acb1]"
                />
              </Link>

              <Link
                href="/#faq"
                className="group flex items-center gap-4 rounded-2xl border border-[#E1EBE8] bg-white p-4 sm:p-5 shadow-[0_8px_30px_rgba(15,40,35,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#34acb1]/30 hover:shadow-[0_15px_35px_rgba(15,40,35,0.08)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF7F6] text-[#258F94] transition-all group-hover:bg-[#34acb1] group-hover:text-white">
                  <MessageCircle size={18} />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-bold text-[#18201F]">
                    Read FAQs
                  </p>

                  <p className="mt-1 text-xs text-[#7C8783]">
                    Find quick answers
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  className="shrink-0 text-[#C2CCC8] transition-all group-hover:translate-x-1 group-hover:text-[#34acb1]"
                />
              </Link>

              <a
                href="https://wa.me/919871667213"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-[#E1EBE8] bg-white p-4 sm:p-5 shadow-[0_8px_30px_rgba(15,40,35,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#34acb1]/30 hover:shadow-[0_15px_35px_rgba(15,40,35,0.08)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF7F6] text-[#258F94] transition-all group-hover:bg-[#34acb1] group-hover:text-white">
                  <MessageCircle size={18} />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-bold text-[#18201F]">
                    WhatsApp Us
                  </p>

                  <p className="mt-1 text-xs text-[#7C8783]">
                    Quick assistance
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  className="shrink-0 text-[#C2CCC8] transition-all group-hover:translate-x-1 group-hover:text-[#34acb1]"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom divider */}

      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12">
        <div className="h-px flex-1 bg-[#E3EAE7]" />

        <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[3px] text-[#34acb1] sm:text-[10px] sm:tracking-[4px]">
          Monfort Kitchen
        </span>

        <div className="h-px flex-1 bg-[#E3EAE7]" />
      </div>
    </div>
  );
}

