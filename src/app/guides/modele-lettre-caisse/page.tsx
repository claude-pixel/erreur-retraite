"use client";

import Link from "next/link";
import { useState } from "react";
import { RubriqueLabel } from "@/components/editorial/RubriqueLabel";

type Modele = {
  slug: string;
  titre: string;
  description: string;
  destinataire: string;
  objet: string;
  corps: string;
};

const MODELES: Modele[] = [
  {
    slug: "rectification-trimestres",
    titre: "Rectification de trimestres manquants",
    description:
      "Pour demander la prise en compte de trimestres absents de votre relevé (service militaire, jobs d'été, intérim pré-2000).",
    destinataire: "CARSAT [Région]\nService relevé de carrière\n[adresse régionale]",
    objet: "Demande de rectification de mon relevé de carrière — trimestres non reportés",
    corps: `Madame, Monsieur,

N° de Sécurité sociale : [13 chiffres]
Date de naissance : [JJ/MM/AAAA]

Après examen attentif de mon relevé individuel de situation, je constate que les périodes suivantes ne figurent pas ou sont partiellement reportées :

— [Période 1 : du JJ/MM/AAAA au JJ/MM/AAAA]
   Nature : [service militaire / emploi chez X / période de chômage / ...]
   Nombre de trimestres concernés : [X]

— [Période 2 : ...]

Vous trouverez ci-joint les justificatifs de ces périodes :
  • [Livret militaire / bulletins de salaire / attestations France Travail / ...]

Je vous remercie de bien vouloir procéder à la rectification de mon compte individuel et de me transmettre un relevé actualisé sous deux à trois mois.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[Prénom NOM]
[Signature]

Pièces jointes : [à lister]`,
  },
  {
    slug: "relevé-militaire",
    titre: "Demande de relevé militaire (BRM)",
    description:
      "À adresser au Bureau central des archives administratives militaires de Pau pour obtenir la preuve de votre service national.",
    destinataire:
      "Bureau central des archives administratives militaires\nCaserne Bernadotte\n64023 PAU Cedex",
    objet: "Demande de Bulletin de Recensement Militaire (BRM)",
    corps: `Madame, Monsieur,

Je soussigné(e) [Prénom NOM], né(e) le [JJ/MM/AAAA] à [Ville, département],
numéro matricule militaire : [si connu, sinon laisser vide],

sollicite la délivrance de mon Bulletin de Recensement Militaire, nécessaire à la mise à jour de mon relevé de carrière pour la retraite.

À titre d'information, j'ai effectué mon service national du [JJ/MM/AAAA] au [JJ/MM/AAAA], dans l'arme/unité suivante : [si connue].

Je vous joins la copie d'une pièce d'identité et, le cas échéant, toute pièce susceptible de faciliter la recherche (livret de famille, carte militaire).

Vous remerciant par avance de votre diligence,

[Prénom NOM]
[Adresse complète]
[Téléphone]
[Date et signature]

Pièces jointes : copie pièce d'identité`,
  },
  {
    slug: "saisine-cra",
    titre: "Saisine de la Commission de recours amiable (CRA)",
    description:
      "En cas de refus explicite ou de silence prolongé de la caisse, dans les 2 mois suivant la notification.",
    destinataire: "Commission de recours amiable — CARSAT [Région]\n[adresse régionale]",
    objet: "Recours amiable contre la décision du [date] — dossier n° [référence]",
    corps: `Madame, Monsieur,

N° de Sécurité sociale : [13 chiffres]
Dossier de référence : [numéro communiqué par la caisse]

Par la présente, je conteste la décision du [date de la décision contestée] par laquelle votre organisme [a refusé / n'a pas fait droit à] ma demande de [rectification de trimestres / révision de pension / ...].

Motif de ma contestation :

[Exposer les faits de manière claire, en rappelant les justificatifs déjà transmis et en précisant pourquoi la décision est contestée. Citer la règle applicable le cas échéant — ex. article R.351-9 du Code de la sécurité sociale sur la validation des trimestres.]

Conformément aux articles L.142-4 et R.142-1 du Code de la sécurité sociale, je sollicite le réexamen de ma situation par la Commission de recours amiable.

Je tiens à votre disposition toute pièce complémentaire.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[Prénom NOM]
[Signature]

Pièces jointes :
  • Copie de la décision contestée
  • [Justificatifs]`,
  },
  {
    slug: "rectification-agirc-arrco",
    titre: "Rectification de points AGIRC-ARRCO",
    description:
      "Pour contester un solde de points incomplet sur votre compte AGIRC-ARRCO (erreur employeur, fusion 2019, etc.).",
    destinataire: "Votre caisse AGIRC-ARRCO\n[adresse de la caisse indiquée sur votre relevé]",
    objet: "Demande de rectification de mon compte de points AGIRC-ARRCO",
    corps: `Madame, Monsieur,

N° d'affiliation AGIRC-ARRCO : [numéro]
N° de Sécurité sociale : [13 chiffres]

Après vérification de mon compte de points sur l'espace personnel agirc-arrco.fr, je constate les anomalies suivantes :

— Année [AAAA] chez l'employeur [nom entreprise, SIRET si connu] :
   Salaire déclaré : [montant]
   Salaire effectif (selon mes bulletins) : [montant]
   Points attribués : [nombre]
   Points attendus : [nombre]

— [Autres anomalies éventuelles]

Ces anomalies peuvent provenir : [préciser si possible : sous-report de primes, conversion post-fusion 2019 des points AGIRC, points de tranche mal affectés, etc.]

Vous trouverez ci-joint :
  • Bulletins de salaire des périodes concernées
  • Attestation employeur / certificat de travail
  • [Autres pièces]

Je sollicite la révision de mon compte et la communication d'un relevé actualisé.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[Prénom NOM]
[Adresse]
[Date et signature]

Pièces jointes : [liste]`,
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="inline-flex items-center gap-2 bg-ink text-white px-4 py-2 rounded-pill font-semibold text-[0.82rem] hover:bg-emerald transition-colors"
    >
      {copied ? "Copié ✓" : "Copier le modèle"}
    </button>
  );
}

