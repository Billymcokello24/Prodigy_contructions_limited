import { ArrowUpRight } from "lucide-react";

/** Editorial ↗ arrow link used throughout the site. */
export default function ArrowLink({
  href,
  children,
  className = "",
  align = "left",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "right" | "center";
}) {
  const alignment =
    align === "left" ? "justify-start" : align === "right" ? "justify-end" : "justify-center";
  return (
    <a href={href} className={`arrow-link ${alignment} ${className}`}>
      <span>{children}</span>
      <ArrowUpRight className="arr h-3.5 w-3.5" aria-hidden />
    </a>
  );
}