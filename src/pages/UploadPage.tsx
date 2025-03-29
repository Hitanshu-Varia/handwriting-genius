
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, X, Check } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import MainLayout from "@/layouts/MainLayout";

const UploadPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
      toast.success(`${newFiles.length} files added`);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...newFiles]);
      toast.success(`${newFiles.length} files added`);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    toast.info("File removed");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      toast.error("Please upload at least one handwriting sample");
      return;
    }
    
    // In a real app, you would upload the files to a server here
    toast.success("Files uploaded successfully! Proceed to training.");
    // Redirect or show next step guidance
  };

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Upload Your Handwriting Samples</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Upload clear images of your handwriting. We recommend at least 20 samples for best results.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Handwriting Samples</CardTitle>
              <CardDescription>
                Upload JPG, PNG, or PDF files of your handwriting. Make sure they're clear and well-lit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div
                  className={`border-2 border-dashed rounded-lg p-12 text-center ${
                    isDragOver ? "border-blue-500 bg-blue-50 dark:bg-blue-950/50" : "border-gray-200 dark:border-gray-800"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-4 text-lg font-semibold">Drag and drop files here</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    or click to browse from your computer
                  </p>
                  <Input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    multiple
                    className="mt-4 mx-auto max-w-xs"
                    onChange={handleFileChange}
                  />
                </div>

                {files.length > 0 && (
                  <div className="mt-6 space-y-2">
                    <h4 className="font-medium">Uploaded Files ({files.length})</h4>
                    <div className="max-h-60 overflow-y-auto space-y-2 pr-2">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-md"
                        >
                          <div className="flex items-center">
                            <Check className="h-5 w-5 text-green-500 mr-2" />
                            <span className="truncate max-w-[250px]">{file.name}</span>
                            <span className="ml-2 text-xs text-gray-400">
                              ({(file.size / 1024).toFixed(0)} KB)
                            </span>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFile(index)}
                            className="h-8 w-8"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleSubmit} disabled={files.length === 0}>
                Upload and Continue
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tips for Good Samples</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>Write on plain white paper with dark ink for best contrast</li>
                <li>Include diverse sentences with a range of characters</li>
                <li>Write naturally, as you would in everyday scenarios</li>
                <li>Capture full pages of writing rather than just a few words</li>
                <li>Ensure good lighting when taking photos of your writing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default UploadPage;
