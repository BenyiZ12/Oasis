"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslations } from "@/content/i18n";
import { BOOKING_LINKS } from "@/data/routes";
import { SectionHeader } from "./SectionHeader";
import { LinkArrow } from "./LinkArrow";

export function HomeContacto() {
  const { t, lang } = useTranslations();
  const bookHref = BOOKING_LINKS[lang];

  return (
    <section id="contacto" className="section bg-blanco">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <SectionHeader title={t.contacto.titulo} />
            <p className="font-sans text-carbone/80 text-body leading-relaxed mb-10">
              {t.contacto.subtitulo}
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-bosque/5 flex items-center justify-center text-bosque shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-bosque text-sm uppercase tracking-wider mb-1">
                    {t.common.direccion}
                  </p>
                  <p className="text-carbone/80 text-sm leading-relaxed">
                    {t.contacto.direccion}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-bosque/5 flex items-center justify-center text-bosque shrink-0">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-bosque text-sm uppercase tracking-wider mb-1">
                    {t.common.llamar}
                  </p>
                  <ul className="space-y-1 text-carbone/80 text-sm">
                    <li>
                      <a
                        href={`tel:${t.contacto.telefono.replace(/\s/g, "")}`}
                        className="text-bosque hover:text-oliva transition-colors"
                      >
                        {t.contacto.telefono} ({t.contacto.telefonoLabel})
                      </a>
                    </li>
                    <li>
                      <a
                        href={`tel:${t.contacto.movil.replace(/\s/g, "")}`}
                        className="text-bosque hover:text-oliva transition-colors"
                      >
                        {t.contacto.movil} ({t.contacto.movilLabel})
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-bosque/5 flex items-center justify-center text-bosque shrink-0">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-bosque text-sm uppercase tracking-wider mb-1">
                    Reservas
                  </p>
                  <p className="text-carbone/80 text-sm leading-relaxed">
                    Consulta disponibilidad y reserva directamente en nuestro sistema oficial.
                  </p>
                  <LinkArrow
                    href={bookHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    external
                    className="mt-2 inline-block"
                  >
                    {t.common.verDisponibilidad}
                  </LinkArrow>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-soft overflow-hidden shadow-soft aspect-video bg-carbone/5 flex items-center justify-center">
              <a
                href={`https://maps.google.com/maps?q=9.0831782107183,-83.649295281903`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img
                  src="https://maps.googleapis.com/maps/api/staticmap?center=9.0831782107183,-83.649295281903&zoom=14&size=600x400&maptype=roadmap&markers=color:green%7C9.0831782107183,-83.649295281903&key=YOUR_API_KEY"
                  alt="Mapa de ubicación de Oasis de las Palmas en Ojochal, Costa Rica"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
            <p className="mt-6 text-xs text-carbone/50 text-center">
              Mapa de referencia. Para abrir la ubicación interactiva, usa el
              enlace del mapa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
