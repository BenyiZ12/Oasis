"use client";

import { useTranslations } from "@/content/i18n";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function HomeJardines() {
  const { t } = useTranslations();
  const images = [
    { src: "/images/hotel/full_img_0209_1668789353.jpg", alt: t.jardines.titulo },
    { src: "/images/hotel/full_img-0137_1668789118.jpg", alt: t.jardines.titulo },
  ];

  return (
    <section id="jardines" className="section relative overflow-hidden">
      <div className="container-content">
        <SectionHeader title={t.jardines.titulo} align="center" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="h-[500px] lg:h-[600px] rounded-soft overflow-hidden shadow-soft">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover"
              width="1400"
              height="900"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="h-[500px] lg:h-[600px] rounded-soft overflow-hidden shadow-soft ml-4 lg:ml-0 -translate-y-8 lg:translate-y-0">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover"
              width="1400"
              height="900"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="lg:col-span-2 mt-12 lg:mt-0 lg:col-start-2 lg:-translate-y-8">
            <Reveal variant="fade-up">
              <p className="font-sans text-carbone/85 text-body leading-relaxed max-w-xl mx-auto lg:mx-0 lg:text-left">
                {t.jardines.texto}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
