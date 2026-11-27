"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send, Sparkles, X } from "lucide-react";
import { submitEnquiry } from "@/lib/web3forms";

// sessionStorage lives as long as the browser tab: it survives page
// navigations and reloads, and is cleared when the tab is closed. So the
// popup shows once per tab, and again only after the tab is reopened.
const STORAGE_KEY = "monfort_enquiry_popup_shown";
const DELAY_MS = 5000;

const emptyForm = { name: "", phone: "", email: "", message: "" };

const inputClass =
  "w-full rounded-xl border border-[#E0E9E6] bg-[#F8FBFA] px-4 py-3 text-base sm:text-sm text-[#17201E] outline-none transition-all placeholder:text-[#AAB4B0] focus:border-[#34acb1] focus:bg-white focus:ring-4 focus:ring-[#34acb1]/10";

const labelClass =
  "mb-1.5 block text-[10px] font-bold uppercase tracking-[1.2px] text-[#4D5955]";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState("idle");

  // Show once per tab, 5 seconds after the first page load.
  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // Storage blocked (private mode etc.) — still show once per page load.
    }
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {}
      setOpen(true);
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  // Close on Escape and lock background scroll while open.
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const success = await submitEnquiry({
        ...formData,
        subject: "New Enquiry from Website Popup",
        from_name: "Monfort Website - Popup Form",
        page_url: window.location.href,
      });

      if (success) {
        setStatus("success");
        setFormData(emptyForm);
        setTimeout(() => setOpen(false), 2500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="enquiry-popup"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1716]/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-popup-title"
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.25)] sm:p-8"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute left-8 right-8 top-0 h-[3px] rounded-b-full bg-[#34acb1]" />

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#F1F6F5] text-[#4D5955] transition-colors hover:bg-[#34acb1] hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#34acb1]/20 bg-[#EAF7F6] px-3.5 py-1.5">
              <Sparkles size={13} className="text-[#258F94]" />
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#258F94]">
                Get A Free Quote
              </span>
            </div>

            <h2
              id="enquiry-popup-title"
              className="mt-4 pr-8 text-2xl font-semibold leading-tight tracking-tight text-[#101718] sm:text-3xl"
            >
              Looking For The
              <span className="text-[#34acb1]"> Perfect Sink?</span>
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#68736F]">
              Share your details and our team will get back to you shortly.
            </p>

            {status === "success" ? (
              <div className="mt-6 flex flex-col items-center rounded-2xl bg-[#EAF7F6] px-5 py-8 text-center">
                <CheckCircle2 size={40} className="text-[#34acb1]" />
                <p className="mt-3 text-base font-semibold text-[#18201F]">
                  Thank you!
                </p>
                <p className="mt-1 text-sm text-[#5E6A66]">
                  Your enquiry has been sent successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="popup-name" className={labelClass}>
                    Your Name
                  </label>
                  <input
                    id="popup-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="popup-phone" className={labelClass}>
                      Phone Number
                    </label>
                    <input
                      id="popup-phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="popup-email" className={labelClass}>
                      Email Address
                    </label>
                    <input
                      id="popup-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="popup-message" className={labelClass}>
                    Your Requirement
                  </label>
                  <textarea
                    id="popup-message"
                    name="message"
                    rows={3}
                    placeholder="Tell us what you are looking for..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`${inputClass} resize-none leading-6`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#10201E] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#34acb1] hover:shadow-[0_12px_30px_rgba(52,172,177,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Enquiry"}
                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                {status === "error" && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                    Something went wrong. Please try again or contact us
                    directly.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
