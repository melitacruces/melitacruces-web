// Uso este pequeño componente para estandarizar el estilo de los títulos en cada sección.
// Así, si quiero cambiar el gradiente o el tamaño de las fuentes, solo modifico la clase "section-title".
export default function SectionTitle({ children, id }) {
  return (
    <h2 className="section-title" id={id}>
      {children}
    </h2>
  );
}
