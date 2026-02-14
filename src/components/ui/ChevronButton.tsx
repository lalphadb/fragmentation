import Link from "next/link";

interface ChevronButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "orange" | "outline" | "dark";
  className?: string;
}

export default function ChevronButton({ href, children, variant = "orange", className = "" }: ChevronButtonProps) {
  const base = variant === "orange"
    ? "btn-chevron-orange"
    : variant === "dark"
    ? "btn-chevron-dark"
    : "btn-chevron-outline";

  return (
    <Link href={href} className={`${base} ${className}`}>
      {children}
    </Link>
  );
}
