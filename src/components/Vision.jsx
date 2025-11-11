import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaComments, FaShieldAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import CountUp from 'react-countup';
import "../styles/Vision.css";

const Vision = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundStyle = {
    backgroundImage: 'url(https://source.unsplash.com/1600x900/?mental-health,community)',
    filter: `brightness(${1 - scrollY / 3000})`,
  };

  return (
    <section className="vision-section" aria-label="Sección de Visión">
      
      {/* Fondo Parallax */}
      <div className="vision-background" style={backgroundStyle} />

      {/* Contenido principal */}
      <motion.div
        className="vision-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Título */}
        <div className="flex items-center justify-center h-screen">
          <motion.h1
            className="vision-title text-center"
            whileHover={{ scale: 1.05 }}
          >
            Nuestra Visión
          </motion.h1>
        </div>

        {/* Iconos */}
        <div className="vision-icons">
          <FaHeart title="Empatía" />
          <FaComments title="Expresión" />
          <FaShieldAlt title="Seguridad" />
        </div>

        {/* Texto principal */}
        <motion.p
          className="vision-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Ser un espacio virtual seguro y empático que promueva la salud mental, donde las personas puedan expresarse libremente, compartir experiencias y encontrar apoyo sin miedo a ser juzgadas.
        </motion.p>

        {/* Estadísticas */}
        <div className="vision-stats">
          <div>
            <h2><CountUp end={5000} duration={2} />+</h2>
            <p>Personas Apoyadas</p>
          </div>
          <div>
            <h2><CountUp end={95} duration={2} />%</h2>
            <p>Ambiente Seguro</p>
          </div>
          <div>
            <h2><CountUp end={30} duration={2} /></h2>
            <p>Profesionales Voluntarios</p>
          </div>
        </div>

        {/* Botón CTA */}
        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="vision-button"
            onClick={() => alert('¡Gracias por creer en nuestra visión!')}
          >
            Sé parte del cambio
          </motion.button>
        </div>

        {/* Cita inspiradora */}
        <motion.blockquote
          className="vision-quote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          “Hablar es el primer paso hacia la sanación.”  
        </motion.blockquote>

        {/* Redes Sociales */}
        <div className="vision-social">
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

export default Vision;
