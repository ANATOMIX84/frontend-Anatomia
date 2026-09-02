import {
  createContext,
  useContext,
  useState,
} from "react";
import type { ReactNode } from "react";

export interface StudyFile {
  id: string;
  file: File;
  isImportant: boolean;
  notes: string;
}

interface StudyFilesContextType {
  files: StudyFile[];
  addFiles: (newFiles: File[]) => void;
  removeFile: (id: string) => void;
  updateFile: (id: string, changes: Partial<StudyFile>) => void;
}

const StudyFilesContext = createContext<StudyFilesContextType | undefined>(
  undefined
);

export function StudyFilesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [files, setFiles] = useState<StudyFile[]>([]);

  const addFiles = (newFiles: File[]) => {
    const formattedFiles = newFiles.map((file) => ({
      id: crypto.randomUUID(),
      file,
      isImportant: false,
      notes: "",
    }));

    setFiles((currentFiles) => [...currentFiles, ...formattedFiles]);
  };

  const removeFile = (id: string) => {
    setFiles((currentFiles) =>
      currentFiles.filter((studyFile) => studyFile.id !== id)
    );
  };

  const updateFile = (id: string, changes: Partial<StudyFile>) => {
    setFiles((currentFiles) =>
      currentFiles.map((studyFile) =>
        studyFile.id === id
          ? { ...studyFile, ...changes }
          : studyFile
      )
    );
  };

  return (
    <StudyFilesContext.Provider
      value={{ files, addFiles, removeFile, updateFile }}
    >
      {children}
    </StudyFilesContext.Provider>
  );
}

export function useStudyFiles() {
  const context = useContext(StudyFilesContext);

  if (!context) {
    throw new Error(
      "useStudyFiles debe utilizarse dentro de StudyFilesProvider."
    );
  }

  return context;
}