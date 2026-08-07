type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-4 text-4xl font-bold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}