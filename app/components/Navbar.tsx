"use client";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About Us", "How It Works", "Testimonials", "FAQ", "Contact"];

  return (
    <header className="bg-[#1a2744] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-white font-bold text-xl leading-tight">
              We Buy<br />
              <span className="text-red-400 text-sm font-medium">Houses Fast</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-150"
              >
                {l}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+17025550000" className="flex items-center gap-2 text-white text-sm font-semibold">
              <Phone size={16} className="text-red-400" />
              (702) 555-0000
            </a>
            <a
              href="#contact"
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors duration-200"
            >
              Get a Cash Offer
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f1a30] px-4 pb-4 pt-2">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              className="block text-gray-300 hover:text-white py-2 text-sm font-medium border-b border-gray-700"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 block bg-red-600 text-white text-center py-2 rounded-md font-semibold"
            onClick={() => setOpen(false)}
          >
            Get a Cash Offer
          </a>
        </div>
      )}
    </header>
  );
}
