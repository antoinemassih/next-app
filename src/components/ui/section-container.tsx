import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  withBorder?: boolean;
  background?: "default" | "neutral" | "transparent";
  padding?: "default" | "large" | "small";
  scrollOffset?: boolean;
}

const SectionContainer = React.forwardRef<HTMLElement, SectionContainerProps>(
  ({ 
    className, 
    children, 
    withBorder = false, 
    background = "default",
    padding = "default",
    scrollOffset = true,
    ...props 
  }, ref) => {
    const baseClasses = cn(
      // Border
      withBorder && "border-t border-black/10 dark:border-white/10",
      // Background
      background === "neutral" && "bg-neutral-50 dark:bg-neutral-900",
      background === "transparent" && "bg-transparent",
      // Padding
      padding === "small" && "py-12",
      padding === "default" && "py-16", 
      padding === "large" && "py-20",
      // Scroll offset
      scrollOffset && "scroll-mt-20",
      className
    );

    return (
      <section className={baseClasses} ref={ref} {...props}>
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>
    );
  }
);
SectionContainer.displayName = "SectionContainer";

export { SectionContainer };
