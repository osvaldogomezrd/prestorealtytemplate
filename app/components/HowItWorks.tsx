import { ClipboardList, DollarSign, Key } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Submit Your Info",
    description:
      "Fill out our short form or give us a call. Tell us a bit about your property — condition, location, and timeline.",
  },
  {
    icon: DollarSign,
    step: "02",
    title: "Get Your Cash Offer",
    description:
      "We'll evaluate your home and present a fair, no-obligation cash offer within 24 hours. No repairs needed.",
  },
  {
    icon: Key,
    step: "03",
    title: "Close & Get Paid",
    description:
      "Choose your closing date. We handle all the paperwork. You walk away with cash in as little as 7 days.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-2 mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Selling your house has never been easier. No agents, no repairs, no fees — just a fast,
            fair cash offer.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="relative text-center group">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-red-50 border-2 border-red-100 group-hover:border-red-400 group-hover:bg-red-600 transition-all duration-300 flex items-center justify-center mb-4">
                    <Icon
                      size={32}
                      className="text-red-500 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2">
                    Step {s.step}
                  </span>
                  <h3 className="text-xl font-bold text-[#1a2744] mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Start the Process Today
          </a>
        </div>
      </div>
    </section>
  );
}
