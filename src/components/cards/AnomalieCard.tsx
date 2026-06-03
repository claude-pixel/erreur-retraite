import Link from "next/link";
import { AnomalieIcon } from "@/components/icons/AnomalieIcons";

const THEMES: Record<string, { bg: string; blob: string; ring: string; ico: string }> = {
  "1": { bg: "bg-brick-light", blob: "bg-brick", ring: "bg-white", ico: "text-brick" },
  "2": { bg: "bg-cobalt-light", blob: "bg-cobalt", ring: "bg-white", ico: "text-cobalt" },
  "3": { bg: "bg-plum-light", blob: "bg-plum", ring: "bg-white", ico: "text-plum" },
  "4": { bg: "bg-sun-light", blob: "bg-sun-dark", ring: "bg-white", ico: "text-sun-dark" },
  "5": { bg: "bg-sage-light", blob: "bg-sage", ring: "bg-white", ico: "text-sage" },
  "6": { bg: "bg-emerald-light", blob: "bg-emerald", ring: "bg-white", ico: "text-emerald" },
  "7": { bg: "bg-cobalt-light", blob: "bg-plum", ring: "bg-white", ico: "text-plum" },
  "8": { bg: "bg-sun-light", blob: "bg-brick", ring: "bg-white", ico: "text-brick" },
};

export type AnomalieCardProps = {
  num: string;
  titre: string;
  desc: string;
  impact: string;
  href: string;
  tempsLecture?: number;
  slug: string;
};

export function AnomalieCard({ num, titre, desc, href, tempsLecture, slug }: AnomalieCardProps) {
  // Fait cycler les 8 thèmes de couleur au-delà du n° 8 (sinon tout retombe sur le thème 1).
  const n = parseInt(num, 10) || 1;
  const key = String(((n - 1) % 8) + 1);
  const theme = THEMES[key] ?? THEMES["1"];
  return (
    <Link
      href={href}
      className="group block no-underline bg-paper border border-rule rounded-[20px] overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(29,44,44,0.08)]"
    >
      <div className={`relative flex items-center justify-center ${theme.bg}`} style={{ aspectRatio: "1.6 / 1" }}>
        <div
          className={`absolute ${theme.blob} opacity-40 rounded-[50%]`}
          style={{ width: "140%", height: "70%", bottom: "-40%", left: "-20%" }}
        />
        <div className="absolute top-3.5 left-3.5 bg-paper text-ink px-3 py-1 rounded-pill text-[0.72rem] font-bold tracking-wider">
          N° {num}
        </div>
        <div className={`relative z-10 w-20 h-20 ${theme.ring} rounded-full flex items-center justify-center shadow-[0_6px_16px_rgba(29,44,44,0.08)]`}>
          <AnomalieIcon slug={slug} size={44} className={theme.ico} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-[1.1rem] text-ink leading-snug font-bold mb-2 group-hover:text-emerald transition-colors">
          {titre}
        </h3>
        <p className="text-[0.88rem] text-ink-2 leading-[1.5] mb-4">{desc}</p>
        <div className="pt-3.5 border-t border-rule flex justify-center items-center text-[0.78rem]">
          {tempsLecture ? <span className="text-muted">{tempsLecture} min de lecture</span> : null}
        </div>
      </div>
    </Link>
  );
}
