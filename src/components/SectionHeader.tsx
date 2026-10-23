import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, align = "left" }: SectionHeaderProps) {
  const wrap = cn(
    "mb-10 lg:mb-16",
    align === "center" ? "mx-auto text-center max-w-3xl" : "",
  );
  return (
    <div className={wrap}>
      <h2 className="font-serif text-bosque text-h1 mb-4 lg:mb-6 text-balance">{title}</h2>
      {subtitle && (
        <p className="font-sans text-carbone/80 text-body max-w-2xl lg:max-w-none mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
