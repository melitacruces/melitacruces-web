/**
 * Optimiza imágenes de public/images/ en sitio.
 * - JPG/JPEG: re-encode con quality 82, max ancho 1200px
 * - PNG: re-encode con compressionLevel 9, palette si conviene, max ancho 1600px
 *
 * Idempotente-ish: si el archivo ya es pequeño (< minSize), se salta.
 * Conserva extensiones y rutas — el JSX no necesita cambios.
 *
 * Uso: npm run optimize-images
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

// Si un archivo ya pesa menos que esto, se salta (evita doble compresión)
const SKIP_BELOW_BYTES = {
  jpg: 80 * 1024,   // 80 KB
  jpeg: 80 * 1024,
  png: 150 * 1024,  // 150 KB
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
    console.log(`⏭️  ${fileName} (${(originalSize / 1024).toFixed(0)} KB) — ya está optimizado, se omite`);
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
    console.log(`⏭️  ${fileName} — formato no soportado, se omite`);
    return { skipped: true, originalSize, newSize: originalSize };
  }

  const output = await pipeline.toBuffer();
  fs.writeFileSync(filePath, output);

  const newSize = output.length;
  const savedPct = ((1 - newSize / originalSize) * 100).toFixed(0);
  const arrow = newSize < originalSize ? '✅' : '⚠️ ';
  console.log(
    `${arrow} ${fileName}: ${(originalSize / 1024).toFixed(0)} KB → ${(newSize / 1024).toFixed(0)} KB (${savedPct}% ${
      newSize < originalSize ? 'ahorrado' : 'aumentado, revertido'
    })`
  );

  // Si por algún motivo terminó MÁS grande, revertir
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

  console.log(`Optimizando ${files.length} imágenes en public/images/\n`);

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
    `\n📦 Total: ${(totalBefore / 1024).toFixed(0)} KB → ${(totalAfter / 1024).toFixed(
      0
    )} KB (${totalSavedKb} KB ahorrados, ${totalSavedPct}%)`
  );
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
