import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const links = {
  company: [
    { label: "About Us", href: "#about-us" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Our Work", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  situations: [
    { label: "Avoid Foreclosure", href: "#" },
    { label: "Inherited Property", href: "#" },
    { label: "Divorce", href: "#" },
    { label: "Relocating", href: "#" },
    { label: "Major Repairs", href: "#" },
  ],
  areas: [
    "Las Vegas", "Henderson", "Summerlin",
    "North Las Vegas", "Boulder City", "Spring Valley",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0f1a30] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-red-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-white font-bold text-xl leading-tight">
                Presto<br />
                <span className="text-red-400 text-sm font-medium">Realty</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Las Vegas&apos; most trusted cash home buyers. Presto Realty buys houses in any
              condition, fast and fair.
            </p>
            <div className="space-y-2">
              <a href="tel:+17025550000" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Phone size={14} className="text-red-400" /> (702) 555-0000
              </a>
              <a href="mailto:info@prestorealty.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Mail size={14} className="text-red-400" /> info@prestorealty.com
              </a>
              <span className="flex items-center gap-2 text-sm">
                <MapPin size={14} className="text-red-400" /> Las Vegas, NV 89101
              </span>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-sm hover:text-white transition-colors duration-150">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Situations */}
          <div>
            <h4 className="text-white font-semibold mb-4">We Help With</h4>
            <ul className="space-y-2">
              {links.situations.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-sm hover:text-white transition-colors duration-150">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {links.areas.map((a, i) => (
                <li key={i}>
                  <span className="text-sm">{a}, NV</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Presto Realty Las Vegas. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs hover:text-white transition-colors">Terms of Service</a>
            <div className="flex items-center gap-3 ml-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
