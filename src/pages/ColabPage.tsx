
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Play, Copy, Download, ExternalLink, FileText, Check, Upload } from "lucide-react";
import { toast } from "@/lib/toast";
import MainLayout from "@/layouts/MainLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Pre-configured Colab notebooks with complete code
const DATA_PREPARATION_NOTEBOOK_URL = "https://colab.research.google.com/drive/1ZgmXzjtxBEq2H6Ib_mAtxRDu8sQVSAJR?usp=sharing";
const MODEL_TRAINING_NOTEBOOK_URL = "https://colab.research.google.com/drive/1hzxXA8kb-tCm2qDTlD_yfCQQnmWNbIlY?usp=sharing";

const ColabPage = () => {
  const [dataNotebookLink, setDataNotebookLink] = useState("");
  const [trainingNotebookLink, setTrainingNotebookLink] = useState("");
  const [isGeneratingDataLink, setIsGeneratingDataLink] = useState(false);
  const [isGeneratingTrainingLink, setIsGeneratingTrainingLink] = useState(false);
  const [datasetFile, setDatasetFile] = useState<File | null>(null);
  const [modelFile, setModelFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(1);
  const navigate = useNavigate();

  const handleGenerateDataNotebookLink = () => {
    setIsGeneratingDataLink(true);
    
    // Generate a Colab link with pre-loaded data preparation code
    setTimeout(() => {
      setDataNotebookLink(DATA_PREPARATION_NOTEBOOK_URL);
      setIsGeneratingDataLink(false);
      setActiveStep(prev => Math.max(prev, 2));
      toast.success("Data preparation notebook generated successfully!");
    }, 1000);
  };

  const handleGenerateTrainingNotebookLink = () => {
    setIsGeneratingTrainingLink(true);
    
    // Generate a Colab link with pre-loaded training code
    setTimeout(() => {
      setTrainingNotebookLink(MODEL_TRAINING_NOTEBOOK_URL);
      setIsGeneratingTrainingLink(false);
      setActiveStep(prev => Math.max(prev, 3));
      toast.success("Model training notebook generated successfully!");
    }, 1000);
  };

  const handleCopyLink = (link: string) => {
    if (link) {
      navigator.clipboard.writeText(link);
      toast.success("Colab link copied to clipboard");
    }
  };

  const handleDatasetFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "application/json" || file.name.endsWith(".json") || file.name.endsWith(".npz")) {
        setDatasetFile(file);
        toast.success("Dataset file selected successfully");
        setActiveStep(prev => Math.max(prev, 4));
      } else {
        toast.error("Please upload a valid dataset file (.json or .npz)");
      }
    }
  };

  const handleModelFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "application/octet-stream" || file.name.endsWith(".h5") || file.name.endsWith(".pkl")) {
        setModelFile(file);
        toast.success("Model file selected successfully");
        setActiveStep(prev => Math.max(prev, 5));
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
              Follow our two-step process to create your custom handwriting model. First prepare your handwriting dataset, 
              then train your model. Both steps use pre-configured Google Colab notebooks with all necessary code.
            </p>
          </div>

          <Tabs defaultValue="training" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="training">Training Process</TabsTrigger>
              <TabsTrigger value="info">How It Works</TabsTrigger>
            </TabsList>
            
            <TabsContent value="training" className="space-y-6 pt-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  This is a two-step process. First, prepare your handwriting dataset, then train your model.
                  Both notebooks include all necessary code - no coding required.
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle>Training Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {/* Step 1: Dataset Preparation Notebook */}
                    <div className="flex items-start gap-4">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${activeStep === 1 ? "bg-primary text-primary-foreground" : (activeStep > 1 ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600")}`}>
                        {activeStep > 1 ? <Check className="h-4 w-4" /> : 1}
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Get Dataset Preparation Notebook</p>
                        <p className="text-sm text-gray-500">
                          Download our first notebook that will help you process your handwriting images into a 
                          structured dataset. Upload your handwriting samples to this notebook.
                        </p>
                        <Button 
                          onClick={handleGenerateDataNotebookLink} 
                          disabled={isGeneratingDataLink || dataNotebookLink !== ""}
                        >
                          {isGeneratingDataLink ? (
                            "Generating..."
                          ) : dataNotebookLink ? (
                            <>
                              <Check className="mr-2 h-4 w-4" />
                              Dataset Notebook Ready
                            </>
                          ) : (
                            <>
                              <Play className="mr-2 h-4 w-4" />
                              Get Dataset Notebook
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    {dataNotebookLink && (
                    <div className="pl-12">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center gap-2 p-2 bg-gray-100 rounded">
                          <code className="text-sm flex-1 truncate">{dataNotebookLink}</code>
                          <Button variant="ghost" size="icon" onClick={() => handleCopyLink(dataNotebookLink)}>
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button asChild>
                          <a href={dataNotebookLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Open Dataset Notebook
                          </a>
                        </Button>
                      </div>
                    </div>
                    )}

                    <Separator />

                    {/* Step 2: Model Training Notebook */}
                    <div className="flex items-start gap-4">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${activeStep === 2 ? "bg-primary text-primary-foreground" : (activeStep > 2 ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600")}`}>
                        {activeStep > 2 ? <Check className="h-4 w-4" /> : 2}
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Get Model Training Notebook</p>
                        <p className="text-sm text-gray-500">
                          Our second notebook will train the handwriting model using the dataset you created.
                          You'll upload your dataset to this notebook.
                        </p>
                        <Button 
                          onClick={handleGenerateTrainingNotebookLink} 
                          disabled={isGeneratingTrainingLink || trainingNotebookLink !== ""}
                        >
                          {isGeneratingTrainingLink ? (
                            "Generating..."
                          ) : trainingNotebookLink ? (
                            <>
                              <Check className="mr-2 h-4 w-4" />
                              Training Notebook Ready
                            </>
                          ) : (
                            <>
                              <Play className="mr-2 h-4 w-4" />
                              Get Training Notebook
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    {trainingNotebookLink && (
                    <div className="pl-12">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center gap-2 p-2 bg-gray-100 rounded">
                          <code className="text-sm flex-1 truncate">{trainingNotebookLink}</code>
                          <Button variant="ghost" size="icon" onClick={() => handleCopyLink(trainingNotebookLink)}>
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button asChild>
                          <a href={trainingNotebookLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Open Training Notebook
                          </a>
                        </Button>
                      </div>
                    </div>
                    )}

                    <Separator />

                    {/* Step 3: Upload Dataset File */}
                    <div className="flex items-start gap-4">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${activeStep === 3 ? "bg-primary text-primary-foreground" : (activeStep > 3 ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600")}`}>
                        {activeStep > 3 ? <Check className="h-4 w-4" /> : 3}
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Upload Dataset to Training Notebook</p>
                        <p className="text-sm text-gray-500">
                          After completing the data preparation notebook, you'll receive a dataset file.
                          Upload this file to the training notebook when prompted.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Input 
                            id="dataset-upload" 
                            type="file" 
                            accept=".json,.npz" 
                            className="cursor-pointer" 
                            onChange={handleDatasetFileChange}
                            disabled={!trainingNotebookLink}
                          />
                        </div>
                        {datasetFile && (
                          <p className="text-sm text-green-600">
                            Dataset file selected: {datasetFile.name}
                          </p>
                        )}
                      </div>
                    </div>

                    <Separator />

                    {/* Step 4: Download and Upload Model */}
                    <div className="flex items-start gap-4">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${activeStep === 4 ? "bg-primary text-primary-foreground" : (activeStep > 4 ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600")}`}>
                        {activeStep > 4 ? <Check className="h-4 w-4" /> : 4}
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Upload Trained Model</p>
                        <p className="text-sm text-gray-500">
                          After training completes, the notebook will provide a link to download the trained model file.
                          Download it to your computer, then upload it here.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Input 
                            id="model-upload" 
                            type="file" 
                            accept=".h5,.pkl" 
                            className="cursor-pointer" 
                            onChange={handleModelFileChange}
                            disabled={!datasetFile}
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
                                <Upload className="mr-2 h-4 w-4" />
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
            </TabsContent>
            
            <TabsContent value="info" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>How the Training Works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data Preparation Notebook</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">1</div>
                        <div>
                          <p className="font-medium">Upload your handwriting samples</p>
                          <p className="text-sm text-gray-500">
                            The notebook will guide you to upload 20-30 images of your handwriting.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">2</div>
                        <div>
                          <p className="font-medium">Automatic image processing</p>
                          <p className="text-sm text-gray-500">
                            The code will preprocess your images, extract handwriting strokes and features.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">3</div>
                        <div>
                          <p className="font-medium">Generate dataset file</p>
                          <p className="text-sm text-gray-500">
                            Creates a structured dataset file containing your handwriting patterns that you'll download.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <h3 className="text-lg font-medium">Model Training Notebook</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">1</div>
                        <div>
                          <p className="font-medium">Upload your dataset</p>
                          <p className="text-sm text-gray-500">
                            You'll upload the dataset file you created in the previous notebook.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">2</div>
                        <div>
                          <p className="font-medium">Neural network training</p>
                          <p className="text-sm text-gray-500">
                            The notebook will train a recurrent neural network on your handwriting patterns.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">3</div>
                        <div>
                          <p className="font-medium">Generate model file</p>
                          <p className="text-sm text-gray-500">
                            Creates an optimized model file that you'll download and upload to our app.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Alert className="mt-4">
                    <FileText className="h-4 w-4" />
                    <AlertTitle>Technical Details</AlertTitle>
                    <AlertDescription>
                      <p>
                        The data preparation notebook uses computer vision techniques to extract handwriting features
                        from your samples. The training notebook implements a sequence-to-sequence model with LSTM layers 
                        and attention mechanisms specifically designed for handwriting synthesis.
                      </p>
                      <p className="mt-2">
                        Training typically takes 30-45 minutes on Google Colab's free tier, and all code is pre-written
                        and thoroughly tested to ensure compatibility between the notebooks.
                      </p>
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

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
