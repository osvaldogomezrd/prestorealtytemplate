const properties = [
  {
    address: "2847 Desert Rose Ln",
    area: "Summerlin, NV",
    status: "Sold",
    price: "$385,000",
    gradient: "from-blue-900 to-blue-700",
  },
  {
    address: "5102 Flamingo Rd",
    area: "Las Vegas, NV",
    status: "Sold",
    price: "$295,000",
    gradient: "from-slate-800 to-slate-600",
  },
  {
    address: "1429 Sunrise Valley",
    area: "Henderson, NV",
    status: "Sold",
    price: "$420,000",
    gradient: "from-zinc-800 to-zinc-600",
  },
  {
    address: "3310 Nellis Blvd",
    area: "North Las Vegas, NV",
    status: "Sold",
    price: "$265,000",
    gradient: "from-stone-800 to-stone-600",
  },
];

export default function OurWorkV2() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-[40px] font-normal mt-2 mb-4" style={{ color: "rgb(47, 47, 47)" }}>
            Our Recent Purchases
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A sample of homes we&apos;ve recently purchased across the Las Vegas valley.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Property image placeholder */}
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient} flex items-end`}>
                {/* House icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <svg viewBox="0 0 100 80" className="w-32 h-32 text-white fill-white">
                    <polygon points="50,5 95,40 85,40 85,75 60,75 60,55 40,55 40,75 15,75 15,40 5,40" />
                  </svg>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {p.status}
                  </span>
                </div>
                <div className="relative p-4 w-full bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-bold text-lg">{p.price}</p>
                </div>
              </div>
              <div className="bg-white p-4">
                <p className="font-semibold text-sm" style={{ color: "rgb(47, 47, 47)" }}>{p.address}</p>
                <p className="text-gray-400 text-xs mt-1">{p.area}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            We purchase homes throughout all of Clark County, Nevada
          </p>
        </div>
      </div>
    </section>
  );
}
