import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export default function ProcessVideoSectionV3() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto flex max-w-[790px] flex-col items-center text-center">
          <h2
            className={`${geist.className} text-[40px] font-normal leading-[1.15] tracking-[-0.052em] text-[#0a0915] sm:text-[48px] sm:leading-[1.25]`}
          >
            Watch This Video
            <br />
            For How Our Process Works
          </h2>
          <p className="mt-4 text-base leading-[1.7] tracking-[-0.025em] text-[#52525a]">
            See how easy it is to sell your Las Vegas home for cash
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-[1096px] overflow-hidden rounded-[24px] bg-[#f7f6f4] shadow-[0_20px_50px_rgba(10,9,21,0.08)]">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/H0otvinTuPQ?rel=0"
              title="How our process works"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
