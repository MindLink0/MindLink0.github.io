import React from 'react';
import '../styles/Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h1 className="contacto-title">¿Necesitas hablar?</h1>

      <p className="contacto-intro">
        Si estás pasando por un momento difícil o simplemente necesitas hablar, recuerda que no estás solo.
        Aquí encontrarás líneas de atención confiables y canales de contacto para recibir orientación o comunicarte con nuestro equipo.
      </p>

      {/* Líneas de atención inmediata */}
      <section className="contacto-section">
        <h2>Líneas de atención inmediata</h2>
        <ul className="contacto-list">
          <li><strong>Línea 106 (Bogotá):</strong> atención en salud mental disponible las 24 horas del día.</li>
          <li><strong>Línea 192 opción 4 (Ministerio de Salud):</strong> orientación emocional a nivel nacional.</li>
          <li><strong>Línea 155:</strong> atención a mujeres víctimas de violencia.</li>
          <li><strong>Línea 141 (ICBF):</strong> protección y apoyo a niños, niñas y adolescentes.</li>
        </ul>
      </section>

      {/* Orientación en línea */}
      <section className="contacto-section">
        <h2>Orientación en línea</h2>
        <ul className="contacto-list">
          <li><strong>Línea Amiga Saludable (Bogotá):</strong> WhatsApp +57 300 754 8933</li>
          <li>
            <strong>Chat de orientación psicológica:</strong>{' '}
            disponible en{' '}
            <a
              href="https://www.minsalud.gov.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.minsalud.gov.co
            </a>
          </li>
          <li>
            <strong>RedPapaz – Te Protejo:</strong>{' '}
            <a
              href="https://www.teprotejo.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.teprotejo.org
            </a>
          </li>
        </ul>
      </section>

      {/* Contacto del proyecto */}
      <section className="contacto-section">
        <h2>Contacto del proyecto</h2>
        <ul className="contacto-list">
          <li><strong>Correo:</strong> contacto@tuwebsaludmental.com</li>
          <li><strong>WhatsApp:</strong> +57 312 123 4567</li>
          <li><strong>Horario de atención:</strong> lunes a viernes, de 8:00 a.m. a 6:00 p.m.</li>
        </ul>
      </section>
    </div>
  );
};

export default Contacto;
