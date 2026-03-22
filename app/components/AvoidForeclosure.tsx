import { AlertTriangle, CheckCircle, Phone } from "lucide-react";

const risks = [
  "Damage to your credit score for 7+ years",
  "Potential deficiency judgment from lenders",
  "Stress and uncertainty for your family",
  "Loss of all equity you've built",
  "Public record that affects future housing",
  "Possible IRS tax liability",
];

const solutions = [
  "Sell before foreclosure date and protect your credit",
  "Walk away with cash instead of losing everything",
  "Close in 7–14 days — faster than any foreclosure timeline",
  "No repairs, no fees, no commissions",
  "We handle all paperwork and lender negotiations",
  "Completely confidential and stress-free process",
];

export default function AvoidForeclosure() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            We Can Help
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-2 mb-4">
            Avoid Foreclosure and Stressful Situations
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Foreclosure can have devastating consequences. Let us help you avoid it with a fast
            cash sale on your terms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Risks */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertTriangle size={20} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2744]">Risks of Foreclosure</h3>
            </div>
            <ul className="space-y-3">
              {risks.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-500 text-xs font-bold">✕</span>
                  </div>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Solutions */}
          <div className="bg-[#1a2744] rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                <CheckCircle size={20} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Solution for You</h3>
            </div>
            <ul className="space-y-3 mb-8">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle size={16} className="text-green-400 shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-200"
              >
                Get Help Now
              </a>
              <a
                href="tel:+17025550000"
                className="flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 py-3 px-6 rounded-lg transition-colors duration-200 text-sm"
              >
                <Phone size={16} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
