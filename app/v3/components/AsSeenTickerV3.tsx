import Image from "next/image";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const logos = [
  {
    src: "/v3/as-seen-fox.png",
    alt: "FOX",
    width: 136,
    height: 41,
  },
  {
    src: "/v3/as-seen-nbc.png",
    alt: "NBC",
    width: 136,
    height: 41,
  },
  {
    src: "/v3/as-seen-abc.png",
    alt: "ABC",
    width: 136,
    height: 41,
  },
  {
    src: "/v3/as-seen-cbs.png",
    alt: "CBS",
    width: 136,
    height: 41,
  },
];

export default function AsSeenTickerV3() {
  const tickerLogos = [...logos, ...logos];

  return (
    <section className="relative overflow-hidden bg-[#203f30]">
      <div className="relative mx-auto flex h-[92px] w-full max-w-[1440px] items-center overflow-hidden">
        <div className="absolute inset-y-0 left-0 z-10 flex w-[178px] items-center justify-center bg-[#203f30] pl-6 pr-4 md:w-[220px] md:pl-10 md:pr-6">
          <p className={`${geist.className} whitespace-nowrap text-[17px] font-semibold tracking-[-0.02em] text-white`}>
            As Seen On
          </p>
        </div>

        <div className="relative w-full overflow-hidden pl-[178px] md:pl-[220px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-12 bg-gradient-to-r from-[#203f30] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-gradient-to-l from-[#203f30] to-transparent" />

          <div className="v3-logo-ticker-track flex min-w-max items-center gap-16 whitespace-nowrap pr-16 will-change-transform">
            {tickerLogos.map((logo, index) => (
              <Image
                key={`${logo.src}-${index}`}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto w-[112px] shrink-0 opacity-100 md:w-[136px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
