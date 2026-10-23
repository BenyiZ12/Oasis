"use client";

import { useTranslations } from "@/content/i18n";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { LinkArrow } from "@/components/LinkArrow";
import { BOOKING_LINKS } from "@/data/routes";

export default function Hotel() {
  const { t, lang } = useTranslations();
  const bookHref = BOOKING_LINKS[lang];

  return (
    <>
      <section className="pt-24 lg:pt-36 pb-20 lg:pb-28">
        <div className="container-content">
          <SectionHeader
            title={t.pages.hotel.introTitulo}
            align="left"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <Reveal variant="fade-up">
                <p className="font-sans text-carbone/85 text-body leading-relaxed mb-8">
                  {t.pages.hotel.intro}
                </p>
              </Reveal>
              <Reveal variant="fade-up" delay={0.1}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-10 h-10 rounded-full bg-bosque/10 flex items-center justify-center text-bosque font-serif text-xl" aria-hidden="true">
                    &ldquo;
                  </span>
                  <p className="font-serif italic text-carbone/70 text-body">
                    {t.pages.hotel.anfitrionesTexto}
                  </p>
                </div>
                <p className="font-sans font-semibold text-bosque text-sm uppercase tracking-wider">
                  {t.pages.hotel.anfitriones}
                </p>
              </Reveal>
            </div>
            <div className="h-[500px] lg:h-[600px] rounded-soft overflow-hidden shadow-soft">
              <img
                src="/images/hotel/full_img_2389_1668789116.jpg"
                alt="Oasis de las Palmas, Ojochal de Osa, Costa Rica"
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

      <section className="section bg-blanco">
        <div className="container-content">
          <SectionHeader title="El entorno" align="left" />
          <Reveal variant="fade-up">
            <p className="font-sans text-carbone/85 text-body leading-relaxed max-w-xl mb-10 lg:mb-16">
              Ubicado en el centro de Ojochal de Osa, Puntarenas, el hotel se extiende
              sobre más de 2 hectáreas de vegetación donde la flora y la fauna de Costa
              Rica conviven. Los jardines tropicales, la piscina y los paseos al aire
              libre crean un entorno de calma y privacidad para los huéspedes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.pages.hotel.servicios.map((s) => (
                <div
                  key={s}
                  className="p-6 rounded-soft border border-carbone/10 bg-blanco shadow-soft"
                >
                  <span className="text-xs font-sans font-semibold tracking-wider text-oliva uppercase block mb-2">
                    Servicio
                  </span>
                  <p className="font-serif text-bosque text-body leading-relaxed">{s}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-content text-center">
          <SectionHeader title="Planea tu visita" align="center" />
          <p className="font-sans text-carbone/80 text-body max-w-xl mx-auto mb-10 lg:mb-12 leading-relaxed">
            Consulta la disponibilidad del bungalow o las habitaciones familiares y
            reserva directamente con nosotros.
          </p>
          <LinkArrow
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            external
            className="inline-flex items-center justify-center px-10 py-5 rounded-full text-base font-semibold bg-bosque text-white shadow-soft hover:bg-oliva hover:shadow-softHover transition-all"
          >
            {BOOKING_LINKS[lang] ? "Reservar ahora" : "Reservar"}
          </LinkArrow>
        </div>
      </section>
    </>
  );
}
