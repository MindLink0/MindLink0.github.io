import React, { useState } from 'react';
import '../styles/Terminos.css';

const Terminos = () => {
  const [mostrarTerminos, setMostrarTerminos] = useState(false);

  const toggleTerminos = () => {
    setMostrarTerminos(!mostrarTerminos);
  };

  return (
    <div id="terminos" className="terminos-container">
      <h1 className="terminos-title">Términos y Condiciones del Foro</h1>
      <p className="terminos-intro">
        Estos son los términos que rigen el uso del foro. Al estar aquí, aceptas cumplir con las siguientes condiciones para mantener un espacio seguro, respetuoso y útil para todos.
      </p>

      <button className="ver-terminos-btn" onClick={toggleTerminos}>
        {mostrarTerminos ? 'Ocultar Términos y Condiciones' : 'Ver Términos y Condiciones'}
      </button>

      {mostrarTerminos && (
        <div className="terminos-contenido">
          <p className="terminos-fecha">Última actualización: 15 de octubre de 2025</p>

          <section>
            <h2>1. Aceptación de los Términos</h2>
            <p>Al acceder y participar en este foro, aceptas cumplir estos Términos y Condiciones. Si no estás de acuerdo, no uses el foro.</p>
          </section>

          <section>
            <h2>2. Uso del Foro</h2>
            <p>El foro es un espacio anónimo y seguro para compartir experiencias relacionadas con salud mental.</p>
            <p>Debes usar el foro de manera respetuosa y responsable, evitando lenguaje ofensivo, discriminatorio o ilegal.</p>
            <p>No se permite compartir información personal de terceros sin su consentimiento.</p>
          </section>

          <section>
            <h2>3. Privacidad y Datos Personales</h2>
            <p>Todos los mensajes pueden ser anónimos.</p>
            <p>No se recopilan datos personales sin tu consentimiento explícito.</p>
            <p>La información compartida en el foro no se divulga fuera de la plataforma.</p>
          </section>

          <section>
            <h2>4. Moderación</h2>
            <p>El foro cuenta con moderadores que pueden editar, eliminar o bloquear mensajes que infrinjan estos términos.</p>
            <p>Los usuarios que incumplan las normas pueden ser suspendidos o eliminados del foro.</p>
          </section>

          <section>
            <h2>5. Responsabilidad</h2>
            <p>El foro no reemplaza atención profesional.</p>
            <p>La información compartida es únicamente con fines de apoyo mutuo.</p>
            <p>No nos responsabilizamos por decisiones tomadas basadas en el contenido del foro.</p>
          </section>

          <section>
            <h2>6. Propiedad Intelectual</h2>
            <p>El contenido generado por el foro y sus usuarios queda protegido por derechos de autor.</p>
            <p>No se permite reproducir o distribuir material fuera de la plataforma sin autorización.</p>
          </section>

          <section>
            <h2>7. Cambios en los Términos</h2>
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento.</p>
            <p>Los cambios se notificarán en la plataforma y entrarán en vigor inmediatamente después de su publicación.</p>
          </section>
        </div>
      )}
    </div>
  );
};

export default Terminos;