export type RouteKey = "home" | "alojamiento" | "hotel" | "explorar" | "galeria" | "contacto";

export const ROUTES: Record<"es" | "en", Record<RouteKey, string>> = {
  es: {
    home: "/es/",
    alojamiento: "/es/alojamiento",
    hotel: "/es/el-hotel",
    explorar: "/es/experiencias",
    galeria: "/es/galeria",
    contacto: "/es/contacto",
  },
  en: {
    home: "/en/",
    alojamiento: "/en/accommodation",
    hotel: "/en/the-hotel",
    explorar: "/en/experiences",
    galeria: "/en/gallery",
    contacto: "/en/contact",
  },
} as const;

export function pathFor(key: RouteKey, lang: "es" | "en"): string {
  return ROUTES[lang][key];
}

export const BOOKING_LINKS: Record<"es" | "en", string> = {
  es: "http://6219.hotellinksolutions.org/es/reservas",
  en: "http://6219.hotellinksolutions.org/en/reservation",
};
