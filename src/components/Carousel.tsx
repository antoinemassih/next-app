"use client";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";

const slides = [
  {
    quote: "Rudy transformed our launch from good to unforgettable.",
    author: "Alex Rivera",
    role: "VP Marketing, Acme Co.",
    background: "bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900",
  },
  {
    quote: "The strategic clarity and creative discipline were next-level.",
    author: "Priya Shah",
    role: "Founder, Nova Labs",
    background: "bg-gradient-to-br from-emerald-800 via-teal-800 to-cyan-800",
  },
  {
    quote: "I've never seen a team move this fast without compromising quality.",
    author: "Marcus Lee",
    role: "Head of Product, Orbit",
    background: "bg-gradient-to-br from-orange-800 via-red-800 to-pink-800",
  },
  {
    quote: "Rudy is the rare mix of producer, strategist, and creative director.",
    author: "Sofia Martins",
    role: "Creative Lead, Beacon",
    background: "bg-gradient-to-br from-slate-800 via-gray-800 to-zinc-900",
  },
];

export default function Carousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const go = (n: number) => {
    const track = trackRef.current;
    const vp = viewportRef.current;
    if (!track || !vp) return;
    const i = Math.max(0, Math.min(slides.length - 1, n));
    setIndex(i);
    const offset = -i * vp.clientWidth;
    track.style.transform = `translate3d(${offset}px,0,0)`;
  };

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    const vp = viewportRef.current;
    if (!track || !vp) return;

    const onResize = () => go(index);
    window.addEventListener("resize", onResize);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        go(index - 1);
        stopAutoPlay();
        setIsPlaying(false);
      }
      if (e.key === "ArrowRight") {
        go(index + 1);
        stopAutoPlay();
        setIsPlaying(false);
      }
    };
    document.addEventListener("keydown", onKey);

    let startX = 0;
    let dx = 0;
    let touching = false;
    const onTouchStart = (e: TouchEvent) => {
      touching = true;
      startX = e.touches[0].clientX;
      dx = 0;
      stopAutoPlay();
      setIsPlaying(false);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!touching) return;
      dx = e.touches[0].clientX - startX;
      track.style.transform = `translate3d(${-index * vp.clientWidth + dx}px,0,0)`;
    };
    const onTouchEnd = () => {
      touching = false;
      const t = vp.clientWidth * 0.18;
      if (dx > t) go(index - 1);
      else if (dx < -t) go(index + 1);
      else go(index);
    };

    const passiveOpts: AddEventListenerOptions = { passive: true };
    vp.addEventListener("touchstart", onTouchStart, passiveOpts);
    vp.addEventListener("touchmove", onTouchMove, passiveOpts);
    vp.addEventListener("touchend", onTouchEnd);

    // initial position
    go(index);

    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("keydown", onKey);
      vp.removeEventListener("touchstart", onTouchStart, passiveOpts);
      vp.removeEventListener("touchmove", onTouchMove, passiveOpts);
      vp.removeEventListener("touchend", onTouchEnd);
    };
  }, [index]);

  // Auto-play effect
  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isPlaying]);

  // Update slide position when index changes
  useEffect(() => {
    go(index);
  }, [index]);

  return (
    <section id="carousel" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Works hard. Plays nice"
          subtitle="Discover partnerships that sets Rudy up for success"
          className="mb-16"
        />
        <div
          ref={viewportRef}
          className="relative overflow-hidden rounded-3xl h-[640px] md:h-[720px]"
          aria-live="polite"
        >
          <div
            ref={trackRef}
            className="flex h-full [transition-property:transform] duration-1000 [transition-timing-function:cubic-bezier(.25,.46,.45,.94)] will-change-transform"
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`min-w-full h-full relative flex items-center justify-center px-8 py-8 text-white`}
              >
                <div className={`${slide.background} absolute inset-0`} aria-hidden="true" />
                <figure className="relative max-w-4xl text-center space-y-5">
                  <blockquote className="text-[22px] md:text-[30px] leading-relaxed font-medium">
                    “{slide.quote}”
                  </blockquote>
                  <figcaption className="text-sm md:text-base text-white/80">
                    <span className="font-semibold text-white">{slide.author}</span>
                    {slide.role && <span className="ml-2 text-white/70">— {slide.role}</span>}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation controls */}
        <div className="mt-4 flex justify-center">
          <div className="flex items-center gap-4 rounded-full bg-black/80 px-6 py-3 backdrop-blur-sm">
            {/* Play/Pause button */}
            <button
              onClick={togglePlayPause}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                </svg>
              ) : (
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    go(i);
                    stopAutoPlay();
                    setIsPlaying(false);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${
                    i === index 
                      ? 'bg-blue-500 scale-110' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
