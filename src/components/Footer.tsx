
import { Link } from "react-router-dom";
import { PenLine, Github, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t py-8 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <PenLine className="h-5 w-5 text-blue-600" />
              <span className="text-lg font-semibold">HandwritingGenius</span>
            </Link>
            <p className="text-sm text-gray-500">
              Transform your handwriting into digital text with AI technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/upload" className="text-sm text-gray-500 hover:text-blue-600">
                  Upload Handwriting
                </Link>
              </li>
              <li>
                <Link to="/colab" className="text-sm text-gray-500 hover:text-blue-600">
                  Train Model
                </Link>
              </li>
              <li>
                <Link to="/generate" className="text-sm text-gray-500 hover:text-blue-600">
                  Generate Text
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-gray-500 hover:text-blue-600">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/guide" className="text-sm text-gray-500 hover:text-blue-600">
                  User Guide
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="mailto:contact@handwritinggenius.com" className="text-sm text-gray-500 hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {year} HandwritingGenius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
