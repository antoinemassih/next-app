import { SectionHeader } from "@/components/ui/section-header";

export default function Gallery() {
  return (
    <section id="gallery" className="border-t border-border py-20 scroll-mt-24">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="See it in action"
          subtitle="Experience the beauty and performance in every frame"
          className="mb-16"
        />
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-1 aspect-[4/5] rounded-xl border border-border bg-[radial-gradient(120%_80%_at_20%_20%,#3f79ff33_0,transparent_60%),radial-gradient(120%_80%_at_80%_80%,#ff5bc033_0,transparent_60%)]" />
          <div className="col-span-1 aspect-[4/5] rounded-xl border border-border bg-[radial-gradient(120%_80%_at_20%_20%,#3f79ff33_0,transparent_60%),radial-gradient(120%_80%_at_80%_80%,#ff5bc033_0,transparent_60%)]" />
          <div className="col-span-1 aspect-[4/5] rounded-xl border border-border bg-[radial-gradient(120%_80%_at_20%_20%,#3f79ff33_0,transparent_60%),radial-gradient(120%_80%_at_80%_80%,#ff5bc033_0,transparent_60%)]" />
        </div>
        <div className="h-3" />
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2 aspect-[8/5] rounded-xl border border-border bg-[radial-gradient(120%_80%_at_20%_20%,#3f79ff33_0,transparent_60%),radial-gradient(120%_80%_at_80%_80%,#ff5bc033_0,transparent_60%)]" />
          <div className="col-span-1 aspect-[4/5] rounded-xl border border-border bg-[radial-gradient(120%_80%_at_20%_20%,#3f79ff33_0,transparent_60%),radial-gradient(120%_80%_at_80%_80%,#ff5bc033_0,transparent_60%)]" />
        </div>
      </div>
    </section>
  );
}
