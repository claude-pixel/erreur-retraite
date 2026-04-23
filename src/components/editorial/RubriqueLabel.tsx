export function RubriqueLabel({
  children,
}: {
  children: React.ReactNode;
  withRule?: boolean;
}) {
  return <span className="rubrique-label">{children}</span>;
}
