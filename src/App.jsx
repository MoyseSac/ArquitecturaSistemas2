import "./App.css";

const projects = [
  {
    title: "Servidor Web en Raspberry Pi",
    desc: "Monta un servidor con Nginx o Apache y sirve tu propio sitio desde casa.",
    tag: "Redes",
  },
  {
    title: "Estación Meteorológica",
    desc: "Conecta sensores DHT11 o DHT22 y registra temperatura y humedad en tiempo real.",
    tag: "IoT",
  },
  {
    title: "Retro Console con RetroPie",
    desc: "Convierte tu Raspberry en una consola retro y juega tus clásicos favoritos.",
    tag: "Gaming",
  },
  {
    title: "VPN casera con PiVPN",
    desc: "Protege tu conexión desde cualquier lugar con tu propio servidor VPN.",
    tag: "Seguridad",
  },
];

function App() {
  return (
    <div className="app">
      <header>
        <h1>🍓 Proyectos con Raspberry Pi</h1>
        <p>Ideas para sacarle el máximo partido a tu Raspberry</p>
      </header>

      <main>
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <span className="tag">{p.tag}</span>
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
