export function Rule({ variant = "single" }: { variant?: "single" | "double" }) {
  if (variant === "double") return <hr className="border-0 border-t-[3px] border-double border-ink my-10" />;
  return <hr className="border-0 border-t border-rule my-8" />;
}
