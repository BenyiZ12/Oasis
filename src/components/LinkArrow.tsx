import * as React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/cn";

interface LinkArrowProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  external?: boolean;
  size?: "sm" | "base";
}

export function LinkArrow({
  children,
  external = false,
  size = "base",
  className,
  ...props
}: LinkArrowProps) {
  const Icon = external ? ExternalLink : ArrowRight;
  const base =
    "inline-flex items-center gap-1.5 font-sans font-medium text-bosque transition-colors decoration-bosque underline-offset-4";
  const sizes: Record<string, string> = {
    sm: "text-sm",
    base: "text-base",
  };
  return (
    <a
      {...props}
      className={cn(base, sizes[size], className)}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
      <Icon className={`w-4 h-4 transition-transform group-hover:translate-x-1 [& svg]:transition-transform`} />
    </a>
  );
}
