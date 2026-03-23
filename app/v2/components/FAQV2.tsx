"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do you determine the offer price for my home?",
    a: "We evaluate your home based on its current condition, comparable sales in your neighborhood, and the current Las Vegas real estate market. We aim to make the fairest possible offer while accounting for any repairs or updates needed.",
  },
  {
    q: "How fast can you really close?",
    a: "In most cases, we can close in as little as 7 days. If you need more time, we can also accommodate longer timelines — you choose the closing date that works best for you.",
  },
  {
    q: "Do I need to make any repairs before selling?",
    a: "Absolutely not. We buy homes in any condition — damaged, outdated, or requiring major repairs. You don't need to clean, paint, or fix anything. Sell it exactly as it is.",
  },
  {
    q: "Are there any fees or commissions?",
    a: "None. Unlike traditional real estate agents who charge 5–6% commission, we charge zero fees. We also cover all typical closing costs, so the offer we make is what you walk away with.",
  },
  {
    q: "What types of properties do you buy?",
    a: "We buy single-family homes, condos, townhomes, duplexes, and multi-family properties throughout the Las Vegas area, in any condition or situation.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Yes, completely. Your personal information and the details of our transaction are kept strictly confidential. We never share your information with third parties.",
  },
  {
    q: "What if I'm behind on my mortgage payments?",
    a: "We specialize in helping homeowners in difficult financial situations, including those behind on payments or facing foreclosure. The sooner you contact us, the more options we can offer.",
  },
  {
    q: "Do I have to accept the offer?",
    a: "Never. Our offer is completely no-obligation. You can review it, think it over, and decline if it doesn't work for you. There's no pressure and no commitment until you sign.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-150"
      >
        <span className="font-semibold text-sm pr-4" style={{ color: "rgb(47, 47, 47)" }}>{q}</span>
        <ChevronDown
          size={18}
          className={`text-gray-400 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQV2() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-[40px] font-normal mt-2 mb-4" style={{ color: "rgb(47, 47, 47)" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Have questions? We have answers. If you don&apos;t see your question here, feel free to
            call or fill out our form.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
