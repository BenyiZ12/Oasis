"use client";

import { Phone } from "lucide-react";
import { useTranslations } from "@/content/i18n";
import { BOOKING_LINKS } from "@/data/routes";
import { SectionHeader } from "@/components/SectionHeader";
import { LinkArrow } from "@/components/LinkArrow";

export default function Contacto() {
  const { t, lang } = useTranslations();
  const bookHref = BOOKING_LINKS[lang];
  const telefonoLimpio = t.contacto.telefono.replace(/\s/g, "");
  const movilLimpio = t.contacto.movil.replace(/\s/g, "");

  return (
    <>
      <section className="pt-20 lg:pt-32 pb-16 lg:pb-24">
        <div className="container-content">
          <SectionHeader title={t.contacto.titulo} />
          <p className="font-sans text-carbone/80 text-body leading-relaxed mb-12 lg:mb-16 max-w-xl">
            {t.contacto.subtitulo}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-10">
              <div>
                <h3 className="font-serif text-bosque text-h3 mb-4">
                  {t.common.direccion}
                </h3>
                <p className="font-sans text-carbone/80 text-body leading-relaxed">
                  {t.contacto.direccion}
                </p>
                <LinkArrow
                  href={`https://maps.google.com/maps?q=9.0831782107183,-83.649295281903`}
                  target="_blank"
                  rel="noopener noreferrer"
                  external
                  className="mt-4 inline-block"
                >
                  {t.common.mapa}
                </LinkArrow>
              </div>

              <div>
                <h3 className="font-serif text-bosque text-h3 mb-4">
                  {t.common.llamar}
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`tel:${telefonoLimpio}`}
                      className="flex items-center gap-3 font-sans text-carbone/80 text-body hover:text-bosque transition-colors"
                    >
                      <Phone className="w-5 h-5" aria-hidden="true" />
                      <span>
                        {t.contacto.telefono}
                        <span className="text-carbone/50 text-xs ml-2">
                          ({t.contacto.telefonoLabel})
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${movilLimpio}`}
                      className="flex items-center gap-3 font-sans text-carbone/80 text-body hover:text-bosque transition-colors"
                    >
                      <Phone className="w-5 h-5" aria-hidden="true" />
                      <span>
                        {t.contacto.movil}
                        <span className="text-carbone/50 text-xs ml-2">
                          ({t.contacto.movilLabel})
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-bosque text-h3 mb-4">Reservas</h3>
                <p className="font-sans text-carbone/80 text-body leading-relaxed mb-4">
                  Consulta disponibilidad y reserva directamente en nuestro sistema
                  oficial, con confirmación inmediata.
                </p>
                <a
                  href={bookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold bg-bosque text-white shadow-soft hover:bg-oliva hover:shadow-softHover transition-all"
                >
                  {t.common.verDisponibilidad}
                </a>
                <p className="mt-6 text-sm text-carbone/60 leading-relaxed">
                  {t.contacto.notaReserva}
                </p>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-soft overflow-hidden shadow-soft aspect-[4/3] bg-carbone/5 flex items-center justify-center">
                <a
                  href={`https://maps.google.com/maps?q=9.0831782107183,-83.649295281903`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='100%25' height='100%25' fill='%23183D32'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23FFFEFA' font-family='serif' font-size='20'%3EMapa de ubicaci%C3%B3n%3C/text%3E%3C/svg%3E"
                    alt="Mapa de ubicación de Oasis de las Palmas en Ojochal, Costa Rica"
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
              <p className="mt-6 text-sm text-carbone/60 text-center">
                Coordenadas: 9.0831782107183, -83.649295281903. Haz clic para abrir
                la ubicación en Google Maps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-carbone/5">
        <div className="container-content">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between px-6 lg:px-0 py-12 lg:py-16 rounded-soft border border-carbone/10 bg-oliva/5">
            <div>
              <h3 className="font-serif text-bosque text-h3 mb-3">
                ¿Tienes preguntas?
              </h3>
              <p className="font-sans text-carbone/70 text-body">
                Contáctanos por teléfono o reserva directamente a través de nuestro
                sistema oficial.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${telefonoLimpio}`}
                className="flex-1 text-center px-6 py-4 rounded-full text-sm font-semibold text-bosque border border-carbone/20 hover:bg-carbone/5 transition-colors"
              >
                {t.common.llamar}
              </a>
              <a
                href={bookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-6 py-4 rounded-full text-sm font-semibold text-white bg-bosque shadow-soft hover:bg-oliva hover:shadow-softHover transition-all"
              >
                {t.common.reservarAhora}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
