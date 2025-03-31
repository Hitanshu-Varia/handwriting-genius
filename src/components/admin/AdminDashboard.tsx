
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/lib/toast";
import FileUploadForm from "./FileUploadForm";
import FileTable from "./FileTable";
import { NotebookFile, useNotebooks } from "@/context/NotebookContext";

const AdminDashboard = () => {
  const { files, addFile, updateFile, deleteFile } = useNotebooks();

  const handleFileUploaded = (newFile: NotebookFile) => {
    addFile(newFile);
    toast.success("File uploaded successfully");
  };

  const handleFileUpdated = (updatedFile: NotebookFile) => {
    updateFile(updatedFile);
    toast.success("File updated successfully");
  };

  const handleFileDeleted = (fileId: string) => {
    deleteFile(fileId);
    toast.success("File deleted successfully");
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <p className="text-gray-500">
          Manage the Colab notebook files that users can download for handwriting model training.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
        <Card>
          <CardHeader>
            <CardTitle>Upload New Notebook</CardTitle>
          </CardHeader>
          <CardContent>
            <FileUploadForm onFileUploaded={handleFileUploaded} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Manage Notebooks</CardTitle>
          </CardHeader>
          <CardContent>
            <FileTable 
              files={files} 
              onFileUpdated={handleFileUpdated} 
              onFileDeleted={handleFileDeleted} 
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
