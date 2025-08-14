import { SectionContainer } from "@/components/ui/section-container";

export default function MemojiStrip() {
  return (
    <SectionContainer id="memoji" aria-label="Memoji section">
      <div className="border-t border-border py-12 md:py-16">
        <p className="text-center text-sm md:text-base text-neutral-600 dark:text-neutral-300 mb-6">
          Game recognizes game
        </p>
        <ul className="space-y-6 md:space-y-8" role="list" aria-label="memoji-list">
          {/* Placeholder rows for future memoji images, one per row */}
          {[...Array(4)].map((_, i) => (
            <li key={i} role="listitem">
              <div className="w-full aspect-[16/7] md:aspect-[16/6] rounded-3xl bg-neutral-100 dark:bg-neutral-800 border border-border flex items-center justify-center text-neutral-400 dark:text-neutral-500 text-xs select-none">
                Coming soon
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
