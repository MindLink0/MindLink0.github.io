import React, { useEffect, useState } from "react";
import "../styles/Footer.css";  // Asegúrate de que la ruta sea correcta


const Footer = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // activa animación al montar
  }, []);

  return (
    <footer
      className={`
        bg-gray-700 text-white py-10 w-full
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        transition-all duration-700 ease-out
      `}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección de MindLink */}
        <div>
          <h3 className="text-xl font-semibold mb-2">MindLink</h3>
          <p className="text-gray-300">
            Foro anónimo de salud mental, apoyo emocional y recursos profesionales.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Enlaces</h3>
          <ul className="space-y-1">
            <li>
              <a href="#hero" className="hover:text-blue-400 transition-colors font-semibold">
                Inicio
              </a>
            </li>
            <li>
              <a href="#foro" className="hover:text-blue-400 transition-colors font-semibold">
                Foro
              </a>
            </li>
            <li>
              <a href="#recursosprofesionales" className="hover:text-blue-400 transition-colors font-semibold">
                Recursos
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-blue-400 transition-colors font-semibold">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Redes y contacto */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contacto & Redes</h3>
          <div className="flex flex-col space-y-2">
            <a
              href="https://github.com/AndresContreras1034"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors font-semibold"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/andrescontreras1034"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contrerandres001@gmail.com"
              className="hover:text-blue-400 transition-colors font-semibold"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MindLink. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
