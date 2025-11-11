import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

const MindLinkHero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center px-6 text-center bg-gradient-to-br from-[#D4E2D3] via-[#F7F7F0] to-[#C7A252] text-[#1C1C1C]"
    >
      {/* Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight text-[#1C1C1C] drop-shadow-2xl"
      >
        MindLink <span className="blinking-cursor">|</span>
      </motion.h1>

      {/* Subtítulo */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="text-xl md:text-3xl font-medium text-[#F7F7F0] mb-8 drop-shadow-lg"
      >
        Un foro seguro y anónimo para tu bienestar emocional.
      </motion.h2>

      {/* Descripción institucional */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="text-lg md:text-2xl max-w-3xl text-[#1C1C1C] opacity-90 leading-relaxed mb-12"
      >
        MindLink es una plataforma anónima y segura diseñada para brindar apoyo emocional y mental a personas que buscan compartir sus experiencias y recibir ayuda en situaciones de salud mental. Comparte. Conecta. Sana.
      </motion.p>

      {/* Botón de acción */}
      <motion.a
        href="#foro"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#A78F3B", // Hover color change
          textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)", // Text glow effect
        }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 px-8 py-4 bg-[#C7A252] text-white font-semibold rounded-full shadow-lg hover:bg-[#A78F3B] transition-all duration-500 ease-in-out"
      >
        Únete al foro
      </motion.a>

      {/* Efecto de partículas en el fondo */}
      <motion.div
        className="absolute inset-0 bg-opacity-20 bg-black"
        animate={{ opacity: [0, 0.1, 0], scale: [1, 1.1, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default MindLinkHero;
