import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import type { ChangeEvent, DragEvent } from "react";

import { Footer } from "../components/home/Footer";
import { Navbar } from "../components/home/Navbar";
import { useStudyFiles } from "../context/StudyFilesContext";
import "./UploadStudyPage.css";

const extensionsAllowed = [
  "pdf",
  "doc",
  "docx",
  "ppt",
  "pptx",
  "png",
  "jpg",
  "jpeg",
];

function getExtension(fileName: string) {
  return fileName.split(".").pop()?.toLowerCase() ?? "";
}

function getIcon(extension: string) {
  if (extension === "pdf") return "📕";
  if (extension === "doc" || extension === "docx") return "📘";
  if (extension === "ppt" || extension === "pptx") return "📙";

  return "🖼️";
}

function formatSize(bytes: number) {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function UploadStudyPage() {
  const navigate = useNavigate();
  const { files, addFiles, removeFile } = useStudyFiles();

  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  const handleFiles = (selectedFiles: FileList | File[]) => {
    const newFiles = Array.from(selectedFiles);

    const invalidFile = newFiles.find(
      (file) =>
        !extensionsAllowed.includes(getExtension(file.name)) ||
        file.size > 10 * 1024 * 1024
    );

    if (invalidFile) {
      setError(
        "Solo se permiten PDF, DOCX, PPTX, PNG o JPG de hasta 10 MB."
      );
      return;
    }

    setError("");
    addFiles(newFiles);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;

    if (selectedFiles) {
      handleFiles(selectedFiles);
    }

    event.target.value = "";
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (event.dataTransfer.files) {
      handleFiles(event.dataTransfer.files);
    }
  };

  return (
    <>
      <Navbar />

      <main className="study-upload-page">
        <section className="study-upload-card">
          <header className="study-upload-card__header">
            <h1>Subir archivos de estudio</h1>

            <p>
              Sube tus apuntes, resúmenes o presentaciones para tenerlos
              siempre a mano.
            </p>
          </header>

          <div className="study-upload-card__content">
            <div
              className="upload-area"
              onDragOver={(event) => event.preventDefault()}
              onDrop={handleDrop}
              onClick={() => inputRef.current?.click()}
              role="button"
              tabIndex={0}
            >
              <span className="upload-area__icon">☁</span>

              <strong>Arrastra y suelta tu archivo aquí</strong>

              <span>o presiona para seleccionar</span>

              <small>
                Formatos permitidos: PDF, DOCX, PPTX, PNG, JPG · Máx. 10 MB
              </small>

              <input
                ref={inputRef}
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg"
                onChange={handleInputChange}
              />
            </div>

            <section className="files-list">
              <h2>Mis archivos ({files.length})</h2>

              {files.length === 0 ? (
                <p className="files-list__empty">
                  Aún no has subido archivos.
                </p>
              ) : (
                <ul>
                  {files.map((studyFile) => {
                    const extension = getExtension(studyFile.file.name);

                    return (
                      <li key={studyFile.id}>
                        <span className="files-list__icon">
                          {getIcon(extension)}
                        </span>

                        <div>
                          <strong>{studyFile.file.name}</strong>

                          <small>
                            {extension.toUpperCase()} ·{" "}
                            {formatSize(studyFile.file.size)}
                          </small>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFile(studyFile.id)}
                          aria-label={`Eliminar ${studyFile.file.name}`}
                          title="Eliminar archivo"
                        >
                          🗑
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          </div>

          {error && <p className="study-upload-card__error">{error}</p>}

          <button
            type="button"
            className="study-upload-card__library-button"
            onClick={() => navigate("/biblioteca")}
          >
            Abrir biblioteca de estudio
          </button>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default UploadStudyPage;