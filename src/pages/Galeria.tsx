"use client";

import * as React from "react";
import { useTranslations } from "@/content/i18n";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { getImagesBySection } from "@/data/images";
import { Lightbox } from "@/components/Lightbox";
import { BOOKING_LINKS } from "@/data/routes";

export default function Galeria() {
  const { t, lang } = useTranslations();
  const bookHref = BOOKING_LINKS[lang];
  const [lightbox, setLightbox] = React.useState<{
    isOpen: boolean;
    images: Array<{ src: string; alt: string }>;
    index: number;
  } | null>(null);

  const galeria = getImagesBySection("galeria");

  const openLightbox = (index: number) => {
    setLightbox({
      isOpen: true,
      images: galeria.map((g) => ({ src: g.src, alt: g.alt })),
      index,
    });
  };

  return (
    <>
      <section className="pt-20 lg:pt-32 pb-16 lg:pb-24">
        <div className="container-content">
          <SectionHeader
            title={t.pages.galeria.titulo}
            subtitle={t.pages.galeria.descripcion}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {galeria.map((img) => (
              <div
                key={img.id}
                className="rounded-soft overflow-hidden border border-carbone/10 shadow-soft hover:shadow-softHover transition-all group cursor-pointer"
                onClick={() => openLightbox(galeria.findIndex((g) => g.id === img.id))}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(galeria.findIndex((g) => g.id === img.id));
                  }
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[260px] sm:h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-bosque/0 group-hover:bg-bosque/20 transition-colors" />
              </div>
            ))}
          </div>
          <Reveal variant="fade-up">
            <a
              href={bookHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-sm font-semibold bg-bosque text-white shadow-soft hover:bg-oliva hover:shadow-softHover transition-all"
            >
              {t.common.reservarAhora}
            </a>
          </Reveal>
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
