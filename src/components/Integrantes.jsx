import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie } from 'react-icons/fa';
import '../styles/integrantes.css';

const integrantes = [
  { nombre: 'Andres Contreras', rol: 'Programador' },
  { nombre: 'Leonard Prada', rol: 'CEO' },
  { nombre: 'Joseph Hernandez', rol: 'CEO' },
  { nombre: 'Luis Alfonso', rol: 'Supervisor Ejecutivo' },
];

const Integrantes = () => {
  return (
    <section className="integrantes-section" aria-label="Equipo de trabajo">
      {/* Título animado */}
      <motion.h1
        className="integrantes-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Nuestro Equipo
      </motion.h1>

      {/* Grid de integrantes */}
      <div className="integrantes-grid">
        {integrantes.map((persona, index) => (
          <motion.div
            key={index}
            className="integrante-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="integrante-icon-wrapper">
              <FaUserTie className="integrante-icon" />
            </div>
            <h2 className="nombre">{persona.nombre}</h2>
            <p className="rol">{persona.rol}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Integrantes;
