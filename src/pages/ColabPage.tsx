
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Download, FileType, Flask, ArrowRight, FileUp, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/lib/toast";
import MainLayout from "@/layouts/MainLayout";

// Types for notebook files (same as in AdminPage)
type NotebookFile = {
  id: string;
  name: string;
  type: "dataset" | "training";
  description: string;
  uploadDate: string;
  fileUrl: string;
}

const ColabPage = () => {
  const navigate = useNavigate();
  const [datasetComplete, setDatasetComplete] = useState(false);
  const [trainingComplete, setTrainingComplete] = useState(false);
  const [notebookFiles, setNotebookFiles] = useState<NotebookFile[]>([]);

  // Simulating fetching notebook files from storage
  useEffect(() => {
    // In a real app, fetch these from a backend or storage
    const storedFiles = localStorage.getItem("notebook_files");
    if (storedFiles) {
      setNotebookFiles(JSON.parse(storedFiles));
    } else {
      // Default initial files if none are found
      setNotebookFiles([
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
      ]);
    }
  }, []);

  // We also update whenever Admin updates the files
  useEffect(() => {
    const handleStorageChange = () => {
      const storedFiles = localStorage.getItem("notebook_files");
      if (storedFiles) {
        setNotebookFiles(JSON.parse(storedFiles));
      }
    };
    
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const downloadNotebook = (fileUrl: string, fileName: string) => {
    // In a real app, this would be a proper download
    toast.info(`Downloading ${fileName}...`);
    
    // If we have actual files to download:
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMarkDatasetComplete = () => {
    setDatasetComplete(true);
    toast.success("Dataset creation marked as complete!");
  };

  const handleMarkTrainingComplete = () => {
    setTrainingComplete(true);
    toast.success("Model training marked as complete!");
  };

  const handleProceedToGenerate = () => {
    navigate("/generate");
  };

  // Filter notebooks by type
  const datasetNotebooks = notebookFiles.filter(file => file.type === "dataset");
  const trainingNotebooks = notebookFiles.filter(file => file.type === "training");

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Train Your Handwriting Model</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Follow these steps to create your dataset and train your handwriting model. We provide ready-to-use
              notebook files with all the code already written for you.
            </p>
          </div>

          <Alert>
            <AlertTitle>Two-Step Training Process</AlertTitle>
            <AlertDescription>
              <p className="mb-2">The training consists of two separate steps using Google Colab notebooks:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>First notebook: Process your handwriting samples and create a dataset</li>
                <li>Second notebook: Train your handwriting model using the dataset</li>
              </ol>
              <p className="mt-2">All the code is pre-written - you just need to run the notebooks!</p>
            </AlertDescription>
          </Alert>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Step 1: Dataset Creation */}
            <Card className={datasetComplete ? "border-green-400" : ""}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <FileType className="h-5 w-5" />
                    Step 1: Create Dataset
                  </CardTitle>
                  {datasetComplete && (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <CardDescription>
                  Download and run this notebook to process your handwriting samples and create a dataset.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {datasetNotebooks.length > 0 ? (
                    datasetNotebooks.map(notebook => (
                      <div key={notebook.id} className="border rounded-lg p-4 space-y-3">
                        <div>
                          <h3 className="font-medium">{notebook.name}</h3>
                          <p className="text-sm text-gray-500">{notebook.description}</p>
                        </div>
                        <Button 
                          onClick={() => downloadNotebook(notebook.fileUrl, notebook.name)}
                          className="w-full"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download Notebook
                        </Button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 text-gray-500">
                      No dataset notebooks are currently available.
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <h3 className="text-sm font-medium mb-2">Instructions:</h3>
                  <ol className="list-decimal pl-5 space-y-1 text-sm">
                    <li>Download the notebook file</li>
                    <li>Upload it to <a href="https://colab.research.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Colab</a></li>
                    <li>Upload your handwriting samples when prompted</li>
                    <li>Run all cells in the notebook to create your dataset</li>
                    <li>Download the generated dataset file</li>
                  </ol>
                </div>

                {!datasetComplete && (
                  <Button 
                    onClick={handleMarkDatasetComplete}
                    variant="outline" 
                    className="w-full mt-4"
                  >
                    Mark Dataset Creation as Complete
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Step 2: Model Training */}
            <Card className={trainingComplete ? "border-green-400" : ""}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Flask className="h-5 w-5" />
                    Step 2: Train Model
                  </CardTitle>
                  {trainingComplete && (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <CardDescription>
                  Download and run this notebook to train your handwriting model with the dataset you created.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {trainingNotebooks.length > 0 ? (
                    trainingNotebooks.map(notebook => (
                      <div key={notebook.id} className="border rounded-lg p-4 space-y-3">
                        <div>
                          <h3 className="font-medium">{notebook.name}</h3>
                          <p className="text-sm text-gray-500">{notebook.description}</p>
                        </div>
                        <Button 
                          onClick={() => downloadNotebook(notebook.fileUrl, notebook.name)}
                          className="w-full"
                          disabled={!datasetComplete}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download Notebook
                        </Button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 text-gray-500">
                      No training notebooks are currently available.
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <h3 className="text-sm font-medium mb-2">Instructions:</h3>
                  <ol className="list-decimal pl-5 space-y-1 text-sm">
                    <li>Complete Step 1 first</li>
                    <li>Download the training notebook file</li>
                    <li>Upload it to <a href="https://colab.research.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Colab</a></li>
                    <li>Upload your dataset file when prompted</li>
                    <li>Run all cells in the notebook to train your model</li>
                    <li>Download the trained model file</li>
                  </ol>
                </div>

                {datasetComplete && !trainingComplete && (
                  <Button 
                    onClick={handleMarkTrainingComplete}
                    variant="outline" 
                    className="w-full mt-4"
                  >
                    Mark Training as Complete
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {trainingComplete && (
            <div className="flex justify-center pt-4">
              <Button onClick={handleProceedToGenerate} size="lg">
                Proceed to Generate Text
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ColabPage;
