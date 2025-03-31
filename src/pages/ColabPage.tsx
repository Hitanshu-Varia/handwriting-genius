import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { FileDown, AlertCircle, Download, UploadCloud, Code2, Beaker } from "lucide-react";
import { toast } from "@/lib/toast";
import MainLayout from "@/layouts/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const ColabPage = () => {
  const [activeTab, setActiveTab] = useState("dataset");

  const handleDownloadNotebook = (notebookType: string) => {
    // Simulate download
    toast.success(`${notebookType} notebook downloaded successfully`);
  };

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Train Your Handwriting Model</h1>
            <p className="text-gray-500">
              Use our pre-configured Google Colab notebooks to create your dataset and train your handwriting model.
              Follow the step-by-step process below.
            </p>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Training Process Overview</AlertTitle>
            <AlertDescription className="space-y-2">
              <p>Our handwriting training process has two main steps:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Use the Dataset Creation notebook to process your handwriting samples</li>
                <li>Use the Model Training notebook to train your personalized model</li>
              </ol>
              <p>Each notebook has all the necessary code already written - you'll just need to run each cell in order.</p>
            </AlertDescription>
          </Alert>

          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="dataset">1. Dataset Creation</TabsTrigger>
              <TabsTrigger value="training">2. Model Training</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dataset" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <Code2 className="mr-2 h-5 w-5 text-blue-600" />
                        Dataset Creation Notebook
                      </CardTitle>
                      <CardDescription>
                        Process your handwriting samples to create a training dataset
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-blue-50">Step 1</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">This notebook will help you:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Process the handwriting images you've uploaded</li>
                      <li>Extract individual characters and words</li>
                      <li>Create alignment between text and handwriting samples</li>
                      <li>Generate a properly formatted dataset for training</li>
                      <li>Export the dataset for use in the training notebook</li>
                    </ul>
                  </div>

                  <div className="rounded-md bg-gray-50 p-4 text-sm">
                    <p className="font-medium mb-2">Instructions:</p>
                    <ol className="list-decimal pl-4 space-y-2">
                      <li>Download the notebook using the button below</li>
                      <li>Open the notebook in Google Colab (File → Open in Google Colab)</li>
                      <li>Upload your handwriting images when prompted</li>
                      <li>Run each cell in order by clicking the play button or pressing Shift+Enter</li>
                      <li>Download the resulting dataset files when completed</li>
                    </ol>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleDownloadNotebook("Dataset Creation")} className="w-full">
                    <FileDown className="mr-2 h-4 w-4" />
                    Download Dataset Creation Notebook
                  </Button>
                </CardFooter>
              </Card>

              <div className="flex justify-center">
                <Button 
                  variant="outline" 
                  onClick={() => setActiveTab("training")}
                  className="mt-2"
                >
                  Next: Model Training
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="training" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <Beaker className="mr-2 h-5 w-5 text-blue-600" />
                        Model Training Notebook
                      </CardTitle>
                      <CardDescription>
                        Train a neural network on your handwriting dataset
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-blue-50">Step 2</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">This notebook will help you:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Load your processed handwriting dataset</li>
                      <li>Configure and train a neural network model</li>
                      <li>Optimize the model for your specific handwriting style</li>
                      <li>Test the model with sample text generation</li>
                      <li>Export the trained model for use in our generator</li>
                    </ul>
                  </div>

                  <div className="rounded-md bg-gray-50 p-4 text-sm">
                    <p className="font-medium mb-2">Instructions:</p>
                    <ol className="list-decimal pl-4 space-y-2">
                      <li>Complete the Dataset Creation step first</li>
                      <li>Download the training notebook using the button below</li>
                      <li>Open the notebook in Google Colab (File → Open in Google Colab)</li>
                      <li>Upload your dataset files when prompted</li>
                      <li>Run each cell in order by clicking the play button or pressing Shift+Enter</li>
                      <li>The training process will take 30-60 minutes depending on your dataset size</li>
                      <li>Download the trained model when completed</li>
                    </ol>
                  </div>

                  <Alert variant="destructive" className="mt-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Important</AlertTitle>
                    <AlertDescription>
                      Make sure to use a Google Colab notebook with GPU acceleration enabled for faster training.
                      Look for Runtime → Change runtime type → Hardware accelerator → GPU
                    </AlertDescription>
                  </Alert>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleDownloadNotebook("Model Training")} className="w-full">
                    <FileDown className="mr-2 h-4 w-4" />
                    Download Model Training Notebook
                  </Button>
                </CardFooter>
              </Card>

              <div className="space-y-4">
                <Separator />
                <div className="text-center space-y-2">
                  <h3 className="font-medium">Next Steps After Training</h3>
                  <p className="text-sm text-gray-500">
                    After successfully training your model, go to the Generate page to upload your model and start creating handwritten text.
                  </p>
                  <Button asChild variant="outline">
                    <a href="/generate">
                      <FileDown className="mr-2 h-4 w-4" />
                      Go to Generate Page
                    </a>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <div className="flex items-start space-x-4">
              <UploadCloud className="h-8 w-8 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium">Need help with the notebooks?</h3>
                <p className="text-gray-500">
                  Our notebooks include detailed instructions in each step. If you encounter any issues,
                  check our <a href="/guide" className="text-blue-600 underline">user guide</a> or contact our support team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ColabPage;
