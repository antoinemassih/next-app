"use client";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";

const slides = [
  {
    quote: "Raghda was the reason I didn’t quit my job after just a few weeks of joining the company. Nine and a half years later, I’m still here. Thank you, Raghoood. ❤️❤️❤️",
    author: "Apple Marcom emplloyee",
    role: "",
    background: "bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900",
  },
  {
    quote: ` It was 2015, and we were in London working on one tough project — launching apple.com in Arabic. I still remember Raghdah and I sitting at lunch, completely exhausted from all the travel and utterly overwhelmed. We felt lost. I looked at her and said, “I’m done, this is exhausting. I don’t know how long I can last.”

She looked back at me and said, “Same. I’m probably here for just one year.”

That was one very long year, Raghdah!

If there’s one person who defined those early days for me, and somehow still managed to deal with all my nonsense - it’s Raghdah. 

Raghdah is brilliant, incredibly hardworking, smart, very funny (in her own witty way). I’m lucky to have started my career with her 10 years ago!

Congratulations on a little more than just one year.`,
    author: "Apple Marcom employee",
    role: "",
    background: "bg-gradient-to-br from-emerald-800 via-teal-800 to-cyan-800",
  },
  {
    quote: "Raghdah has such a beautiful soul, and we always look forward to seeing her at the office because she’s sure to greet you with a big, warm smile. Congratulations on your 10-year milestone, cheers to you from — Apple PR Team",
    author: "Apple PR Team",
    role: "",
    background: "bg-gradient-to-br from-orange-800 via-red-800 to-pink-800",
  },
  {
    quote: "From the very first day we started working together you have been incredibly positive and supportive. You somehow manage to keep your radar list perfectly clean, which I am convinced is a real superpower 😎. It is something I have been trying to do myself, so far without much success 😭. It has been such a pleasure working with you and even though we are in different PODs, I always look forward to any chance we get to collaborate. And of course I am super grateful for the amazing Interactive Safaris you have organised for us. They are always such a highlight. Here is to many more great moments and the next Safari 🥂",
    author: "Apple Marcom employee",
    role: "",
    background: "bg-gradient-to-br from-slate-800 via-gray-800 to-zinc-900",
  },
  {
    quote: "Great working with you in one team! Wishing you another 10+++ years of challenging, yet rewarding launches, inspiring briefs, adventurous customer - and personal - journeys and fun!",
    author: "Apple Marcom Employee",
    role: "",
    background: "bg-gradient-to-br from-indigo-800 via-blue-800 to-cyan-800",
  },
  {
    quote: "if you want something done, give it to Raghdah.",
    author: "Apple Marcom Employee",
    role: "",
    background: "bg-gradient-to-br from-fuchsia-800 via-rose-800 to-red-800",
  },
  {
    quote: `I’ve known Raghdah for almost 10 years, and she’s always been that rare mix of calm, thoughtful, and effortlessly professional. She’s incredibly easy to talk to, and her energy naturally brings people together. She’s also the one you turn to when there’s something tricky to solve.

Over the years, she’s been a steady presence — genuinely supportive and always up for a laugh. From the workshop fun in Cupertino to the rollercoaster of CEMEA merge — it’s been an absolute joy working alongside her.

Happy 10 years, dear Raghdah!`,
    author: "Apple Marcom employee",
    role: "",
    background: "bg-gradient-to-br from-teal-800 via-emerald-800 to-green-800",
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
