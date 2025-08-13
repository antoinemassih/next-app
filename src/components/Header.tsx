import { AppleButton } from "@/components/ui/apple-button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur bg-background/70 [backdrop-filter:saturate(1.2)]">
      <div className="container px-4">
        <div className="flex h-14 items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span
              aria-hidden
              className="inline-block size-[18px] rounded-full shadow-[0_0_12px_#fff2]"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #ffffff88, #ffffff00), conic-gradient(from 0deg, #6db7ff, #b69cff, #ff7ad9, #49e79f, #ffd27a, #6db7ff)",
              }}
            />
            <span>Velar</span>
          </div>
          <nav className="hidden sm:flex items-center gap-4 text-[14px] text-muted-foreground">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#gallery" className="hover:text-foreground">Gallery</a>
            <a href="#specs" className="hover:text-foreground">Tech specs</a>
            <a href="#compare" className="hover:text-foreground">Compare</a>
            <AppleButton
              variant="primary"
              size="sm"
              asChild
              className="ml-2"
            >
              <a href="#buy">Buy</a>
            </AppleButton>
          </nav>
        </div>
      </div>
    </header>
  );
}
