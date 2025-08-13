import { AppleButton } from "@/components/ui/apple-button";
import { SectionContainer } from "@/components/ui/section-container";

function ColorDot({ className, label }: { className: string; label: string }) {
  return (
    <li className="inline-flex items-center" role="listitem">
      <span className={`mr-1 inline-block size-3 rounded-full ring-1 ring-black/10 ${className}`}></span>
      <span className="sr-only">{label}</span>
    </li>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const n = name.toLowerCase();
  const stroke = "currentColor";
  const common = { width: 24, height: 24, viewBox: "0 0 24 24" } as const;
  if (n.includes("battery")) {
    return (
      <svg {...common} aria-hidden fill="none" stroke={stroke} strokeWidth="1.5">
        <rect x="3" y="7" width="16" height="10" rx="2" />
        <rect x="19" y="10" width="2" height="4" rx="1" />
      </svg>
    );
  }
  if (n.includes("chip") || n.includes("gpu")) {
    return (
      <svg {...common} aria-hidden fill="none" stroke={stroke} strokeWidth="1.5">
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M3 9h3M3 15h3M18 9h3M18 15h3M9 3v3M15 3v3M9 18v3M15 18v3" />
      </svg>
    );
  }
  if (n.includes("camera") || n.includes("telephoto") || n.includes("ultra")) {
    return (
      <svg {...common} aria-hidden fill="none" stroke={stroke} strokeWidth="1.5">
        <rect x="3" y="6" width="18" height="14" rx="3" />
        <circle cx="12" cy="13" r="4" />
        <circle cx="18" cy="9" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (n.includes("apple intelligence") || n.includes("intelligence")) {
    return (
      <svg {...common} aria-hidden fill="none" stroke={stroke} strokeWidth="1.5">
        <path d="M12 3v18M3 12h18" />
        <circle cx="12" cy="12" r="6" />
      </svg>
    );
  }
  // default info dot
  return (
    <svg {...common} aria-hidden fill="none" stroke={stroke} strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8.5h.01M11 11h2v5h-2z" />
    </svg>
  );
}

function ProductTile(props: {
  title: string;
  imageAlt: string;
  price: string;
  learnHref?: string;
  buyHref: string;
  colors: { className: string; label: string }[];
  features: string[];
}) {
  const { title, imageAlt, price, learnHref, buyHref, colors, features } = props;
  return (
    <li className="flex w-full flex-col p-2 md:p-3">
      <h3 className="px-2 pt-2 text-center">
        <span className="block text-balance text-2xl font-semibold tracking-tight" aria-hidden>
          {title}
        </span>
        <span className="sr-only">{title}</span>
      </h3>

      <div className="mt-3 aspect-[5/4] w-full overflow-hidden">
        <div className="flex h-full items-center justify-center text-center text-[11px] text-neutral-500">
          <span className="px-3 py-1" aria-label={imageAlt}>
            {imageAlt}
          </span>
        </div>
      </div>

      <div className="mt-4 px-2">
        <ul className="flex items-center justify-center gap-1.5" role="list" aria-label="Available colors">
          {colors.map((c, i) => (
            <ColorDot key={i} className={c.className} label={c.label} />
          ))}
          <li className="text-[13px] text-neutral-500" aria-hidden>
            +
          </li>
        </ul>
      </div>

      <p className="mt-1.5 px-2 text-center text-[14px] font-medium text-neutral-800 dark:text-neutral-200">{price}</p>

      <div className="mt-3 flex items-center justify-center gap-3 px-2">
        {learnHref && (
          <AppleButton
            variant="link"
            asChild
            aria-label={`Learn more about ${title}`}
          >
            <a href={learnHref}>
              Learn more <span aria-hidden>›</span>
            </a>
          </AppleButton>
        )}
        <AppleButton
          variant="primary"
          asChild
          aria-label={`Buy ${title}`}
        >
          <a href={buyHref}>Buy</a>
        </AppleButton>
      </div>

      <div className="mt-4 px-2">
        <ul className="grid gap-3 text-[14px] font-medium text-neutral-900 dark:text-neutral-100" role="list">
          {features.map((f, i) => (
            <li key={i} role="listitem" className="flex flex-col items-center text-center">
              <div className="mb-1.5 text-neutral-500 dark:text-neutral-400">
                <FeatureIcon name={f} />
              </div>
              <p>{f}</p>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Compare() {
  return (
    <SectionContainer id="compare" aria-labelledby="compare-heading">
        <header className="mb-6 flex flex-col items-start justify-between gap-4 md:mb-8 md:flex-row md:items-center">
          <h2
            id="compare-heading"
            className="text-balance text-[28px] font-semibold tracking-tight md:text-[32px]"
          >
            Keep exploring iPhone.
          </h2>
          <div>
            <a
              href="/iphone/"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-blue-600 hover:underline underline-offset-4 dark:text-blue-400"
            >
              Explore all iPhone <span aria-hidden>›</span>
            </a>
          </div>
        </header>

        <div>
          <ul className="grid gap-6 md:grid-cols-2" role="list">
            <ProductTile
              title="iPhone 16e"
              imageAlt="Front view of iPhone 16e in white and partial back showing camera"
              price="From $599 or $24.95/mo. for 24 mo."
              buyHref="/us/shop/goto/buy_iphone/iphone_16e"
              colors={[
                { className: 'bg-white', label: 'White' },
                { className: 'bg-black', label: 'Black' },
              ]}
              features={[
                '2‑in‑1 camera system',
                '48MP Fusion camera',
                '2x Telephoto',
              ]}
            />

            <ProductTile
              title="iPhone 16"
              imageAlt="Front of iPhone 16 in ultramarine and partial back of iPhone 16 Plus"
              price="From $799 or $33.29/mo. for 24 mo."
              learnHref="/iphone-16/"
              buyHref="/us/shop/goto/buy_iphone/iphone_16"
              colors={[
                { className: 'bg-blue-500', label: 'Ultramarine' },
                { className: 'bg-emerald-500', label: 'Teal' },
                { className: 'bg-pink-400', label: 'Pink' },
                { className: 'bg-white', label: 'White' },
                { className: 'bg-black', label: 'Black' },
              ]}
              features={[
                'Advanced dual‑camera system',
                'Advanced 48MP Fusion camera',
                '2x Telephoto',
                '12MP Ultra Wide camera',
              ]}
            />
          </ul>
        </div>

        <div className="mt-8 flex justify-center">
          <AppleButton variant="link" asChild>
            <a href="/iphone/compare/">
              Compare all iPhone models <span aria-hidden>›</span>
            </a>
          </AppleButton>
        </div>
    </SectionContainer>
  );
}
