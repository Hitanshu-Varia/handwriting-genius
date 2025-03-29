
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Download, RefreshCw, Upload } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import MainLayout from "@/layouts/MainLayout";

const GeneratePage = () => {
  const [inputText, setInputText] = useState("");
  const [modelUploaded, setModelUploaded] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [slant, setSlant] = useState([0]);
  const [spacing, setSpacing] = useState([50]);

  const handleModelUpload = () => {
    // In a real app, you would handle the model file upload here
    setModelUploaded(true);
    toast.success("Model uploaded successfully!");
  };

  const handleGenerate = () => {
    if (!inputText.trim()) {
      toast.error("Please enter some text to generate");
      return;
    }
    
    if (!modelUploaded) {
      toast.error("Please upload your trained model first");
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate generation delay
    setTimeout(() => {
      setIsGenerating(false);
      
      // In a real app, this would be the actual generation result
      // For now, we'll use a placeholder image
      setGeneratedImage("/placeholder.svg");
      toast.success("Text generated in your handwriting style!");
    }, 2000);
  };

  const handleDownload = () => {
    // In a real app, this would download the actual generated image
    toast.success("Image downloaded");
  };

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Generate Your Handwriting</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Type any text and see it transformed into your handwriting style.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Text Input</CardTitle>
                <CardDescription>
                  Enter the text you want to convert to your handwriting.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!modelUploaded && (
                  <div className="bg-amber-50 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300 p-4 rounded-md mb-4">
                    <p className="text-sm">
                      You need to upload your trained model before generating text.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={handleModelUpload}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Model
                    </Button>
                  </div>
                )}

                <Textarea
                  placeholder="Enter your text here..."
                  className="min-h-[200px] resize-y"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />

                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Writing Slant</label>
                    <Slider
                      defaultValue={[0]}
                      min={-30}
                      max={30}
                      step={1}
                      value={slant}
                      onValueChange={setSlant}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Left Slant</span>
                      <span>{slant[0]}°</span>
                      <span>Right Slant</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Character Spacing</label>
                    <Slider
                      defaultValue={[50]}
                      min={0}
                      max={100}
                      step={1}
                      value={spacing}
                      onValueChange={setSpacing}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Tight</span>
                      <span>{spacing[0]}%</span>
                      <span>Wide</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={handleGenerate}
                  disabled={isGenerating || !inputText.trim()}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate Handwriting"
                  )}
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Generated Handwriting</CardTitle>
                <CardDescription>
                  Preview and download your handwritten text.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className="flex items-center justify-center bg-white dark:bg-gray-800 border rounded-md w-full h-[300px] paper-texture"
                >
                  {generatedImage ? (
                    <div className="p-4 w-full h-full">
                      {/* In a real implementation, this would display the actual generated handwriting */}
                      <div className="h-full flex items-center justify-center">
                        <p className="handwriting text-xl ink-blue animate-writing">
                          {inputText || "Your handwritten text will appear here."}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400 dark:text-gray-500">
                      <p>Your handwritten text will appear here</p>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handleGenerate}
                  disabled={isGenerating || !generatedImage}
                >
                  Regenerate
                </Button>
                <Button
                  onClick={handleDownload}
                  disabled={!generatedImage}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>About Your Model</CardTitle>
            </CardHeader>
            <CardContent>
              {modelUploaded ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Model Status:</span>
                    <span className="text-green-600 dark:text-green-400">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Training Samples:</span>
                    <span>20 images</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Last Updated:</span>
                    <span>Today</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Model Quality:</span>
                    <span>High</span>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-2">
                  <p className="text-gray-500 dark:text-gray-400">
                    You haven't uploaded a trained model yet.
                  </p>
                  <Button onClick={handleModelUpload}>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Model
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default GeneratePage;
