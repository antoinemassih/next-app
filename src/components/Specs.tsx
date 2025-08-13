"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";

export default function Specs() {
  return (
    <section id="specs" className="border-t border-border py-16">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Tech specs"
          subtitle="The details that make the difference"
          className="mb-12"
        />
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Display</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-3 sm:grid-cols-2 text-muted-foreground">
                <div>6.7‑inch OLED</div>
                <div>ProMotion up to 120Hz</div>
                <div>2000 nits peak brightness</div>
                <div>Dynamic Island</div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Performance</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-3 sm:grid-cols-2 text-muted-foreground">
                <div>A18 chip</div>
                <div>Neural Engine</div>
                <div>Up to 1TB storage</div>
                <div>All‑day battery life</div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Camera</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-3 sm:grid-cols-2 text-muted-foreground">
                <div>48MP main camera</div>
                <div>Ultra‑wide 12MP</div>
                <div>4K Dolby Vision HDR</div>
                <div>Photonic Engine</div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
