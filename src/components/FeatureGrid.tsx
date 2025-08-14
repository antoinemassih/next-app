import { SectionContainer } from "@/components/ui/section-container";

export default function FeatureGrid() {
  return (
    <SectionContainer id="feature-grid" background="neutral">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row">
          <div className="max-w-lg">
            <h2 className="text-balance text-[32px] font-semibold leading-tight tracking-tight md:text-[40px]">
              Designed to make a difference
            </h2>
            <p className="mt-4 text-[17px] text-neutral-600 dark:text-neutral-300">
              A few ways <span className="font-semibold text-neutral-900 dark:text-white">iPhone 16e</span> gives you more.
            </p>
          </div>
          
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm text-neutral-500">Select an iPhone to compare to iPhone 16e:</p>
            <select className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm hover:border-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white">
              <option>iPhone 11</option>
              <option>iPhone 12</option>
              <option>iPhone 13</option>
              <option>iPhone 14</option>
              <option>iPhone 15</option>
            </select>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Apple Intelligence */}
          <div className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-neutral-800">
            <div className="mb-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 3v18M3 12h18" />
                  <circle cx="12" cy="12" r="6" />
                </svg>
              </div>
            </div>
            <p className="text-[15px] font-medium text-neutral-600 dark:text-neutral-300">
              Built for Apple Intelligence<sup className="text-xs">2</sup>
            </p>
          </div>

          {/* CPU Performance */}
          <div className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-neutral-800">
            <div className="mb-4">
              <p className="text-sm font-medium text-neutral-500">Up to</p>
              <p className="text-[48px] font-bold leading-none text-neutral-900 dark:text-white">80%</p>
              <p className="text-[48px] font-bold leading-none text-neutral-900 dark:text-white">faster</p>
            </div>
            <p className="text-[15px] font-medium text-neutral-600 dark:text-neutral-300">
              CPU performance
            </p>
          </div>

          {/* Battery Life */}
          <div className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-neutral-800">
            <div className="mb-4">
              <p className="text-sm font-medium text-neutral-500">Up to</p>
              <div className="flex items-baseline gap-2">
                <p className="text-[48px] font-bold leading-none text-neutral-900 dark:text-white">9 more</p>
                <div className="flex h-6 w-6 items-center justify-center rounded bg-green-500">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.67 4H14V2c0-1.1-.9-2-2-2s-2 .9-2 2v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
                  </svg>
                </div>
              </div>
              <p className="text-[48px] font-bold leading-none text-neutral-900 dark:text-white">hours</p>
            </div>
            <p className="text-[15px] font-medium text-neutral-600 dark:text-neutral-300">
              video playback<sup className="text-xs">3</sup>
            </p>
          </div>

          {/* Camera */}
          <div className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-neutral-800">
            <div className="mb-4">
              <p className="text-sm font-medium text-neutral-500">Super-high-resolution</p>
              <p className="text-[48px] font-bold leading-none text-neutral-900 dark:text-white">48MP</p>
              <p className="text-[48px] font-bold leading-none text-neutral-900 dark:text-white">photos</p>
            </div>
          </div>

          {/* Satellite */}
          <div className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-neutral-800">
            <div className="mb-6">
              <svg className="mx-auto h-16 w-16 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M8.5 14.5L4 19l1.5 1.5L10 16l-1.5-1.5zM12 8l4-4 1.5 1.5L13 10l-1-2zM8 12l4-4M16 16l-4-4" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <p className="text-[15px] font-medium text-neutral-600 dark:text-neutral-300">
              Satellite features
            </p>
          </div>

          {/* Ceramic Shield */}
          <div className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-neutral-800">
            <div className="mb-4">
              <p className="text-sm font-medium text-neutral-500">Durable design with Ceramic Shield</p>
              <div className="mt-4">
                <div className="mx-auto h-24 w-16 rounded-2xl bg-gradient-to-b from-neutral-200 to-neutral-400 shadow-lg dark:from-neutral-600 dark:to-neutral-800">
                  <div className="flex h-full items-center justify-center">
                    <div className="h-3 w-8 rounded-full bg-neutral-800 dark:bg-neutral-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </SectionContainer>
  );
}
