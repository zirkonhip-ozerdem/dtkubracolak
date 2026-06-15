type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#c9a36d]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#252525] sm:text-3xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-base leading-7 text-[#6a625b]">{lead}</p>
      ) : null}
    </div>
  );
}