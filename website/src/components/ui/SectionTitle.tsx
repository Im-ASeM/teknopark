type SectionTitleProps = {
  tag: string;
  title: string;
  highlight: string;
  description?: string;
  center?: boolean;
};

export function SectionTitle({
  tag,
  title,
  highlight,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <span className="mb-6 inline-block rounded-full border border-[#454750] px-4 py-2 font-[family-name:var(--font-manrope)] text-base font-normal uppercase text-accent">
        {tag}
      </span>
      <h2 className="font-[family-name:var(--font-plus-jakarta)] text-[35px] leading-[45px] font-bold capitalize text-text-primary sm:text-[55px] sm:leading-[70px]">
        {title}
        <span className="font-medium italic tracking-[-1.2px]">
          {highlight}
        </span>
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
