import { useNavigate } from "react-router-dom";
import { Hero } from "../components/home/Hero";
import { Navbar } from "../components/home/Navbar";
import { SystemCard } from "../components/home/SystemCard";
import { Footer } from "../components/home/Footer";
import { authRepository } from "../repositories/authRepository";
import "./HomePage.css";

const sistemas = [
  {
    imagen: "/models/oseo.jpeg",
    nombre: "Sistema Óseo",
    descripcion: "Estructura y soporte",
  },
  {
    imagen: "/models/muscular.jpeg",
    nombre: "Sistema Muscular",
    descripcion: "Movimiento y fuerza",
  },
  {
    imagen: "/models/nervioso.jpeg",
    nombre: "Sistema Nervioso",
    descripcion: "Control y coordinación",
  },
  {
    imagen: "/models/circulatorio.jpeg",
    nombre: "Sistema Circulatorio",
    descripcion: "Transporte de sangre",
  },
];

function HomePage() {
  const navigate = useNavigate();
  const user = authRepository.getCurrentUser();

  const handleLogout = () => {
    authRepository.logout();
    navigate("/login", { replace: true });
  };

  const handleStartGame = () => {
    navigate("/juego");
  };

  return (
    <>
      <Navbar />

      <main className="home">
        <Hero
          user={user}
          onStartGame={handleStartGame}
          onLogout={handleLogout}
        />

        <section className="systems">
          <div className="systems__heading">
            <p className="systems__eyebrow">APRENDE JUGANDO</p>
            <h2>Sistemas del cuerpo humano</h2>
          </div>
          <div className="systems__grid">
            {sistemas.map((sistema) => (
               <SystemCard
                  key={sistema.nombre}
                  imagen={sistema.imagen}
                  nombre={sistema.nombre}
                  descripcion={sistema.descripcion}
            />
          ))}
          </div>
        </section>
          
      </main>
      <Footer></Footer>
    </>
  );
}

export default HomePage;