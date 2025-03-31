
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileUp } from "lucide-react";
import { toast } from "@/lib/toast";
import { NotebookFile } from "@/context/NotebookContext";

interface FileUploadFormProps {
  onFileUploaded: (file: NotebookFile) => void;
}

const FileUploadForm = ({ onFileUploaded }: FileUploadFormProps) => {
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState<"dataset" | "training">("dataset");
  const [fileDescription, setFileDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      
      // Validate the file is a .ipynb file
      if (!file.name.toLowerCase().endsWith('.ipynb')) {
        toast.error("Please upload a valid .ipynb notebook file");
        return;
      }
      
      setSelectedFile(file);
      if (!fileName) {
        setFileName(file.name);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      toast.error("Please select a file to upload");
      return;
    }

    if (!fileName) {
      toast.error("Please provide a name for the file");
      return;
    }
    
    // Ensure the file has the .ipynb extension
    const displayName = fileName.endsWith('.ipynb') ? fileName : `${fileName}.ipynb`;
    
    // Create a blob with the correct MIME type
    const notebookBlob = new Blob([selectedFile], { type: 'application/x-ipynb+json' });
    
    const newFile: NotebookFile = {
      id: Date.now().toString(),
      name: displayName,
      type: fileType,
      description: fileDescription,
      uploadDate: new Date().toISOString(),
      fileUrl: URL.createObjectURL(notebookBlob)
    };

    onFileUploaded(newFile);
    
    setFileName("");
    setFileType("dataset");
    setFileDescription("");
    setSelectedFile(null);
    
    toast.success("Notebook file uploaded successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="file-upload">Notebook File (.ipynb)</Label>
        <Input 
          id="file-upload" 
          type="file" 
          accept=".ipynb"
          onChange={handleFileChange}
          className="cursor-pointer"
        />
        {selectedFile && (
          <p className="text-sm text-gray-500">
            Selected: {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
          </p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="file-name">Display Name</Label>
        <Input 
          id="file-name" 
          value={fileName} 
          onChange={(e) => setFileName(e.target.value)}
          placeholder="Enter a name for this notebook"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="file-type">Notebook Type</Label>
        <select 
          id="file-type" 
          value={fileType}
          onChange={(e) => setFileType(e.target.value as "dataset" | "training")}
          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
        >
          <option value="dataset">Dataset Creation</option>
          <option value="training">Model Training</option>
        </select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="file-description">Description</Label>
        <Input 
          id="file-description" 
          value={fileDescription} 
          onChange={(e) => setFileDescription(e.target.value)}
          placeholder="Enter a description for this notebook"
        />
      </div>
      
      <Button type="submit" className="w-full">
        <FileUp className="mr-2 h-4 w-4" />
        Upload Notebook
      </Button>
    </form>
  );
};

export default FileUploadForm;
