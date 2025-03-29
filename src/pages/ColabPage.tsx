
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Play, Copy, Download, ExternalLink, FileText, Check } from "lucide-react";
import { toast } from "@/lib/toast";
import MainLayout from "@/layouts/MainLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Pre-configured Colab notebook with complete training code
const COLAB_NOTEBOOK_URL = "https://colab.research.google.com/drive/1iyHfUA2R-Gh1_TsXGXlLFpuBTJNlTjLB?usp=sharing";

const ColabPage = () => {
  const [colabLink, setColabLink] = useState("");
  const [isGeneratingLink, setIsGeneratingLink] = useState(false);
  const [modelFile, setModelFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(1);
  const navigate = useNavigate();

  const handleGenerateLink = () => {
    setIsGeneratingLink(true);
    
    // Generate a Colab link with pre-loaded training code
    setTimeout(() => {
      setColabLink(COLAB_NOTEBOOK_URL);
      setIsGeneratingLink(false);
      setActiveStep(2);
      toast.success("Complete training notebook generated successfully!");
    }, 1000);
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
        toast.success("Model file selected successfully");
        setActiveStep(3);
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
              Use our pre-configured Google Colab notebook to train a neural network on sample handwriting data.
              No coding required - the training process is fully automated.
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
                  Training typically takes 15-30 minutes. The notebook contains all necessary code and sample data.
                  You'll only need to download the resulting model file.
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle>Training Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${activeStep === 1 ? "bg-primary text-primary-foreground" : (activeStep > 1 ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600")}`}>
                        {activeStep > 1 ? <Check className="h-4 w-4" /> : 1}
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Generate Google Colab Notebook</p>
                        <p className="text-sm text-gray-500">
                          Click the button below to generate a Colab notebook with pre-written code for handwriting synthesis.
                          The notebook includes sample data and complete training pipeline.
                        </p>
                        <Button 
                          onClick={handleGenerateLink} 
                          disabled={isGeneratingLink || colabLink !== ""}
                        >
                          {isGeneratingLink ? (
                            "Generating..."
                          ) : colabLink ? (
                            <>
                              <Check className="mr-2 h-4 w-4" />
                              Notebook Ready
                            </>
                          ) : (
                            <>
                              <Play className="mr-2 h-4 w-4" />
                              Generate Notebook
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start gap-4">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${activeStep === 2 ? "bg-primary text-primary-foreground" : (activeStep > 2 ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600")}`}>
                        {activeStep > 2 ? <Check className="h-4 w-4" /> : 2}
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Run the Notebook</p>
                        <p className="text-sm text-gray-500">
                          Open the notebook in Google Colab and click "Runtime" → "Run all" to start the training process.
                          The notebook will automatically download sample handwriting data and train the model.
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
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${activeStep === 3 ? "bg-primary text-primary-foreground" : (activeStep > 3 ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600")}`}>
                        {activeStep > 3 ? <Check className="h-4 w-4" /> : 3}
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Download and Upload Model</p>
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
            </TabsContent>
            
            <TabsContent value="info" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>How the Training Works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Our pre-configured notebook automatically:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">1</div>
                      <div>
                        <p className="font-medium">Sets up the environment</p>
                        <p className="text-sm text-gray-500">
                          Installs all required dependencies and libraries needed for handwriting synthesis.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">2</div>
                      <div>
                        <p className="font-medium">Downloads sample data</p>
                        <p className="text-sm text-gray-500">
                          Retrieves a curated dataset of handwriting samples to train the model on.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">3</div>
                      <div>
                        <p className="font-medium">Trains the neural network</p>
                        <p className="text-sm text-gray-500">
                          Uses a recurrent neural network with attention mechanisms to learn handwriting patterns.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">4</div>
                      <div>
                        <p className="font-medium">Generates model file</p>
                        <p className="text-sm text-gray-500">
                          Creates an optimized model file that can be used to generate handwritten text.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Alert className="mt-4">
                    <FileText className="h-4 w-4" />
                    <AlertTitle>Technical Details</AlertTitle>
                    <AlertDescription>
                      The model uses a sequence-to-sequence architecture with LSTM layers and attention mechanisms to capture 
                      the nuances of human handwriting. The training process includes techniques like teacher forcing and 
                      gradient clipping to ensure stable convergence.
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
