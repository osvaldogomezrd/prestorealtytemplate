const areas = [
  "Las Vegas", "Henderson", "Summerlin", "North Las Vegas",
  "Boulder City", "Enterprise", "Spring Valley", "Sunrise Manor",
  "Whitney", "Winchester", "Paradise", "Green Valley",
];

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            Service Area
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-2 mb-4">
            Las Vegas Cash Home Buyers
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We buy houses throughout Clark County and all surrounding areas of Las Vegas, Nevada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden shadow-md bg-gray-100 h-80 flex items-center justify-center relative">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)",
              }}
            />
            <div className="relative text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-[#1a2744] font-bold text-lg">Clark County, NV</p>
              <p className="text-blue-600 text-sm mt-1">Interactive map coming soon</p>
            </div>
          </div>

          {/* Areas list */}
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We purchase homes throughout the entire Las Vegas metropolitan area. Whether you&apos;re in
              a luxury neighborhood, a starter-home community, or anywhere in between — we want to
              make you a fair cash offer.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {areas.map((a, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 font-medium"
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full shrink-0" />
                  {a}
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              See If We Buy in Your Area
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
