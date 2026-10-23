"use client";

import { useState } from "react";
import { useTranslations } from "@/content/i18n";
import { BOOKING_LINKS } from "@/data/routes";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { getImagesBySection } from "@/data/images";
import { Lightbox } from "@/components/Lightbox";
import { LinkArrow } from "@/components/LinkArrow";

interface Room {
  id: string;
  nombre: string;
  etiqueta: string;
  descripcion: string;
  caracteristicas: string[];
  image: { src: string; alt: string; width?: number; height?: number };
  gallery: Array<{ src: string; alt: string }>;
}

export default function Alojamiento() {
  const { t, lang } = useTranslations();
  const bookHref = BOOKING_LINKS[lang];
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    images: Array<{ src: string; alt: string }>;
    index: number;
  } | null>(null);

  const rooms: Room[] = [
    {
      id: "bungalow",
      ...t.alojamientos.bungalow,
      image: {
        src: "/images/hotel/full_img_3092_1668789117.jpg",
        alt: t.alojamientos.bungalow.nombre,
      },
      gallery: getImagesBySection("alojamiento").map((g) => ({ src: g.src, alt: g.alt })),
    },
    {
      id: "familiar-1",
      ...t.alojamientos.familiar1,
      image: {
        src: "/images/hotel/full_img_0021---copia_1668789352.jpg",
        alt: t.alojamientos.familiar1.nombre,
      },
      gallery: getImagesBySection("alojamiento").map((g) => ({ src: g.src, alt: g.alt })),
    },
    {
      id: "familiar-2",
      ...t.alojamientos.familiar2,
      image: {
        src: "/images/hotel/full_img_2178_1668789117.jpg",
        alt: t.alojamientos.familiar2.nombre,
      },
      gallery: getImagesBySection("alojamiento").map((g) => ({ src: g.src, alt: g.alt })),
    },
  ];

  const openGallery = (index: number) => {
    setLightbox({
      isOpen: true,
      images: rooms[index].gallery,
      index: 0,
    });
  };

  return (
    <>
      <section className="pt-20 lg:pt-32 pb-16 lg:pb-24">
        <div className="container-content">
          <SectionHeader
            title={t.pages.alojamiento.titulo}
            subtitle={t.pages.alojamiento.intro}
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {rooms.map((room, i) => (
              <article
                key={room.id}
                className="rounded-soft overflow-hidden border border-carbone/10 bg-blanco shadow-soft"
              >
                <div className="relative h-72 lg:h-96 overflow-hidden">
                  <img
                    src={room.image.src}
                    alt={room.image.alt}
                    className="w-full h-full object-cover"
                    width={room.image.width || 900}
                    height={room.image.height || 600}
                    loading="lazy"
                    decoding="async"
                  />
                  <button
                    onClick={() => openGallery(i)}
                    className="absolute right-4 bottom-4 z-10 w-10 h-10 rounded-full bg-blanco/90 text-carbone flex items-center justify-center shadow-soft hover:bg-blanco transition-colors"
                    aria-label={`Abrir galería de ${room.nombre}`}
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
                <div className="p-8">
                  <span className="text-xs font-sans font-semibold tracking-wider text-oliva uppercase mb-2 block">
                    {room.etiqueta}
                  </span>
                  <h3 className="font-serif text-bosque text-h3 mb-3">{room.nombre}</h3>
                  <p className="font-sans text-carbone/85 text-body leading-relaxed mb-6">
                    {room.descripcion}
                  </p>
                  <ul className="space-y-2 mb-8 text-sm text-carbone/70">
                    {room.caracteristicas.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-oliva" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <LinkArrow
                      href={`#contacto`}
                      className="w-full text-center text-sm font-semibold text-bosque border border-carbone/20 px-4 py-3 rounded-soft hover:bg-carbone/5 transition-colors"
                    >
                      {t.common.verDisponibilidad}
                    </LinkArrow>
                    <a
                      href={bookHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center text-sm font-semibold text-blanco bg-bosque px-4 py-3 rounded-full shadow-soft hover:bg-oliva transition-colors"
                    >
                      {t.common.reservarAhora}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <Reveal variant="fade-up">
            <div className="rounded-soft bg-oliva/5 border border-oliva/20 p-8 lg:p-12">
              <p className="font-sans text-carbone/80 text-body leading-relaxed">
                Todas las opciones incluyen cocina equipada, terraza privada, Wi-Fi,
                televisión por cable, agua caliente y aire acondicionado. El parqueo
                privado es gratuito. Consulta disponibilidad directamente a través de
                nuestro sistema oficial de reservas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contacto" className="section bg-carbone text-blanco">
        <div className="container-content text-center">
          <SectionHeader title="¿Listo para reservar?" align="center" />
          <p className="font-sans text-blanco/80 text-body max-w-xl mx-auto mb-10 lg:mb-12 leading-relaxed">
            Elige tu alojamiento y consulta la disponibilidad en nuestro sistema oficial
            de reservas, con confirmación inmediata.
          </p>
          <a
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-full bg-oliva text-white text-base font-semibold shadow-soft hover:bg-bosque hover:shadow-softHover transition-all inline-block"
          >
            {t.common.reservarAhora}
          </a>
        </div>
      </section>
      {lightbox && (
        <Lightbox
          isOpen={lightbox.isOpen}
          onClose={() => setLightbox(null)}
          images={lightbox.images}
          initialIndex={lightbox.index}
        />
      )}
    </>
  );
}
