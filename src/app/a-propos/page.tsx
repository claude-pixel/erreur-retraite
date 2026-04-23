import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";
import { CTASmartRetraite } from "@/components/cta/CTASmartRetraite";

export const metadata = {
  title: "À propos — l'équipe et la ligne éditoriale d'erreur-retraite.fr",
  description:
    "erreur-retraite.fr est un média éditorial indépendant, édité par Compétence Retraite EURL. Mission, équipe, sources et partenaires.",
};

export default function AProposPage() {
  return (
    <>
      <div className="container-ed py-14">
        <RubriqueLabel >À propos</RubriqueLabel>
        <h1
          className="font-bold text-ink mt-5 mb-6"
          style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.2rem)", lineHeight: 1.1 }}
        >
          Un média d'information <em className="text-emerald">indépendant</em> sur la retraite
        </h1>
        <div className="prose-editorial max-w-prose">
          <p>
            erreur-retraite.fr est un média éditorial consacré aux erreurs de
            pension et aux droits à la retraite en France. Nous documentons,
            décryptons et expliquons, à partir de sources officielles — Cour des
            comptes, DREES, Conseil d'orientation des retraites, caisses
            nationales — les mécanismes qui peuvent amputer durablement une
            pension.
          </p>
          <p>
            Notre ligne éditoriale s'inspire de la presse économique sérieuse :
            chiffres sourcés, analyse de fond, refus du sensationnalisme. Nous
            ne cherchons pas à effrayer mais à informer un public averti —
            cadres en seconde partie de carrière, travailleurs non-salariés,
            dirigeants — qui souhaite comprendre les enjeux de sa future
            pension.
          </p>

          <h2>Qui édite ce média</h2>
          <p>
            erreur-retraite.fr est édité par <strong>Compétence Retraite EURL</strong>{" "}
            (SIREN 980 857 488), cabinet de conseil retraite basé en France.
          </p>

          <h2>La rédaction</h2>
          <p>
            Les articles publiés sur erreur-retraite.fr sont rédigés par la
            rédaction interne et complétés, pour les sujets techniques, par
            l'expertise de <strong>Claude-Henri Poitou</strong>, consultant en
            protection sociale depuis plus de dix-huit ans (sept ans chez AG2R
            La Mondiale, onze ans comme consultant en régimes sociaux). Les
            articles signés portent une mention explicite d'auteur.
          </p>

          <h2>Nos sources</h2>
          <p>
            Chaque chiffre publié est sourcé. Nos références principales :
          </p>
          <ul>
            <li>Cour des comptes — rapports annuels sur la Sécurité sociale</li>
            <li>DREES — statistiques officielles de la retraite</li>
            <li>Conseil d'orientation des retraites (COR) — projections</li>
            <li>CNAV, AGIRC-ARRCO, SSI, CIPAV — données par régime</li>
            <li>Service-public.fr — réglementation en vigueur</li>
          </ul>

          <h2>Services partenaires</h2>
          <p>
            erreur-retraite.fr met en avant deux services complémentaires
            dont il est proche sur le plan éditorial :{" "}
            <a href="https://smartretraite.fr">SmartRetraite</a> pour le
            diagnostic en ligne du relevé de carrière, et{" "}
            <a href="https://competence-retraite.fr">Compétence Retraite</a>{" "}
            pour l'accompagnement personnalisé. Ces mises en avant sont
            assumées et identifiées en tant que telles.
          </p>
        </div>
      </div>
      <CTASmartRetraite />
    </>
  );
}
