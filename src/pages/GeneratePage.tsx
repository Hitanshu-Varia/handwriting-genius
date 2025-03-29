
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Wand2, Download, Share2, Save } from "lucide-react";
import { toast } from "@/lib/toast";
import MainLayout from "@/layouts/MainLayout";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

const GeneratePage = () => {
  const [inputText, setInputText] = useState("");
  const [fontSize, setFontSize] = useState(24);
  const [lineSpacing, setLineSpacing] = useState(1.5);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [includeSignature, setIncludeSignature] = useState(false);

  const handleGenerate = () => {
    if (!inputText.trim()) {
      toast.error("Please enter some text to generate handwriting");
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call to generate handwriting
    setTimeout(() => {
      setGeneratedImage("/placeholder.svg");
      setIsGenerating(false);
      toast.success("Handwriting generated successfully!");
    }, 2000);
  };

  const handleSaveToGallery = () => {
    if (generatedImage) {
      toast.success("Saved to your gallery");
    }
  };

  const handleDownload = () => {
    if (generatedImage) {
      toast.success("Handwriting image downloaded");
    }
  };

  const handleShare = () => {
    if (generatedImage) {
      toast.success("Sharing options opened");
    }
  };

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Generate Handwriting</h1>
            <p className="text-gray-500">
              Turn your text into realistic handwriting based on your trained model.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="text-input">Enter Your Text</Label>
                <Textarea
                  id="text-input"
                  placeholder="Type or paste the text you want to convert to handwriting..."
                  className="min-h-32 resize-none"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <p className="text-xs text-gray-500">
                  {inputText.length} characters | {inputText.split(/\s+/).filter(Boolean).length} words
                </p>
              </div>

              <Separator />

              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="font-size">Font Size: {fontSize}px</Label>
                    </div>
                    <Slider
                      id="font-size"
                      min={12}
                      max={36}
                      step={1}
                      value={[fontSize]}
                      onValueChange={(values) => setFontSize(values[0])}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="line-spacing">Line Spacing: {lineSpacing.toFixed(1)}</Label>
                    </div>
                    <Slider
                      id="line-spacing"
                      min={1.0}
                      max={3.0}
                      step={0.1}
                      value={[lineSpacing]}
                      onValueChange={(values) => setLineSpacing(values[0])}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="include-signature" 
                      checked={includeSignature}
                      onCheckedChange={(checked) => 
                        setIncludeSignature(checked === true)
                      }
                    />
                    <Label htmlFor="include-signature">Include my signature</Label>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  onClick={handleGenerate} 
                  disabled={isGenerating || !inputText.trim()}
                >
                  {isGenerating ? (
                    "Generating..."
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate Handwriting
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Preview</h2>
              <Card className="overflow-hidden h-[500px]">
                <ScrollArea className="h-full">
                  {generatedImage ? (
                    <CardContent className="p-6 paper-texture">
                      <p 
                        className="handwriting ink-blue whitespace-pre-line" 
                        style={{ fontSize: `${fontSize}px`, lineHeight: lineSpacing }}
                      >
                        {inputText || "Your handwritten text will appear here"}
                      </p>
                      {includeSignature && (
                        <div className="mt-8">
                          <p className="handwriting ink-blue text-xl">Signature</p>
                        </div>
                      )}
                    </CardContent>
                  ) : (
                    <CardContent className="flex h-full items-center justify-center p-6">
                      <p className="text-gray-400 text-center">
                        Generate handwriting to see the preview here
                      </p>
                    </CardContent>
                  )}
                </ScrollArea>
              </Card>

              {generatedImage && (
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={handleSaveToGallery}>
                    <Save className="mr-2 h-4 w-4" />
                    Save to Gallery
                  </Button>
                  <Button variant="outline" onClick={handleShare}>
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" onClick={handleDownload}>
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GeneratePage;
