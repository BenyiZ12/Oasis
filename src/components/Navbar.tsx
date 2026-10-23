"use client";

import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslations } from "@/content/i18n";
import { pathFor, BOOKING_LINKS } from "@/data/routes";
import { cn } from "@/lib/cn";

const NAV_ITEMS: { key: RouteKey; labelKey: NavLabelKey }[] = [
  { key: "home", labelKey: "inicio" },
  { key: "alojamiento", labelKey: "alojamiento" },
  { key: "hotel", labelKey: "elHotel" },
  { key: "explorar", labelKey: "explorar" },
  { key: "galeria", labelKey: "galeria" },
  { key: "contacto", labelKey: "contacto" },
];

type RouteKey = "home" | "alojamiento" | "hotel" | "explorar" | "galeria" | "contacto";
type NavLabelKey = "inicio" | "alojamiento" | "elHotel" | "explorar" | "galeria" | "contacto";

export function Navbar() {
  const { lang, setLang, t } = useTranslations();
  const location = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (key: RouteKey) => {
    const currentPath = location.pathname;
    const expected = pathFor(key, lang);
    if (key === "home") return currentPath === expected;
    return currentPath.startsWith(expected.replace(/\/$/, ""));
  };

  const toggleLang = () => setLang(lang === "es" ? "en" : "es");

  const bookHref = BOOKING_LINKS[lang];

  const navClasses = cn(
    "fixed top-0 left-0 right-0 z-40 transition-colors duration-300",
    scrolled
      ? "bg-blanco/95 backdrop-blur-md border-b border-carbone/5 shadow-soft"
      : "bg-transparent",
  );

  const linkClasses = (active: boolean) =>
    cn(
      "text-sm font-medium transition-colors px-3 py-2.5 rounded-soft",
      active ? "text-bosque bg-bosque/5" : "text-carbone/70 hover:text-bosque",
    );

  return (
    <>
      <nav className={navClasses} aria-label="Navegación principal">
        <div className="container-content flex items-center justify-between h-20 lg:h-24">
          <Link
            to={pathFor("home", lang)}
            className="flex items-center gap-2 flex-shrink-0"
            aria-label={t.siteName}
          >
            <img
              src="/logo.png"
              alt={`${t.siteName} — logotipo`}
              className="h-10 lg:h-12 w-auto block"
              width="160"
              height="160"
              loading="eager"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.key);
              return (
                <Link
                  key={item.key}
                  to={pathFor(item.key, lang)}
                  className={linkClasses(active)}
                  aria-current={active ? "page" : undefined}
                >
                  {t.nav[item.labelKey]}
                </Link>
              );
            })}
            <div className="flex items-center gap-2 text-sm font-medium">
              <button
                onClick={toggleLang}
                className={cn(
                  "px-3 py-2.5 rounded-soft transition-colors",
                  lang === "en" ? "text-bosque bg-bosque/5" : "text-carbone/70 hover:text-bosque",
                )}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <button
                onClick={toggleLang}
                className={cn(
                  "px-3 py-2.5 rounded-soft transition-colors",
                  lang === "es" ? "text-bosque bg-bosque/5" : "text-carbone/70 hover:text-bosque",
                )}
                aria-pressed={lang === "es"}
              >
                ES
              </button>
            </div>
            <a
              href={bookHref}
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-bosque text-blanco text-sm font-semibold shadow-soft hover:bg-oliva hover:shadow-softHover transition-all"
            >
              {t.nav.reservar}
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-soft text-carbone hover:bg-carbone/5 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-blanco/98 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-soft text-carbone hover:bg-carbone/5 transition-colors"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="container-content py-24 lg:py-32 flex flex-col gap-6">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.key);
              return (
                <Link
                  key={item.key}
                  to={pathFor(item.key, lang)}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-xl font-sans font-semibold",
                    active ? "text-bosque" : "text-carbone/80",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {t.nav[item.labelKey]}
                </Link>
              );
            })}
            <div className="pt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-base font-medium">
                <span className="text-carbone/60">Idioma</span>
                <button
                  onClick={() => { toggleLang(); setOpen(false); }}
                  className={cn("px-3 py-1.5 rounded-soft transition-colors", lang === "en" ? "text-bosque bg-bosque/5" : "text-carbone/60 hover:text-bosque")}
                >
                  EN
                </button>
                <button
                  onClick={() => { toggleLang(); setOpen(false); }}
                  className={cn("px-3 py-1.5 rounded-soft transition-colors", lang === "es" ? "text-bosque bg-bosque/5" : "text-carbone/60 hover:text-bosque")}
                >
                  ES
                </button>
              </div>
              <a
                href={bookHref}
                rel="noopener noreferrer"
                target="_blank"
                className="px-6 py-3 rounded-full bg-bosque text-blanco text-base font-semibold text-center shadow-soft hover:bg-oliva transition-all"
              >
                {t.nav.reservar}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
