import React, { useState } from 'react';
import '../styles/Foro.css';

const categoriasDisponibles = [
  'Apoyo emocional',
  'Manejo del estrés',
  'Relación con los demás',
  'Recursos y herramientas',
  'Experiencias positivas',
];

const Foro = () => {
  const [hilos, setHilos] = useState([]);
  const [categoria, setCategoria] = useState('');
  const [titulo, setTitulo] = useState('');
  const [mensajeInicial, setMensajeInicial] = useState('');

  const [respuestaTexto, setRespuestaTexto] = useState('');
  const [hiloActivo, setHiloActivo] = useState(null);

  const crearHilo = () => {
    if (categoria && titulo && mensajeInicial) {
      const nuevoHilo = {
        id: Date.now(),
        categoria,
        titulo,
        descripcion: mensajeInicial,
        autor: 'Tú',
        fecha: new Date().toLocaleString(),
        respuestas: [],
        mostrarRespuestas: false,
      };
      setHilos([nuevoHilo, ...hilos]);
      setCategoria('');
      setTitulo('');
      setMensajeInicial('');
    }
  };

  const toggleRespuestas = (id) => {
    setHilos((prev) =>
      prev.map((hilo) =>
        hilo.id === id ? { ...hilo, mostrarRespuestas: !hilo.mostrarRespuestas } : hilo
      )
    );
  };

  const responderAHilo = (id) => {
    if (respuestaTexto.trim()) {
      const nuevaRespuesta = {
        usuario: 'Tú',
        fecha: new Date().toLocaleString(),
        texto: respuestaTexto,
      };
      setHilos((prev) =>
        prev.map((hilo) =>
          hilo.id === id
            ? { ...hilo, respuestas: [nuevaRespuesta, ...hilo.respuestas] }
            : hilo
        )
      );
      setRespuestaTexto('');
      setHiloActivo(null);
    }
  };

  return (
    <div id="foro" className="foro-container">
      <h1 className="foro-title">Foro de Apoyo Emocional</h1>
      <p className="foro-subtitle">Un espacio seguro para compartir y encontrar apoyo.</p>

      {/* Crear nuevo hilo */}
      <section className="foro-crear-hilo">
        <h2>Crear nuevo hilo</h2>
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="">Selecciona una categoría</option>
          {categoriasDisponibles.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Título del hilo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <textarea
          rows="4"
          placeholder="Mensaje inicial"
          value={mensajeInicial}
          onChange={(e) => setMensajeInicial(e.target.value)}
        />
        <button onClick={crearHilo} disabled={!categoria || !titulo || !mensajeInicial}>
          Crear hilo
        </button>
      </section>

      {/* Listado de hilos */}
      {hilos.map((hilo) => (
        <section key={hilo.id} className="foro-hilo">
          <h2>{hilo.titulo}</h2>
          <p><strong>Categoría:</strong> {hilo.categoria}</p>
          <p><strong>Iniciado por:</strong> {hilo.autor} - {hilo.fecha}</p>
          <p className="foro-descripcion">{hilo.descripcion}</p>

          <button onClick={() => toggleRespuestas(hilo.id)}>
            Ver ({hilo.respuestas.length} respuestas)
          </button>

          {hilo.mostrarRespuestas && (
            <div className="foro-respuestas">
              <h3>Respuestas</h3>
              {hilo.respuestas.length === 0 ? (
                <p>No hay respuestas aún.</p>
              ) : (
                hilo.respuestas.map((r, index) => (
                  <div key={index} className="respuesta">
                    <p><strong>{r.usuario}</strong> - {r.fecha}</p>
                    <p>{r.texto}</p>
                  </div>
                ))
              )}

              <div className="foro-responder">
                <h4>Responder al hilo</h4>
                <textarea
                  rows="3"
                  placeholder="Escribe tu respuesta..."
                  value={hiloActivo === hilo.id ? respuestaTexto : ''}
                  onChange={(e) => {
                    setRespuestaTexto(e.target.value);
                    setHiloActivo(hilo.id);
                  }}
                />
                <button
                  onClick={() => responderAHilo(hilo.id)}
                  disabled={!respuestaTexto.trim() || hiloActivo !== hilo.id}
                >
                  Publicar respuesta
                </button>
              </div>
            </div>
          )}
        </section>
      ))}

      {/* Normas del foro */}
      <section className="foro-normas">
        <h3>Normas del Foro</h3>
        <ul>
          <li>Respetar a los demás</li>
          <li>Mantenerse dentro del tema de salud mental</li>
          <li>No compartir información personal sensible</li>
        </ul>
      </section>
    </div>
  );
};

export default Foro;