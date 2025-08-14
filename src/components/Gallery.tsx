"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import img1 from "../../assets/gallery/IMG_0175.jpeg";
import img2 from "../../assets/gallery/IMG_0186.jpeg";
import img3 from "../../assets/gallery/IMG_1576.jpeg";
import img4 from "../../assets/gallery/IMG_1866.jpeg";
import img5 from "../../assets/gallery/PHOTO-2025-07-12-16-10-32.jpg";
import img6 from "../../assets/gallery/Safari.jpg";
import img7 from "../../assets/gallery/IMG_8628.jpeg";
import img8 from "../../assets/gallery/IMG_7431.jpeg";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transform-gpu will-change-[opacity,transform] transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
}

export default function Gallery() {
  const images = [img1, img2, img4, img3, img5, img6];
  const topFirst = images[0];
  const topSecond = images[1];
  const topThird = images[2];
  const featured = images[3]; // should take entire width
  const bottomLeft = images[4];
  const bottomRight = images[5];
  const extraLeft = img7;
  const extraRight = img8;
  return (
    <section id="gallery" className="border-t border-border py-20 scroll-mt-24">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Instant pairing. Powerful connection"
          subtitle="Syncs seamlessly for effortless ideas, energy, and spirit"
          className="mb-16"
        />
        {/* Row 1: three tall tiles (first three images) */}
        <div className="grid grid-cols-3 gap-3">
          {(() => {
            let i = 0;
            return (
              <>
                {topFirst && (
                  <FadeIn delay={i++ * 120} className="col-span-1">
                    <div className="aspect-[4/5] overflow-hidden rounded-xl border border-border">
                      <div className="relative h-full w-full">
                        <Image src={topFirst} alt="Gallery image 1" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw" />
                      </div>
                    </div>
                  </FadeIn>
                )}
                {topSecond && (
                  <FadeIn delay={i++ * 120} className="col-span-1">
                    <div className="aspect-[4/5] overflow-hidden rounded-xl border border-border">
                      <div className="relative h-full w-full">
                        <Image src={topSecond} alt="Gallery image 2" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw" />
                      </div>
                    </div>
                  </FadeIn>
                )}
                {topThird && (
                  <FadeIn delay={i++ * 120} className="col-span-1">
                    <div className="aspect-[4/5] overflow-hidden rounded-xl border border-border">
                      <div className="relative h-full w-full">
                        <Image src={topThird} alt="Gallery image 3" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw" />
                      </div>
                    </div>
                  </FadeIn>
                )}
              </>
            );
          })()}
        </div>
        <div className="h-3" />
        {/* Featured full-width banner: 4th image */}
        {featured && (
          <div className="grid grid-cols-3 gap-3">
            <FadeIn delay={120 * 3} className="col-span-3">
              <div className="aspect-[16/5] overflow-hidden rounded-xl border border-border">
                <div className="relative h-full w-full">
                  <Image src={featured} alt="Featured gallery image" fill className="object-cover" sizes="(max-width: 768px) 100vw, 100vw" />
                </div>
              </div>
            </FadeIn>
          </div>
        )}
        <div className="h-3" />
        {/* Row 3: last two side-by-side equal height */}
        <div className="grid grid-cols-2 gap-3">
          {bottomLeft ? (
            <FadeIn delay={120 * 4} className="col-span-1">
              <div className="aspect-[4/5] overflow-hidden rounded-xl border border-border">
                <div className="relative h-full w-full">
                  <Image src={bottomLeft} alt="Gallery image 5" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
                </div>
              </div>
            </FadeIn>
          ) : null}
          {bottomRight ? (
            <FadeIn delay={120 * 5} className="col-span-1">
              <div className="aspect-[4/5] overflow-hidden rounded-xl border border-border">
                <div className="relative h-full w-full">
                  <Image src={bottomRight} alt="Gallery image 6" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
                </div>
              </div>
            </FadeIn>
          ) : null}
        </div>

        {/* Row 4: newly added two images side-by-side */}
        <div className="h-3" />
        <div className="grid grid-cols-2 gap-3">
          {extraLeft ? (
            <FadeIn delay={120 * 6} className="col-span-1">
              <div className="aspect-[4/5] overflow-hidden rounded-xl border border-border">
                <div className="relative h-full w-full">
                  <Image src={extraLeft} alt="Gallery image 7" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
                </div>
              </div>
            </FadeIn>
          ) : null}
          {extraRight ? (
            <FadeIn delay={120 * 7} className="col-span-1">
              <div className="aspect-[4/5] overflow-hidden rounded-xl border border-border">
                <div className="relative h-full w-full">
                  <Image src={extraRight} alt="Gallery image 8" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
                </div>
              </div>
            </FadeIn>
          ) : null}
        </div>

        {/* Row 3: (removed single tile; now featured above) */}
      </div>
    </section>
  );
}
