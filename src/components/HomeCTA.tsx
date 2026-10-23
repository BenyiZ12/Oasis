"use client";

import { useTranslations } from "@/content/i18n";
import { BOOKING_LINKS } from "@/data/routes";
import { Reveal } from "./Reveal";

export function HomeCTA() {
  const { t, lang } = useTranslations();
  const bookHref = BOOKING_LINKS[lang];

  return (
    <section id="reserva" className="section relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hotel/full_montaje2_1668789119.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          width="1600"
          height="900"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-bosque/85" />
      </div>
      <div className="relative z-10 container-content text-center py-20 lg:py-32 px-6 lg:px-8">
        <Reveal variant="fade-up">
          <h2 className="font-serif text-white text-h1 mb-6 lg:mb-8 text-balance">
            {t.cta.titulo}
          </h2>
          <p className="font-sans text-blanco/90 text-body max-w-xl mx-auto mb-10 lg:mb-12 leading-relaxed">
            {t.cta.texto}
          </p>
          <a
            href={bookHref}
            rel="noopener noreferrer"
            target="_blank"
            className="px-10 py-5 rounded-full bg-oliva text-blanco text-base font-semibold shadow-soft hover:bg-bosque hover:shadow-softHover transition-all inline-block"
          >
            {t.cta.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
