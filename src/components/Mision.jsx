
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaGraduationCap, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import CountUp from 'react-countup';
import "../styles/Mision.css";

const Mision = () => {


  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundStyle = {
    backgroundImage: 'url(https://source.unsplash.com/1600x900/?education,technology)',
    filter: `brightness(${1 - scrollY / 3000})`,
  };

  return (
    <section className="mision-section" aria-label="Sección de Misión">
      
      {/* Fondo Parallax */}
      <div className="mision-background" style={backgroundStyle} />

      {/* Contenedor principal */}
      <motion.div
        className="mision-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Título */}
<div className="flex items-center justify-center h-screen">
  <motion.h1
    className="mision-title text-center"
    whileHover={{ scale: 1.05 }}
  >
    Nuestra Misión
  </motion.h1>
</div>


        {/* Iconos */}
        <div className="mision-icons">
          <FaLightbulb title="Innovación" />
          <FaUsers title="Liderazgo" />
          <FaGraduationCap title="Educación" />
        </div>

        {/* Texto principal */}
        <motion.p
          className="mision-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Impulsamos el desarrollo integral de nuestros estudiantes, fomentando la innovación, 
          el pensamiento crítico y el compromiso social. Formamos líderes capaces de transformar 
          su entorno con ética, conocimiento y pasión por el aprendizaje continuo.
        </motion.p>

        {/* Estadísticas */}
        <div className="mision-stats">
          <div>
            <h2><CountUp end={1200} duration={2} />+</h2>
            <p>Estudiantes Impactados</p>
          </div>
          <div>
            <h2><CountUp end={85} duration={2} />%</h2>
            <p>Satisfacción Académica</p>
          </div>
          <div>
            <h2><CountUp end={15} duration={2} /></h2>
            <p>Años de Experiencia</p>
          </div>
        </div>

        {/* Botón CTA */}
<div className="flex justify-center mt-8">
  <motion.button
    whileHover={{ scale: 1.05 }}
    className="mision-button"
    onClick={() => alert('¡Gracias por tu interés!')}
  >
    Únete a nuestra misión
  </motion.button>
</div>



        {/* Cita inspiradora */}
        <motion.blockquote
          className="mision-quote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          “La educación es el arma más poderosa que puedes usar para cambiar el mundo.”  
          – Nelson Mandela
        </motion.blockquote>

        {/* Redes Sociales */}
        <div className="mision-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Mision;
