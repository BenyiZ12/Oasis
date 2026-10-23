import fs from "fs";
import path from "path";

const BASE = "https://s3-cdn.hotellinksolutions.com/hls/data/6219/gallery/thumbs/";
const OUT = path.join(process.cwd(), "public", "images", "hotel");
fs.mkdirSync(OUT, { recursive: true });

const files = [
  "full_dsc02694_1668789351.jpg",
  "full_img_2389_1668789116.jpg",
  "full_img_3092_1668789117.jpg",
  "full_img_0021---copia_1668789352.jpg",
  "full_img_2178_1668789117.jpg",
  "full_img_0209_1668789353.jpg",
  "full_img-0137_1668789118.jpg",
  "full_img_3966_1668789118.jpg",
  "full_montaje2_1668789119.jpg",
  "full_img_0980_1668789355.jpg",
  "full_img_1128_1668789356.jpg",
  "full_img_1597_1668789356.jpg",
  "full_retocada1_1668789120.jpg",
  "full_tragos_1668789121.jpg",
  "full_img_2179_1668789357.jpg",
  "full_img_2510_1668789359.jpg",
  "full_img_2517_1668789360.jpg",
  "full_img_2669_1668789361.jpg",
  "full_img_2796_1668789362.jpg",
  "full_img_2802_1668789363.jpg",
];

async function download(name) {
  try {
    const res = await fetch(BASE + name);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${name}`);
    const buf = await res.arrayBuffer();
    fs.writeFileSync(path.join(OUT, name), Buffer.from(buf));
    console.log("OK", name);
  } catch (e) {
    console.error("ERR", name, e.message);
  }
}

(async () => {
  for (const f of files) await download(f);
  console.log("Done");
})();
