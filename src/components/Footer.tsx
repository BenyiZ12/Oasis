"use client";

import { MapPin, Phone } from "lucide-react";
import { useTranslations } from "@/content/i18n";
import { pathFor, BOOKING_LINKS } from "@/data/routes";
import { LinkArrow } from "./LinkArrow";

export function Footer() {
  const { lang, t } = useTranslations();
  const bookHref = BOOKING_LINKS[lang];

  return (
    <footer className="border-t border-carbone/10 bg-carbone text-blanco">
      <div className="container-content py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 lg:mb-20">
          <div className="lg:col-span-2">
            <img
              src="/logo.png"
              alt={`${t.siteName} — logotipo`}
              className="h-10 w-auto mb-6 block"
              width="160"
              height="160"
              loading="eager"
            />
            <p className="text-blanco/60 text-sm leading-relaxed max-w-sm">
              {t.footer.descripcion}
            </p>
          </div>

          <div>
            <h3 className="font-sans text-base font-semibold mb-6 uppercase tracking-wider text-blanco/90">
              {t.footer.reservas}
            </h3>
            <ul className="space-y-3">
              <li>
                <LinkArrow
                  href={bookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  external
                  className="text-blanco/80 hover:text-blanco"
                >
                  {t.common.verDisponibilidad}
                </LinkArrow>
              </li>
              <li>
                <LinkArrow
                  href={pathFor("contacto", lang)}
                  className="text-blanco/80 hover:text-blanco"
                >
                  {t.footer.contacto}
                </LinkArrow>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-base font-semibold mb-6 uppercase tracking-wider text-blanco/90">
              {t.footer.contacto}
            </h3>
            <ul className="space-y-3 text-sm text-blanco/70 leading-relaxed">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-oliva" />
                <span>
                  {t.contacto.direccion}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-oliva" />
                <a
                  href={`tel:${t.contacto.telefono.replace(/\s/g, "")}`}
                  className="text-blanco/80 hover:text-blanco transition-colors"
                >
                  {t.contacto.telefono} ({t.contacto.telefonoLabel})
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-oliva" />
                <a
                  href={`tel:${t.contacto.movil.replace(/\s/g, "")}`}
                  className="text-blanco/80 hover:text-blanco transition-colors"
                >
                  {t.contacto.movil} ({t.contacto.movilLabel})
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-carbone/20 pt-12 lg:pt-16 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-sm text-blanco/50">
            {t.footer.derechos}
          </p>
          <div className="flex items-center gap-5 text-sm text-blanco/50">
            <a
              href="https://www.facebook.com/oasisdelaspalmas/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blanco transition-colors"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://www.tripadvisor.com/Hotel_Review-g1022300-d11966362-Reviews-OASIS_de_las_Palmas-Ojochal_Province_of_Puntarenas.html?m=19905"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blanco transition-colors"
              aria-label="Tripadvisor"
            >
              Tripadvisor
            </a>
            <a
              href="https://instagram.com/oasisdelaspalmas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blanco transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <span className="hidden md:inline text-blanco/30">·</span>
            <a
              href="https://www.hotellinkcostarica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blanco transition-colors"
            >
              {t.footer.hotellink}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
