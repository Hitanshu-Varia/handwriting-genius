
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CloudUpload, AlertCircle, CheckCircle2 } from "lucide-react";
import { toast } from "@/lib/toast";
import MainLayout from "@/layouts/MainLayout";

const UploadPage = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileArray = Array.from(e.target.files);
      setSelectedFiles(fileArray);
      toast.info(`${fileArray.length} file(s) selected`);
    }
  };

  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      toast.error("Please select files to upload");
      return;
    }

    // Simulate upload process
    setUploadStatus("uploading");
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        const newProgress = prev + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          setUploadStatus("success");
          toast.success("Upload successful! Your handwriting samples are ready for training.");
          return 100;
        }
        return newProgress;
      });
    }, 200);
  };

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Upload Your Handwriting</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Upload images of your handwriting to train our AI model. The more samples you provide, 
              the more accurate your generated handwriting will be.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upload Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Upload at least 20 images of your handwriting</li>
                <li>Each image should contain a single line of text</li>
                <li>Write on white/light colored paper with black/dark ink for best results</li>
                <li>Supported formats: JPEG, PNG (max 5MB per file)</li>
                <li>Make sure the handwriting is clear and well-lit</li>
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="handwriting-upload" className="text-base font-medium">
                Select Handwriting Images
              </Label>
              <div className="flex items-center gap-4">
                <Input
                  id="handwriting-upload"
                  type="file"
                  accept="image/png, image/jpeg"
                  multiple
                  onChange={handleFileChange}
                  className="cursor-pointer"
                />
                <Button onClick={handleUpload} disabled={uploadStatus === "uploading"}>
                  <CloudUpload className="mr-2 h-4 w-4" />
                  Upload
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                {selectedFiles.length > 0
                  ? `${selectedFiles.length} file(s) selected`
                  : "No files selected"}
              </p>
            </div>

            {uploadStatus !== "idle" && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Upload Progress</span>
                  <span className="text-sm">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} />
              </div>
            )}

            {uploadStatus === "success" && (
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-600">Upload Complete</AlertTitle>
                <AlertDescription>
                  Your handwriting samples have been uploaded successfully. You can now proceed to 
                  the training step.
                </AlertDescription>
              </Alert>
            )}

            {uploadStatus === "error" && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Upload Failed</AlertTitle>
                <AlertDescription>
                  There was an error uploading your files. Please try again.
                </AlertDescription>
              </Alert>
            )}
          </div>

          {uploadStatus === "success" && (
            <div className="flex justify-center">
              <Button asChild>
                <a href="/colab">Proceed to Training</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default UploadPage;
