"use client";

import { Link } from "react-router-dom";
import { useTranslations } from "@/content/i18n";
import { pathFor } from "@/data/routes";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Editorial() {
  const { t, lang } = useTranslations();
  const img = {
    src: "/images/hotel/full_img_2389_1668789116.jpg",
    alt: t.editorial.imagenAlt,
  };

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={img.src}
          alt=""
          className="w-full h-[600px] lg:h-[700px] object-cover object-center"
          width="1600"
          height="900"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blanco via-blanco/60 to-transparent" />
      </div>

      <div className="relative z-10 container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="lg:pr-10">
            <Reveal variant="fade-up">
              <SectionHeader title={t.editorial.titulo} />
            </Reveal>
            <Reveal variant="fade-up" delay={0.1}>
              <p className="font-sans text-carbone/85 text-body leading-relaxed mb-8">
                {t.editorial.texto}
              </p>
              <Link
                to={pathFor("hotel", lang)}
                className="LinkArrow text-bosque font-semibold text-sm hover:text-oliva"
              >
                {t.common.leerMas}
              </Link>
            </Reveal>
          </div>
          <div className="relative h-[420px] lg:h-[520px] rounded-soft overflow-hidden shadow-soft">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
