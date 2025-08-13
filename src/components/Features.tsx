import { SectionHeader } from "@/components/ui/section-header";

export default function Features() {
  return (
    <section id="features" className="border-t border-border py-20 scroll-mt-24">
      <div className="container px-4">
        <SectionHeader 
          title="Built for brilliance"
          subtitle="Advanced features that make every day extraordinary"
          className="mb-16"
        />
        <div className="grid grid-cols-12 gap-[18px]">
          <article className="col-span-12 lg:col-span-8 rounded-[22px] border border-border bg-card p-[22px]">
            <div className="text-lg font-semibold mb-2">A16e chip</div>
            <p className="text-muted-foreground">Snappy performance for streaming, gaming, and day-to-day. Efficient by design to squeeze more out of every milliamp.</p>
            <div className="mt-3 flex flex-wrap gap-[10px]">
              <span className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-[13px] font-semibold">6‑core CPU</span>
              <span className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-[13px] font-semibold">5‑core GPU</span>
              <span className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-[13px] font-semibold">Neural Engine</span>
            </div>
          </article>
          <article className="col-span-12 lg:col-span-4 rounded-[22px] border border-border bg-card p-[22px]">
            <div className="text-lg font-semibold mb-2">All‑day battery</div>
            <p className="text-muted-foreground">Up to 22 hours video playback in our demo tests.</p>
            <div className="mt-3 flex flex-wrap gap-[10px]">
              <span className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-[13px] font-semibold">Fast charge</span>
              <span className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-[13px] font-semibold">USB‑C</span>
            </div>
          </article>
          <article className="col-span-12 lg:col-span-4 rounded-[22px] border border-border bg-card p-[22px]">
            <div className="text-lg font-semibold mb-2">Bright display</div>
            <p className="text-muted-foreground">Super‑bright OLED with adaptive refresh. Color‑accurate and gentle on the eyes.</p>
            <div className="mt-3 flex flex-wrap gap-[10px]">
              <span className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-[13px] font-semibold">6.3" OLED</span>
              <span className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-[13px] font-semibold">1200 nits</span>
            </div>
          </article>
          <article className="col-span-12 lg:col-span-4 rounded-[22px] border border-border bg-card p-[22px]">
            <div className="text-lg font-semibold mb-2">Tough by nature</div>
            <p className="text-muted-foreground">Aluminum frame. Ceramic‑like shield glass. IP68 water resistance in lab conditions.</p>
            <div className="mt-3 flex flex-wrap gap-[10px]">
              <span className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-[13px] font-semibold">IP68</span>
              <span className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-[13px] font-semibold">Recycled materials</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
