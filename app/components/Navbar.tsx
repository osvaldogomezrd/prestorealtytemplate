"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  const homeLinks = [
    { href: "/", label: "Home v1" },
    { href: "/v2", label: "Home v2" },
    { href: "/v3", label: "Home v3" },
  ];
  const otherLinks = ["About Us", "How It Works", "Testimonials", "FAQ", "Contact"];

  return (
    <header className="bg-[#1a2744] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">
              Presto<span className="text-red-400">Realty</span>
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
                className="flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium transition-colors duration-150"
                onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
                aria-haspopup="true"
                aria-expanded={homeDropdownOpen}
              >
                Home v1
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${homeDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {homeDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-36 z-50">
                  <div className="bg-[#0f1a30] rounded-md shadow-lg py-1">
                    {homeLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-2 text-sm transition-colors duration-150 hover:text-white hover:bg-[#1a2744] ${
                          link.href === "/"
                            ? "bg-[#1a2744] text-white"
                            : "text-gray-300"
                        }`}
                        onClick={() => setHomeDropdownOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {otherLinks.map((l) => (
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
          {homeLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 text-sm font-medium border-b border-gray-700 hover:text-white ${
                index === 0 ? "text-white" : "text-gray-300 pl-4"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {otherLinks.map((l) => (
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
