import { Star, Quote } from "lucide-react";

const DARK = "rgb(47, 47, 47)";

const testimonials = [
  {
    name: "Maria G.",
    location: "Summerlin, NV",
    rating: 5,
    text: "I needed to sell quickly after my divorce. Presto Realty made a fair offer and we closed in just 10 days. No hassles, no repairs needed. Highly recommend!",
    initials: "MG",
  },
  {
    name: "Robert T.",
    location: "Henderson, NV",
    rating: 5,
    text: "I was facing foreclosure and didn't know what to do. The Presto Realty team stepped in, explained everything clearly, and helped me avoid losing my home. Real lifesavers.",
    initials: "RT",
  },
  {
    name: "Sandra L.",
    location: "North Las Vegas, NV",
    rating: 5,
    text: "Inherited a property that needed tons of work. Instead of spending months on repairs, Presto Realty gave me a cash offer the same day. The process was so smooth!",
    initials: "SL",
  },
  {
    name: "James K.",
    location: "Las Vegas, NV",
    rating: 5,
    text: "Professional, fast, and honest. Presto Realty's offer was fair and there were no hidden fees. I closed in 8 days and walked away stress-free.",
    initials: "JK",
  },
];

export default function HappySellersV2() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-[40px] font-normal mt-2 mb-4" style={{ color: DARK }}>
            Happy Sellers
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="font-semibold ml-1" style={{ color: DARK }}>4.9 out of 5</span>
          </div>
          <p className="text-gray-500 max-w-xl mx-auto">
            Don&apos;t just take our word for it — hear from hundreds of homeowners Presto Realty
            has helped across Las Vegas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 flex flex-col"
            >
              <Quote size={28} className="text-green-200 mb-4" />
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: DARK }}>{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
