import { useEffect, useState } from "react";
import { Footer } from "../components/home/Footer";
import { Navbar } from "../components/home/Navbar";
import { useStudyFiles } from "../context/StudyFilesContext";
import "./StudyLibraryPage.css";

function StudyLibraryPage() {
  const { files, updateFile } = useStudyFiles();
  const [selectedId, setSelectedId] = useState<string | null>(
    files[0]?.id ?? null
  );
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const selectedFile = files.find((file) => file.id === selectedId);

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl(null);
      return;
    }

    const url = URL.createObjectURL(selectedFile.file);
    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [selectedFile]);

  const extension = selectedFile?.file.name
    .split(".")
    .pop()
    ?.toLowerCase();

  return (
    <>
      <Navbar />

      <main className="library-page">
        <section className="library">
          <aside className="library__files">
            <div>
              <p>MI BIBLIOTECA</p>
              <h1>Archivos de estudio</h1>
            </div>

            {files.length === 0 ? (
              <span className="library__empty">
                No hay archivos subidos todavía.
              </span>
            ) : (
              <div className="library__file-list">
                {files.map((studyFile) => (
                  <button
                    key={studyFile.id}
                    type="button"
                    className={
                      selectedId === studyFile.id
                        ? "library-file library-file--active"
                        : "library-file"
                    }
                    onClick={() => setSelectedId(studyFile.id)}
                  >
                    <span>{studyFile.isImportant ? "⭐" : "📄"}</span>
                    <strong>{studyFile.file.name}</strong>
                  </button>
                ))}
              </div>
            )}
          </aside>

          <section className="library__reader">
            {!selectedFile ? (
              <p className="library__empty">
                Selecciona un archivo para comenzar a estudiar.
              </p>
            ) : (
              <>
                <header className="reader-header">
                  <div>
                    <p>ARCHIVO SELECCIONADO</p>
                    <h2>{selectedFile.file.name}</h2>
                  </div>

                  <button
                    type="button"
                    className={
                      selectedFile.isImportant
                        ? "important-button important-button--active"
                        : "important-button"
                    }
                    onClick={() =>
                      updateFile(selectedFile.id, {
                        isImportant: !selectedFile.isImportant,
                      })
                    }
                  >
                    {selectedFile.isImportant
                      ? "★ Marcado como importante"
                      : "☆ Marcar como importante"}
                  </button>
                </header>

                <div className="reader-preview">
                  {extension === "pdf" && previewUrl && (
                    <iframe
                      src={previewUrl}
                      title={selectedFile.file.name}
                    />
                  )}

                  {["png", "jpg", "jpeg"].includes(extension ?? "") &&
                    previewUrl && (
                      <img
                        src={previewUrl}
                        alt={selectedFile.file.name}
                      />
                    )}

                  {["doc", "docx", "ppt", "pptx"].includes(
                    extension ?? ""
                  ) && (
                    <p>
                      Este tipo de archivo debe abrirse con Word o PowerPoint.
                      Puedes descargarlo desde tu biblioteca cuando conectemos
                      el backend.
                    </p>
                  )}
                </div>

                <section className="reader-notes">
                  <h3>Mis notas</h3>

                  <textarea
                    value={selectedFile.notes}
                    placeholder="Escribe definiciones, ideas importantes o preguntas para repasar..."
                    onChange={(event) =>
                      updateFile(selectedFile.id, {
                        notes: event.target.value,
                      })
                    }
                  />
                </section>
              </>
            )}
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default StudyLibraryPage;