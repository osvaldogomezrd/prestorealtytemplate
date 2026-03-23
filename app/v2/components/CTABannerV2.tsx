import { Phone } from "lucide-react";

export default function CTABannerV2() {
  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[40px] font-normal text-white mb-4">
          Ready to Sell?
        </h2>
        <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
          Get a no-obligation cash offer from Presto Realty today. No repairs, no fees, no waiting.
          Close on your timeline.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-white text-green-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-full text-lg transition-colors duration-200 shadow-lg"
          >
            Get My Cash Offer
          </a>
          <a
            href="tel:+17025550000"
            className="flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-colors duration-200"
          >
            <Phone size={20} />
            (702) 555-0000
          </a>
        </div>
      </div>
    </section>
  );
}
