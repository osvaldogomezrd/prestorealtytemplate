import {
  AlertTriangle,
  Landmark,
  Briefcase,
  Wrench,
  Heart,
  ArrowRightLeft,
  Users,
  Clock,
} from "lucide-react";

const situations = [
  {
    icon: AlertTriangle,
    title: "Avoid Foreclosure",
    description: "Stop foreclosure in its tracks. Presto Realty can close fast enough to help you avoid losing your home.",
  },
  {
    icon: Landmark,
    title: "Tax Liens",
    description: "Dealing with back taxes or liens? We buy homes with liens and handle all the complications.",
  },
  {
    icon: Briefcase,
    title: "Inherited Property",
    description: "Inherited a property you don't want to manage? Presto Realty makes the process simple and fast.",
  },
  {
    icon: Wrench,
    title: "Major Repairs Needed",
    description: "Don't spend thousands on repairs. Presto Realty buys homes as-is, no matter the condition.",
  },
  {
    icon: Heart,
    title: "Divorce",
    description: "Need to sell quickly due to a divorce? We provide a clean, fast solution with no stress.",
  },
  {
    icon: ArrowRightLeft,
    title: "Relocating",
    description: "Moving out of state or country? Presto Realty can close on your schedule so you can move on.",
  },
  {
    icon: Users,
    title: "Problem Tenants",
    description: "Tired of dealing with difficult tenants? We buy rental properties with tenants in place.",
  },
  {
    icon: Clock,
    title: "Probate",
    description: "Going through probate? Presto Realty has experience buying homes in probate situations.",
  },
];

export default function HowWeCanHelpV2() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Situations We Handle
          </span>
          <h2 className="text-[40px] font-normal mt-2 mb-4" style={{ color: "rgb(47, 47, 47)" }}>
            How Presto Realty Can Help
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            No matter your situation, Presto Realty has helped hundreds of Las Vegas homeowners
            just like you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {situations.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-200">
                  <Icon
                    size={22}
                    className="text-green-600 group-hover:text-white transition-colors duration-200"
                  />
                </div>
                <h3 className="font-bold mb-2" style={{ color: "rgb(47, 47, 47)" }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-4 rounded-full transition-colors duration-200 shadow-md"
          >
            Get Help Today
          </a>
        </div>
      </div>
    </section>
  );
}
