"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslations } from "@/content/i18n";
import { pathFor, BOOKING_LINKS } from "@/data/routes";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { Lightbox } from "./Lightbox";
import { hotelImages } from "@/data/images";
import { LinkArrow } from "@/components/LinkArrow";

export function HomeAccommodations() {
  const { t, lang } = useTranslations();
  const bookHref = BOOKING_LINKS[lang];
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    images: Array<{ src: string; alt: string }>;
    index: number;
  } | null>(null);

  const rooms = [
    {
      id: "bungalow",
      ...t.alojamientos.bungalow,
      image: hotelImages.find((i) => i.id === "bungalow")!,
      gallery: hotelImages.filter((i) => i.section === "alojamiento"),
    },
    {
      id: "familiar-1",
      ...t.alojamientos.familiar1,
      image: hotelImages.find((i) => i.id === "familiar-1")!,
      gallery: hotelImages.filter((i) => i.section === "alojamiento"),
    },
    {
      id: "familiar-2",
      ...t.alojamientos.familiar2,
      image: hotelImages.find((i) => i.id === "familiar-2")!,
      gallery: hotelImages.filter((i) => i.section === "alojamiento"),
    },
  ];

  const openLightbox = (index: number) => {
    setLightbox({
      isOpen: true,
      images: rooms[Math.max(0, Math.min(index, rooms.length - 1))].gallery.map(
        (g) => ({ src: g.src, alt: g.alt }),
      ),
      index: 0,
    });
  };

  return (
    <section id="alojamiento" className="section bg-blanco">
      <div className="container-content">
        <SectionHeader
          title={t.alojamientos.titulo}
          subtitle={t.alojamientos.subtitulo}
          align="center"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {rooms.map((room, i) => {
return (
              <article
                key={room.id}
                className="relative group rounded-soft overflow-hidden border border-carbone/10 bg-blanco shadow-soft transition-all hover:shadow-softHover"
              >
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={room.image.src}
                    alt={room.image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width="900"
                    height="600"
                    loading="lazy"
                    decoding="async"
                  />
                  <button
                    onClick={() => openLightbox(i)}
                    className="absolute right-3 bottom-3 z-10 w-10 h-10 rounded-full bg-bosque text-white flex items-center justify-center shadow-soft hover:bg-oliva transition-colors opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={`Ver galería de ${room.nombre}`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.897.777M19.05 5.05l-2.897-.777"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-6 lg:p-8">
                  <span className="text-xs font-sans font-semibold tracking-wider text-oliva uppercase mb-2 block">
                    {room.etiqueta}
                  </span>
                  <h3 className="font-serif text-bosque text-h3 mb-3">{room.nombre}</h3>
                  <p className="font-sans text-carbone/80 text-sm leading-relaxed mb-6">
                    {room.descripcion}
                  </p>
                  <ul className="space-y-2 mb-8 text-xs font-sans text-carbone/70">
                    {room.caracteristicas.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-oliva" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={pathFor("alojamiento", lang)}
                      className="flex-1 text-center px-4 py-3 rounded-soft text-sm font-semibold text-bosque border border-carbone/20 hover:bg-carbone/5 transition-colors"
                    >
                      {t.common.verDisponibilidad}
                    </Link>
                    <a
                      href={bookHref}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex-1 text-center px-4 py-3 rounded-full text-sm font-semibold text-blanco bg-bosque hover:bg-oliva transition-colors shadow-soft"
                    >
                      {t.common.reservarAhora}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <Reveal variant="fade-up" delay={0.2}>
          <LinkArrow
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            external
            className="inline-flex items-center justify-center px-10 py-4 rounded-full text-sm font-semibold bg-bosque text-white shadow-soft hover:bg-oliva hover:shadow-softHover transition-all"
          >
            {t.common.reservarAhora}
          </LinkArrow>
        </Reveal>
      </div>
      {lightbox && <Lightbox isOpen={lightbox.isOpen} onClose={() => setLightbox(null)} images={lightbox.images} initialIndex={lightbox.index} />}
    </section>
  );
}
