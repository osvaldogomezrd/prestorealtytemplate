import Image from "next/image";

const properties = [
  {
    address: "2847 Desert Rose Ln",
    area: "Summerlin, NV",
    status: "Sold",
    price: "$385,000",
    image: "/properties/home-1.jpg",
  },
  {
    address: "5102 Flamingo Rd",
    area: "Las Vegas, NV",
    status: "Sold",
    price: "$295,000",
    image: "/properties/home-2.jpg",
  },
  {
    address: "1429 Sunrise Valley",
    area: "Henderson, NV",
    status: "Sold",
    price: "$420,000",
    image: "/properties/home-3.jpg",
  },
  {
    address: "3310 Nellis Blvd",
    area: "North Las Vegas, NV",
    status: "Sold",
    price: "$265,000",
    image: "/properties/home-4.jpg",
  },
  {
    address: "901 Bluebird Canyon",
    area: "Green Valley, NV",
    status: "Sold",
    price: "$348,000",
    image: "/properties/home-5.jpg",
  },
  {
    address: "755 Canyon Retreat Ct",
    area: "Spring Valley, NV",
    status: "Sold",
    price: "$312,000",
    image: "/properties/home-6.jpg",
  },
  {
    address: "2219 Silver Mesa Dr",
    area: "Paradise, NV",
    status: "Sold",
    price: "$459,000",
    image: "/properties/home-7.jpg",
  },
  {
    address: "4680 Orchard Grove Ave",
    area: "Enterprise, NV",
    status: "Sold",
    price: "$334,000",
    image: "/properties/home-8.jpg",
  },
];

export default function OurWorkV2() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-[40px] font-normal mt-2 mb-4" style={{ color: "rgb(47, 47, 47)" }}>
            Our Recent Purchases
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A sample of homes we&apos;ve recently purchased across the Las Vegas valley.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 flex items-end">
                <Image
                  src={p.image}
                  alt={`Property at ${p.address}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute top-3 right-3">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {p.status}
                  </span>
                </div>
                <div className="relative p-4 w-full bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-bold text-lg">{p.price}</p>
                </div>
              </div>
              <div className="bg-white p-4">
                <p className="font-semibold text-sm" style={{ color: "rgb(47, 47, 47)" }}>{p.address}</p>
                <p className="text-gray-400 text-xs mt-1">{p.area}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            We purchase homes throughout all of Clark County, Nevada
          </p>
        </div>
      </div>
    </section>
  );
}
