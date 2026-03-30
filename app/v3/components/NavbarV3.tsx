"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function NavbarV3() {
  const [open, setOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  const homeLinks = [
    { href: "/", label: "Home" },
    { href: "/v2", label: "Home v2" },
    { href: "/v3", label: "Home v3" },
  ];
  const otherLinks = ["About Us", "How It Works", "Testimonials", "FAQ", "Contact"];

  return (
    <header className="sticky top-0 z-50">
      <div className="w-full border-y border-[rgba(84,84,84,0.25)] bg-[#203f30] text-white">
        <div className="mx-auto flex w-full max-w-[1440px] items-center px-4 py-3 sm:px-6 md:px-8 lg:px-16">
          <div className="flex w-full flex-col gap-1 text-sm leading-6 sm:flex-row sm:items-center sm:justify-between sm:text-base">
            <p className="font-semibold">Texas&apos;s Trusted Home Buyer Since 2018</p>
            <a
              href="tel:+17135744843"
              className="whitespace-nowrap text-white transition-opacity duration-150 hover:opacity-80"
            >
              Call Us At (713 5744843)
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-white/20 bg-[#537f96]/80 backdrop-blur-sm">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="flex h-[85px] items-center justify-between gap-6">
            <div className="flex items-center">
              <span className="text-[27px] font-medium text-white">
                Presto Realty
              </span>
            </div>

            <nav className="hidden items-center gap-8 lg:flex">
              <div
                className="relative"
                onMouseEnter={() => setHomeDropdownOpen(true)}
                onMouseLeave={() => setHomeDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-[16px] font-normal text-white transition-opacity duration-150 hover:opacity-80"
                  onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
                  aria-haspopup="true"
                  aria-expanded={homeDropdownOpen}
                >
                  Home
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${homeDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {homeDropdownOpen && (
                  <div className="absolute left-0 top-full z-50 w-40 pt-3">
                    <div className="rounded-xl border border-white/15 bg-[#335f77]/95 py-2 shadow-lg shadow-black/20">
                      {homeLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-4 py-2 text-sm transition-colors duration-150 hover:bg-white/10 hover:text-white ${
                            link.href === "/v3"
                              ? "bg-white/10 text-white"
                              : "text-white/70"
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
                  className={`text-[16px] leading-6 text-white transition-opacity duration-150 hover:opacity-80 ${
                    l === "Testimonials" || l === "FAQ" || l === "Contact" ? "font-semibold" : "font-normal"
                  }`}
                >
                  {l}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                className="flex h-[50px] min-w-[173px] items-center justify-center rounded-full bg-[#dbfb1e] px-5 text-base font-medium text-[#0a0915] transition-colors duration-200 hover:bg-[#c7eb00]"
              >
                Button
              </a>
            </div>

            <button
              className="text-white lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-white/15 bg-[#335f77]/95 px-5 pb-5 pt-3 lg:hidden">
            {homeLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block border-b border-white/15 py-3 text-sm font-medium hover:text-white ${
                  link.href === "/v3"
                    ? "text-white"
                    : index === 0
                      ? "text-white/70"
                      : "pl-4 text-white/70"
                }`}
                onClick={() => {
                  setHomeDropdownOpen(false);
                  setOpen(false);
                }}
              >
                {link.label}
              </Link>
            ))}
            {otherLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                className="block border-b border-white/15 py-3 text-sm font-medium text-white/80 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-5 flex h-[50px] items-center justify-center rounded-full bg-[#dbfb1e] text-center text-base font-medium text-[#0a0915]"
              onClick={() => setOpen(false)}
            >
              Button
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
