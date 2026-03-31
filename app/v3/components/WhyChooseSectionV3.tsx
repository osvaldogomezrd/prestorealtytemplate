import { BadgeDollarSign, Clock3, Hammer, WalletCards } from "lucide-react";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const reasons = [
  {
    icon: BadgeDollarSign,
    title: "Zero Fees to Sell",
    description:
      "We cover all closing costs. No agent commissions, no hidden fees. The offer we make is the amount you receive.",
  },
  {
    icon: Hammer,
    title: "Sell As-Is",
    description:
      "No repairs, no cleaning, no staging needed. We buy houses in any condition, inherited, damaged, or outdated.",
  },
  {
    icon: Clock3,
    title: "Close in 7 Days",
    description:
      "Skip months of waiting. We can close on your timeline, whether you need to sell fast or take your time.",
  },
  {
    icon: WalletCards,
    title: "Highest Cash Offers",
    description:
      "We provide competitive cash offers based on current market values. Get a fair price without the hassle of listing.",
  },
];

export default function WhyChooseSectionV3() {
  return (
    <section className="rounded-t-[24px] bg-[#f7f6f4] px-5 py-20 sm:px-8 lg:px-[60px] lg:py-[120px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto flex max-w-[790px] flex-col items-center text-center">
          <h2
            className={`${geist.className} text-[40px] font-normal leading-[1.15] tracking-[-0.052em] text-[#0a0915] sm:text-[48px] sm:leading-[1.25]`}
          >
            Why Choose We Buy Any
            <br />
            Vegas House?
          </h2>
          <p className="mt-4 max-w-[560px] text-base leading-[1.7] tracking-[-0.025em] text-[#52525a]">
            We&apos;ve helped over 2,000 Las Vegas homeowners sell their houses fast for cash.
            Here&apos;s why they chose us.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-[16px] bg-white p-8"
            >
              <reason.icon
                size={60}
                strokeWidth={1.8}
                className="text-[#0a0915]"
                aria-hidden="true"
              />

              <h3 className={`${geist.className} mt-[62px] text-[24px] font-medium leading-[1.4] tracking-[-0.042em] text-[#0a0915]`}>
                {reason.title}
              </h3>
              <p className="mt-2 text-base leading-[1.7] tracking-[-0.025em] text-[rgba(10,9,21,0.5)]">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
