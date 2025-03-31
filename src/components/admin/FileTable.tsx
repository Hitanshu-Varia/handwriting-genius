
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Pencil, Trash2, Download } from "lucide-react";
import { toast } from "@/lib/toast";
import { useState } from "react";
import FileEditForm from "./FileEditForm";
import { NotebookFile } from "@/context/NotebookContext";

interface FileTableProps {
  files: NotebookFile[];
  onFileUpdated: (updatedFile: NotebookFile) => void;
  onFileDeleted: (fileId: string) => void;
}

const FileTable = ({ files, onFileUpdated, onFileDeleted }: FileTableProps) => {
  const [editingFile, setEditingFile] = useState<NotebookFile | null>(null);

  const downloadFile = (fileUrl: string, fileName: string) => {
    toast.info(`Downloading ${fileName}...`);
    
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileUpdated = (updatedFile: NotebookFile) => {
    onFileUpdated(updatedFile);
    setEditingFile(null);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Upload Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {files.map((file) => (
          <TableRow key={file.id}>
            <TableCell className="font-medium">{file.name}</TableCell>
            <TableCell>
              {file.type === "dataset" ? "Dataset Creation" : "Model Training"}
            </TableCell>
            <TableCell>
              {new Date(file.uploadDate).toLocaleDateString()}
            </TableCell>
            <TableCell className="text-right space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => downloadFile(file.fileUrl, file.name)}
              >
                <Download className="h-4 w-4" />
              </Button>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setEditingFile(file)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit Notebook</SheetTitle>
                    <SheetDescription>
                      Update the information for this notebook file.
                    </SheetDescription>
                  </SheetHeader>
                  {editingFile && (
                    <div className="py-4">
                      <FileEditForm 
                        file={editingFile} 
                        onFileUpdated={handleFileUpdated} 
                      />
                    </div>
                  )}
                </SheetContent>
              </Sheet>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  if (confirm(`Are you sure you want to delete "${file.name}"?`)) {
                    onFileDeleted(file.id);
                  }
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
        {files.length === 0 && (
          <TableRow>
            <TableCell colSpan={4} className="text-center py-8 text-gray-500">
              No notebook files have been uploaded yet.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default FileTable;
