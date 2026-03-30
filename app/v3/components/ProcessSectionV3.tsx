import Image from "next/image";

const steps = [
  {
    icon: "/v3/process-submit.png",
    alt: "Submit your info icon",
    title: "Submit Your Info",
    description:
      "One of our representatives from Sell to JR will contact you to setup a no- obligation consultation.",
  },
  {
    icon: "/v3/process-talk.png",
    alt: "Let's talk icon",
    title: "Let's Talk",
    description:
      "Consult with one of our real estate professionals, to discuss the details of your property.",
  },
  {
    icon: "/v3/process-cash.png",
    alt: "Receive cash icon",
    title: "Receive Cash",
    description:
      "When you approve our offer. We will close on your timeline and you get paid within days. It’s that simple.",
  },
];

export default function ProcessSectionV3() {
  return (
    <section id="how-it-works" className="bg-[#f7f6f4] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <h2 className="text-[42px] font-normal leading-[1.1] tracking-[-0.04em] text-[#0a0915] sm:text-[48px]">
            Our Process Is Simple
          </h2>
          <p className="mt-4 text-base leading-6 text-[#52525a]">
            Sell Your House Fast For Cash In 3 Simple Steps.
          </p>
        </div>

        <div className="space-y-2">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex items-start gap-6 rounded-2xl px-0 py-6 md:gap-10 md:px-6"
            >
              <Image
                src={step.icon}
                alt={step.alt}
                width={48}
                height={48}
                className="mt-1 h-12 w-12 shrink-0"
              />

              <div className="max-w-[432px]">
                <h3 className="text-[32px] font-normal leading-[1.2] text-[#0a0915]">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-6 text-[#52525a]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
