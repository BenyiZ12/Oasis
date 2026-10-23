"use client";

import { useTranslations } from "@/content/i18n";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { LinkArrow } from "./LinkArrow";

export function HomeReviews() {
  const { t, lang } = useTranslations();
  const reviewUrl =
    lang === "es"
      ? "https://www.tripadvisor.com/Hotel_Review-g1022300-d11966362-Reviews-OASIS_de_las_Palmas-Ojochal_Province_of_Puntarenas.html?m=19905"
      : "https://www.tripadvisor.com/Hotel_Review-g1022300-d11966362-Reviews-OASIS_de_las_Palmas-Ojochal_Province_of_Puntarenas.html?m=19905";

  return (
    <section id="reseñas" className="section">
      <div className="container-content">
        <SectionHeader title={t.reseñas.titulo} align="center" />
        <Reveal variant="fade-up">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-carbone/80 text-body leading-relaxed mb-10">
              {t.reseñas.texto}
            </p>
            <LinkArrow
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              external
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-sm font-semibold bg-bosque text-white shadow-soft hover:bg-oliva hover:shadow-softHover transition-all"
            >
              {t.reseñas.verPerfil}
            </LinkArrow>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
