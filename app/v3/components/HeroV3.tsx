"use client";

import { useState } from "react";
import Image from "next/image";
import AddressAutocomplete from "../../components/AddressAutocomplete";

export default function HeroV3() {
  const [address, setAddress] = useState("");

  return (
    <section
      id="home"
      className="relative -mt-[85px] min-h-[840px] overflow-hidden pt-[85px] text-white"
    >
      <Image
        src="/v3/hero-v3-bg.jpg"
        alt="Suburban Las Vegas home"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(215deg,rgba(32,63,48,0.3)_27.685%,rgba(0,0,0,0.3)_87.908%)]" />

      <div className="relative mx-auto flex min-h-[755px] w-full max-w-[1440px] items-center px-5 pb-20 pt-16 sm:px-8 md:px-12 lg:px-16">
        <div className="flex w-full max-w-[841px] flex-col items-start gap-6 rounded-2xl px-0 py-8 sm:px-0 md:px-4 lg:px-14">
          <h1 className="max-w-[620px] text-[56px] font-normal leading-[1.02] tracking-[-0.04em] text-white sm:text-[64px] lg:text-[80px]">
            Sell Your House For Cash Today!
          </h1>

          <div className="flex w-full max-w-[535px] flex-col rounded-[8px] shadow-[0_24px_40px_rgba(10,9,21,0.2)] sm:flex-row">
            <div className="relative z-20 w-full overflow-visible rounded-t-[8px] bg-white sm:w-[326px] sm:rounded-l-[8px] sm:rounded-tr-none">
              <AddressAutocomplete
                value={address}
                onChange={setAddress}
                placeholder="Enter Your Home Address"
                className="h-[60px] w-full rounded-t-[8px] border-0 bg-transparent px-4 text-base font-medium text-neutral-700 outline-none placeholder:text-[#666666] sm:rounded-l-[8px] sm:rounded-tr-none"
              />
            </div>
            <a
              href="#contact"
              className="flex h-[60px] min-w-[209px] items-center justify-center rounded-b-[8px] bg-[#dbfb1e] px-6 text-base font-medium text-[#0a0915] transition-colors duration-200 hover:bg-[#c7eb00] sm:rounded-b-none sm:rounded-r-[8px]"
            >
              GET MY OFFER
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex h-[60px] w-[172px] items-center justify-center rounded-[2.852px] bg-white px-3">
              <Image
                src="/v3/hero-v3-google.png"
                alt="Google reviews 4.8 rating"
                width={141}
                height={39}
                className="h-auto w-[141px]"
              />
            </div>
            <div className="flex h-[60px] w-[172px] items-center justify-center rounded-[3.077px] bg-white px-2">
              <Image
                src="/v3/hero-v3-bbb.png"
                alt="BBB accredited business badge"
                width={154}
                height={43}
                className="h-auto w-[154px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
