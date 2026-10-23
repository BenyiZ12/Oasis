"use client";

import { Link } from "react-router-dom";
import { useTranslations } from "@/content/i18n";
import { pathFor, BOOKING_LINKS } from "@/data/routes";
import { Reveal } from "./Reveal";

export function Hero() {
  const { t, lang } = useTranslations();
  const bookHref = BOOKING_LINKS[lang];

  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hotel/full_dsc02694_1668789351.jpg"
          alt="Oasis de las Palmas, Ojochal de Osa, Costa Rica"
          className="w-full h-full object-cover"
          width="1600"
          height="900"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bosque/75 via-bosque/40 to-transparent" />
        <div className="absolute inset-0 bg-bosque/20" />
      </div>

      <div className="relative z-10 container-content flex flex-col h-[88vh] lg:h-[92vh] justify-end pt-20 pb-12 lg:pt-32 lg:pb-24 px-6 lg:px-8">
        <Reveal variant="fade-up" delay={0.05}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blanco/90 text-bosque text-xs font-sans font-semibold tracking-wide uppercase mb-6 lg:mb-8">
            {t.hero.etiqueta}
          </div>
          <h1 className="font-serif text-white text-h1 lg:text-[5rem] leading-tight mb-6 lg:mb-8 text-balance">
            {t.hero.titular}
          </h1>
          <p className="font-sans text-blanco/90 text-lg lg:text-xl leading-relaxed max-w-xl mb-10 lg:mb-12">
            {t.hero.descripcion}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={bookHref}
              rel="noopener noreferrer"
              target="_blank"
              className="px-8 py-4 rounded-full bg-blanco text-bosque text-sm font-semibold shadow-soft hover:bg-oliva hover:text-white transition-all flex items-center justify-center gap-2"
            >
              {t.hero.ctaPrincipal}
            </a>
            <Link
              to={pathFor("hotel", lang)}
              className="px-8 py-4 rounded-full border border-blanco/70 text-blanco text-sm font-semibold hover:bg-blanco/10 transition-all flex items-center justify-center gap-2"
            >
              {t.hero.ctaSecundario}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
