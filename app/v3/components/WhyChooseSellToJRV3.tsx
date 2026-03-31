import Link from "next/link";
import {
  Flame,
  Gift,
  Gavel,
  Home,
  MapPinned,
  ShieldAlert,
  Siren,
  Wrench,
} from "lucide-react";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const situations = [
  {
    icon: Siren,
    title: "Facing Foreclosure",
    description:
      "Stop foreclosure and sell your home fast before the bank takes it.",
  },
  {
    icon: Gift,
    title: "Inherited Property",
    description:
      "Sell an inherited house quickly without the hassle of repairs or probate delays.",
  },
  {
    icon: Gavel,
    title: "Going Through Divorce",
    description:
      "Sell your house fast during a divorce and split the proceeds fairly.",
  },
  {
    icon: MapPinned,
    title: "Relocating",
    description:
      "Moving out of state? Sell your Las Vegas home quickly for cash.",
  },
  {
    icon: Wrench,
    title: "House Needs Repairs",
    description:
      "Sell your house as-is. No repairs needed. We buy homes in any condition.",
  },
  {
    icon: Home,
    title: "Code Violations",
    description:
      "Have code violations? We buy homes with open violations and handle them.",
  },
  {
    icon: Flame,
    title: "Fire Damaged Home",
    description:
      "Sell a fire-damaged house fast without expensive repairs or insurance delays.",
  },
  {
    icon: ShieldAlert,
    title: "Facing Bankruptcy",
    description:
      "Sell your house before bankruptcy and protect your financial future.",
  },
];

export default function WhyChooseSellToJRV3() {
  return (
    <section className="rounded-t-[24px] bg-[#203f30] px-5 py-20 sm:px-8 lg:px-[60px] lg:py-[120px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto flex max-w-[790px] flex-col items-center text-center">
          <h2
            className={`${geist.className} text-[40px] font-normal leading-[1.15] tracking-[-0.052em] text-white sm:text-[48px] sm:leading-[1.25]`}
          >
            Why Homeowners
            <br />
            Choose Sell to JR
          </h2>
          <p className="mt-4 max-w-[500px] text-base leading-[1.7] tracking-[-0.025em] text-[#dbdbdb]">
            We&apos;ve helped over 2,000 Las Vegas homeowners sell their houses fast for cash.
            Here&apos;s why they chose us.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {situations.map((item) => (
            <article
              key={item.title}
              className="rounded-[12px] bg-white px-6 py-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#e6eaed]">
                <item.icon
                  size={24}
                  strokeWidth={1.9}
                  className="text-[#16354a]"
                  aria-hidden="true"
                />
              </div>

              <h3
                className={`${geist.className} mt-5 text-[18px] font-semibold leading-[1.55] tracking-[-0.02em] text-[#06263a]`}
              >
                {item.title}
              </h3>

              <p className="mt-2 max-w-[220px] text-[14px] leading-5 text-[#6b7280]">
                {item.description}
              </p>

              <Link
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 text-[14px] font-medium leading-5 text-[#06263a] transition-opacity duration-200 hover:opacity-75"
              >
                Learn more
                <span aria-hidden="true" className="text-[16px] leading-none">
                  ›
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
