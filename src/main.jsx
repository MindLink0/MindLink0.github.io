import './index.css';  // Importa tu CSS global desde src/index.css
import App from './App.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Renderiza el componente App dentro del div con id "root"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
