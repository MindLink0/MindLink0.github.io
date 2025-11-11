import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Mision from "./components/Mision.jsx";
import Vision from "./components/Vision.jsx";
import Integrantes from "./components/Integrantes.jsx";
import Foro from "./components/Foro.jsx";
import RecursosProfesionales from "./components/RecursosProfesionales.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";
import CrearCuenta from "./components/CrearCuenta.jsx";
import IniciarSesion from "./components/IniciarSesion.jsx";
import Terminos from "./components/Terminos.jsx"; // Asegúrate de que el componente tenga la primera letra en mayúscula

import './index.css';  // Importa tu CSS global desde src/index.css

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <Terminos /> {/* Cambié a mayúscula */}
              <Mision />
              <Vision />
              <Integrantes />
              <Foro />
              <RecursosProfesionales />
              <Contacto />
            </div>
          }
        />
        <Route path="/crear-cuenta" element={<CrearCuenta />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
