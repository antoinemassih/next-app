import { SectionContainer } from "@/components/ui/section-container";
import Image from "next/image";
import iphoneProMaxImg from "../../assets/compare_iphone16_pro_max_natural_titanium_large.png";
import iphonePinkImg from "../../assets/compare_iphone16_pink_large.png";

// Inline icon set used for the comparison items
function Icon({ name }: { name: "eye" | "chip" | "drive" | "spark" | "energy" | "wifi" }) {
  const stroke = "currentColor";
  const common = { width: 32, height: 32, viewBox: "0 0 24 24" } as const;
  switch (name) {
    case "eye":
      return (
        <svg {...common} aria-hidden fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "chip":
      return (
        <svg {...common} aria-hidden fill="none" stroke={stroke} strokeWidth="2">
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M4 9h3M4 15h3M17 9h3M17 15h3M9 4v3M15 4v3M9 17v3M15 17v3" />
        </svg>
      );
    case "drive":
      return (
        <svg {...common} aria-hidden fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <circle cx="8" cy="12" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="16" cy="12" r="1" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common} aria-hidden fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v6M12 16v6M2 12h6M16 12h6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M19.1 4.9l-4.2 4.2M9.1 14.9l-4.2 4.2" />
        </svg>
      );
    case "energy":
      return (
        <svg {...common} aria-hidden fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );
    case "wifi":
      return (
        <svg {...common} aria-hidden fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 8a14 14 0 0 1 20 0" />
          <path d="M5 11a10 10 0 0 1 14 0" />
          <path d="M8 14a6 6 0 0 1 8 0" />
          <circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

type Item = { icon: "eye" | "chip" | "drive" | "spark" | "energy" | "wifi"; text: string };
const dayOne: Item[] = [
  { icon: "eye", text: "Sharp eye for insight." },
  { icon: "chip", text: "Fast thinker with zero lag on ideas." },
  { icon: "drive", text: "Overflowing with creativity." },
  { icon: "spark", text: "Bright, engaging, impossible to ignore." },
  { icon: "energy", text: "Could power through campaigns." },
  { icon: "wifi", text: "Instantly connected with every team and client." },
];
const today: Item[] = [
  { icon: "eye", text: "Industry-leading vision, no filter needed." },
  { icon: "chip", text: "Multi-core strategic thinking. runs on experience and instinct." },
  { icon: "drive", text: "Expanded capacity for big-picture campaigns and micro-detail resolution." },
  { icon: "spark", text: "Brilliance now in HDR." },
  { icon: "energy", text: "Fuels multiple campaigns, energyizing the team." },
  { icon: "wifi", text: "Global network, seamless collaboration, and industrial grade charisma." },
];

export default function Compare() {
  return (
    <SectionContainer id="compare" aria-labelledby="compare-heading">
        <header className="mb-6 flex flex-col items-center justify-center gap-3 md:mb-10">
          <h2
            id="compare-heading"
            className="text-balance text-center text-2xl md:text-4xl font-semibold tracking-tight"
          >
            Awesome at launch. Legendary today
          </h2>
          <div />
        </header>

        <div>
          <ul className="grid gap-6 md:grid-cols-2" role="list">
          <li className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 dark:bg-neutral-800" role="listitem">
              <h3 className="text-center text-2xl md:text-3xl font-semibold tracking-tight">Rudy <span className="text-blue-500">Series 10</span></h3>
              <p className="mt-1.5 text-center text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200">still priceless/mo. for 24 mo.</p>
              <div className="mt-4 aspect-[5/4] w-full overflow-hidden p-8 md:p-12">
                <div className="relative h-full w-full">
                  <Image
                    src={iphoneProMaxImg}
                    alt="Front of iPhone and partial back showing camera"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false}
                  />
                </div>
              </div>
              <ul className="mt-5 space-y-5 text-[15px] md:text-base leading-relaxed text-neutral-800 dark:text-neutral-200" role="list">
                {today.map((it, i) => (
                  <li key={i} className="flex flex-col items-center text-center gap-2">
                    <span className="text-neutral-700 dark:text-neutral-200"><Icon name={it.icon} /></span>
                    <p className="flex-1">{it.text}</p>
                  </li>
                ))}
              </ul>
            </li>
            {/* Column 1 — Day One (2015) */}
            <li className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 dark:bg-neutral-800" role="listitem">
              <h3 className="text-center text-2xl md:text-3xl font-semibold tracking-tight">Rudy <span className="text-pink-500">Series 1</span></h3>
              <p className="mt-1.5 text-center text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200">Priceless/mo. for 24 mo.</p>
              <div className="mt-4 aspect-[5/4] w-full overflow-hidden p-8 md:p-12">
                <div className="relative h-full w-full">
                  <Image
                    
                    src={iphonePinkImg}
                    alt="Front view of iPhone in natural titanium"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false}
                  />
                </div>
              </div>
              <ul className="mt-5 space-y-5 text-[15px] md:text-base leading-relaxed text-neutral-800 dark:text-neutral-200" role="list">
                {dayOne.map((it, i) => (
                  <li key={i} className="flex flex-col items-center text-center gap-2">
                    <span className="text-neutral-700 dark:text-neutral-200"><Icon name={it.icon} /></span>
                    <p className="flex-1">{it.text}</p>
                  </li>
                ))}
              </ul>
            </li>

            {/* Column 2 — Today (2025) */}
            
          </ul>
        </div>
    </SectionContainer>
  );
}
