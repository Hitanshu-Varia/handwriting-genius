
import MainLayout from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { PenLine, Heart, Award, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <MainLayout>
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold">About HandwritingGenius</h1>
            <p className="text-xl text-gray-600">
              Our mission, story, and the team behind the technology
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Team working on AI handwriting technology"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-600">
                HandwritingGenius began in 2020 with a simple question: in a world dominated by digital text, how can we preserve the personality and warmth of handwriting?
              </p>
              <p className="text-gray-600">
                Our founding team of AI researchers and handwriting enthusiasts came together to create a platform that could analyze and reproduce the unique characteristics of individual handwriting styles using advanced machine learning techniques.
              </p>
              <p className="text-gray-600">
                What started as a research project quickly grew into a comprehensive platform serving educators, students, designers, and anyone who appreciates the personal touch that handwriting brings to communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
                    <PenLine className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Authenticity</h3>
                  <p className="text-gray-600">
                    We believe in preserving the authentic character of handwriting in the digital age, celebrating the unique qualities that make each person's handwriting special.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Accessibility</h3>
                  <p className="text-gray-600">
                    We're committed to making our technology accessible to everyone, from students to professionals, enabling personal expression regardless of digital expertise.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Innovation</h3>
                  <p className="text-gray-600">
                    We push the boundaries of AI and machine learning to continuously improve our handwriting analysis and generation capabilities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="aspect-square overflow-hidden rounded-full mx-auto w-48">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">Sarah Johnson</h3>
              <p className="text-blue-600">CEO & Co-founder</p>
              <p className="text-gray-600 text-sm">AI Research Specialist with a background in cognitive science and human-computer interaction.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="aspect-square overflow-hidden rounded-full mx-auto w-48">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop"
                  alt="Michael Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">Michael Chen</h3>
              <p className="text-blue-600">CTO & Co-founder</p>
              <p className="text-gray-600 text-sm">Machine Learning Engineer specialized in computer vision and neural networks architecture.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="aspect-square overflow-hidden rounded-full mx-auto w-48">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop"
                  alt="Aisha Patel"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">Aisha Patel</h3>
              <p className="text-blue-600">Design Director</p>
              <p className="text-gray-600 text-sm">UX/UI specialist with a passion for calligraphy and typography design.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="aspect-square overflow-hidden rounded-full mx-auto w-48">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&h=500&fit=crop"
                  alt="David Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">David Rodriguez</h3>
              <p className="text-blue-600">Head of Product</p>
              <p className="text-gray-600 text-sm">Former educator who brings insights from the educational technology sector.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
              <Users className="h-12 w-12" />
            </div>
            <h2 className="text-3xl font-bold">Join Our Team</h2>
            <p className="text-xl">
              We're always looking for talented individuals who are passionate about AI, handwriting, and creating amazing user experiences.
            </p>
            <a href="#" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
