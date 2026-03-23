const steps = [
  {
    number: "1",
    title: "Submit Your Info",
    description:
      "Fill out our short form or give us a call. Tell us a bit about your property — condition, location, and timeline.",
  },
  {
    number: "2",
    title: "Get Your Cash Offer",
    description:
      "We'll evaluate your home and present a fair, no-obligation cash offer within 24 hours. No repairs needed.",
  },
  {
    number: "3",
    title: "Close & Get Paid",
    description:
      "Choose your closing date. We handle all the paperwork. You walk away with cash in as little as 7 days.",
  },
];

export default function StepperV2() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              Simple Process
            </span>
            <h2 className="text-[40px] font-normal mt-2 mb-4" style={{ color: "rgb(47, 47, 47)" }}>
              Simple 3-Step Process
            </h2>
            <p className="text-gray-500 text-lg">
              Selling your house has never been easier. No agents, no repairs, no fees — just a
              fast, fair cash offer.
            </p>
            <a
              href="#contact"
              className="rounded-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 inline-block mt-8 font-semibold transition-colors duration-200"
            >
              Start the Process Today
            </a>
          </div>

          {/* Right column — steps */}
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.number}>
                <div className="flex items-start gap-4">
                  {/* Step number circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a2744] text-white font-bold flex items-center justify-center text-sm">
                    {step.number}
                  </div>
                  {/* Step content */}
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: "rgb(47, 47, 47)" }}>{step.title}</h3>
                    <p className="text-gray-500 text-base mt-1">{step.description}</p>
                  </div>
                </div>
                {/* Vertical connector line between steps */}
                {i < steps.length - 1 && (
                  <div className="ml-6 w-0.5 h-8 bg-gray-200 mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
