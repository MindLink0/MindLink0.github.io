import React from 'react';
import '../styles/RecursosProfesionales.css';

const RecursosProfesionales = () => {
  return (
    <div id="recursos-profesionales" className="recursosprofesionales-container">
      <h1 className="recursos-title">Recursos Profesionales</h1>

      <section className="recursos-section">
        <h2>Plataformas y organizaciones confiables</h2>
        <ul className="recursos-list">
          <li>
            <strong>Te Protejo:</strong> Plataforma anónima para reportar y recibir orientación frente a casos de acoso, maltrato, abuso sexual, explotación o cualquier situación que vulnere los derechos de niños, niñas y adolescentes.  
            <br />
            <a 
              href="https://www.teprotejo.org/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://www.teprotejo.org/
            </a>
          </li>
          <li>
            <strong>Red PaPaz:</strong> Organización colombiana que promueve la protección de los derechos de los menores y ofrece recursos educativos para fortalecer la salud mental y emocional en las familias.  
            <br />
            <a 
              href="https://www.redpapaz.org/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://www.redpapaz.org/
            </a>
          </li>
          <li>
            <strong>Mente Sana:</strong> Iniciativa enfocada en promover el bienestar emocional a través de artículos, talleres virtuales y programas de desarrollo personal guiados por profesionales de la salud mental.  
            <br />
            <a 
              href="https://www.mentesana.org/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://www.mentesana.org/
            </a>
          </li>
        </ul>
      </section>

      <section className="recursos-section">
        <h2>Material de orientación y autocuidado</h2>
        <ul className="recursos-list">
          <li>
            <strong>Guías y material del Ministerio de Salud:</strong> Encuentra guías oficiales en PDF sobre manejo de ansiedad, depresión y estrategias de autocuidado emocional.  
            <br />
            <a 
              href="https://www.minsalud.gov.co/salud/publica/SMental/Paginas/promocion-salud-mental.aspx" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://www.minsalud.gov.co/salud/publica/SMental/Paginas/promocion-salud-mental.aspx
            </a>
          </li>
          <li>
            <strong>Podcasts sobre bienestar mental y resiliencia:</strong> Explora programas en Spotify o YouTube dedicados a la salud mental:
            <ul>
              <li>
                <em>Entiende Tu Mente</em> – Psicología explicada de forma práctica.  
                <br />
                <a 
                  href="https://open.spotify.com/show/6U0H3UClM7hOYvCKH0HfUe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://open.spotify.com/show/6U0H3UClM7hOYvCKH0HfUe
                </a>
              </li>
              <li>
                <em>Se Regalan Dudas</em> – Conversaciones sobre emociones, relaciones y crecimiento personal.  
                <br />
                <a 
                  href="https://open.spotify.com/show/5c07O6K0iHbBhv3RkOlXQJ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://open.spotify.com/show/5c07O6K0iHbBhv3RkOlXQJ
                </a>
              </li>
            </ul>
          </li>
          <li>
            <strong>Talleres y recursos de mindfulness y meditación:</strong> Accede a sesiones gratuitas de relajación y autocuidado en línea:
            <ul>
              <li>
                <em>Headspace</em> – Meditaciones guiadas y técnicas para reducir el estrés.  
                <br />
                <a 
                  href="https://www.headspace.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://www.headspace.com/
                </a>
              </li>
              <li>
                <em>Calm</em> – Ejercicios de respiración y mindfulness diario.  
                <br />
                <a 
                  href="https://www.calm.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://www.calm.com/
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default RecursosProfesionales;
