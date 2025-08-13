import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section-container";

export default function BuyCta() {
  return (
    <SectionContainer id="buy">
        <div className="rounded-xl border border-border bg-card/60 p-6 text-center">
          <h3 className="text-2xl font-bold">Phone 16e</h3>
          <div className="text-muted-foreground">From $699</div>
          <div className="mt-4 flex justify-center gap-3">
            <Button className="rounded-full">Choose your color</Button>
            <Button className="rounded-full" variant="secondary" asChild>
              <a href="#specs">View tech specs</a>
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Pricing and specs are placeholders for this demo.</p>
        </div>
    </SectionContainer>
  );
}
