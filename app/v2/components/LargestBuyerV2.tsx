import { Users, Home, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Home, value: "500+", label: "Homes Purchased" },
  { icon: Users, value: "1,200+", label: "Happy Sellers" },
  { icon: Award, value: "10+", label: "Years in Business" },
  { icon: TrendingUp, value: "$80M+", label: "Paid to Homeowners" },
];

export default function LargestBuyerV2() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-[40px] font-normal mt-2 mb-6" style={{ color: "rgb(47, 47, 47)" }}>
              Presto Realty — Las Vegas&apos; Most Trusted Cash Home Buyers
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              For over a decade, Presto Realty has been the most trusted home buyer in the Las Vegas
              area. We specialize in buying homes in any condition — whether you&apos;re facing
              foreclosure, going through a divorce, dealing with an inherited property, or simply
              need to sell fast.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              The Presto Realty team of real estate professionals is committed to making your
              selling experience stress-free. We handle all the paperwork, cover closing costs,
              and work on your timeline — not ours.
            </p>
            <a
              href="#contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
            >
              Learn More About Presto Realty
            </a>
          </div>

          {/* Right stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-green-600" />
                  </div>
                  <div className="text-3xl font-extrabold mb-1" style={{ color: "rgb(47, 47, 47)" }}>{s.value}</div>
                  <div className="text-gray-500 text-sm">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
