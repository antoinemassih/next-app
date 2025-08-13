"use client";

import { AppleButton } from "@/components/ui/apple-button";
import Image from "next/image";
import heroPhone from "../../assets/iphoneimage.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container mx-auto px-4">
        <div className="min-h-[95vh] flex flex-col items-center justify-center gap-6 py-12 text-center">
          <h1 className="text-[56px] font-semibold tracking-tight text-foreground leading-[1.1]">
            iPhone 16<span className="text-red-500">e</span>
          </h1>
          <h2 className="text-[64px] font-bold tracking-tight text-foreground max-w-4xl leading-[1.05]">
            Latest iPhone. Greatest price.
          </h2>
          <p className="text-[28px] font-medium max-w-2xl leading-tight">
            <span className="text-blue-400">Built for </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Apple Intelligence</span>
            <span className="text-foreground">.</span>
          </p>

          <figure className="relative w-full max-w-[400px] mx-auto mt-6">
            <Image
              src={heroPhone}
              alt="Phone 16e - Big on the basics. Bold on battery. Beautifully bright."
              width={400}
              height={800}
              className="w-full h-auto rounded-[32px] shadow-[0_20px_60px_#0008]"
              priority
            />
          </figure>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <AppleButton variant="primary" size="lg" asChild>
              <a href="#buy">Buy</a>
            </AppleButton>
            <AppleButton variant="link" asChild>
              <a href="#gallery" className="text-[var(--accent)]">Watch the film</a>
            </AppleButton>
          </div>
          <p className="text-xs text-muted-foreground">This is a concept page inspired by Apple's layout patterns. Not affiliated with Apple; no Apple assets used.</p>
        </div>
      </div>
    </section>
  );
}
