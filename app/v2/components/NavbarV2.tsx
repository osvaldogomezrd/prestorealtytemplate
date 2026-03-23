"use client";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const DARK = "rgb(47, 47, 47)";

export default function NavbarV2() {
  const [open, setOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  const otherLinks = ["About Us", "How It Works", "Testimonials", "FAQ", "Contact"];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <span className="font-bold text-xl" style={{ color: DARK }}>
              Presto<span className="text-green-600">Realty</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Home dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHomeDropdownOpen(true)}
              onMouseLeave={() => setHomeDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-150 hover:text-green-600"
                style={{ color: DARK }}
                onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
                aria-haspopup="true"
                aria-expanded={homeDropdownOpen}
              >
                Home
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${homeDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {homeDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-36 bg-white border border-gray-100 rounded-md shadow-lg py-1 z-50">
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm transition-colors duration-150 hover:text-green-600 hover:bg-gray-50"
                    style={{ color: DARK }}
                    onClick={() => setHomeDropdownOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="/v2"
                    className="block px-4 py-2 text-sm font-medium text-green-600 hover:bg-gray-50 transition-colors duration-150"
                    onClick={() => setHomeDropdownOpen(false)}
                  >
                    Home v2
                  </a>
                </div>
              )}
            </div>

            {otherLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                className="text-sm font-medium transition-colors duration-150 hover:text-green-600"
                style={{ color: DARK }}
              >
                {l}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+17025550000"
              className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-green-600"
              style={{ color: DARK }}
            >
              <Phone size={16} className="text-green-600" />
              (702) 555-0000
            </a>
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
            >
              Get a Cash Offer
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            style={{ color: DARK }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2">
          <a
            href="/"
            className="block py-2 text-sm font-medium border-b border-gray-100 transition-colors hover:text-green-600"
            style={{ color: DARK }}
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="/v2"
            className="block py-2 text-sm font-medium border-b border-gray-100 pl-4 text-green-600"
            onClick={() => setOpen(false)}
          >
            Home v2
          </a>
          {otherLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              className="block py-2 text-sm font-medium border-b border-gray-100 transition-colors hover:text-green-600"
              style={{ color: DARK }}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 block bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-full font-semibold transition-colors duration-200"
            onClick={() => setOpen(false)}
          >
            Get a Cash Offer
          </a>
        </div>
      )}
    </header>
  );
}
