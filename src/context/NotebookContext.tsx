
import { createContext, useState, useContext, ReactNode } from "react";

export type NotebookFile = {
  id: string;
  name: string;
  type: "dataset" | "training";
  description: string;
  uploadDate: string;
  fileUrl: string;
}

// Initial sample data
const initialFiles: NotebookFile[] = [
  {
    id: "1",
    name: "Dataset Creation Notebook",
    type: "dataset",
    description: "Notebook for processing handwriting samples and creating a dataset",
    uploadDate: new Date().toISOString(),
    fileUrl: "/sample_notebooks/dataset_creation.ipynb"
  },
  {
    id: "2",
    name: "Model Training Notebook",
    type: "training",
    description: "Notebook for training the handwriting model with the prepared dataset",
    uploadDate: new Date().toISOString(),
    fileUrl: "/sample_notebooks/model_training.ipynb"
  }
];

type NotebookContextType = {
  files: NotebookFile[];
  addFile: (file: NotebookFile) => void;
  updateFile: (updatedFile: NotebookFile) => void;
  deleteFile: (fileId: string) => void;
};

const NotebookContext = createContext<NotebookContextType | undefined>(undefined);

export function NotebookProvider({ children }: { children: ReactNode }) {
  // Try to get files from localStorage first, otherwise use initialFiles
  const storedFiles = localStorage.getItem("notebook_files");
  const [files, setFiles] = useState<NotebookFile[]>(
    storedFiles ? JSON.parse(storedFiles) : initialFiles
  );

  const addFile = (file: NotebookFile) => {
    const updatedFiles = [...files, file];
    setFiles(updatedFiles);
    localStorage.setItem("notebook_files", JSON.stringify(updatedFiles));
  };

  const updateFile = (updatedFile: NotebookFile) => {
    const updatedFiles = files.map(file => 
      file.id === updatedFile.id ? updatedFile : file
    );
    setFiles(updatedFiles);
    localStorage.setItem("notebook_files", JSON.stringify(updatedFiles));
  };

  const deleteFile = (fileId: string) => {
    const updatedFiles = files.filter(file => file.id !== fileId);
    setFiles(updatedFiles);
    localStorage.setItem("notebook_files", JSON.stringify(updatedFiles));
  };

  return (
    <NotebookContext.Provider value={{ files, addFile, updateFile, deleteFile }}>
      {children}
    </NotebookContext.Provider>
  );
}

export function useNotebooks() {
  const context = useContext(NotebookContext);
  if (context === undefined) {
    throw new Error("useNotebooks must be used within a NotebookProvider");
  }
  return context;
}
