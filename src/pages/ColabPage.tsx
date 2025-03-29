
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Play, Copy, Download, ExternalLink } from "lucide-react";
import { toast } from "@/lib/toast";
import MainLayout from "@/layouts/MainLayout";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const COLAB_NOTEBOOK_URL = "https://colab.research.google.com/drive/1wxCQbPF-8E4jjPtMw6riPn8QvBqiEz6p?usp=sharing";

const ColabPage = () => {
  const [colabLink, setColabLink] = useState("");
  const [isGeneratingLink, setIsGeneratingLink] = useState(false);
  const [modelFile, setModelFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleGenerateLink = () => {
    setIsGeneratingLink(true);
    
    // Simulate API call to generate a Colab link
    setTimeout(() => {
      // Using a real Google Colab notebook link for handwriting synthesis
      setColabLink(COLAB_NOTEBOOK_URL);
      setIsGeneratingLink(false);
      toast.success("Google Colab notebook link generated successfully!");
    }, 1500);
  };

  const handleCopyLink = () => {
    if (colabLink) {
      navigator.clipboard.writeText(colabLink);
      toast.success("Colab link copied to clipboard");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "application/octet-stream" || file.name.endsWith(".h5") || file.name.endsWith(".pkl")) {
        setModelFile(file);
      } else {
        toast.error("Please upload a valid model file (.h5 or .pkl)");
      }
    }
  };

  const handleModelUpload = () => {
    if (!modelFile) {
      toast.error("Please select a model file first");
      return;
    }

    setIsUploading(true);

    // Simulate uploading the model file
    setTimeout(() => {
      setIsUploading(false);
      toast.success("Model uploaded successfully! You can now generate handwritten text.");
      
      // Navigate to the generate page
      navigate("/generate");
    }, 2000);
  };

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Train Your Handwriting Model</h1>
            <p className="text-gray-500">
              Use Google Colab to train a neural network on your handwriting samples. The process is 
              fully automated - just follow the steps below.
            </p>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Training typically takes 15-30 minutes depending on the number of samples you uploaded.
              Make sure not to close your browser during this time.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Training Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    1
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Generate Google Colab Notebook Link</p>
                    <p className="text-sm text-gray-500">
                      Click the button below to generate a custom Colab notebook link for handwriting synthesis.
                      This notebook contains pre-configured code for training a handwriting model.
                    </p>
                    <Button 
                      onClick={handleGenerateLink} 
                      disabled={isGeneratingLink || colabLink !== ""}
                    >
                      {isGeneratingLink ? (
                        "Generating..."
                      ) : colabLink ? (
                        "Link Generated"
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Generate Colab Link
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    2
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Open and Run the Notebook</p>
                    <p className="text-sm text-gray-500">
                      Open the generated notebook in Google Colab and click "Run All" from the "Runtime" 
                      menu. The notebook contains pre-written code that will train a model based on your 
                      handwriting samples.
                    </p>
                    
                    {colabLink && (
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center gap-2 p-2 bg-gray-100 rounded">
                          <code className="text-sm flex-1 truncate">{colabLink}</code>
                          <Button variant="ghost" size="icon" onClick={handleCopyLink}>
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button asChild>
                          <a href={colabLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Open in Google Colab
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    3
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Download and Upload Trained Model</p>
                    <p className="text-sm text-gray-500">
                      After training completes, download the model file from Colab and upload it here.
                      This will enable you to generate handwritten text in your own style.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Input 
                        id="model-upload" 
                        type="file" 
                        accept=".h5,.pkl" 
                        className="cursor-pointer" 
                        onChange={handleFileChange}
                        disabled={!colabLink}
                      />
                      <Button 
                        onClick={handleModelUpload} 
                        disabled={!modelFile || isUploading} 
                        className="whitespace-nowrap"
                      >
                        {isUploading ? (
                          "Uploading..."
                        ) : (
                          <>
                            <Download className="mr-2 h-4 w-4" />
                            Upload Model
                          </>
                        )}
                      </Button>
                    </div>
                    {modelFile && (
                      <p className="text-sm text-green-600">
                        Model file selected: {modelFile.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <a href="/upload">Back to Upload</a>
            </Button>
            <Button disabled={!modelFile} asChild>
              <a href="/generate">Go to Generator</a>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ColabPage;
