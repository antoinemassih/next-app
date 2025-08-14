"use client";

import { AppleButton } from "@/components/ui/apple-button";
import Image from "next/image";
import heroPhone from "../../assets/iPhone.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            [
              // Top blue glow
              "radial-gradient(1200px 600px at 50% -10%, rgba(56,140,255,0.28) 0%, rgba(56,140,255,0) 60%)",
              // Bottom soft blue lift
              "radial-gradient(900px 450px at 50% 110%, rgba(0,122,255,0.16) 0%, rgba(0,122,255,0) 60%)",
              // Base
              "linear-gradient(180deg, var(--background), var(--background))",
            ].join(', '),
        }}
      />
      <div className="container mx-auto px-4">
        <div className="min-h-[95vh] flex flex-col items-center justify-center gap-3 py-10 text-center">
          <h1 className="text-[56px] font-semibold tracking-tight text-foreground leading-[1.1]">
            Rudy <span className="text-blue-500">Series 10</span>
          </h1>
          <h2 className="text-[64px] font-bold tracking-tight text-foreground max-w-4xl leading-[1.05]">
            Latest. Greatest.
          </h2>
          <p className="text-[28px] font-medium max-w-2xl leading-tight">
            <span className="text-blue-400">With </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Actual Intelligence</span>
            <span className="text-foreground">.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <AppleButton
              variant="primary"
              size="lg"
              asChild
              className="shadow-none ring-0"
              // Ensure any arbitrary Tailwind shadow or default border are suppressed here
              style={{ boxShadow: "none", border: "none" }}
            >
              <a href="#buy">Book</a>
            </AppleButton>
            <AppleButton variant="link" asChild>
              <a href="#gallery" className="text-[var(--accent)]">Watch the film</a>
            </AppleButton>
          </div>

          <figure className="relative w-full max-w-[1600px] mx-auto" style={{ marginTop: -20 }}>
            <Image
              src={heroPhone}
              alt="Phone 16e - Big on the basics. Bold on battery. Beautifully bright."
              width={1600}
              height={3200}
              className="w-full h-auto rounded-[32px] animate-hero-in"
              priority
            />
          </figure>
          <p className="text-xs text-muted-foreground">This is a concept page inspired by Apple&apos;s layout patterns. Not affiliated with Apple; no Apple assets used.</p>
        </div>
      </div>
    </section>
  );
}
