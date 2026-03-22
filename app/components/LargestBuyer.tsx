import { Users, Home, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Home, value: "500+", label: "Homes Purchased" },
  { icon: Users, value: "1,200+", label: "Happy Sellers" },
  { icon: Award, value: "10+", label: "Years in Business" },
  { icon: TrendingUp, value: "$80M+", label: "Paid to Homeowners" },
];

export default function LargestBuyer() {
  return (
    <section className="py-20 bg-[#1a2744]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              We Are the Largest Cash Home Buyers in Las Vegas, Nevada
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              For over a decade, we have been the most trusted home buyers in the Las Vegas area.
              We specialize in buying homes in any condition — whether you&apos;re facing foreclosure,
              going through a divorce, dealing with an inherited property, or simply need to sell fast.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Our team of real estate professionals is committed to making your selling experience
              stress-free. We handle all the paperwork, cover closing costs, and work on your
              timeline — not ours.
            </p>
            <a
              href="#contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Learn More About Us
            </a>
          </div>

          {/* Right stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-red-400" />
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-1">{s.value}</div>
                  <div className="text-gray-400 text-sm">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
