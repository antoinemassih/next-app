import { AppleButton } from "@/components/ui/apple-button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur bg-background/70 [backdrop-filter:saturate(1.2)]">
      <div className="container px-4">
        <div className="flex h-14 items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span
             
            />Rudy Series 10
            <span></span>
          </div>
          <nav className="hidden sm:flex items-center gap-4 text-[14px] text-muted-foreground">
            <a href="#feature-grid" className="hover:text-foreground">Features</a>
            <a href="#carousel" className="hover:text-foreground">Testimonial</a>
            <a href="#gallery" className="hover:text-foreground">Gallery</a>
            <a href="#compare" className="hover:text-foreground">Compare</a>
            <AppleButton
              variant="primary"
              size="sm"
              asChild
              className="ml-2"
            >
              <a href="#buy">Book</a>
            </AppleButton>
          </nav>
        </div>
      </div>
    </header>
  );
}
