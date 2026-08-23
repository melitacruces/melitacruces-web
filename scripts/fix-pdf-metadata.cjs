const { PDFDocument } = require('pdf-lib');
const fs = require('node:fs');
const path = require('node:path');

async function fixMetadata() {
  const publicDir = path.join(__dirname, '..', 'public');
  const filesToFix = [
    {
      path: path.join(publicDir, 'certificates', 'grado.pdf'),
      title: 'Certificado de Grado - Luis Andrés Melita Cruces',
      subject: 'Universidad de Concepción',
    },
    {
      path: path.join(publicDir, 'certificates', 'titulo.pdf'),
      title: 'Certificado de Título - Luis Andrés Melita Cruces',
      subject: 'Universidad de Concepción',
    },
    {
      path: path.join(publicDir, 'certificates', 'microsoft-python-development.pdf'),
      title: 'Microsoft Python Development - Luis Andrés Melita Cruces',
      subject: 'Microsoft / Coursera',
    },
    {
      path: path.join(publicDir, 'documents', 'cv.pdf'),
      title: 'Curriculum Vitae - Luis Andrés Melita Cruces',
      subject: 'Curriculum Vitae',
    },
  ];

  console.log('Iniciando limpieza de metadatos de documentos...');

  for (const item of filesToFix) {
    const fileName = path.basename(item.path);

    if (!fs.existsSync(item.path)) {
      console.warn(`Archivo no encontrado: ${fileName}`);
      continue;
    }

    try {
      const existingPdfBytes = fs.readFileSync(item.path);
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      // Estos valores normalizan los metadatos visibles de cada documento.
      pdfDoc.setTitle(item.title);
      pdfDoc.setAuthor('Luis Andrés Melita Cruces');
      pdfDoc.setSubject(item.subject);
      pdfDoc.setProducer('ValueDev Portfolio Tools');
      pdfDoc.setCreator('ValueDev Portfolio Tools');

      const pdfBytes = await pdfDoc.save();
      fs.writeFileSync(item.path, pdfBytes);

      console.log(`Archivo actualizado: ${fileName}. Título: "${item.title}".`);
    } catch (error) {
      console.error(`No se pudo procesar ${fileName}:`, error);
    }
  }

  console.log('Proceso finalizado.');
}

fixMetadata().catch(console.error);
