
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, FileCode, PenTool, Download } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 paper-texture">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Transform Your <span className="text-blue-600">Handwriting</span> into a Digital Font
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Upload your handwriting samples, train an AI model, and generate text in your unique style anytime.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/upload">
                <Button className="text-white" size="lg">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/guide">
                <Button variant="outline" size="lg">
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">How It Works</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Four Simple Steps to Your Digital Handwriting
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Our AI-powered system makes it easy to turn your handwriting into a digital format that looks authentic and personal.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Upload className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">1. Upload Samples</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Upload images of your handwriting samples to our secure platform.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <FileCode className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">2. Train Your Model</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Use our one-click Google Colab integration to train an AI model on your handwriting.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <PenTool className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">3. Generate Text</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Enter any text and watch as the AI generates it in your handwriting style.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Download className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">4. Download & Use</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Download your generated handwriting as images for personal or professional use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Digitize Your Handwriting?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Start the journey to preserve your unique handwriting style forever.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/upload">
                <Button className="text-white" size="lg">
                  Upload Your Samples
                  <Upload className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
