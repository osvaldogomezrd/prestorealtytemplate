import { ChevronDown } from "lucide-react";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const faqs = [
  "What services do you offer?",
  "How do I get started?",
  "What areas do you serve?",
  "How much do your services cost?",
  "What payment methods do you accept?",
];

export default function FaqSectionV3() {
  return (
    <section className="rounded-t-[24px] bg-white px-5 pb-[130px] pt-[129px] sm:px-8 lg:px-[60px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-[72px]">
        <div className="w-full max-w-[800px] text-center">
          <h2
            className={`${geist.className} text-[40px] font-normal leading-[1.15] tracking-[-0.042em] text-[#0a0915] sm:text-[48px] sm:leading-[1.3]`}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="w-full max-w-[700px] space-y-1">
          {faqs.map((question) => (
            <details
              key={question}
              className="group overflow-hidden rounded-[16px] bg-[#f7f6f4]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 pb-4 pt-[15px] text-left">
                <span
                  className={`${geist.className} text-[18px] font-medium leading-[1.8] tracking-[0] text-[#0a0915]`}
                >
                  {question}
                </span>
                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#222222] transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="px-4 pb-5 text-[15px] leading-7 tracking-[-0.01em] text-[#52525a]">
                Contact us for a quick answer about {question.toLowerCase()}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
