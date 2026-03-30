import Image from "next/image";

const logos = [
  {
    src: "/v3/as-seen-fox.png",
    alt: "Featured on FOX",
    width: 136,
    height: 41,
  },
  {
    src: "/v3/as-seen-nbc.png",
    alt: "Featured on NBC",
    width: 136,
    height: 41,
  },
  {
    src: "/v3/as-seen-abc.png",
    alt: "Featured on ABC",
    width: 136,
    height: 41,
  },
  {
    src: "/v3/as-seen-cbs.png",
    alt: "Featured on CBS",
    width: 136,
    height: 41,
  },
];

export default function AsSeenOnBannerV3() {
  return (
    <section className="bg-[#203f30]">
      <div className="mx-auto flex min-h-[91px] max-w-[1440px] flex-wrap items-center justify-center gap-x-8 gap-y-5 px-6 py-6 lg:flex-nowrap lg:gap-x-14 lg:px-20">
        <p className="whitespace-nowrap text-center text-[17px] font-black uppercase tracking-[0.02em] text-white">
          As Seen On
        </p>
        {logos.map((logo) => (
          <div key={logo.src} className="flex h-[41px] items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-auto w-[136px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
