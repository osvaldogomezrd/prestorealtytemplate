import Link from "next/link";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const navigationLinks = ["Company", "Properties", "Services", "Contact Us"];
const resourceLinks = ["Agent", "Blog", "How it works", "License"];

export default function FooterV3() {
  return (
    <footer className="rounded-t-[24px] bg-[#f7f6f4] px-5 pb-6 pt-[120px] sm:px-8 lg:px-[60px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-16 lg:gap-20">
          <div className="flex flex-col gap-14 lg:flex-row lg:justify-between">
            <div className="max-w-[356px]">
              <p className={`${geist.className} text-[27px] font-medium leading-[1.5] text-black`}>
                Company Name
              </p>

              <div className="mt-10 space-y-0 text-[18px] leading-[1.8] tracking-[-0.02em] text-[#0a0915]">
                <p>(000) 000-0000</p>
                <p>hello@company.com</p>
              </div>

              <div className="mt-12 flex gap-2">
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-[rgba(82,82,90,0.3)] text-[#0a0915] transition-colors duration-200 hover:bg-white"
                >
                  <Facebook size={22} strokeWidth={1.9} />
                </a>
                <a
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-[rgba(82,82,90,0.3)] text-[#0a0915] transition-colors duration-200 hover:bg-white"
                >
                  <Linkedin size={22} strokeWidth={1.9} />
                </a>
                <a
                  href="https://youtube.com"
                  aria-label="YouTube"
                  className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-[rgba(82,82,90,0.3)] text-[#0a0915] transition-colors duration-200 hover:bg-white"
                >
                  <Youtube size={22} strokeWidth={1.9} />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-10 md:flex-row md:gap-16 lg:gap-[90px]">
              <div className="w-[91px]">
                <h3 className={`${geist.className} text-[18px] font-medium leading-[1.8] text-[#0a0915]`}>
                  Navigation
                </h3>
                <div className="mt-4 flex flex-col gap-[8px] text-[16px] leading-[1.8] tracking-[-0.025em] text-[#52525a]">
                  {navigationLinks.map((link) => (
                    <Link key={link} href="#contact" className="transition-opacity duration-200 hover:opacity-70">
                      {link}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="w-[91px]">
                <h3 className={`${geist.className} text-[18px] font-medium leading-[1.8] text-[#0a0915]`}>
                  Resources
                </h3>
                <div className="mt-4 flex flex-col gap-[8px] text-[16px] leading-[1.8] tracking-[-0.025em] text-[#52525a]">
                  {resourceLinks.map((link) => (
                    <Link key={link} href="#contact" className="transition-opacity duration-200 hover:opacity-70">
                      {link}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="max-w-[241px]">
                <h3 className={`${geist.className} text-[18px] font-medium leading-[1.8] text-[#0a0915]`}>
                  Office Location
                </h3>
                <div className="mt-[15px] text-[16px] leading-[1.8] tracking-[-0.025em] text-[#52525a]">
                  <p>Office Name</p>
                  <p>123 Main Street, Suite 100</p>
                  <p>City, State 00000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-[rgba(82,82,90,0.1)] pt-[25px] text-[16px] leading-[1.8] tracking-[-0.025em] text-[#52525a] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <span>CompanyName</span>
              <span className="h-2 w-2 rounded-full bg-[rgba(32,63,48,0.1)]" />
              <span>All right reserved</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="#contact" className="transition-opacity duration-200 hover:opacity-70">
                Terms &amp; Conditions
              </Link>
              <span className="h-2 w-2 rounded-full bg-[rgba(32,63,48,0.1)]" />
              <Link href="#contact" className="transition-opacity duration-200 hover:opacity-70">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
