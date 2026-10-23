import * as React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LangProvider } from "@/content/i18n";
import Layout from "@/components/Layout";
import { Head } from "@/components/Head";
import Home from "@/pages/Home";
import Alojamiento from "@/pages/Alojamiento";
import Hotel from "@/pages/Hotel";
import Experiencias from "@/pages/Experiencias";
import Galeria from "@/pages/Galeria";
import Contacto from "@/pages/Contacto";
import NotFound from "@/pages/NotFound";

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/es/": {
    title: "Oasis de las Palmas | Hotel boutique en Ojochal, Costa Rica",
    description:
      "Un refugio tropical en el corazón de Ojochal de Osa. Bungalow independiente y habitaciones familiares rodeados de más de 2 hectáreas de jardines, con piscina y parqueo privado.",
  },
  "/es/alojamiento": {
    title: "Alojamiento | Oasis de las Palmas",
    description:
      "Conoce el bungalow independiente y las dos habitaciones familiares de nuestro hotel en Ojochal, Costa Rica. Servicios, características y disponibilidad.",
  },
  "/es/el-hotel": {
    title: "El hotel | Oasis de las Palmas",
    description:
      "Jardines, piscina y el entorno natural de Oasis de las Palmas en Ojochal de Osa, Costa Rica.",
  },
  "/es/experiencias": {
    title: "Experiencias | Oasis de las Palmas",
    description:
      "Playas, naturaleza y actividades alrededor de Ojochal, en el Pacífico Sur de Costa Rica.",
  },
  "/es/galeria": {
    title: "Galería | Oasis de las Palmas",
    description:
      "Fotografías de las habitaciones, el bungalow, los jardines, la piscina y el entorno natural de Oasis de las Palmas.",
  },
  "/es/contacto": {
    title: "Contacto | Oasis de las Palmas",
    description:
      "Información de contacto, ubicación y reserva directa de Oasis de las Palmas en Ojochal, Costa Rica.",
  },
  "/en/": {
    title: "Oasis de las Palmas | Boutique hotel in Ojochal, Costa Rica",
    description:
      "A tropical refuge in the heart of Ojochal de Osa. Independent bungalow and family rooms surrounded by more than 2 hectares of gardens, with pool and free private parking.",
  },
  "/en/accommodation": {
    title: "Accommodation | Oasis de las Palmas",
    description:
      "Discover the independent bungalow and the two family rooms of our hotel in Ojochal, Costa Rica. Services, features and availability.",
  },
  "/en/the-hotel": {
    title: "The hotel | Oasis de las Palmas",
    description:
      "Gardens, pool and the natural setting of Oasis de las Palmas in Ojochal de Osa, Costa Rica.",
  },
  "/en/experiences": {
    title: "Experiences | Oasis de las Palmas",
    description:
      "Beaches, nature and activities around Ojochal, in the South Pacific of Costa Rica.",
  },
  "/en/gallery": {
    title: "Gallery | Oasis de las Palmas",
    description:
      "Photographs of the rooms, the bungalow, the gardens, the pool and the natural surroundings of Oasis de las Palmas.",
  },
  "/en/contact": {
    title: "Contact | Oasis de las Palmas",
    description:
      "Contact information, location and direct booking for Oasis de las Palmas in Ojochal, Costa Rica.",
  },
};

function MetaPage({ title, description }: { title: string; description: string }) {
  return <Head title={title} description={description} />;
}

function MappedPage({ component: Component, path }: { component: React.ComponentType; path: string }) {
  const location = useLocation();
  void location;
  const meta = PAGE_META[path] || PAGE_META["/es/"];
  return (
    <>
      <MetaPage title={meta.title} description={meta.description} />
      <Component />
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Layout>
          <Head title={PAGE_META["/es/"].title} description={PAGE_META["/es/"].description} />
          <Routes>
            <Route path="/es/" element={<MappedPage component={Home} path="/es/" />} />
            <Route
              path="/es/alojamiento"
              element={<MappedPage component={Alojamiento} path="/es/alojamiento" />}
            />
            <Route
              path="/es/el-hotel"
              element={<MappedPage component={Hotel} path="/es/el-hotel" />}
            />
            <Route
              path="/es/experiencias"
              element={<MappedPage component={Experiencias} path="/es/experiencias" />}
            />
            <Route
              path="/es/galeria"
              element={<MappedPage component={Galeria} path="/es/galeria" />}
            />
            <Route
              path="/es/contacto"
              element={<MappedPage component={Contacto} path="/es/contacto" />}
            />

            <Route path="/en/" element={<MappedPage component={Home} path="/en/" />} />
            <Route
              path="/en/accommodation"
              element={<MappedPage component={Alojamiento} path="/en/accommodation" />}
            />
            <Route
              path="/en/the-hotel"
              element={<MappedPage component={Hotel} path="/en/the-hotel" />}
            />
            <Route
              path="/en/experiences"
              element={<MappedPage component={Experiencias} path="/en/experiences" />}
            />
            <Route
              path="/en/gallery"
              element={<MappedPage component={Galeria} path="/en/gallery" />}
            />
            <Route
              path="/en/contact"
              element={<MappedPage component={Contacto} path="/en/contact" />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LangProvider>
  );
}
