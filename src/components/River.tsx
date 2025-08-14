"use client";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

function Row({ title, body, reverse = false, image, alt }: { title: string; body: string; reverse?: boolean; image?: StaticImageData; alt?: string }) {
  return (
    <div className={`grid items-center gap-4 md:gap-5 md:grid-cols-2 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <div className="aspect-[16/10] relative reveal-up">
        {image ? (
          <Image
            src={image}
            alt={alt || title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="reveal-up">
        <h3 className="text-3xl md:text-4xl font-bold leading-tight text-balance max-w-[20ch] md:max-w-[22ch]">
          {title}
        </h3>
        <p className="mt-3 text-lg md:text-xl text-muted-foreground leading-snug text-balance whitespace-pre-line max-w-[42ch] md:max-w-[48ch]">
          {body}
        </p>
      </div>
    </div>
  );
}

import { SectionHeader } from "@/components/ui/section-header";
import airpodsImg from "../../assets/airpods_large.png";
import macImg from "../../assets/mac_large.png";
import watchImg from "../../assets/watch_large.png";

export default function River() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>(".reveal-up"));
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // once visible, unobserve to avoid repeated work
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    // Stagger by adding transition-delay based on index
    els.forEach((el, idx) => {
      el.style.transitionDelay = `${Math.min(idx * 80, 320)}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="border-t border-border py-20 scroll-mt-24">
      <div className="container px-4">
        <SectionHeader 
          title="Like a producer. Unlike any producer."
          subtitle="Goes beyond what you can imagine of a producer"
          className="mb-16"
        />
        <div className="space-y-16">
          <Row
            title="Built to go places."
            body="From .COM to dot-everywhere,Tested across climates, cuisines, and countless boarding gates. "
            image={airpodsImg}
            alt="AirPods product image"
          />
          <Row
            title="Bright, accurate, adaptive."
            body="Brillaint, sharp wit translates seamlessly indoor, outdoor , from boardrooms to brunchtables"
            reverse
            image={macImg}
            alt="Mac product image"
          />
          <Row
            title="Limited Edition. Unlimited Ambition."
            body={"Fashion-forward operating system.\nAesthetic precision with passion thats always in season."}
            image={watchImg}
            alt="Apple Watch product image"
          />
        </div>
      </div>
    </section>
  );
}
