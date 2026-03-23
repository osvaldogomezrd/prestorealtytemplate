"use client";
import { Play } from "lucide-react";
import { useState } from "react";

export default function VideoSectionV2() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            See How It Works
          </span>
          <h2 className="text-[40px] font-normal mt-2 mb-4" style={{ color: "rgb(47, 47, 47)" }}>
            Watch How Presto Realty Works
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            See exactly how Presto Realty helps Las Vegas homeowners sell fast — no stress,
            no repairs, no surprises.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-[#1a2744]">
            {!playing ? (
              <>
                {/* Thumbnail */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #1a2744 0%, #243260 60%, #1a3a5c 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <button
                    onClick={() => setPlaying(true)}
                    className="w-20 h-20 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 mb-6"
                    aria-label="Play video"
                  >
                    <Play size={32} className="text-white ml-1" fill="white" />
                  </button>
                  <p className="text-white font-semibold text-lg">Watch How Presto Realty Works</p>
                  <p className="text-gray-400 text-sm mt-1">2 min overview</p>
                </div>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="How Presto Realty Buys Houses"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
