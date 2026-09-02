import "@google/model-viewer";
import { useRef, useState } from "react";
import "./AnatomyModel3D.css";

const modelos = [
  {
    id: "corazon",
    nombre: "Corazón",
    icono: "🫀",
    archivo: "/models/corazon-demo.gltf",
    disponible: true,
  },
  {
    id: "cerebro",
    nombre: "Cerebro",
    icono: "🧠",
    archivo: "/models/cerebro-demo.gltf",
    disponible: true,
  },
  {
    id: "esqueleto",
    nombre: "Sistema óseo",
    icono: "🦴",
    archivo: "/models/esqueleto-demo.gltf",
    disponible: true,
  },
  {
    id: "pulmones",
    nombre: "Pulmones",
    icono: "🫁",
    archivo: "/models/pulmones-demo.gltf",
    disponible: true,
  },
];

export function AnatomyModel3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [selectedModel, setSelectedModel] = useState(modelos[0]);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(2.5);
  const [autoRotate, setAutoRotate] = useState(false);

  const resetView = () => {
    setRotation(0);
    setZoom(2.5);
    setAutoRotate(false);
  };

  const selectModel = (model: (typeof modelos)[number]) => {
    if (!model.disponible) return;

    setSelectedModel(model);
    resetView();
  };

  return (
    <section className="model-viewer-card">
      <h2>Modelo 3D interactivo: {selectedModel.nombre}</h2>

      <div className="model-viewer-card__body">
        <aside className="model-selector">
          <p>Selecciona un modelo</p>

          {modelos.map((model) => (
            <button
              key={model.id}
              type="button"
              disabled={!model.disponible}
              onClick={() => selectModel(model)}
              className={
                selectedModel.id === model.id
                  ? "model-selector__item model-selector__item--active"
                  : "model-selector__item"
              }
            >
              <span>{model.icono}</span>
              {model.nombre}

              {!model.disponible && (
                <small>Próximamente</small>
              )}
            </button>
          ))}
        </aside>

        <div className="model-viewer-card__viewport" ref={containerRef}>
          <aside className="model-viewer-card__tools">
            <button type="button" onClick={resetView} title="Restablecer vista">
              ◈
            </button>

            <button
              type="button"
              onClick={() => setAutoRotate((current) => !current)}
              title="Activar o detener giro automático"
              className={autoRotate ? "model-tool--active" : ""}
            >
              ↻
            </button>
          </aside>

          <model-viewer
            src={selectedModel.archivo}
            alt={`Modelo 3D de ${selectedModel.nombre}`}
            camera-controls
            auto-rotate={autoRotate}
            camera-orbit={`${rotation}deg 75deg ${zoom}m`}
            shadow-intensity="1"
            exposure="1"
          />

          <button
            type="button"
            className="model-viewer-card__fullscreen"
            onClick={() => containerRef.current?.requestFullscreen()}
            title="Pantalla completa"
          >
            ⛶
          </button>
        </div>
      </div>

      <div className="model-viewer-card__controls">
        <label>
          Rotar
          <input
            type="range"
            min="0"
            max="360"
            value={rotation}
            onChange={(event) => setRotation(Number(event.target.value))}
          />
        </label>

        <label>
          Zoom
          <input
            type="range"
            min="1.5"
            max="4.5"
            step="0.1"
            value={zoom}
            onChange={(event) => setZoom(Number(event.target.value))}
          />
        </label>
      </div>
    </section>
  );
}