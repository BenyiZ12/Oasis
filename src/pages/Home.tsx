"use client";

import { Link } from "react-router-dom";
import { useTranslations } from "@/content/i18n";
import { pathFor } from "@/data/routes";
import { Hero } from "../components/Hero";
import { Editorial } from "../components/Editorial";
import { HomeAccommodations } from "../components/HomeAccommodations";
import { HomeJardines } from "../components/HomeJardines";
import { HomeReviews } from "../components/HomeReviews";
import { HomeCTA } from "../components/HomeCTA";
import { HomeContacto } from "../components/HomeContacto";

export default function Home() {
  const { t, lang } = useTranslations();
  return (
    <>
      <Hero />
      <Editorial />
      <HomeAccommodations />
      <HomeJardines />
      <section id="experiencias" className="section bg-blanco">
        <div className="container-content">
          <h2 className="font-serif text-bosque text-h1 mb-6 text-center text-balance">
            Explorar Ojochal y sus alrededores
          </h2>
          <p className="font-sans text-carbone/80 text-body leading-relaxed max-w-2xl mx-auto mb-12 lg:mb-16 text-center">
            A menos de 15 minutos en carro se encuentran seis playas increíbles y el
            Parque Nacional Marino Ballena. La zona ofrece también avistamiento de
            ballenas, esnórquel, equitación y zipline.
          </p>
          <div className="flex justify-center">
            <Link
              to={pathFor("explorar", lang)}
              className="text-bosque font-semibold text-sm hover:text-oliva"
            >
              {t.common.leerMas}
            </Link>
          </div>
        </div>
      </section>
      <HomeReviews />
      <HomeCTA />
      <HomeContacto />
    </>
  );
}
