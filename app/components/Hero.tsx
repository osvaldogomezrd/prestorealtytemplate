"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import AddressAutocomplete from "./AddressAutocomplete";

export default function Hero() {
  const [address, setAddress] = useState("");

  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center"
      style={{
        background: "linear-gradient(135deg, #1a2744 0%, #243260 50%, #1a3a5c 100%)",
      }}
    >
      {/* Background overlay pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            Las Vegas #1 Cash Home Buyers
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Presto Realty{" "}
            <span className="text-red-400">Las Vegas</span>
            <br />
            <span className="text-3xl md:text-4xl font-semibold text-gray-300">
              Fast, Fair & As-Is
            </span>
          </h1>

          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Skip the repairs, agent fees, and long waits. Presto Realty gives you a fair cash
            offer on your home in 24 hours — close in as little as 7 days.
          </p>

          {/* Search form */}
          <div className="bg-white rounded-xl shadow-2xl p-2 flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto">
              <AddressAutocomplete
                value={address}
                onChange={setAddress}
                placeholder="Enter your property address..."
                showIcon
                className="h-11 w-full flex-1 px-2 py-2 text-sm leading-normal text-gray-700 placeholder-gray-400 outline-none"
              />
            <a
              href="#contact"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg text-sm transition-colors duration-200 text-center whitespace-nowrap"
            >
              Get My Cash Offer
            </a>
          </div>

          {/* Trust badges — Google & BBB */}
          <div className="mt-4 flex justify-center max-w-2xl mx-auto">
            <Image
              src="/trust-badges.png"
              alt="Google 4.8 stars & BBB A+ Accredited Business"
              width={280}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
              <span className="ml-1 text-gray-300">4.9/5 Rating</span>
            </div>
            <span className="hidden sm:block text-gray-600">•</span>
            <span>No fees or commissions</span>
            <span className="hidden sm:block text-gray-600">•</span>
            <span>Close in 7 days</span>
            <span className="hidden sm:block text-gray-600">•</span>
            <span>500+ homes bought</span>
          </div>
        </div>
      </div>
    </section>
  );
}
