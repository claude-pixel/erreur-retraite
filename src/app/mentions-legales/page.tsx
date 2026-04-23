import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";

export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site erreur-retraite.fr.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="container-ed py-14 max-w-[800px]">
      <RubriqueLabel withRule>Informations légales</RubriqueLabel>
      <h1
        className="font-serif font-bold text-ink mt-5 mb-8"
        style={{ fontSize: "2.4rem", lineHeight: 1.15 }}
      >
        Mentions légales
      </h1>

      <div className="prose-editorial">
        <h2>Éditeur</h2>
        <p>
          <strong>Compétence Retraite EURL</strong>
          <br />
          SIREN : 980 857 488
          <br />
          Siège social : France
          <br />
          Email : contact@competence-retraite.fr
        </p>

        <h2>Directeur de publication</h2>
        <p>Claude-Henri Poitou, gérant de Compétence Retraite EURL.</p>

        <h2>Hébergement</h2>
        <p>
          Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA — vercel.com
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus publiés sur erreur-retraite.fr — articles,
          illustrations, charte graphique, base de données — est protégé par
          le droit d'auteur et la propriété intellectuelle. Toute reproduction,
          représentation ou exploitation non autorisée est interdite.
        </p>

        <h2>Signalement</h2>
        <p>
          Pour signaler une erreur factuelle ou une difficulté technique :
          contact@competence-retraite.fr.
        </p>
      </div>
    </div>
  );
}
