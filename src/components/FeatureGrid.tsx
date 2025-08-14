import { SectionContainer } from "@/components/ui/section-container";

export default function FeatureGrid() {
  return (
    <SectionContainer id="feature-grid" background="neutral">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row">
          <div className="w-full max-w-3xl md:max-w-4xl">
            <h2 className="text-balance text-[48px] font-semibold leading-tight tracking-tight md:text-[48px]">
              Built for brilliance.<br/> Designed to make a difference
            </h2>
            <p className="mt-4 text-[17px] text-neutral-600 dark:text-neutral-300">
              A few ways <span className="font-semibold text-neutral-900 dark:text-white">Rudy</span> sets your work apart.
            </p>
          </div>
          
        </div>

        {/* Feature Grid */}
        <div className="grid w-full max-w-screen-2xl mx-auto gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
          {/* Apple Intelligence */}
          <div className="h-full flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-neutral-800">
            <div className="flex flex-col items-center text-center space-y-2">
              <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Built with proprietary</p>
              <p className="text-[40px] md:text-[40px] font-medium leading-tight bg-gradient-to-r from-fuchsia-500 via-rose-500 to-amber-400 bg-clip-text text-transparent">Rudy Intelligence</p>
              <p className="text-[14px] font-medium text-neutral-600 dark:text-neutral-300">for the toughest<br/>strategic & creative marketing</p>
            </div>
          </div>

          {/* CPU Performance */}
          <div className="h-full flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-neutral-800">
            <div className="mb-4 flex flex-col items-center space-y-2">
              <p className="text-sm font-medium text-neutral-500">Up to</p>
              <p className="text-[48px] font-bold leading-none text-neutral-900 dark:text-white">400%</p>
              <p className="text-[48px] font-bold leading-none text-neutral-900 dark:text-white">more</p>
            </div>
            <p className="text-[15px] font-medium text-neutral-600 dark:text-neutral-300">
              Apple project performance
            </p>
          </div>

          {/* Battery Life */}
          <div className="h-full flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-neutral-800">
            <div className="mb-4 flex flex-col items-center space-y-2">
              <div className="mb-0 flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.67 4H14V2c0-1.1-.9-2-2-2s-2 .9-2 2v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
                </svg>
              </div>
              <p className="text-[48px] font-bold leading-none text-neutral-900 dark:text-white">24 hours</p>
            </div>
            <p className="text-[15px] font-medium text-neutral-600 dark:text-neutral-300">
              Project playback<sup className="text-xs">3</sup>
            </p>
          </div>

          {/* Camera */}
          <div className="h-full flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-neutral-800">
            <div className="mb-4 flex flex-col items-center space-y-2">
              <p className="text-sm font-medium text-neutral-500">Super-high-resolution</p>
              <p className="text-[48px] font-bold leading-none text-neutral-900 dark:text-white">4800MP</p>
              <p className="text-[28px] font-medium leading-none text-neutral-900 dark:text-white">attention to detail</p>
            </div>
          </div>

          {/* Satellite */}
          <div className="h-full flex flex-col items-center justify-between rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-neutral-800">
            <div className="mb-6">
              <svg className="mx-auto h-16 w-16 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                {/* Satellite body */}
                <rect x="10" y="10" width="4" height="4" rx="0.5" />
                {/* Solar panels */}
                <rect x="3" y="7" width="4" height="4" rx="0.5" />
                <rect x="17" y="13" width="4" height="4" rx="0.5" />
                {/* Arms connecting panels to body */}
                <path d="M7 9l3 3" />
                <path d="M14 12l3 3" />
                {/* Antenna */}
                <path d="M12 10V7" />
                <path d="M12 7l2-2" />
                <path d="M12 7l-2-2" />
                {/* Signal waves */}
                <path d="M16 5c1.5 1.5 1.5 3.5 0 5" />
                <path d="M18 3c3 3 3 7 0 10" />
              </svg>
            </div>
            <div className="mt-auto text-[15px] font-medium text-neutral-600 dark:text-neutral-300 flex flex-col items-center space-y-1 leading-snug">
              <span>Emergency services</span>
              <span className="font-semibold text-xl text-neutral-900 dark:text-white">Remote Disaster Recovery</span>
              <span>and resolution</span>
            </div>
          </div>

          {/* Ceramic Shield */}
          <div className="h-full flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-neutral-800">
            <div className="mb-4 flex flex-col items-center space-y-2">
              <div className="flex flex-col items-center space-y-1 text-neutral-500 dark:text-neutral-400">
                <span className="text-sm font-medium">Tough by nature</span>
              </div>
              <svg
                className="mx-auto h-16 w-16 text-neutral-400 dark:text-neutral-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2l7 4v6c0 5-3.8 9.4-7 10-3.2-.6-7-5-7-10V6l7-4z" />
                <path d="M12 6v14" />
              </svg>
              <span className="pt-1 text-[15px] font-medium text-neutral-600 dark:text-neutral-300">with Bullshit Shield</span>
            </div>
          </div>

          {/* Brilliant Display */}
          <div className="h-full flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-neutral-800">
            <div className="flex flex-col items-center space-y-2">
              <p className="text-[34px] md:text-[40px] font-bold leading-tight bg-gradient-to-r from-amber-600 to-purple-500 bg-clip-text text-transparent">
                Brilliant Display
              </p>
              <p className="text-[14px] font-medium text-neutral-600 dark:text-neutral-300">
                of every possible capability.
              </p>
            </div>
          </div>

          {/* Seamless Integrations */}
          <div className="h-full flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-neutral-800">
            <div className="mb-4">
              <svg
                className="mx-auto h-16 w-16 text-neutral-400 dark:text-neutral-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 6h4v4h-4z" />
                <path d="M4 14h4v4H4z" />
                <path d="M16 14h4v4h-4z" />
                <path d="M12 10v4M8 16h8" />
              </svg>
            </div>
            <div className="text-[15px] font-medium text-neutral-600 dark:text-neutral-300 flex flex-col items-center space-y-1">
              <span>Seamless Integrations</span>
              <span className="text-[20px] font-medium text-neutral-900 dark:text-neutral-300">with anyone</span>
            </div>
          </div>
        </div>
    </SectionContainer>
  );
}
