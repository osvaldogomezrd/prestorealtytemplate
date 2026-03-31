import Image from "next/image";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const testimonials = [
  {
    id: 1,
    quote:
      "They gave me a fair cash offer in less than a day and closed exactly when I needed. No repairs, no stress, and no surprises at the end.",
    name: "Sarah Ahmed",
    role: "First-time Homebuyer",
  },
  {
    id: 2,
    quote:
      "I was relocating for work and needed certainty fast. Presto Realty handled everything clearly and made the sale feel simple from start to finish.",
    name: "Marcus Hill",
    role: "Relocating Seller",
  },
  {
    id: 3,
    quote:
      "Our property needed updates we could not afford. Their team bought it as-is, explained the process well, and helped us move on quickly.",
    name: "Elena Torres",
    role: "Inherited Property Owner",
  },
  {
    id: 4,
    quote:
      "We compared a few buyers and Presto was the most direct and professional. The number stayed consistent and the closing timeline was exactly what they promised.",
    name: "David Brooks",
    role: "Move-up Seller",
  },
  {
    id: 5,
    quote:
      "I needed to sell before falling further behind on payments. They were respectful, fast, and gave me a real option without piling on pressure.",
    name: "Nina Patel",
    role: "Distressed Homeowner",
  },
  {
    id: 6,
    quote:
      "Selling with agents had already wasted months. Presto Realty came in, saw the property, and got us to closing in days instead of dragging it out.",
    name: "James Carter",
    role: "Downsizing Seller",
  },
];

export default function VideoTestimonialsSectionV3() {
  return (
    <section className="bg-white px-5 pb-[100px] pt-14 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto flex max-w-[790px] flex-col items-center text-center">
          <h2
            className={`${geist.className} text-[40px] font-normal leading-[1.15] tracking-[-0.052em] text-[#0a0915] sm:text-[48px] sm:leading-[1.25]`}
          >
            Hear From Homeowners
            <br />
            Who Chose Presto Realty
          </h2>
          <p className="mt-4 text-base leading-[1.7] tracking-[-0.025em] text-[#52525a]">
            Real stories from sellers who worked with us for a fast, straightforward cash offer.
          </p>
        </div>

        <div className="mt-[72px] grid grid-cols-1 gap-x-[24px] gap-y-[28px] lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex min-h-[248px] flex-col rounded-[24px] bg-[#f7f6f4] p-6"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/v3/testimonial-google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Image
                      key={starIndex}
                      src="/v3/testimonial-star.svg"
                      alt=""
                      aria-hidden="true"
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-8 text-[18px] leading-[1.65] tracking-[-0.035em] text-[#52525a]">
                {testimonial.quote}
              </p>

              <div className="mt-auto pt-7">
                <p className={`${geist.className} text-[18px] font-medium leading-7 tracking-[-0.025em] text-[#0a0915]`}>
                  {testimonial.name}
                </p>
                <p className="mt-1 text-[15px] leading-6 tracking-[-0.02em] text-[#52525a]">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
