const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function fixMetadata() {
  const publicDir = path.join(__dirname, '..', 'public');
  const filesToFix = [
    { 
      path: path.join(publicDir, 'certificates', 'grado.pdf'), 
      title: 'Certificado de Grado - Luis Andrés Melita Cruces',
      subject: 'Universidad de Concepción'
    },
    { 
      path: path.join(publicDir, 'certificates', 'titulo.pdf'), 
      title: 'Certificado de Título - Luis Andrés Melita Cruces',
      subject: 'Universidad de Concepción'
    },
    { 
      path: path.join(publicDir, 'certificates', 'microsoft-python-development.pdf'), 
      title: 'Microsoft Python Development - Luis Andrés Melita Cruces',
      subject: 'Microsoft / Coursera'
    },
    { 
      path: path.join(publicDir, 'documents', 'cv.pdf'), 
      title: 'Curriculum Vitae - Luis Andrés Melita Cruces',
      subject: 'Curriculum Vitae'
    }
  ];

  console.log('Iniciando limpieza de metadatos de documentos...');

  for (const item of filesToFix) {
    const filePath = item.path;
    const fileName = path.basename(filePath);
    
    if (!fs.existsSync(filePath)) {
      console.warn(`Archivo no encontrado: ${fileName}`);
      continue;
    }

    try {
      const existingPdfBytes = fs.readFileSync(filePath);
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      
      // Actualizar metadatos
      pdfDoc.setTitle(item.title);
      pdfDoc.setAuthor('Luis Andrés Melita Cruces');
      pdfDoc.setSubject(item.subject);
      pdfDoc.setProducer('ValueDev Portfolio Tools');
      pdfDoc.setCreator('ValueDev Portfolio Tools');

      const pdfBytes = await pdfDoc.save();
      fs.writeFileSync(filePath, pdfBytes);
      
      console.log(`✅ Arreglado: ${fileName} -> Título: "${item.title}"`);
    } catch (error) {
      console.error(`❌ Error procesando ${item.file}:`, error);
    }
  }

  console.log('Proceso finalizado.');
}

fixMetadata().catch(console.error);
