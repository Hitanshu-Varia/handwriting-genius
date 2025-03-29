
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Copy, FileCode, CheckCircle } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import MainLayout from "@/layouts/MainLayout";

const ColabPage = () => {
  const colabUrl = "https://colab.research.google.com/";

  const copyColabLink = () => {
    navigator.clipboard.writeText(colabUrl);
    toast.success("Colab link copied to clipboard");
  };

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Train Your Handwriting Model</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Use our Google Colab notebook to train a custom AI model on your handwriting.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileCode className="mr-2 h-5 w-5 text-blue-500" />
                Handwriting cGAN Training Notebook
              </CardTitle>
              <CardDescription>
                Follow the step-by-step instructions to train your model.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
                <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">
                  Before You Begin
                </h3>
                <p className="text-sm mt-2">
                  Make sure you have uploaded your handwriting samples to the platform. You'll need to 
                  download a ZIP file of your samples to use in the Colab notebook.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Open Google Colab Notebook</h3>
                  <p className="text-sm text-gray-500">
                    Click the button to open our pre-configured Colab notebook.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={copyColabLink}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Link
                  </Button>
                  <Button asChild>
                    <a href={colabUrl} target="_blank" rel="noopener noreferrer">
                      Open Notebook
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Notebook Instructions</h3>
                <ol className="space-y-6 list-decimal list-inside">
                  <li className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
                    <div className="flex items-start">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                        1
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold">Set Up the Environment</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Run the first cell to install all required dependencies. This may take a few minutes.
                        </p>
                        <div className="mt-2 flex items-center text-sm text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Expected output: "Setup complete!"
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
                    <div className="flex items-start">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                        2
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold">Upload Your Handwriting Data</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Run the second cell and follow the prompts to upload your ZIP file of handwriting samples.
                        </p>
                        <div className="mt-2 flex items-center text-sm text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Expected output: "Data loaded successfully: X samples found."
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
                    <div className="flex items-start">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                        3
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold">Preprocess Your Handwriting</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Run the third cell to clean and prepare your handwriting samples for training.
                        </p>
                        <div className="mt-2 flex items-center text-sm text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Expected output: "Preprocessing complete!"
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
                    <div className="flex items-start">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                        4
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold">Train the cGAN Model</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Run the fourth cell to start training. This will take 1-2 hours depending on your samples.
                          You'll see progress updates as it trains.
                        </p>
                        <div className="mt-2 flex items-center text-sm text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Expected output: "Training complete! Model saved."
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
                    <div className="flex items-start">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                        5
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold">Test and Download Your Model</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Run the final cell to test the model with some sample text and download the trained model file.
                        </p>
                        <div className="mt-2 flex items-center text-sm text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Expected output: "Model test complete! Download your model below."
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">After Training</h3>
                <p>
                  Once your model is trained and downloaded, return to this site and upload your model
                  file on the Generate page. This will enable you to create handwritten text anytime!
                </p>
                <Button asChild>
                  <a href="/generate">
                    Go to Generate Page
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Troubleshooting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">Colab disconnects during training</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Google Colab sometimes disconnects after periods of inactivity. Make sure to keep the browser tab active
                  during training. If disconnected, reconnect and run the cells from where you left off.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Training is slow</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Training speed depends on the free GPU resources Google provides. For faster training, consider upgrading to Colab Pro.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Model quality issues</h3>
                <p className="text-sm text-gray-500 mt-1">
                  If your model doesn't produce good results, try adding more handwriting samples with a wider variety of characters
                  and writing styles. At least 30-50 samples are recommended for best results.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ColabPage;
