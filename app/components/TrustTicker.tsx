import Image from "next/image";

export default function TrustTicker() {
  return (
    <section aria-label="As seen on" className="border-y border-gray-200 bg-white">
      <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-center gap-8 px-6 py-5 sm:gap-10 lg:gap-12">
        <p className="text-[17px] leading-8 text-[#717171]">As Seen On</p>
        <div className="flex items-center justify-center gap-8 sm:gap-10 lg:gap-12">
          <Image
            src="/media-logos/fox.svg"
            alt="FOX"
            width={136}
            height={42}
            className="h-[41px] w-auto"
          />
          <Image
            src="/media-logos/nbc.svg"
            alt="NBC"
            width={136}
            height={42}
            className="h-[41px] w-auto"
          />
          <Image
            src="/media-logos/cbs.svg"
            alt="CBS"
            width={136}
            height={42}
            className="h-[41px] w-auto"
          />
        </div>
      </div>
    </section>
  );
}
