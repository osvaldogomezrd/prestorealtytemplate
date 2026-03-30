import { BadgeCheck, CalendarDays, Home, ShieldCheck, Star } from "lucide-react";

const metrics = [
  {
    icon: Home,
    title: "2,000+",
    subtitle: "Homes Purchased",
  },
  {
    icon: CalendarDays,
    title: "Since 2016",
    subtitle: "Serving Las Vegas",
  },
  {
    icon: "stars" as const,
    title: "4.8",
    subtitle: "(279+ Reviews)",
  },
  {
    icon: ShieldCheck,
    title: "A+",
    subtitle: "BBB Rating",
  },
  {
    icon: BadgeCheck,
    title: "Licensed",
    subtitle: "NV #S.0184768",
    smallTitle: true,
  },
];

export default function TrustMetricsBannerV3() {
  return (
    <section className="bg-[#203f30] px-6 py-6 lg:px-28">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:flex-nowrap lg:gap-x-12">
        {metrics.map((metric, index) => (
          <div key={metric.title} className="flex items-center gap-2">
            {metric.icon === "stars" ? (
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    className="fill-[#facc15] text-[#facc15]"
                  />
                ))}
              </div>
            ) : (
              <metric.icon size={24} className="shrink-0 text-[#dbfb1e]" strokeWidth={1.9} />
            )}

            <div className="min-w-[86px]">
              <p className={`font-medium leading-none text-[#f9fafb] ${metric.smallTitle ? "text-[14px]" : "text-[18px]"}`}>
                {metric.title}
              </p>
              <p className="mt-1 text-[12px] leading-4 text-[#6b7280]">
                {metric.subtitle}
              </p>
            </div>

            {index < metrics.length - 1 && (
              <div className="ml-4 hidden h-10 w-px bg-[#ccd5db] lg:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
