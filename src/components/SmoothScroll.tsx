"use client";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const headerOffset = 64; // ~h-14
    const duration = 500;

    const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    function scrollToTarget(target: HTMLElement) {
      const startY = window.scrollY;
      const targetRect = target.getBoundingClientRect();
      const targetY = startY + targetRect.top - headerOffset;
      const startTime = performance.now();

      function step(now: number) {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        const eased = easeInOutCubic(t);
        window.scrollTo(0, startY + (targetY - startY) * eased);
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    const onClick = (e: Event) => {
      const el = e.target as HTMLElement;
      const anchor = el.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id) as HTMLElement | null;
      if (!target) return;
      e.preventDefault();
      scrollToTarget(target);
      history.pushState(null, "", id);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
