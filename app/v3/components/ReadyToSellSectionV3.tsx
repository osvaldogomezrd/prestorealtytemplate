import Image from "next/image";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export default function ReadyToSellSectionV3() {
  return (
    <section className="relative overflow-hidden px-0">
      <div className="relative min-h-[825px] w-full">
        <Image
          src="/v3/cta-ready-custom.png"
          alt="House exterior background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative mx-auto flex min-h-[825px] max-w-[1440px] items-start justify-center px-5 pb-[220px] pt-[120px] sm:px-8 lg:px-[60px]">
          <div className="flex w-full max-w-[924px] flex-col items-center text-center">
            <h2
              className={`${geist.className} text-[54px] font-normal leading-[1.04] tracking-[-0.05em] text-white sm:text-[68px] lg:text-[80px]`}
            >
              Ready to Sell Your
              <br />
              House Fast?
            </h2>

            <p className="mt-4 max-w-[730px] text-[20px] leading-[1.8] text-white">
              Get your free, no-obligation cash offer today. We can close in as little as 7 days.
            </p>

            <div className="mt-10 flex w-full max-w-[382px] flex-col gap-3 sm:flex-row">
              <a
                href="tel:+17022139800"
                className="flex h-[56px] w-full items-center justify-center gap-2 rounded-full border-2 border-white px-[34px] py-[14px] text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-white/10 sm:w-[216px]"
              >
                <Image
                  src="/v3/cta-phone.svg"
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                (702) 213-9800
              </a>

              <a
                href="#contact"
                className="flex h-[56px] w-full items-center justify-center rounded-full bg-[#dbfb1e] px-6 text-[16px] font-medium tracking-[-0.02em] text-[#0a0915] transition-colors duration-200 hover:bg-[#c7eb00] sm:w-[214px]"
              >
                Get My Cash Offer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
