"use client";

import {
  MapPin,
  TreePine,
  Heart,
  Activity,
  Sun,
  Anchor,
  Cloud,
} from "lucide-react";
import { useTranslations } from "@/content/i18n";
import { pathFor } from "@/data/routes";
import { SectionHeader } from "@/components/SectionHeader";
import { LinkArrow } from "@/components/LinkArrow";

const ICONS: Record<string, React.ElementType> = {
  playas: Sun,
  "marino-ballena": Anchor,
  tortugas: TreePine,
  ballenas: Heart,
  esnórquel: Activity,
  equitacion: MapPin,
  zipline: Cloud,
  uvita: MapPin,
  "playa-hermosa": Sun,
};

interface Destino {
  id: string;
  titulo: string;
  descripcion: string;
  practico: string;
  porque: string;
  enlace?: string;
  etiqueta?: string;
}

export default function Experiencias() {
  const { t, lang } = useTranslations();

  const destinos: Destino[] = [
    {
      id: "playas",
      titulo: "Playas de Ojochal",
      descripcion:
        "A menos de 15 minutos en carro desde el hotel se encuentran seis playas increíbles del Pacífico Sur, ideales para nadar, caminar y descansar.",
      practico: "Menos de 15 min en carro desde el hotel.",
      porque: "Arena, mar y vegetación a pocos minutos de tu alojamiento.",
      etiqueta: "Cerca del hotel",
    },
    {
      id: "marino-ballena",
      titulo: "Parque Nacional Marino Ballena",
      descripcion:
        "A menos de 15 minutos en carro, este parque protege uno de los arrecifes de coral más importantes de la región y es santuario de vida marina.",
      practico:
        "Menos de 15 min en carro desde el hotel. Parque nacional de Costa Rica.",
      porque: "Snorkel, vida marina y el famoso colón de ballena en marea baja.",
      enlace: "https://www.sinac.go.cr/",
      etiqueta: "Parque nacional",
    },
    {
      id: "tortugas",
      titulo: "Reserva de tortugas",
      descripcion:
        "La playa cercana cuenta con una reserva de tortugas, parte del patrimonio natural que hace especial a esta zona de Osa.",
      practico: "Acceso desde las playas cercanas a Ojochal.",
      porque: "Observación de la fauna marina en su entorno natural.",
      etiqueta: "Fauna marina",
    },
    {
      id: "ballenas",
      titulo: "Avistamiento de ballenas",
      descripcion:
        "Entre julio y octubre, las ballenas jorobadas llegan a las costas del Pacífico Sur de Costa Rica, incluida el área de Ojochal y Uvita.",
      practico: "Temporada aproximada: julio a octubre.",
      porque: "Uno de los espectáculos naturales más impresionantes de la zona.",
      etiqueta: "Temporada",
    },
    {
      id: "esnórquel",
      titulo: "Esnórquel",
      descripcion:
        "Las aguas del Pacífico Sur de Ojochal son aptas para la práctica de esnórquel y el descubrimiento de la vida marina cercana a la costa.",
      practico: "Actividad disponible en la zona costera de Ojochal.",
      porque: "Explora el mundo submarino a pocos minutos del hotel.",
      etiqueta: "Agua",
    },
    {
      id: "equitacion",
      titulo: "Equitación",
      descripcion:
        "En la zona se puede practicar equitación, una forma tranquila de recorrer los paisajes rurales y tropicales de Osa.",
      practico: "Actividad disponible en los alrededores de Ojochal.",
      porque: "Recorridos a caballo entre naturaleza y vistas al mar.",
      etiqueta: "Tierra",
    },
    {
      id: "zipline",
      titulo: "Canopy / Zipline",
      descripcion:
        "El área de Ojochal y el Pacífico Sur ofrecen recorridos de zipline entre la vegetación tropical para quienes buscan más aventura.",
      practico: "Actividad disponible en los alrededores.",
      porque: "Vistas aéreas de la selva y el océano.",
      etiqueta: "Aventura",
    },
    {
      id: "uvita",
      titulo: "Uvita",
      descripcion:
        "Uvita está a 14 km del hotel y es la puerta de acceso al Parque Nacional Marino Ballena y a varias playas de la zona.",
      practico: "14 km desde Oasis de las Palmas.",
      porque: "Servicios, restaurantes y acceso al parque nacional.",
      etiqueta: "A 14 km",
    },
    {
      id: "playa-hermosa",
      titulo: "Playa Hermosa",
      descripcion:
        "Playa Hermosa está a 28 km del hotel, otra opción de playa del Pacífico Sur para ampliar tu recorrido por la zona.",
      practico: "28 km desde Oasis de las Palmas.",
      porque: "Playa abierta del Pacífico Sur.",
      etiqueta: "A 28 km",
    },
  ];

  return (
    <>
      <section className="pt-20 lg:pt-32 pb-16 lg:pb-24">
        <div className="container-content">
          <SectionHeader
            title={t.pages.experiencias.titulo}
            subtitle={t.pages.experiencias.descripcion}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinos.map((d) => {
              const Icon = ICONS[d.id];
              return (
                <article
                  key={d.id}
                  className="rounded-soft overflow-hidden border border-carbone/10 bg-blanco shadow-soft hover:shadow-softHover transition-all flex flex-col"
                >
                  <div className="p-8">
                    {d.etiqueta && (
                      <span className="text-xs font-sans font-semibold tracking-wider text-oliva uppercase block mb-3">
                        {d.etiqueta}
                      </span>
                    )}
                    <div
                      className="w-12 h-12 rounded-full bg-bosque/5 flex items-center justify-center mb-4 text-bosque"
                      aria-hidden="true"
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="font-serif text-bosque text-h3 mb-4">
                      {d.titulo}
                    </h3>
                    <p className="font-sans text-carbone/80 text-sm leading-relaxed mb-6 flex-grow">
                      {d.descripcion}
                    </p>
                    <p className="font-sans text-xs text-bosque/70 font-medium mb-6">
                      {d.practico}
                    </p>
                    <p className="font-sans text-carbone/60 text-xs italic mb-6 flex-grow">
                      {d.porque}
                    </p>
                    {d.enlace && (
                      <LinkArrow
                        href={d.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        external
                        className="mt-auto inline-block"
                      >
                        {t.common.leerMas}
                      </LinkArrow>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-blanco">
        <div className="container-content text-center">
          <SectionHeader title="Organiza tus días" align="center" />
          <p className="font-sans text-carbone/80 text-body max-w-xl mx-auto mb-10 lg:mb-12 leading-relaxed">
            Alexandre y Aurélie pueden orientarte sobre las actividades de la zona y
            el hotel ofrece asistencia para el alquiler de carros, para que te muevas
            con libertad por Ojochal y el Pacífico Sur.
          </p>
          <LinkArrow
            href={pathFor("contacto", lang)}
            className="inline-flex items-center justify-center px-10 py-5 rounded-full text-base font-semibold bg-bosque text-white shadow-soft hover:bg-oliva hover:shadow-softHover transition-all"
          >
            {t.common.verDisponibilidad}
          </LinkArrow>
        </div>
      </section>
    </>
  );
}
