import Image from "next/image";
import { Bath, BedSingle, Ruler } from "lucide-react";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const listings = [
  {
    image: "/v3/work-1.png",
    price: "$1,405,000",
    title: "Henderson, Nevada",
    area: "2,500 sq. ft.",
    beds: "3 Bed",
    baths: "2 Bath",
  },
  {
    image: "/v3/work-2.png",
    price: "$1,405,000",
    title: "Henderson, Nevada",
    area: "2,500 sq. ft.",
    beds: "3 Bed",
    baths: "2 Bath",
  },
  {
    image: "/v3/work-3.png",
    price: "$1,405,000",
    title: "Henderson, Nevada",
    area: "2,500 sq. ft.",
    beds: "3 Bed",
    baths: "2 Bath",
  },
  {
    image: "/v3/work-4.png",
    price: "$1,405,000",
    title: "Henderson, Nevada",
    area: "2,500 sq. ft.",
    beds: "3 Bed",
    baths: "2 Bath",
  },
  {
    image: "/v3/work-5.png",
    price: "$1,405,000",
    title: "Henderson, Nevada",
    area: "2,500 sq. ft.",
    beds: "3 Bed",
    baths: "2 Bath",
  },
  {
    image: "/v3/work-6.png",
    price: "$1,405,000",
    title: "Henderson, Nevada",
    area: "2,500 sq. ft.",
    beds: "3 Bed",
    baths: "2 Bath",
  },
];

export default function OurWorkSectionV3() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-[40px] lg:py-[112px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto flex max-w-[790px] flex-col items-center text-center">
          <h2
            className={`${geist.className} text-[40px] font-normal leading-[1.15] tracking-[-0.052em] text-[#0a0915] sm:text-[48px] sm:leading-[1.25]`}
          >
            Our Work
          </h2>
          <p className="mt-4 max-w-[420px] text-base leading-[1.7] tracking-[-0.025em] text-[#52525a]">
            No matter your situation,
            <br />
            we have solutions to meet your needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {listings.map((listing) => (
            <article
              key={listing.image}
              className="flex flex-col gap-8"
            >
              <div className="relative aspect-[410/339] overflow-hidden rounded-[16px] bg-[#eef2f4]">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                />

                <span className="absolute left-3 top-3 inline-flex rounded-[10px] bg-[#f7f6f4] px-3 py-[3px] text-[16px] leading-[1.7] tracking-[-0.02em] text-[#0a0915]">
                  For Sale
                </span>
              </div>

              <div className="flex flex-col gap-[7px]">
                <p className="text-[16px] leading-[1.7] tracking-[-0.02em] text-[#203f30]">
                  {listing.price}
                </p>
                <h3
                  className={`${geist.className} text-[24px] font-medium leading-[1.4] tracking-[-0.042em] text-[#0a0915]`}
                >
                  {listing.title}
                </h3>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-[9px] text-[16px] font-medium leading-[1.8] tracking-[-0.02em] text-[#52525a]">
                  <div className="flex items-center gap-[6px]">
                    <Ruler
                      size={18}
                      strokeWidth={1.7}
                      className="text-[#6b7280]"
                      aria-hidden="true"
                    />
                    <span>{listing.area}</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <BedSingle
                      size={18}
                      strokeWidth={1.7}
                      className="text-[#6b7280]"
                      aria-hidden="true"
                    />
                    <span>{listing.beds}</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <Bath
                      size={18}
                      strokeWidth={1.7}
                      className="text-[#6b7280]"
                      aria-hidden="true"
                    />
                    <span>{listing.baths}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="inline-flex min-h-[58px] items-center justify-center rounded-[12px] bg-[#203f30] px-8 py-[17px] text-[16px] font-medium leading-[1.8] tracking-[-0.02em] text-white transition-colors duration-200 hover:bg-[#193125]"
          >
            Explore All Listings
          </a>
        </div>
      </div>
    </section>
  );
}
