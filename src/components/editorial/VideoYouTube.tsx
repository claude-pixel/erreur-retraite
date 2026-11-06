"use client";

import { useState } from "react";

/**
 * Vidéo YouTube affichée au clic seulement. Avant le clic, l'image d'aperçu est
 * servie par le site et aucune requête ne part vers YouTube. Après le clic, le
 * lecteur youtube-nocookie s'affiche sans lecture automatique : c'est le bouton
 * de lecture de YouTube qui lance la vidéo, pour que la vue soit comptée.
 */
export function VideoYouTube({
  id,
  titre,
  poster,
  duree,
  legende,
}: {
  id: string;
  titre: string;
  poster: string;
  duree?: string;
  legende?: string;
}) {
  const [affichee, setAffichee] = useState(false);

  return (
    <figure className="my-8">
      <div
        className="relative aspect-video overflow-hidden rounded-2xl border border-rule bg-ink bg-cover bg-center"
        style={affichee ? { backgroundImage: `url(${poster})` } : undefined}
      >
        {affichee ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
            title={titre}
            allow="encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setAffichee(true)}
            aria-label={`Afficher la vidéo : ${titre}`}
            className="group absolute inset-0 h-full w-full cursor-pointer border-0 bg-transparent p-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={poster}
              alt=""
              width={1280}
              height={720}
              loading="lazy"
              className="block h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors group-hover:bg-ink/20">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald text-white shadow-lg ring-4 ring-white/70 transition-transform group-hover:scale-105">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                  aria-hidden
                  fill="currentColor"
                  className="ml-0.5"
                >
                  <path d="M3.5 1.8v12.4a.6.6 0 0 0 .92.5l9.6-6.2a.6.6 0 0 0 0-1L4.42 1.3a.6.6 0 0 0-.92.5Z" />
                </svg>
              </span>
            </span>
            {duree ? (
              <span className="absolute bottom-3 right-3 rounded-md bg-ink/85 px-2 py-0.5 text-[0.8rem] font-semibold text-white">
                {duree}
              </span>
            ) : null}
          </button>
        )}
      </div>
      <figcaption className="mt-2 text-[0.82rem] leading-[1.55] text-muted">
        {legende ? `${legende} ` : null}
        {affichee
          ? "Appuyez sur le bouton de lecture pour la lancer."
          : "Cliquez sur l’image pour afficher la vidéo. Elle est hébergée par YouTube : rien ne lui est envoyé avant votre clic."}{" "}
        <a
          href={`https://youtu.be/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-emerald"
        >
          Voir sur YouTube
        </a>
      </figcaption>
    </figure>
  );
}
