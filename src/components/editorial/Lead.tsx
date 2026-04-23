export function Lead({
  children,
}: {
  children: React.ReactNode;
  lettrine?: boolean;
}) {
  return (
    <p className="text-[1.2rem] leading-[1.55] text-ink-2 font-medium mb-6 max-w-[640px]">
      {children}
    </p>
  );
}
