
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ExternalLink, FileCode, Upload, PenTool, Download } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";

const GuidePage = () => {
  return (
    <MainLayout>
      <div className="container py-12">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Guide to Using HandwritingGenius</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Follow these steps to create AI-generated text in your handwriting style.
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="upload">1. Upload</TabsTrigger>
              <TabsTrigger value="train">2. Train</TabsTrigger>
              <TabsTrigger value="generate">3. Generate</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4 pt-4">
              <div className="prose prose-blue max-w-none dark:prose-invert">
                <h2>How HandwritingGenius Works</h2>
                <p>
                  HandwritingGenius uses a type of artificial intelligence called a conditional Generative Adversarial Network (cGAN) 
                  to learn your handwriting style and reproduce it with new text.
                </p>
                <p>The process happens in three main steps:</p>
                <ol>
                  <li><strong>Upload handwriting samples</strong> - Provide examples of your handwriting</li>
                  <li><strong>Train an AI model</strong> - Use Google Colab to create a model that understands your style</li>
                  <li><strong>Generate handwritten text</strong> - Enter any text and see it in your handwriting</li>
                </ol>
                <p>
                  No AI expertise is required - we've designed the process to be simple and accessible for everyone.
                </p>
              </div>
              <div className="flex justify-center">
                <Link to="/upload">
                  <Button className="mt-4">
                    Start with Step 1: Upload
                    <Upload className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="upload" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Upload className="mr-2 h-5 w-5 text-blue-500" />
                    Step 1: Upload Your Handwriting Samples
                  </CardTitle>
                  <CardDescription>
                    Provide examples of your handwriting for the AI to learn from.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">What to Upload</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>At least 20 images of your handwriting (more is better)</li>
                    <li>Clean, well-lit photos or scans</li>
                    <li>Write a variety of sentences with different letters and characters</li>
                    <li>Use the same pen and paper style throughout your samples</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mt-4">How to Upload</h3>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Go to the Upload page</li>
                    <li>Drag and drop your files or use the file browser</li>
                    <li>Wait for all files to upload</li>
                    <li>Click "Upload and Continue" when finished</li>
                  </ol>
                  
                  <div className="mt-4">
                    <Link to="/upload">
                      <Button>
                        Go to Upload Page
                        <Upload className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="train" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileCode className="mr-2 h-5 w-5 text-blue-500" />
                    Step 2: Train Your Handwriting Model
                  </CardTitle>
                  <CardDescription>
                    Train a custom AI model using Google Colab.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">About the Training Process</h3>
                  <p>
                    We use Google Colab to train your model because it provides free access to powerful GPUs needed for AI training.
                    Don't worry - you don't need to know anything about AI or programming.
                  </p>
                  
                  <h3 className="text-lg font-semibold mt-4">Training Steps</h3>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>After uploading your samples, you'll receive a link to a Google Colab notebook</li>
                    <li>Click the link to open it (you'll need a Google account)</li>
                    <li>Press the "Play" button on each section in order, following the instructions</li>
                    <li>Training takes about 1-2 hours, depending on your sample size</li>
                    <li>When complete, download the model file</li>
                  </ol>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md mt-4">
                    <h4 className="font-medium text-blue-700 dark:text-blue-300">What's happening behind the scenes?</h4>
                    <p className="text-sm mt-2">
                      During training, the AI analyzes patterns in your handwriting - how you form letters, 
                      your spacing, the pressure you apply, and the unique characteristics that make your writing style yours.
                      It uses this information to create a model that can generate new text in your style.
                    </p>
                  </div>
                  
                  <div className="mt-4 flex">
                    <Button asChild variant="outline">
                      <a href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer">
                        Learn about Google Colab
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="generate" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PenTool className="mr-2 h-5 w-5 text-blue-500" />
                    Step 3: Generate Your Handwriting
                  </CardTitle>
                  <CardDescription>
                    Create text in your handwriting style and download the results.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">Using Your Trained Model</h3>
                  <p>
                    Once your model is trained and uploaded to our platform, you can generate 
                    handwritten text anytime.
                  </p>
                  
                  <h3 className="text-lg font-semibold mt-4">Generation Steps</h3>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Go to the Generate page</li>
                    <li>Type in the text you want to see in your handwriting</li>
                    <li>Click "Generate"</li>
                    <li>Preview the result and adjust if needed</li>
                    <li>Download the image when you're satisfied</li>
                  </ol>
                  
                  <h3 className="text-lg font-semibold mt-4">Tips for Best Results</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Keep sentences a reasonable length</li>
                    <li>The model works best with characters it has seen during training</li>
                    <li>You can regenerate if you're not happy with the results</li>
                    <li>Try different styles of text to see how your model adapts</li>
                  </ul>
                  
                  <div className="mt-4">
                    <Link to="/generate">
                      <Button>
                        Go to Generate Page
                        <PenTool className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Ready to Start?</CardTitle>
              <CardDescription>
                Begin the process by uploading your handwriting samples.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Link to="/upload">
                  <Button size="lg">
                    Upload Your Handwriting
                    <Upload className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default GuidePage;
