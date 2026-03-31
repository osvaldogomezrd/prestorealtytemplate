"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import AddressAutocomplete from "../../components/AddressAutocomplete";

export default function HeroV2() {
  const [address, setAddress] = useState("");

  return (
    <section
      id="home"
      className="relative min-h-[700px] flex items-center"
    >
      {/* Background photo */}
      <Image
        src="/hero-house.jpg"
        alt="Beautiful home in Las Vegas"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative max-w-7xl mx-auto px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column — all content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 text-green-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Las Vegas #1 Cash Home Buyers
            </div>

            <h1 className="font-normal text-white leading-tight mb-4" style={{ fontSize: "62px" }}>
              Presto Realty
              <br />
              <span className="text-green-400">Las Vegas</span>
              <br />
              <span className="text-[32px] font-normal text-gray-200">
                Fast, Fair &amp; As-Is
              </span>
            </h1>

            <p className="text-gray-100 text-lg mb-8 max-w-xl">
              Skip the repairs, agent fees, and long waits. Presto Realty gives you a fair cash
              offer on your home in 24 hours — close in as little as 7 days.
            </p>

            {/* Address input + CTA */}
            <div className="bg-white rounded-full shadow-2xl p-2 flex flex-col sm:flex-row gap-2 max-w-xl mb-8">
                <AddressAutocomplete
                  value={address}
                  onChange={setAddress}
                  placeholder="Enter your property address..."
                  showIcon
                  className="h-11 w-full flex-1 rounded-full px-2 py-2 text-sm leading-normal text-gray-700 placeholder-gray-400 outline-none"
                />
              <button
                type="button"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors duration-200 whitespace-nowrap"
              >
                Get My Cash Offer
              </button>
            </div>

            {/* Trust badges */}
            <div className="mb-8">
              <Image
                src="/trust-badges.png"
                alt="Google 4.8 stars & BBB A+ Accredited Business"
                width={280}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-200">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-1 text-white">4.9/5 Rating</span>
              </div>
              <span className="hidden sm:block text-gray-400">•</span>
              <span>No fees or commissions</span>
              <span className="hidden sm:block text-gray-400">•</span>
              <span>Close in 7 days</span>
              <span className="hidden sm:block text-gray-400">•</span>
              <span>500+ homes bought</span>
            </div>
          </div>

          {/* Right column — intentional whitespace */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
