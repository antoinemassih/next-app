import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const appleButtonVariants = cva(
  "inline-flex items-center justify-center gap-1 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
  {
    variants: {
      variant: {
        primary: "rounded-full bg-[#0071e3] text-white shadow-[0_1px_0_rgba(0,0,0,0.2)] hover:bg-[#0077ED] active:translate-y-px dark:bg-[#0a84ff] dark:hover:bg-[#0b86ff]",
        secondary: "rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
        link: "text-blue-600 hover:underline underline-offset-4 dark:text-blue-400",
        ghost: "rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors",
      },
      size: {
        sm: "px-4 py-1.5 text-[13px]",
        default: "px-5 py-1.5 text-[13px]",
        lg: "px-6 py-2 text-[14px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface AppleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof appleButtonVariants> {
  asChild?: boolean;
}

const AppleButton = React.forwardRef<HTMLButtonElement, AppleButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(appleButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
AppleButton.displayName = "AppleButton";

export { AppleButton, appleButtonVariants };
