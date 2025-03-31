
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/lib/toast";
import { NotebookFile } from "@/context/NotebookContext";

interface FileEditFormProps {
  file: NotebookFile;
  onFileUpdated: (updatedFile: NotebookFile) => void;
}

const FileEditForm = ({ file, onFileUpdated }: FileEditFormProps) => {
  const [fileName, setFileName] = useState(file.name);
  const [fileType, setFileType] = useState<"dataset" | "training">(file.type);
  const [fileDescription, setFileDescription] = useState(file.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fileName) {
      toast.error("Please provide a name for the file");
      return;
    }

    const updatedFile: NotebookFile = {
      ...file,
      name: fileName,
      type: fileType,
      description: fileDescription,
    };

    onFileUpdated(updatedFile);
    toast.success("File updated successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="edit-file-name">Display Name</Label>
        <Input 
          id="edit-file-name" 
          value={fileName} 
          onChange={(e) => setFileName(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="edit-file-type">Notebook Type</Label>
        <select 
          id="edit-file-type" 
          value={fileType}
          onChange={(e) => setFileType(e.target.value as "dataset" | "training")}
          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
        >
          <option value="dataset">Dataset Creation</option>
          <option value="training">Model Training</option>
        </select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="edit-file-description">Description</Label>
        <Input 
          id="edit-file-description" 
          value={fileDescription} 
          onChange={(e) => setFileDescription(e.target.value)}
        />
      </div>
      
      <Button type="submit" className="w-full">
        Save Changes
      </Button>
    </form>
  );
};

export default FileEditForm;
