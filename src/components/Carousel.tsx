"use client";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";

const slides = [
  {
    title: "Survival of the toughest.",
    subtitle: "2",
    background: "bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
  },
  {
    title: "Advanced camera system with 48MP Fusion camera.",
    subtitle: "",
    background: "bg-gradient-to-br from-emerald-800 via-teal-800 to-cyan-800"
  },
  {
    title: "All-day battery life with fast charging.",
    subtitle: "",
    background: "bg-gradient-to-br from-orange-800 via-red-800 to-pink-800"
  }
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

    vp.addEventListener("touchstart", onTouchStart, { passive: true } as any);
    vp.addEventListener("touchmove", onTouchMove, { passive: true } as any);
    vp.addEventListener("touchend", onTouchEnd);

    // initial position
    go(index);

    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("keydown", onKey);
      vp.removeEventListener("touchstart", onTouchStart as any);
      vp.removeEventListener("touchmove", onTouchMove as any);
      vp.removeEventListener("touchend", onTouchEnd as any);
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
          title="Innovation in motion"
          subtitle="Discover the features that set Phone 16e apart"
          className="mb-16"
        />
        <div
          ref={viewportRef}
          className="relative overflow-hidden rounded-3xl"
          aria-live="polite"
        >
          <div
            ref={trackRef}
            className="flex [transition-property:transform] duration-1000 [transition-timing-function:cubic-bezier(.25,.46,.45,.94)] will-change-transform"
          >
            {slides.map((slide, i) => (
              <div key={i} className={`min-w-full ${slide.background} relative flex items-center justify-center px-8 py-16 text-white`}>
                <div className="flex max-w-6xl items-center gap-12">
                  {/* Text content */}
                  <div className="flex-1">
                    <h2 className="max-w-lg text-[32px] font-semibold leading-tight tracking-tight md:text-[40px]">
                      {slide.title}
                      {slide.subtitle && (
                        <sup className="ml-1 text-[20px] font-normal">{slide.subtitle}</sup>
                      )}
                    </h2>
                  </div>
                  
                  {/* Phone mockup */}
                  <div className="relative">
                    <div className="relative h-[500px] w-[250px] rounded-[50px] border-4 border-neutral-800 bg-black shadow-2xl">
                      {/* Screen */}
                      <div className="absolute inset-3 overflow-hidden rounded-[42px] bg-gradient-to-b from-blue-400 to-purple-600">
                        {/* Dynamic Island */}
                        <div className="absolute left-1/2 top-3 h-8 w-32 -translate-x-1/2 rounded-full bg-black"></div>
                        
                        {/* Status bar */}
                        <div className="absolute left-6 top-4 flex items-center gap-1 text-white">
                          <div className="text-xs font-medium">9:41</div>
                        </div>
                        <div className="absolute right-6 top-4 flex items-center gap-1 text-white">
                          <div className="flex gap-1">
                            <div className="h-2 w-1 rounded-full bg-white"></div>
                            <div className="h-2 w-1 rounded-full bg-white"></div>
                            <div className="h-2 w-1 rounded-full bg-white"></div>
                            <div className="h-2 w-1 rounded-full bg-white/50"></div>
                          </div>
                          <div className="ml-1 text-xs">100%</div>
                        </div>
                        
                        {/* Time display */}
                        <div className="absolute left-1/2 top-24 -translate-x-1/2 text-center text-white">
                          <div className="text-sm opacity-75">Monday, September 9</div>
                          <div className="text-6xl font-thin">9:41</div>
                        </div>
                        
                        {/* Lock screen elements */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                          <div className="h-1 w-32 rounded-full bg-white/30"></div>
                        </div>
                        
                        {/* Bottom icons */}
                        <div className="absolute bottom-6 left-6">
                          <div className="h-8 w-8 rounded-lg bg-white/20"></div>
                        </div>
                        <div className="absolute bottom-6 right-6">
                          <div className="h-8 w-8 rounded-lg bg-white/20"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hand holding phone */}
                    <div className="absolute -bottom-12 -left-16 h-24 w-24 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 opacity-80"></div>
                    <div className="absolute -bottom-8 -right-12 h-20 w-20 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 opacity-60"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation controls */}
        <div className="mt-8 flex justify-center">
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
