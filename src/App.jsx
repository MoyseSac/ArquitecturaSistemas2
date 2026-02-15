import React from "react";
import "./styles.css"; // Usaremos CSS separado

function App() {
  return (
    <div className="container">
      {/* Hero Section */}
      <header className="hero">
        <h1 className="title"> CodeX</h1>
        <p className="subtitle">
          Grupo universitario que impulsa el trabajo en equipo, la comunicación entre diferentes semestres y la realización de prácticas que enriquecen el conocimiento.
        </p>
        <button className="button">Únete al grupo</button>
      </header>

      {/* Valores */}
      <section className="section">
        <h2 className="section-title">Nuestros valores</h2>
        <div className="values">
          <div className="card">🤝 Trabajo en equipo</div>
          <div className="card">💬 Comunicación</div>
          <div className="card">💻 Práctica constante</div>
        </div>
      </section>

     <section className="section">
  <h2 className="section-title">📅 Actividades del mes</h2>
  <h3 className="month">Marzo</h3>
  <div className="activities">
    <div className="activity-card">
      <div className="activity-date">3</div>
      <div className="activity-info">
        <h4>Instalación y exploración</h4>
        <p>Sistemas operativos</p>
      </div>
    </div>
    <div className="activity-card">
      <div className="activity-date">5</div>
      <div className="activity-info">
        <h4>Prácticas de programación</h4>
        <p>Ejercicios colaborativos</p>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <p>© 2026 CodeX - Estudiantes universitarios</p>
        <p>Contacto: codexuni@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
