import Link from "next/link";

export function TopStrip() {
  return (
    <div className="bg-emerald text-white text-[0.82rem] py-2">
      <div className="container-ed flex items-center justify-between gap-4">
        <span>
          <strong className="font-bold">Bonne nouvelle</strong>
          {" — nos simulateurs sont désormais gratuits et sans inscription"}
        </span>
        <Link
          href="/outils"
          className="text-white underline underline-offset-[3px] decoration-1 hover:text-sun-light"
        >
          Essayer maintenant →
        </Link>
      </div>
    </div>
  );
}
