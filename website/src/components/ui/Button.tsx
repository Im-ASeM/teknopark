import { Link } from "@/lib/navigation";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 uppercase tracking-wider";
  const variants = {
    primary:
      "bg-accent text-dark-primary hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(227,255,4,0.3)]",
    outline:
      "border border-accent text-accent hover:bg-accent hover:text-dark-primary",
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
