
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import MainLayout from "@/layouts/MainLayout";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Introduction to Handwriting AI",
      excerpt: "Learn about the fundamentals of handwriting recognition AI and how it works.",
      date: "April 15, 2023",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Training Your Handwriting Model",
      excerpt: "A step-by-step guide to training your own handwriting model using our platform.",
      date: "May 22, 2023",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "The Future of Handwriting in a Digital Age",
      excerpt: "Exploring how AI handwriting technology is preserving the art of handwriting in our digital world.",
      date: "June 10, 2023",
      imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Case Study: Educational Applications",
      excerpt: "How schools are using handwriting AI to help students improve their writing skills.",
      date: "July 3, 2023",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Technical Deep Dive: Our Recognition Algorithm",
      excerpt: "A technical exploration of the machine learning algorithms powering our handwriting recognition.",
      date: "August 18, 2023",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "Handwriting Styles Around the World",
      excerpt: "Exploring different handwriting styles across cultures and how our AI adapts to them.",
      date: "September 5, 2023",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      readTime: "6 min read"
    }
  ];

  return (
    <MainLayout>
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold">HandwritingGenius Blog</h1>
            <p className="text-xl text-gray-600">
              Insights, tutorials, and updates from our team
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span> • <span>{post.date}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPage;
