export interface HotelImage {
  id: string;
  src: string;
  alt: string;
  section: string;
  width?: number;
  height?: number;
}

const BASE = "/images/hotel";

export const hotelImages: HotelImage[] = [
  { id: "hero", src: `${BASE}/full_dsc02694_1668789351.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "hero", width: 1600, height: 900 },
  { id: "editorial", src: `${BASE}/full_img_2389_1668789116.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "editorial", width: 1200, height: 800 },
  { id: "bungalow", src: `${BASE}/full_img_3092_1668789117.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "alojamiento", width: 900, height: 600 },
  { id: "familiar-1", src: `${BASE}/full_img_0021---copia_1668789352.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "alojamiento", width: 900, height: 600 },
  { id: "familiar-2", src: `${BASE}/full_img_2178_1668789117.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "alojamiento", width: 900, height: 600 },
  { id: "jardines-1", src: `${BASE}/full_img_0209_1668789353.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "jardines", width: 1400, height: 900 },
  { id: "jardines-2", src: `${BASE}/full_img-0137_1668789118.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "jardines", width: 1400, height: 900 },
  { id: "galeria-1", src: `${BASE}/full_img_3966_1668789118.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "galeria" },
  { id: "galeria-2", src: `${BASE}/full_montaje2_1668789119.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "galeria" },
  { id: "galeria-3", src: `${BASE}/full_img_0980_1668789355.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "galeria" },
  { id: "galeria-4", src: `${BASE}/full_img_1128_1668789356.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "galeria" },
  { id: "galeria-5", src: `${BASE}/full_img_1597_1668789356.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "galeria" },
  { id: "galeria-6", src: `${BASE}/full_retocada1_1668789120.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "galeria" },
  { id: "galeria-7", src: `${BASE}/full_tragos_1668789121.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "galeria" },
  { id: "galeria-8", src: `${BASE}/full_img_2179_1668789357.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "galeria" },
  { id: "galeria-9", src: `${BASE}/full_img_2510_1668789359.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "galeria" },
  { id: "galeria-10", src: `${BASE}/full_img_2517_1668789360.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "galeria" },
  { id: "galeria-11", src: `${BASE}/full_img_2669_1668789361.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "galeria" },
  { id: "galeria-12", src: `${BASE}/full_img_2796_1668789362.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "galeria" },
  { id: "galeria-13", src: `${BASE}/full_img_2802_1668789363.jpg`, alt: "Oasis de las Palmas, Ojochal de Osa, Costa Rica", section: "galeria" },
];

export function getImagesBySection(section: string): HotelImage[] {
  return hotelImages.filter((img) => img.section === section);
}

export function getImageById(id: string): HotelImage | undefined {
  return hotelImages.find((img) => img.id === id);
}
