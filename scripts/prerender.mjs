import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const clientTemplatePath = path.join(projectRoot, 'dist', 'index.html');
const prerenderDirectory = path.resolve(projectRoot, '.prerender');
const serverBundlePath = path.join(prerenderDirectory, 'entry-server.js');

if (path.dirname(prerenderDirectory) !== projectRoot) {
  throw new Error('El directorio temporal de prerenderizado debe estar dentro del proyecto.');
}

const [{ render }, template] = await Promise.all([
  import(pathToFileURL(serverBundlePath)),
  readFile(clientTemplatePath, 'utf8'),
]);

const appHtml = render();
const prerenderedHtml = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`,
);

if (prerenderedHtml === template) {
  throw new Error('No se encontró el contenedor raíz vacío para insertar el HTML prerenderizado.');
}

await writeFile(clientTemplatePath, prerenderedHtml, 'utf8');
await rm(prerenderDirectory, { recursive: true, force: true });

console.log('HTML prerenderizado en dist/index.html.');
