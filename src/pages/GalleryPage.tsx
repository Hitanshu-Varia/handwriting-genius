
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Download, Trash2, Share2 } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import MainLayout from "@/layouts/MainLayout";

const GalleryPage = () => {
  // In a real app, this data would come from a database or API
  const [generatedItems, setGeneratedItems] = useState([
    {
      id: 1,
      text: "The quick brown fox jumps over the lazy dog.",
      date: "2023-08-15",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      text: "Handwriting is a reflection of personality.",
      date: "2023-08-14",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      text: "Thank you for your consideration.",
      date: "2023-08-13",
      image: "/placeholder.svg",
    },
  ]);

  const handleDelete = (id: number) => {
    setGeneratedItems(generatedItems.filter(item => item.id !== id));
    toast.success("Item deleted successfully");
  };

  const handleDownload = (id: number) => {
    // In a real app, this would download the actual generated image
    toast.success("Image downloaded");
  };

  const handleShare = (id: number) => {
    // In a real app, this would show sharing options
    toast.success("Sharing options opened");
  };

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Your Handwriting Gallery</h1>
            <p className="text-gray-500 dark:text-gray-400">
              View, download, and manage your generated handwriting.
            </p>
          </div>

          {generatedItems.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold">No generated items yet</h2>
              <p className="text-gray-500 mt-2">
                Start generating handwritten text to build your gallery.
              </p>
              <Button className="mt-4" asChild>
                <a href="/generate">Create Your First Handwriting</a>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {generatedItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="bg-white paper-texture p-4 h-48 flex items-center justify-center">
                    <p className="handwriting text-lg ink-blue">{item.text}</p>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500 truncate">{item.text}</p>
                      <p className="text-xs text-gray-400">Created: {item.date}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" onClick={() => handleShare(item.id)}>
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDownload(item.id)}>
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default GalleryPage;
