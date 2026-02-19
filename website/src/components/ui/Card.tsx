type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-dark-border bg-dark-card p-6 lg:p-8 ${
        hover
          ? "transition-all duration-300 hover:border-accent/20 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(227,255,4,0.05)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
