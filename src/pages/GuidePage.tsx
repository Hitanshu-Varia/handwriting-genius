
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileCode, Upload, Wand2, HelpCircle, Book, Info } from "lucide-react";
import { Link } from "react-router-dom";

const GuidePage = () => {
  return (
    <MainLayout>
      <div className="container py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">How to Use HandwritingGenius</h1>
            <p className="text-gray-500">
              This guide will walk you through the process of digitizing your handwriting, from 
              uploading samples to generating text.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <Upload className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold">Step 1</h3>
                  <p className="text-sm">Upload your handwriting samples</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <FileCode className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold">Step 2</h3>
                  <p className="text-sm">Train the AI model with Google Colab</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <Wand2 className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold">Step 3</h3>
                  <p className="text-sm">Generate handwritten text</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Upload className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold">Step 1: Upload Handwriting Samples</h2>
              </div>
              
              <div className="space-y-4 pl-8">
                <p>
                  To create a model that accurately mimics your handwriting, we need multiple samples 
                  of your handwriting. Here's how to prepare and upload your samples:
                </p>
                
                <ol className="list-decimal pl-5 space-y-3">
                  <li>
                    <strong>Prepare your handwriting samples:</strong> Write several sentences on 
                    white paper with black or dark blue ink. Make sure your writing is clear and well-lit.
                  </li>
                  <li>
                    <strong>Photograph or scan your samples:</strong> Take clear photos or scan your 
                    handwriting samples. Each image should contain 1-3 sentences.
                  </li>
                  <li>
                    <strong>Upload your images:</strong> Go to the Upload page and select all your 
                    handwriting image files. The more samples you provide, the more accurate the results will be.
                  </li>
                </ol>
                
                <div className="flex justify-start mt-4">
                  <Button asChild>
                    <Link to="/upload">Go to Upload Page</Link>
                  </Button>
                </div>
              </div>
            </section>
            
            <section>
              <div className="flex items-center gap-2 mb-4">
                <FileCode className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold">Step 2: Train Your Model</h2>
              </div>
              
              <div className="space-y-4 pl-8">
                <p>
                  After uploading your samples, you'll train an AI model using Google Colab. Google Colab 
                  is a free cloud-based platform that lets you run machine learning code without installing 
                  anything on your computer.
                </p>
                
                <ol className="list-decimal pl-5 space-y-3">
                  <li>
                    <strong>Generate your Colab link:</strong> On the Colab page, click "Generate Colab Link" 
                    to create a personalized notebook with your data.
                  </li>
                  <li>
                    <strong>Open the notebook:</strong> Click the link to open your notebook in Google Colab. 
                    You'll need a Google account to access it.
                  </li>
                  <li>
                    <strong>Run the training:</strong> In Colab, click "Runtime" → "Run all" to start the 
                    training process. This will take about 15-30 minutes.
                  </li>
                  <li>
                    <strong>Download the model:</strong> After training completes, download the model file 
                    and upload it back to our platform.
                  </li>
                </ol>
                
                <div className="flex justify-start mt-4">
                  <Button asChild>
                    <Link to="/colab">Go to Colab Page</Link>
                  </Button>
                </div>
              </div>
            </section>
            
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Wand2 className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold">Step 3: Generate Handwritten Text</h2>
              </div>
              
              <div className="space-y-4 pl-8">
                <p>
                  Now that your model is trained, you can generate text in your handwriting style:
                </p>
                
                <ol className="list-decimal pl-5 space-y-3">
                  <li>
                    <strong>Enter your text:</strong> On the Generate page, type or paste the text you 
                    want to convert to handwriting.
                  </li>
                  <li>
                    <strong>Adjust settings:</strong> Customize font size, line spacing, and other options 
                    to match your preferences.
                  </li>
                  <li>
                    <strong>Generate:</strong> Click the "Generate Handwriting" button to create your text 
                    in your handwriting style.
                  </li>
                  <li>
                    <strong>Save or download:</strong> Save your creation to your gallery or download it as 
                    an image file.
                  </li>
                </ol>
                
                <div className="flex justify-start mt-4">
                  <Button asChild>
                    <Link to="/generate">Go to Generate Page</Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-blue-600" />
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How many handwriting samples do I need?</AccordionTrigger>
                <AccordionContent>
                  We recommend at least 20 samples for basic results, but 40-50 samples will produce much 
                  more accurate results. The more varied writing samples you provide, the better the model 
                  will capture your unique style.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does the training process take?</AccordionTrigger>
                <AccordionContent>
                  The training process typically takes 15-30 minutes in Google Colab, depending on the 
                  number of samples and the GPU availability. The free tier of Google Colab is sufficient 
                  for this purpose.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>What happens to my handwriting data?</AccordionTrigger>
                <AccordionContent>
                  Your handwriting samples and trained models are stored securely and are only accessible 
                  by you. We do not use your handwriting data for any purpose other than training your 
                  personal model.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I generate handwriting in languages other than English?</AccordionTrigger>
                <AccordionContent>
                  Yes, as long as your training samples include characters from the language you want to 
                  generate. The model learns the characters present in your samples, so include examples 
                  of all characters you'll need.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Do I need coding experience to use this tool?</AccordionTrigger>
                <AccordionContent>
                  No, the entire process is designed to be user-friendly. The Google Colab notebook is 
                  pre-configured, and you only need to click "Run All" to start the training process. 
                  No coding knowledge is required.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 flex gap-4">
            <div className="shrink-0">
              <Info className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Need more help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                If you need additional assistance or have questions not covered in this guide, feel free to 
                contact our support team.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:support@handwritinggenius.com">Contact Support</a>
                </Button>
                <Button variant="ghost" size="sm">
                  <Book className="mr-2 h-4 w-4" />
                  Advanced Tutorials
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GuidePage;
