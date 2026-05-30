import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Aquí inicializo la aplicación React.
// Busco el elemento con id 'root' en el index.html para inyectar todo el contenido dinámico.
createRoot(document.getElementById('root')).render(
  // Utilizo StrictMode durante el desarrollo para asegurarme de que mi código sigue las mejores prácticas de React.
  <StrictMode>
    <App />
  </StrictMode>
);
