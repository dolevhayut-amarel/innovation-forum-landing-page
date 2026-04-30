import { createWriteStream, mkdirSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const BASE = 'https://leads.hackeru.co.il';

const assets = [
  // Hero
  ['/wp-content/uploads/2025/05/bg-banner.jpg', 'images/bg-banner.jpg'],
  ['/wp-content/themes/hackerulps/dist/img/lp-global-2025/man.png', 'images/man.png'],
  ['/wp-content/themes/hackerulps/dist/img/lp-global-2025/bpluses.png', 'images/bpluses.png'],
  ['/wp-content/uploads/2025/05/bicon1.png', 'images/bicon1.png'],
  ['/wp-content/uploads/2025/05/bicon2.png', 'images/bicon2.png'],
  ['/wp-content/uploads/2025/05/bicon3.png', 'images/bicon3.png'],
  // Logo
  ['/wp-content/themes/hackerulps/dist/img/lp-new-global-2024/logo-white.png', 'images/logo-white.png'],
  // Client logos
  ['/wp-content/uploads/2025/02/AbrA.webp', 'images/logo-abra.webp'],
  ['/wp-content/uploads/2025/02/ONE-Taldor.webp', 'images/logo-one-taldor.webp'],
  ['/wp-content/uploads/2025/02/papaya-global-HI-5CD01147JT.webp', 'images/logo-papaya.webp'],
  ['/wp-content/uploads/2025/02/images.webp', 'images/logo-itworks.webp'],
  ['/wp-content/uploads/2025/02/Hibob.webp', 'images/logo-hibob.webp'],
  ['/wp-content/uploads/2025/02/HP.webp', 'images/logo-hp.webp'],
  ['/wp-content/uploads/2025/02/g10.webp', 'images/logo-solaredge.webp'],
  ['/wp-content/uploads/2025/02/Amdocs.webp', 'images/logo-amdocs.webp'],
  ['/wp-content/uploads/2025/02/Cyrebro.webp', 'images/logo-cyrebro.webp'],
  // Why study
  ['/wp-content/themes/hackerulps/dist/img/lp-global-2025/purple-shape.png', 'images/purple-shape.png'],
  ['/wp-content/themes/hackerulps/dist/img/lp-global-2025/green-shape.png', 'images/green-shape.png'],
  ['/wp-content/themes/hackerulps/dist/img/lp-global-2025/purple-shape2.png', 'images/purple-shape2.png'],
  ['/wp-content/themes/hackerulps/dist/img/lp-global-2025/why-study.png', 'images/why-study.png'],
  ['/wp-content/themes/hackerulps/dist/img/lp-global-2025/why-lines2.png', 'images/why-lines2.png'],
  ['/wp-content/uploads/2025/02/icon66.webp', 'images/why-icon1.webp'],
  ['/wp-content/uploads/2025/02/icon11.webp', 'images/why-icon2.webp'],
  ['/wp-content/uploads/2025/05/rocket.png', 'images/why-icon3.png'],
  // Study program icons
  ['/wp-content/uploads/2025/05/icon1.png', 'images/course-icon1.png'],
  ['/wp-content/uploads/2025/05/icon2.png', 'images/course-icon2.png'],
  ['/wp-content/uploads/2025/05/icon3.png', 'images/course-icon3.png'],
  ['/wp-content/uploads/2025/05/icon4.png', 'images/course-icon4.png'],
  ['/wp-content/uploads/2025/05/icon5.png', 'images/course-icon5.png'],
  ['/wp-content/uploads/2025/05/icon6.png', 'images/course-icon6.png'],
  ['/wp-content/uploads/2025/05/icon7.png', 'images/course-icon7.png'],
  ['/wp-content/uploads/2025/05/icon8.png', 'images/course-icon8.png'],
  // Testimonials
  ['/wp-content/themes/hackerulps/dist/img/lp-global-2025/vplay.png', 'images/vplay.png'],
  ['/wp-content/uploads/2025/05/%D7%A2%D7%99%D7%93%D7%95-%D7%91%D7%95%D7%9E%D7%A1.jpg', 'images/testimonial-ido.jpg'],
  ['/wp-content/uploads/2025/05/%D7%95%D7%99%D7%98%D7%9C%D7%99-%D7%A8%D7%99%D7%A1%D7%A7%D7%99%D7%9F.png', 'images/testimonial-vitaly.png'],
  ['/wp-content/uploads/2025/05/%D7%A0%D7%95%D7%A2%D7%94-%D7%90%D7%93%D7%9C%D7%9E%D7%9F.png', 'images/testimonial-noa.png'],
  ['/wp-content/uploads/2025/05/%D7%A0%D7%99%D7%A8-%D7%A1%D7%90%D7%99%D7%90%D7%A1.png', 'images/testimonial-nir.png'],
  ['/wp-content/uploads/2025/05/%D7%A9%D7%A0%D7%99-%D7%A7%D7%A8%D7%9C.png', 'images/testimonial-shani.png'],
  // Footer
  ['/wp-content/themes/hackerulps/dist/img/lp-global-2025/footer-bg.jpg', 'images/footer-bg.jpg'],
  // Fonts
  ['/wp-content/themes/hackerulps/dist/webfonts/SimplerPro-Black.woff2', 'fonts/SimplerPro-Black.woff2'],
  ['/wp-content/themes/hackerulps/dist/webfonts/SimplerPro-Black.woff', 'fonts/SimplerPro-Black.woff'],
  ['/wp-content/themes/hackerulps/dist/webfonts/SimplerPro_HLAR-Bold.woff', 'fonts/SimplerPro-Bold.woff'],
  ['/wp-content/themes/hackerulps/dist/webfonts/SimplerPro_HLAR-Regular.woff', 'fonts/SimplerPro-Regular.woff'],
  ['/wp-content/themes/hackerulps/dist/webfonts/SimplerPro_HLAR-Semibold.woff', 'fonts/SimplerPro-Semibold.woff'],
  ['/wp-content/themes/hackerulps/dist/webfonts/SimplerPro_HLAR-Light.woff', 'fonts/SimplerPro-Light.woff'],
];

async function download(urlPath, dest) {
  const url = urlPath.startsWith('http') ? urlPath : BASE + urlPath;
  const outPath = path.join(ROOT, 'public', dest);
  mkdirSync(path.dirname(outPath), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) { console.warn(`SKIP ${url} (${res.status})`); return; }
  await pipeline(res.body, createWriteStream(outPath));
  console.log(`OK  ${dest}`);
}

// Batch download 4 at a time
async function main() {
  for (let i = 0; i < assets.length; i += 4) {
    await Promise.all(assets.slice(i, i + 4).map(([src, dest]) => download(src, dest).catch(e => console.warn(`ERR ${dest}: ${e.message}`))));
  }
  console.log('Done');
}

main();