export default function ModelesLettrePage() {
  return (
    <div className="container-ed pt-10 pb-12">
      <nav
        aria-label="Fil d'Ariane"
        className="text-[0.85rem] text-muted mb-6 font-medium"
      >
        <Link href="/" className="no-underline text-muted hover:text-emerald">
          Accueil
        </Link>
        <span className="mx-2">›</span>
        <Link href="/guides" className="no-underline text-muted hover:text-emerald">
          Guides pratiques
        </Link>
        <span className="mx-2">›</span>
        <span>Modèles de lettres</span>
      </nav>

      <header className="mb-10 max-w-[760px]">
        <RubriqueLabel>Guide téléchargeable</RubriqueLabel>
        <h1
          className="font-bold text-ink mt-5 leading-[1.05] -tracking-[0.02em]"
          style={{ fontSize: "clamp(2.1rem, 4vw, 2.8rem)" }}
        >
          Quatre <em>modèles</em> de courrier à votre caisse
        </h1>
        <p className="mt-4 text-[1.1rem] text-ink-2 leading-[1.6]">
          Modèles personnalisables couvrant les quatre démarches les plus
          fréquentes : rectification de trimestres, demande de relevé
          militaire, recours amiable, rectification AGIRC-ARRCO. Copiez le
          texte, complétez vos informations personnelles et envoyez par
          courrier recommandé avec accusé de réception.
        </p>
      </header>

      <div className="bg-sun-light border border-sun/30 rounded-2xl p-6 mb-10">
        <div className="text-[0.78rem] font-bold tracking-[0.12em] uppercase text-sun-dark mb-2">
          Conseil essentiel
        </div>
        <p className="text-[0.95rem] text-ink-2 leading-[1.6]">
          Envoyez <strong>toujours par courrier recommandé avec accusé de
          réception</strong>. Conservez une copie signée de votre lettre et
          les AR reçus : ces pièces sont indispensables en cas de
          contestation ultérieure. Joignez des <strong>copies</strong> de
          vos justificatifs, jamais les originaux.
        </p>
      </div>

      <div className="space-y-10">
        {MODELES.map((m, i) => (
          <section
            key={m.slug}
            id={m.slug}
            className="bg-paper border border-rule rounded-2xl overflow-hidden"
          >
            <header className="bg-bg-2 px-7 py-5 flex flex-wrap items-start justify-between gap-4 border-b border-rule">
              <div>
                <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-emerald mb-1.5">
                  Modèle {i + 1} / {MODELES.length}
                </div>
                <h2 className="text-[1.25rem] font-bold text-ink -tracking-[0.015em]">
                  {m.titre}
                </h2>
                <p className="text-[0.92rem] text-ink-2 mt-2 max-w-[580px] leading-[1.55]">
                  {m.description}
                </p>
              </div>
              <CopyButton
                text={`${m.destinataire}\n\nObjet : ${m.objet}\n\n${m.corps}`}
              />
            </header>

            <div className="p-7">
              <div className="grid md:grid-cols-[auto_1fr] gap-3 mb-5 text-[0.92rem]">
                <div className="text-muted font-semibold">Destinataire :</div>
                <div className="text-ink whitespace-pre-line">{m.destinataire}</div>
                <div className="text-muted font-semibold">Objet :</div>
                <div className="text-ink font-medium">{m.objet}</div>
              </div>

              <pre className="bg-bg-2 rounded-xl p-5 text-[0.88rem] text-ink-2 leading-[1.6] whitespace-pre-wrap font-sans overflow-x-auto">
                {m.corps}
              </pre>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 bg-bg-2 rounded-2xl p-7">
        <h3 className="text-[1.1rem] font-bold text-ink mb-3">
          Besoin d'aide pour personnaliser ces courriers ?
        </h3>
        <p className="text-[0.95rem] text-ink-2 leading-[1.6]">
          Pour les situations complexes (carrières mixtes, pluriactivité,
          carrière internationale, TNS), l'audit humain par{" "}
          <a
            href="https://competence-retraite.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Compétence Retraite
          </a>{" "}
          identifie l'ensemble des rectifications à demander et fournit les
          modèles adaptés à votre situation particulière.
        </p>
      </div>
    </div>
  );
}
