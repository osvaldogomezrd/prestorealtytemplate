import { Check, X } from "lucide-react";

const features = [
  { label: "Fair Cash Offers", us: true, agent: false, other: false },
  { label: "Close in 7–14 Days", us: true, agent: false, other: false },
  { label: "No Repairs Needed", us: true, agent: false, other: true },
  { label: "Zero Agent Fees", us: true, agent: false, other: true },
  { label: "No Showings or Open Houses", us: true, agent: false, other: true },
  { label: "No Contingencies", us: true, agent: false, other: false },
  { label: "Choose Your Close Date", us: true, agent: false, other: false },
  { label: "Handle All Paperwork", us: true, agent: true, other: false },
];

const highlights = [
  { value: "500+", label: "Homes Purchased" },
  { value: "7", label: "Days Avg. Close" },
  { value: "$0", label: "Fees or Commissions" },
  { value: "24h", label: "Offer Turnaround" },
];

export default function WhyChooseUsV2() {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Comparison
          </span>
          <h2 className="text-[40px] font-normal mt-2 mb-4" style={{ color: "rgb(47, 47, 47)" }}>
            Why Choose Us?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            See how selling to us compares to listing with an agent or selling to other buyers.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-extrabold text-green-600 mb-1">{h.value}</div>
              <div className="text-sm text-gray-500">{h.label}</div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
          <table className="w-full min-w-[560px]">
            <thead>
              <tr>
                <th className="bg-gray-50 text-left px-6 py-4 text-gray-600 font-semibold text-sm w-1/2">
                  Feature
                </th>
                <th className="bg-[#1a2744] text-white px-6 py-4 text-sm font-semibold w-1/6 text-center">
                  Us
                </th>
                <th className="bg-gray-50 text-gray-600 px-6 py-4 text-sm font-semibold w-1/6 text-center">
                  Agent
                </th>
                <th className="bg-gray-50 text-gray-600 px-6 py-4 text-sm font-semibold w-1/6 text-center">
                  Other Buyer
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-6 py-4 text-sm text-gray-700 font-medium">{f.label}</td>
                  <td className="px-6 py-4 text-center bg-blue-50/30">
                    {f.us ? (
                      <Check size={18} className="text-green-500 mx-auto" strokeWidth={2.5} />
                    ) : (
                      <X size={18} className="text-red-400 mx-auto" strokeWidth={2.5} />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {f.agent ? (
                      <Check size={18} className="text-green-500 mx-auto" strokeWidth={2.5} />
                    ) : (
                      <X size={18} className="text-red-400 mx-auto" strokeWidth={2.5} />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {f.other ? (
                      <Check size={18} className="text-green-500 mx-auto" strokeWidth={2.5} />
                    ) : (
                      <X size={18} className="text-red-400 mx-auto" strokeWidth={2.5} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-4 rounded-full transition-colors duration-200 shadow-md"
          >
            Get My Free Cash Offer
          </a>
        </div>
      </div>
    </section>
  );
}
