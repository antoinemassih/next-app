function Row({ title, body, reverse = false }: { title: string; body: string; reverse?: boolean }) {
  return (
    <div className={`grid items-center gap-6 md:grid-cols-2 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <div className="aspect-[16/10] rounded-[18px] border border-border relative overflow-hidden bg-[linear-gradient(135deg,#1a1a23,#121218)]">
        <div className="absolute inset-[-20%] bg-[radial-gradient(50%_50%_at_60%_40%,#6db7ff22,transparent_60%),radial-gradient(50%_50%_at_30%_70%,#ff7ad922,transparent_60%)]" />
      </div>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}

import { SectionHeader } from "@/components/ui/section-header";

export default function River() {
  return (
    <section className="border-t border-border py-20 scroll-mt-24">
      <div className="container px-4">
        <SectionHeader 
          title="Designed for life"
          subtitle="Every detail crafted to enhance your everyday experience"
          className="mb-16"
        />
        <div className="space-y-12">
          <Row title="Big battery, small worries." body="All‑day power with smart charge optimization so you can scroll, stream, and shoot longer." />
          <Row title="Bright, accurate, adaptive." body="A color‑true OLED that’s comfortable indoors and confident in sunlight." reverse />
          <Row title="Silicon tuned for real life." body="Snappy app launches, fluid gaming, and efficient power use from our A16e‑class design." />
        </div>
      </div>
    </section>
  );
}
