import { AnatomyModel3D } from "../components/model3d/AnatomyModel3D";
import { Footer } from "../components/home/Footer";
import { Navbar } from "../components/home/Navbar";
import "./Model3DPage.css";

function Model3DPage() {
  return (
    <>
      <Navbar />

      <main className="model-page">
        <div className="model-page__content">
          <section className="model-page__description">
            <p>EXPLORACIÓN ANATÓMICA</p>
            <h1>Modelo 3D del sistema circulatorio</h1>
            <span>
              Usa el mouse o los controles para rotar, acercar y explorar el
              corazón.
            </span>
          </section>

          <AnatomyModel3D />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Model3DPage;