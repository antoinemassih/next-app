import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  size?: "default" | "large";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  alignment = "center",
  size = "default",
  className
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "space-y-2",
      alignment === "center" ? "text-center" : "text-left",
      className
    )}>
      <h2 className={cn(
        "font-semibold tracking-tight",
        size === "large" 
          ? "text-4xl sm:text-5xl md:text-6xl" 
          : "text-3xl sm:text-4xl md:text-5xl",
        "text-foreground"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-muted-foreground max-w-3xl",
          size === "large" ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
          alignment === "center" ? "mx-auto" : ""
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
