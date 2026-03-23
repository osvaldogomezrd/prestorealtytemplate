import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const DARK = "rgb(47, 47, 47)";

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

export default function FooterV2() {
  return (
    <footer className="bg-white border-t border-gray-100" style={{ color: DARK }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="font-bold text-xl" style={{ color: DARK }}>
                Presto<span className="text-green-600">Realty</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: DARK }}>
              Las Vegas&apos; most trusted cash home buyers. Presto Realty buys houses in any
              condition, fast and fair.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+17025550000"
                className="flex items-center gap-2 text-sm transition-colors hover:text-green-600"
                style={{ color: DARK }}
              >
                <Phone size={14} className="text-green-600" /> (702) 555-0000
              </a>
              <a
                href="mailto:info@prestorealty.com"
                className="flex items-center gap-2 text-sm transition-colors hover:text-green-600"
                style={{ color: DARK }}
              >
                <Mail size={14} className="text-green-600" /> info@prestorealty.com
              </a>
              <span className="flex items-center gap-2 text-sm" style={{ color: DARK }}>
                <MapPin size={14} className="text-green-600" /> Las Vegas, NV 89101
              </span>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: DARK }}>
              Company
            </h4>
            <ul className="space-y-2">
              {links.company.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-150 hover:text-green-600"
                    style={{ color: DARK }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Situations */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: DARK }}>
              We Help With
            </h4>
            <ul className="space-y-2">
              {links.situations.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-150 hover:text-green-600"
                    style={{ color: DARK }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: DARK }}>
              Service Areas
            </h4>
            <ul className="space-y-2">
              {links.areas.map((a, i) => (
                <li key={i}>
                  <span className="text-sm" style={{ color: DARK }}>{a}, NV</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: DARK }}>
            © {new Date().getFullYear()} Presto Realty Las Vegas. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs transition-colors hover:text-green-600"
              style={{ color: DARK }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs transition-colors hover:text-green-600"
              style={{ color: DARK }}
            >
              Terms of Service
            </a>
            <div className="flex items-center gap-3 ml-4">
              <a
                href="#"
                className="transition-colors hover:text-green-600"
                style={{ color: DARK }}
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="transition-colors hover:text-green-600"
                style={{ color: DARK }}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="transition-colors hover:text-green-600"
                style={{ color: DARK }}
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
