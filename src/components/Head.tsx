import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslations, type Lang, translatePath } from "@/content/i18n";

interface HeadProps {
  title: string;
  description: string;
}

export function Head({ title, description }: HeadProps) {
  const { lang } = useTranslations();
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDesc) metaDesc.setAttribute("content", description);

    const ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (ogDesc) ogDesc.setAttribute("content", description);

    document.documentElement.lang = lang;

    const base = "https://www.oasisdelaspalmas.com";
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute("href", `${base}${location.pathname}`);

    const other: Lang = lang === "es" ? "en" : "es";
    const alternateHref = `${base}${translatePath(location.pathname, other)}`;

    let alternate = document.querySelector(`link[rel="alternate"][hreflang="${other}"]`) as HTMLLinkElement | null;
    if (!alternate) {
      alternate = document.createElement("link");
      alternate.rel = "alternate";
      document.head.appendChild(alternate);
    }
    alternate.setAttribute("hreflang", other);
    alternate.setAttribute("href", alternateHref);

    if (!document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`)) {
      const selfLink = document.createElement("link");
      selfLink.rel = "alternate";
      selfLink.setAttribute("hreflang", lang);
      selfLink.setAttribute("href", `${base}${location.pathname}`);
      document.head.appendChild(selfLink);
    }
  }, [title, description, lang, location.pathname]);

  return null;
}
