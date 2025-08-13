export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container px-4 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span className="inline-block size-2 rounded-full bg-accent shadow-[0_0_12px_2px_var(--accent)]" aria-hidden />
            <span>Velar</span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Concept page for demonstration purposes. Apple, iPhone, and related marks are trademarks of Apple Inc. This page is not affiliated with or endorsed by Apple.</p>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Explore</h4>
          <nav className="flex flex-col text-sm text-muted-foreground gap-1">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#gallery" className="hover:text-foreground">Gallery</a>
            <a href="#specs" className="hover:text-foreground">Tech specs</a>
          </nav>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Support</h4>
          <nav className="flex flex-col text-sm text-muted-foreground gap-1">
            <a href="#">FAQ</a>
            <a href="#">Warranty</a>
            <a href="#">Repairs</a>
          </nav>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Legal</h4>
          <nav className="flex flex-col text-sm text-muted-foreground gap-1">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Licenses</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
