"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

export type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  label?: string;
  formatValue?: (value: number) => string;
};

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, label, formatValue, defaultValue = [50], ...props }, ref) => {
  const [value, setValue] = React.useState<number[]>(
    Array.isArray(defaultValue) ? defaultValue : [Number(defaultValue)]
  );

  return (
    <div className={cn("w-full", className)}>
      {label ? (
        <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
          <span>{label}</span>
          <span aria-live="polite">
            {formatValue ? formatValue(value[0]) : `${value[0]}`}
          </span>
        </div>
      ) : null}
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          props.disabled && "opacity-50"
        )}
        defaultValue={value}
        onValueChange={setValue}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-[var(--border)]">
          <SliderPrimitive.Range className="absolute h-full bg-[var(--accent)]" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className={cn(
            "block h-5 w-5 rounded-full border border-[var(--border)] bg-[var(--card)]",
            "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2",
            "transition-shadow"
          )}
        />
      </SliderPrimitive.Root>
    </div>
  );
});
Slider.displayName = "Slider";

export { Slider };
