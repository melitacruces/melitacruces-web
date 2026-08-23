/**
 * Este script optimiza en el mismo lugar las imágenes JPG, JPEG y PNG de public/images, conserva sus nombres y rutas, limita sus dimensiones y evita volver a comprimir archivos que ya son pequeños. Se ejecuta con npm run optimize-images.
 */
const sharp = require('sharp');
const fs = require('node:fs');
const path = require('node:path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

// Estos umbrales evitan volver a comprimir archivos que ya tienen un tamaño reducido.
const SKIP_BELOW_BYTES = {
  jpg: 80 * 1024,
  jpeg: 80 * 1024,
  png: 150 * 1024,
};

const JPG_QUALITY = 82;
const JPG_MAX_WIDTH = 1200;
const PNG_MAX_WIDTH = 1600;

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase().replace('.', '');
  const fileName = path.basename(filePath);
  const originalSize = fs.statSync(filePath).size;
  const skipThreshold = SKIP_BELOW_BYTES[ext];

  if (skipThreshold && originalSize < skipThreshold) {
    console.log(
      `${fileName} (${(originalSize / 1024).toFixed(0)} KB): ya está optimizado y se omite.`
    );
    return { skipped: true, originalSize, newSize: originalSize };
  }

  const input = fs.readFileSync(filePath);
  const image = sharp(input);
  const meta = await image.metadata();

  let pipeline = image;

  if (ext === 'jpg' || ext === 'jpeg') {
    if (meta.width > JPG_MAX_WIDTH) {
      pipeline = pipeline.resize({ width: JPG_MAX_WIDTH, withoutEnlargement: true });
    }
    pipeline = pipeline.jpeg({ quality: JPG_QUALITY, progressive: true, mozjpeg: true });
  } else if (ext === 'png') {
    if (meta.width > PNG_MAX_WIDTH) {
      pipeline = pipeline.resize({ width: PNG_MAX_WIDTH, withoutEnlargement: true });
    }
    pipeline = pipeline.png({ compressionLevel: 9, palette: true, quality: 85, effort: 10 });
  } else {
    console.log(`${fileName}: el formato no está soportado y se omite.`);
    return { skipped: true, originalSize, newSize: originalSize };
  }

  const output = await pipeline.toBuffer();
  fs.writeFileSync(filePath, output);

  const newSize = output.length;
  const savedPct = ((1 - newSize / originalSize) * 100).toFixed(0);
  const resultLabel = newSize < originalSize ? 'optimizado' : 'sin cambios';
  console.log(
    `${fileName}: ${(originalSize / 1024).toFixed(0)} KB a ${(newSize / 1024).toFixed(
      0
    )} KB, ${savedPct}% de diferencia, ${resultLabel}.`
  );

  // El archivo original se restaura cuando la versión procesada ocupa el mismo espacio o más.
  if (newSize >= originalSize) {
    fs.writeFileSync(filePath, input);
    return { skipped: true, originalSize, newSize: originalSize };
  }

  return { skipped: false, originalSize, newSize };
}

async function main() {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`No existe: ${IMAGES_DIR}`);
    process.exit(1);
  }

  const files = fs
    .readdirSync(IMAGES_DIR)
    .filter((f) => /\.(jpe?g|png)$/i.test(f))
    .map((f) => path.join(IMAGES_DIR, f));

  console.log(`Optimizando ${files.length} imágenes en public/images/.`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const result = await optimizeFile(file);
    totalBefore += result.originalSize;
    totalAfter += result.newSize;
  }

  const totalSavedKb = ((totalBefore - totalAfter) / 1024).toFixed(0);
  const totalSavedPct = ((1 - totalAfter / totalBefore) * 100).toFixed(0);
  console.log(
    `Total: ${(totalBefore / 1024).toFixed(0)} KB a ${(totalAfter / 1024).toFixed(
      0
    )} KB, ${totalSavedKb} KB ahorrados, ${totalSavedPct}%.`
  );
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
